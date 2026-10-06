<?php
// Proxy between the static site and the Grist API.
// - keeps the Grist API key server-side
// - only exposes the routes used by the site forms
// - only forwards the fields each form sends, after validation:
//   the request body is never forwarded as-is to Grist

ini_set('display_errors', '0');
header('Content-Type: application/json');

// In production the site and the proxy share the same origin, so no CORS header
// is needed. Other origins (e.g. local development) must be listed explicitly.
$allowedOrigins = array_filter(array_map('trim', explode(',', getenv('GRIST_PROXY_ALLOWED_ORIGINS') ?: '')));
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Vary: Origin');
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

function fail($code, $message) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

$baseUrl = getenv('GRIDSOME_GRIST_URL');
$training = getenv('GRIDSOME_GRIST_TRAINING_DOC_ID');
$request = getenv('GRIDSOME_GRIST_REQUESTS_DOC_ID');
$apiKey = getenv('GRIDSOME_GRIST_API_KEY');

if (!$baseUrl || !$training || !$request || !$apiKey) {
    fail(500, 'Proxy misconfigured');
}

// Field rules for the records each form creates. Any other field is rejected.
// - text: string of at most `max` characters
// - email, url (http/https only), bool, id (positive integer, e.g. a Ref column)
// - choice: one of `choices`
// - choiceList: Grist list ["L", ...] of values from `choices`
// - joinedChoices: values from `choices` joined with ", "
// `choices` is either a list, or 'grist' to use the choices of the Grist column.
$routes = [
    "GET $baseUrl/api/docs/$request/tables/Accompagnements/columns" => [
        'doc' => $request,
        'table' => 'Accompagnements',
        'choiceColumns' => ['public_cible', 'nature_du_besoin', 'type_de_projet'],
    ],
    "POST $baseUrl/api/docs/$request/tables/Accompagnements/records" => [
        'doc' => $request,
        'table' => 'Accompagnements',
        'fields' => [
            'name' => ['type' => 'text', 'max' => 200, 'required' => true],
            'email' => ['type' => 'email', 'required' => true],
            'service' => ['type' => 'text', 'max' => 300, 'required' => true],
            'url' => ['type' => 'text', 'max' => 2000],
            'public_cible' => ['type' => 'joinedChoices', 'choices' => 'grist', 'required' => true],
            'demarche_essentielle' => ['type' => 'bool'],
            'nature_du_besoin' => ['type' => 'joinedChoices', 'choices' => 'grist', 'required' => true],
            'type_de_projet' => ['type' => 'choice', 'choices' => 'grist', 'required' => true],
            'temporalite' => ['type' => 'text', 'max' => 5000],
            'etat_d_avancement' => ['type' => 'text', 'max' => 5000],
            'description' => ['type' => 'text', 'max' => 10000, 'required' => true],
            'date' => ['type' => 'text', 'max' => 30],
        ],
    ],
    "POST $baseUrl/api/docs/$request/tables/Candidats_Tous_les_profils/records" => [
        'doc' => $request,
        'table' => 'Candidats_Tous_les_profils',
        'fields' => [
            'email' => ['type' => 'email', 'required' => true],
            'firstName' => ['type' => 'text', 'max' => 100, 'required' => true],
            'lastName' => ['type' => 'text', 'max' => 100, 'required' => true],
            'phone' => ['type' => 'text', 'max' => 30],
            'city' => ['type' => 'text', 'max' => 100],
            'skills' => ['type' => 'choiceList', 'choices' => [
                'Accessibilité numérique',
                'Audit RGAA',
                'Design de services',
                'Design UI',
                'Design UX',
                'Développement back-end',
                'Développement front-end',
                'Recherche utilisateur',
                'Rédaction UX',
            ]],
            'otherSkills' => ['type' => 'text', 'max' => 500],
            'experience' => ['type' => 'choice', 'choices' => [
                'Moins d’1 an',
                '1 à 3 ans',
                '3 à 5 ans',
                '5 à 10 ans',
                'Plus de 10 ans',
            ]],
            'profil' => ['type' => 'url'],
            'duration' => ['type' => 'choiceList', 'choices' => [
                'Ponctuelle',
                'Moins de 3 mois',
                '3 mois à 1 an',
                'Plus d’1 an',
                'Je ne sais pas',
            ]],
            'delay' => ['type' => 'text', 'max' => 200],
            'cv' => ['type' => 'url', 'required' => true],
            'more' => ['type' => 'text', 'max' => 10000, 'required' => true],
            'poste' => ['type' => 'text', 'max' => 200],
        ],
    ],
    "POST $baseUrl/api/docs/$request/tables/Contact/records" => [
        'doc' => $request,
        'table' => 'Contact',
        'fields' => [
            'mail' => ['type' => 'email', 'required' => true],
            // The message is HTML-escaped by the form, so it can be longer than its 5000 characters
            'message' => ['type' => 'text', 'max' => 30000, 'required' => true],
        ],
    ],
    "GET $baseUrl/api/docs/$training/tables/Inscriptions/columns" => [
        'doc' => $training,
        'table' => 'Inscriptions',
        'choiceColumns' => ['ministeres', 'statut'],
    ],
    "POST $baseUrl/api/docs/$training/tables/Inscriptions/records" => [
        'doc' => $training,
        'table' => 'Inscriptions',
        'fields' => [
            'e_mail' => ['type' => 'email', 'required' => true],
            'organisme' => ['type' => 'text', 'max' => 300, 'required' => true],
            'id2' => ['type' => 'id', 'required' => true],
            'prenom' => ['type' => 'text', 'max' => 100],
            'nom' => ['type' => 'text', 'max' => 100],
            'ville' => ['type' => 'text', 'max' => 100],
            'poste' => ['type' => 'text', 'max' => 200],
            'statut' => ['type' => 'choice', 'choices' => 'grist', 'required' => true],
            'ministeres' => ['type' => 'choice', 'choices' => 'grist', 'required' => true],
            'demarche' => ['type' => 'text', 'max' => 500],
            'niveau' => ['type' => 'choice', 'choices' => ['Novice', 'Débutant', 'Intermédiaire', 'Expert']],
            'attentes' => ['type' => 'text', 'max' => 10000],
            'prerequis' => ['type' => 'choice', 'choices' => ['OK', 'KO']],
        ],
    ],
];

function grist_request($method, $url, $body = null) {
    global $apiKey;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ]);
    if ($body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($response === false || $httpCode < 200 || $httpCode >= 300) {
        error_log("grist-proxy: $method $url failed ($httpCode): " . substr((string) $response, 0, 500));
        fail(502, 'Upstream error');
    }

    return json_decode($response, true);
}

// Choices of the Choice / ChoiceList columns of a table, by column id
function grist_choices($doc, $table) {
    global $baseUrl;

    $response = grist_request('GET', "$baseUrl/api/docs/$doc/tables/$table/columns");
    $choices = [];
    foreach ($response['columns'] as $column) {
        $options = json_decode((string) $column['fields']['widgetOptions'], true);
        $choices[$column['id']] = isset($options['choices']) ? $options['choices'] : [];
    }
    return $choices;
}

function client_ip() {
    // Behind Clever Cloud's reverse proxy, the client IP is the last
    // X-Forwarded-For entry: the previous ones can be set by the client.
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim(end($ips));
    }
    return $_SERVER['REMOTE_ADDR'];
}

// Sliding window counter stored in the temp dir (per instance). Fails open.
function rate_limited($key, $max, $window) {
    $fp = @fopen(sys_get_temp_dir() . '/grist-proxy-' . hash('sha256', $key), 'c+');
    if (!$fp) {
        return false;
    }
    flock($fp, LOCK_EX);
    $now = time();
    $hits = array_filter(explode(',', stream_get_contents($fp)), function ($t) use ($now, $window) {
        return $t !== '' && (int) $t > $now - $window;
    });
    $limited = count($hits) >= $max;
    if (!$limited) {
        $hits[] = $now;
    }
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, implode(',', $hits));
    flock($fp, LOCK_UN);
    fclose($fp);
    return $limited;
}

// Valid UTF-8 string of at most $max characters
function is_text($value, $max) {
    return is_string($value) && preg_match('/\A.{0,' . $max . '}\z/us', $value) === 1;
}

function validate_fields($input, $rules, $doc, $table) {
    if (!is_array($input)) {
        fail(400, 'Invalid payload');
    }
    foreach (array_keys($input) as $name) {
        if (!isset($rules[$name])) {
            fail(400, 'Unexpected field');
        }
    }

    $gristChoices = null;
    $fields = [];
    foreach ($rules as $name => $rule) {
        $value = isset($input[$name]) ? $input[$name] : null;
        if ($value === null || $value === '') {
            if (!empty($rule['required'])) {
                fail(400, "Missing field: $name");
            }
            continue;
        }

        $choices = isset($rule['choices']) ? $rule['choices'] : [];
        if ($choices === 'grist') {
            if ($gristChoices === null) {
                $gristChoices = grist_choices($doc, $table);
            }
            $choices = isset($gristChoices[$name]) ? $gristChoices[$name] : [];
        }

        switch ($rule['type']) {
            case 'text':
                $valid = is_text($value, $rule['max']);
                break;
            case 'email':
                $valid = is_text($value, 254) && filter_var($value, FILTER_VALIDATE_EMAIL);
                break;
            case 'url':
                $valid = is_text($value, 2000) && filter_var($value, FILTER_VALIDATE_URL)
                    && in_array(strtolower((string) parse_url($value, PHP_URL_SCHEME)), ['http', 'https'], true);
                break;
            case 'bool':
                $valid = is_bool($value);
                break;
            case 'id':
                $valid = is_int($value) && $value > 0;
                break;
            case 'choice':
                $valid = in_array($value, $choices, true);
                break;
            case 'choiceList':
                $valid = is_array($value) && array_values($value) === $value && isset($value[0]) && $value[0] === 'L'
                    && count(array_diff(array_slice($value, 1), $choices)) === 0
                    && count($value) <= count($choices) + 1;
                break;
            case 'joinedChoices':
                $valid = is_string($value) && count(array_diff(explode(', ', $value), $choices)) === 0;
                break;
            default:
                $valid = false;
        }
        if (!$valid) {
            fail(400, "Invalid field: $name");
        }
        $fields[$name] = $value;
    }
    return $fields;
}

$method = $_SERVER['REQUEST_METHOD'];
$targetUrl = isset($_GET['url']) && is_string($_GET['url']) ? $_GET['url'] : '';
$routeKey = "$method $targetUrl";

if (!isset($routes[$routeKey])) {
    fail(400, 'URL not whitelisted');
}
$route = $routes[$routeKey];

// Choices for the form select / checkbox inputs, in the shape of the Grist
// columns endpoint, without exposing the rest of the table schema.
if (isset($route['choiceColumns'])) {
    $choices = grist_choices($route['doc'], $route['table']);
    $columns = [];
    foreach ($route['choiceColumns'] as $id) {
        $columns[] = [
            'id' => $id,
            'fields' => ['widgetOptions' => json_encode(['choices' => isset($choices[$id]) ? $choices[$id] : []])],
        ];
    }
    echo json_encode(['columns' => $columns]);
    exit;
}

$rateLimit = (int) (getenv('GRIST_PROXY_RATE_LIMIT') ?: 20);
if (rate_limited(client_ip(), $rateLimit, 600)) {
    fail(429, 'Too many requests');
}

// Exactly one record, made only of the fields allowed for this table
$body = json_decode(file_get_contents('php://input', false, null, 0, 100000), true);
if (!is_array($body) || array_keys($body) !== ['records'] || !is_array($body['records'])
    || count($body['records']) !== 1 || !isset($body['records'][0]) || !is_array($body['records'][0])
    || array_keys($body['records'][0]) !== ['fields']) {
    fail(400, 'Invalid payload');
}
$fields = validate_fields($body['records'][0]['fields'], $route['fields'], $route['doc'], $route['table']);

grist_request('POST', "$baseUrl/api/docs/{$route['doc']}/tables/{$route['table']}/records", [
    'records' => [['fields' => $fields]],
]);

echo json_encode(['ok' => true]);
