<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get the target URL from the query parameter
$targetUrl = isset($_GET['url']) ? $_GET['url'] : '';

// Validate URL
if (empty($targetUrl)) {
    http_response_code(400);
    echo json_encode(['error' => 'No URL provided']);
    exit;
}

// Your API key - store this securely, maybe in an environment variable
$apiKey = getenv('GRIDSOME_GRIST_API_KEY');

// Get the request body
$requestBody = file_get_contents('php://input');

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);

// Set headers
$headers = array(
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Forward the request body for POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $requestBody);
}

// Execute the request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Forward the response code
http_response_code($httpCode);

// Close cURL
curl_close($ch);

// Return the response
echo $response;
?>