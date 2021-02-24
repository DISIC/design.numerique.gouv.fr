<template>
  <Layout class="outils-page">

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li>
        <g-link to="/">Accueil</g-link>
      </li>
      <li>
        <g-link to="/outils/">Outils</g-link>
      </li>
      <li>
        <span aria-current="page">Diagnostic flash</span>
      </li>
    </ol>
  </nav>

  <div class="cover">
    <div class="cover__container">
      <h1 class="text-highlight">Diagnostic flash</h1>
      <p class="cover__subtitle">Le diagnostic flash est destiné à tout personne souhaitant avoir un premier aperçu, même très partiel, sur la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne d’une administration publique, sans avoir d’expertise particulière et en n’y consacrant que peu de temps. Il permet également de s’approprier progressivement les différentes problématiques avec des exemples concrets.</p>
    </div>
  </div>

  <div class="content">
    <p>Le diagnostic flash est construit sur un ensemble de critères, qui sont autant de bonnes pratiques, de critères d’accessibilité et d’obligations pour les sites publics. Ils ont deux caractéristiques :</p>
    <ol>
    <li>ils sont importants</li>
    <li>ils peuvent être contrôlés par n’importe qui</li>
    </ol> 
    <p>Par conséquent, il ne s’agit que des symptômes les plus visibles qui, s’ils sont présents, permettent de s’interroger sur des problèmes plus profonds. Ainsi, si ce diagnostic ne permet de connaître ni la qualité ni l’accessibilité d’un site dans son ensemble, il constitue une première approche sur la maturité de l’équipe et sur les premières actions à engager : sensibilisation, formation, accompagnement, organisation, victoires rapides pour améliorer le site... </p>
    <p>C’est un constat partagé sur lequel construire une <strong>démarche d’amélioration</strong>.</p>
    <div class="rf-accordion rf-callout">      
      <button class="rf-accordion__title rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-0">
        <h2>Comment ça marche ?</h2>
      </button>
      <div class="rf-collapse" id="rf-accordion-0">
        <div class="rf-accordion__inner">
          <p>Le diagnostic se fait sur un échantillon de pages incluant au minimum :</p> 
          <ul>
          <li>la page d’accueil</li>
          <li>une page de formulaire si elle existe</li>
          <li>une page avec des fichiers en téléchargement si elle existe</li>
          <li>une page de contenu, la plus riche possible (préférer la présence d’images, d’infographies, de vidéos, de titres et sous-titres plutôt qu’une page de texte seul)</li>
          </ul>
          <p>Pour chaque critère et sur la base de son échantillon, le testeur décide si :</p>
          <ul>
          <li> 🤩 Le critère est parfaitement rempli;</li>
          <li> 😐 Le critère n’est pas totalement rempli, mais dans l’ensemble il est plutôt respecté même s’il reste quelques aspects à corriger;</li>
          <li> 🙁 Le critère n’est pas rempli et si, ça et là, des choses conviennent, c’est un peu par hasard;</li>
          <li> ✖ Le site ou la démarche n’est pas concerné par le critère.</li>
          </ul>
          <p>Il saisit son appréciation dans le tableur dédié [à produire] et obtient le résultat du diagnostic.</p>
          <p><em>Nota bene</em> : le diagnostic flash nécessite l’installation de deux extensions de navigateur - très utiles de manière générale 🙂 :</p>
          <ul>
            <li>HeadingsMap (symbolisé par le pictogramme <h/>)</li>
            <li>Contrast Checker (symbolisée par une roue multicolore)</li>
          </ul>
        </div>
      </div>
    </div>
<div class="quick-test">
  <h2>Clarté et facilité de la navigation</h2>
  <ul class="rf-accordions-group">
    <li class="rf-accordion">
        <h3 class="rf-accordion__title">
          <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-group-1">Le titre de la page est unique et pertinent</button>
        </h3>
        <div class="rf-collapse" id="rf-accordion-group-1">
          <h4>Comment vérifier ?</h4>
          <p>S'assurer que le titre de chaque page (contenu de la balise <code>title</code> dans le <code>head</code>, visible en titre de l'onglet du navigateur) permet de la distinguer des autres pages et reflète bien son contenu.</p>
          <h4>À quoi ça sert ?</h4>
          <p>Pour les personnes aveugles, utilisateurs de lecteurs d'écran, le titre de la page est le premier élément vocalisé. Pour des utilisateurs qui naviguent avec l'historique de navigation ou la liste des onglets, il est important qu'ils puissent retrouver les pages facilement en se basant sur leur titre.</p>
        </div>
    </li>    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-11">
          L’interface du site est optimisée pour toutes les tailles d’écran
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-11">
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Depuis fin 2016, le trafic internet mobile a officiellement dépassé celui du trafic internet fixe dans le monde. De ce fait, il est indispensable de développer des services en ligne dont l’affichage s’adapte selon la taille de l’écran utilisé. La conception de sites web adaptatifs (responsive web design en anglais) contribue à :</p>
          <ol>
          <li>une audience supérieure ;</li>
          <li>une rapidité d’accès à l’information, quel que soit l’endroit où se trouve l’utilisateur ;</li>
          <li>une interactivité avec des fonctionnalités enrichies (mode tactile, capteurs, etc.) ;</li>
          <li>une amélioration du référencement.</li>
          </ol>
          <h4>Comment contrôler ?</h4>
          <p>Sur l’échantillon, tester les différents formats d’écran avec un smartphone ou en modifiant la taille de la fenêtre sur ordinateur.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-12">
          Une présentation du site et des démarches en ligne est disponible sans authentification
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-12">
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>L'usager, les personnes de son entourage qui sont susceptibles de l'aider, les médiateurs numériques, les guichets administratifs, etc. ont besoin d'avoir de la visibilité sur les sites et les démarches administratives (cadre juridique, délais, pièces justificatives nécessaires, traitement des dossiers, etc.) et sur les différentes modalités pour l'accomplir (en ligne, avec un formulaire, au guichet, par téléphone, etc.). </p>
          <p>Cette transparence renforcera la confiance de l'usager dans l'administration et lui permettra d'anticiper certaines décisions de sa vie quotidienne (départ à l'étranger, obtention d'une aide financière, autorisation pour démarrer une activité, etc.). De plus cela augmentera la visibilité.</p>
          <h4>Comment contôler ?</h4>
          <p>Contrôler qu'il existe une page dédiée à la présentation du site et, le cas échéant, des démarches en ligne. Cette page est accessible sans authentification. Pour les démarches, l'usager est notamment informé à l'avance du déroulement, des pièces nécessaires et des temps de traitement.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-13">
          Lorsqu’il effectue une démarche en ligne, l’usager sait à quel étape il en est et peut revenir à une étape précédente ; il peut contrôler sa saisie
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-13">
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Dans sa navigation, il est indispensable que l'utilisateur puisse se repérer : il diot savoir où il est, d'où il vient et où trouver l'information dont il a besoin. Les risques d’abandon en cours de processus et d'erreurs de saisie sont ainsi limités.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur les démarches, contrôler que :</p>
          <ul>
            <li>Les différentes étapes de la démarche en ligne sont visibles à tout moment et que l’usager est informé de l'étape à laquelle il est ;</li>
            <li>L'usager peut revenir à une étape précédente et modifier sa saisie : les données sont automatiquement sauvegardées au fur et à mesure de la saisie ;</li>
            <li>Le dernier écran présenté à l’usager avant transmission de sa demande est un récapitulatif des informations saisies et prêtes à être communiquées à l’administration.</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-14">
          La navigation et l’utilisation du site peuvent s’effectuer entièrement au clavier
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-14">
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>La navigation au clavier est un des critères centraux de l'accessibilité numérique. De nombreux utilisateurs, souffrant de handicap ou non, naviguent sans souris, avec les touches de leur clavier. De plus, les dispositifs qui ne reposent pas sur la souris doivent être pris en compte ; notamment, les contenus et l'utilisation des services doivent être accessibles aux utilisateurs d'aides techniques (lecteurs d'écran par exemple) qui n'utilisent que le clavier ou un périphérique plus spécifique reposant sur les mêmes mécanismes que le clavier.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, contrôler que :</p>
          <ul>
            <li>La navigation et l'utilisation peuvent s'effectuer entièrement au clavier dans un ordre prévisible.</li>
            <li>Chaque page comporte des liens d'accès rapides vers le contenu principal, le menu et le moteur de recherche s'il existe : ces liens sont au tout début de la page, ils sont de préférence visibles en permanence mais peuvent éventuellement ne s'afficher qu'au cours de la navigation au clavier (rafraîchir la page puis actionner la touche de tabulation pour les faire apparaître).</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-15">
          Il est possible de revenir à la page d’accueil depuis toutes les pages et de connaître la position des pages dans l’arborescence du site   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-15"> 
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les usagers doivent doivent pouvoir s'orienter dans un site et notamment revenir à la page d'accueil depuis n'importe quelle page, par exemple s'ils n'ont pas trouvé ce qu'ils cherchaient ou s'ils veulent chercher autre chose. Il arrive également qu'un lien ou qu'un résultat fournit par un moteur de recherche dirige directement vers une page interne du site - auquel cas l'usager aura besoin de savoir où il se trouve et éventuellement de revenir à l'accueil. Enfin, les pages d'erreur font partie du site et ne doivent pas interrompre la navigation de l'usager : elles doivent également permettre un retour à la page d'accueil.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, contrôler que :</p>
          <ul>
            <li>Il est possible de revenir à la page d'accueil depuis toutes les pages, par exemple via le fil d'Ariane ou le bandeau d'entête.</li>
            <li>Chaque page affiche un fil d'Ariane représentant la position de la page dans l'arborescence du site. Sauf cas particulier, le fil d'Ariane doit se trouver immédiatement avant le contenu principal.</li>
            <li>La page d'erreur 404 permet la reprise de la navigation : pour tester, taper une extension inexistante de l'URL après "/" (par exemple https://design.numerique.gouv.fr/voilàvoilà).</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-16">
          La charte graphique tient compte de la Marque de l’État
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-16">         
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>La marque de l'État (www.gouvernement.fr/marque-Etat) doit être mise en œuvre, en application du principe selon lequel "Là où l’État est présent, agit, finance, sa présence doit être clairement identifiée". L'application de la marque de l'État permet l'homogénéité et la continuité dans la navigation, avec une identification permanente du service en ligne visité : l'usager peut alors naviguer en toute confiance et distinguer clairement les services proposés par l'État des prestations payantes et des arnaques en ligne.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon et sur la base de www.gouvernement.fr/marque-Etat, contrôler :</p>
          <ul>
            <li>le bloc marque https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/le-bloc-marque</li>
            <li>le système graphique https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/le-systeme-graphique</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-17">
          Le contenu de chaque page est disponible à l’impression sans bloc de navigation ni aplat de couleur   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-17">             
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>L'impression des contenus doit se faire sous une forme appropriée au support, avec des contenus pertinents et une bonne lisibilité. Rationaliser l'utilisation des espaces et des couleurs permet d'économiser les ressources.</p>
          <h4>Comment contôler ?</h4>
          <p>Dans le menu du navigateur, choisir l'aperçu avant impression et contrôler que</p>
          <ul>
            <li>les éléments inutiles dans une version papier ont bien disparu (notamment les menus ou autre bloc de navigation)</li>
            <li>il n'existe pas de gros aplats de couleur.</li>
          </ul>  
        </div>
      </div>
    </li>
  </ul>
  <h2>Accessibilité du langage et de l’interface</h2>
  <ul class="rf-accordions-group">
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-21">
          Le site a fait l'objet d'un audit de conformité RGAA   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-21">       
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les produits et services numériques sont souvent conçus sans prendre le temps de comprendre l’audience qu’ils servent, notamment les personnes en situation de handicap soit 12 millions de personnes en France. Depuis 2012, tous les sites publics doivent être accessibles et ainsi permettre à tous les usagers un égal accès à leurs droits. En France, le taux d'accessibilité d'un site est calculé en auditant ce site sur la base des critères du Référentiel général d'amélioration de l'accessibilité (RGAA).</p>
          <h4>Comment contôler ?</h4>
          <p>Vérifier que :</p>
          <ol>
            <li>La page d'accueil affiche l'état de conformité: https://www.numerique.gouv.fr/publications/rgaa-accessibilite/obligations/#mention-obligatoire-sur-la-page-daccueil</li>
            <li>La déclaration de conformité au référentiel général d’accessibilité pour les administrations (RGAA) - ou la date de publication prévue - est accessible à partir du pied de page: https://design.numerique.gouv.fr/accessibilite-numerique/declaration-accessibilite</li>
          </ol>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-22">
          Aucune information n'est véhiculée que par la couleur   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-22">    
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Une information véhiculée uniquement par la couleur nuit au confort de navigation (par exemple si les liens sont en bleu foncé dans du texte en noir) et exclut de fait les usagers malvoyants. À titre d’exemple, 8% des hommes et 0,5% des femmes sont atteints de daltonisme : https://twitter.com/design_gouv/status/1347607804652224512.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l’échantillon, contrôler qu’aucun élément n’est compréhensible qu’en fonction de sa couleur (par exemple pas de texte telle que « la saisie des champs en rouge doit être corrigée »). Les liens sont visibles autrement que par une couleur distincte et sont soulignés.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-23">
          Les textes et les éléments graphiques porteurs d'informations sont présentés avec un contraste suffisant par rapport à leur arrière-plan   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-23">           
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Afin de permettre une bonne lisibilité des contenus et de limiter la charge mentale lors de la consultation, le ratio de contraste entre le texte - y compris du texte sous forme d'image - et son arrière plan doit être d'au moins 4,5:1 (une taille restituée inférieure à 24px). Pour les textes agrandis (taille restituée supérieure ou égale à 24px ou caractères gras), ce ratio doit être d'au moins 3:1. Les polices avec des traits particulièrement fins ou des aspects et des caractéristiques inhabituelles qui réduisent la reconnaissance de la forme des lettres sont plus difficiles à lire, spécialement à des niveaux de contrastes bas.
          Dans le cas de graphiques, le contraste entre chaque élément (courbe, bâton, part de camembert, etc.) doit être également suffisant.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, contrôler que les contrastes sont respecté à l'aide, par exemple, de l’extension de navigateur Contrast Checker (symbolisée par une roue multicolore) : </p>
          <ul>
            <li>Chrome: https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf</li>
            <li>Firefox: https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/</li>
            <li>Edge: https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-24">
          Les images porteuses d’informations, les infographies, les vidéos et les fichiers audio ont une alternative textuelle   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-24">           
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les alternatives textuelles permettent notamment aux personnes aveugles d'accéder aux contenus via un lecteur d'écran ou un clavier Braille. </p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, contrôler que </p>
          <ul>
            <li>les vidéos sont sous-titrées et proposent une transcription et que les fichiers audio ont une transcription en alternative; le lien vers la transcription doit être adjacent au contenu vidéo ou audio</li><li>Les images porteuses d'informations - c'est-à-dire les images qui ne sont pas purement décoratives - et les infographies ont une alternative textuelle : dans le code source, rechercher <code>img</code> et vérifier que chacune de ces balises comporte un attribut <code>alt="ici le texte alternatif"</code> (À noter : si l'image est purement décorative, l'attribut alt doit être présent et vide).</li></ul>
            <p>La transcription textuelle et le texte alternatif doivent être <strong>pertinents</strong> c'est-à-dire transmettre les informations contenus dans l'image et non leur description factuelle.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-25">
          La langue principal du site est bien définie  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-25">     
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Pour que les aides techniques et plus particulièrement les synthèses vocales prononcent correctement le texte lu.</p>
          <h4>Comment contôler ?</h4>
          <p>Pour réaliser ce test, vérifier qu'il existe bien un attribut <code>lang="fr"</code> (ou <em>en</em> si c'est en anglais, <em>it</em> en italien, etc.) dans la balise <code>html</code> située au début du document, juste après la balise doctype ci-dessus évoquée. [regarder le code source]</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-26">
          Les textes sont simples et compréhensibles   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-26">     
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les services de l'administration et les métiers techniques ont leurs propres codes, leurs sigles, voire leur jargon ; or les démarches en ligne s'adressent à des publics divers et pour certaines au grand public. il est donc essentiel de faire relire les contenus par des personnes extérieures et de se référer à une charte éditoriale pour gérer la qualité des contenus. Un vocabulaire simple et précis mettra l'usager en confiance.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, estimation du testeur et de personnes extérieures aux services. Les tests ont pour objectif de répondre aux questions suivantes :</p>
          <ul>
            <li>Le langage utilisé est-il suffisamment clair ? Les phrases sont-elles simples à comprendre ?</li>
            <li>Reste-il des termes techniques non expliqués ? Sont-ils indispensables ?</li>
            <li>Les questions posées sont-elles logiques, justifiées et compréhensibles ?</li>
            <li>Reste-t-il des pages techniques en anglais avec des termes informatiques (par exemple, la page « Erreur 404 » en tapant après l'URL "/iofjzfoizjfeajofiz" - c'est un exemple) ?</li>
            <li>Les messages d'erreur ou de confirmation sont-ils écrits en français ? Sont-ils suffisamment clairs et précis ?</li>
            <li>Les sigles sont-ils développés la première fois qu'ils sont utilisés sur chaque page (éventuellement via une infobulle ou via un renvoi à un glossaire)?</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-27">
          Le contenu reste lisible lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-27">     
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les usagers nécessitant de grossir les caractères pour accéder au contenu d'un site ou d'une démarche ne doivent pas être ralentis ou bloqués par du texte disparaissant car hors du cadre ou caché, ou bien difficilement lisible car superposé à d'autres élément.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, le contenu reste clair lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur. Pour effectuer ce test, choisir d'abord dans le menu Affichage du navigateur l'item Zoom texte seulement.</p> 
          <p>Pour augmenter la taille des caractères, effectuer la combinaison de touches ctrl + + six fois. Les anomalies le plus souvent rencontrées sont la disparition de texte blanc qui était sur un fond de couleur non extensible ou la page « coupée » à droite.</p>
        </div>
      </div>
    </li>
  </ul>
  <h2>Architecture de l’information</h2>  
  <ul class="rf-accordions-group">
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-31">
          La hiérarchie des titres est complète et cohérente   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-31">          
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Une hiérarchie des titres complète et cohérente dans le code - et non pas uniquement dans la mise en page - permet avant tout la navigation sur la page pour les utilisateurs aveugles ayant un lecteur d'écran ou un clavier braille: ils ont ainsi connaissance de la structuration de la page et peuvent naviguer de titre en titre sans être obligés de lire l'ensemble du contenu. Ce principe est d'ailleurs valable pour les outils bureautiques de type Document Writer ou Word ou encore PDF: il est indispensable d'utiliser les "styles" et non pas une mise en forme du texte. De manière plus générale, une bonne hiérarchisation permet une meilleure visualisation et permet l'extraction du plan de chaque page aux outils dédiés (dont ceux d’indexation, avec par conséquent un meilleur référencement). </p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, lancer l'extension HeadingsMap (symbolisé par le pictogramme &lt;h/&gt;). Dans le panneau qui s'ouvre à gauche, s'assurer que c'est bien l'onglet Headers Structure qui est activé (et non HTML5 Outline). Vérifier qu'il y a au moins un titre de niveau 1 et que l'arbre des titres est logique et cohérent (il ne doit pas y avoir de 'trous' : un titre de niveau h2 ne doit pas être suivi d’un titre h4, h5 ou h6, par exemple).</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-32">
          Chaque champ de formulaire est clairement associé à son intitulé. Les champs et les formats obligatoires sont indiqués  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-32">       
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>L'association - visuellement et dans le code - entre l'intitulé, le champs concerné et les informations de saisie (type de donnée demandé, format, champ obligatoire...) évite l'agacement et l'incompréhension des utilisateurs. Elle leurs permet d'identifier sans ambiguïté les champs de formulaire et la nature des informations à saisir, et ainsi de prévenir les erreurs. Elle améliore l'accessibilité en permettant l'utilisation des aides techniques (les lecteurs d'écran par exemple).</p>
          <h4>Comment contôler ?</h4>
          <p>Pour tout champ de saisie, notamment dans les formulaires :</p>
          <ul>
            <li>En cliquant sur les intitulés des champs, le curseur vient bien se positionner alors dans le champ concerné.</li>
            <li>Les intitulés des champs sont accolés soit immédiatement au-dessus ou à gauche du champ (pour une lecture de gauche à droite), soit immédiatement au-dessus ou à droite du champ (pour une lecture de droite à gauche).</li>
            <li>Une mention est présente pour les champs dont la saisie est obligatoire, soit explicitement, soit par le biais d'une indication (souvent un astérisque) dont l'explication est donnée au début du formulaire. La seule présence d'un astérisque et/ou une coloration différente ne sont pas suffisantes.</li>
            <li>Pour tout champ de formulaire présentant un type de donnée ou un format obligatoire, l'utilisateur est informé</li>
            <li>Tout message d'erreur identifie le champ concerné.</li>
          </ul>  
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-33">
          Le titre de chaque page est composée du titre de son contenu, suivi du nom du site   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-33">          
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Le titre de la page s'affiche dans l'onglet du navigateur. Il permet l'identification des contenus de la page dans l'onglet, dans les favoris, dans la fenêtre du navigateur ou encore par les lecteurs d'écran - c'est à ce titre un élément de l'accessibilité. Un titre pertinent améliore le référencement et la présentation dans les moteurs de recherche.</p>
          <p>Il améliore la prise en compte des contenus par les moteurs de recherche et outils d’indexation.</p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon, le titre de chaque page est composée du titre de son contenu, suivi du nom du site. Il s'agit du titre de la fenêtre ou de l'onglet ouvert du navigateur. Vérifier que ce titre est bien constitué de deux parties, la première reprenant le titre de la page, la seconde le nom du site. En parcourant l'échantillon, vérifier qu'à chaque fois le titre est pertinent et unique.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-34">
          Le soulignement est réservé aux liens
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-34">          
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Réserver le soulignement aux liens facilite leur identification et évite à l'utilisateur des clics inutiles sur des contenus soulignés perçus comme des hyperliens.</p>
          <h4>Comment contôler ?</h4>
          <p>Vérifier que seuls les liens sont soulignés.</p>
        </div>
      </div>
    </li>
  </ul>
 <h2>Accompagnement de l’usager</h2>
  <ul>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-41">
          Lorsqu’une identification est requise, il est proposé à l’usager de s'authentifier via FranceConnect   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-41">                  
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>L’intégration du dispositif FranceConnect à un site permet à l'usager de s'authentifier plus facilement tout en sécurisant son identification. Il permet ainsi aux usagers d'accéder à différents services publics en ligne en s’appuyant sur des comptes vérifiés existants sans devoir créer de nouveaux comptes. Cela vise à limiter les identifiants et mots de passe.</p>
          <p>Après l’authentification, FranceConnect orchestre la circulation des données personnelles de l’usager, avec son consentement.</p>
          <p>Les administrations ayant intégré FranceConnect bénéficient entre elles de passerelles naturelles : ce mécanisme de SSO (Single Sign-On, ou authentification unique) rend les parcours usagers plus fluides.</p>
          <h4>Comment contôler ?</h4>
          <p>Si identification est requise, il est proposé à l’usager de s'authentifier via FranceConnect.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-42">
          La démarches en ligne fait l'objet d'enquêtes de satisfaction et donne accès aux résultats  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-42">               
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les administrations développent et font évoluer leurs services en ligne en étant à l'écoute des attentes des usagers : tests utilisateurs, enquêtes en ligne, questionnaires de satisfaction, entretiens, focus group, analyse des statistiques, etc.</p>
          <p>Cependant il ne suffit pas de conduire les tests ou de mettre en place un outil de mesure statistique. Ce critère vise la publication et la communication au public des enquêtes conduites et des résultats atteints.</p>
          <h4>Comment contôler ?</h4>
          <p>Les démarches en ligne font l'objet d'enquêtes de satisfaction (par exemple en proposant le bouton "Je donne mon avis" https://observatoire.numerique.gouv.fr/Aide/Donner son avis) et donnent accès aux résultats.</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-43">
          Les démarches en ligne sont référencées sur service-public.fr
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-43">               
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Pour l'usager, il n'est pas toujours évident de savoir si une démarche en ligne existe et si elle est utilisable dans sa situation. Le référencement sur service-public.fr est aussi une garantie que le site concerné est officiel. Par ailleurs, le référencement sur service-public.fr est une obligation relevant du Décret n°99-68 du 2 février 1999 qui indique que « Les formulaires dont l'usage est nécessaire pour accomplir une démarche auprès d'une administration ou d'un établissement public administratif de l'Etat sont tenus gratuitement à la disposition du public [...] par le site public dénommé "service-public.fr" » ; il est précisé qu'il est mis « à la disposition des usagers, sur le site "service-public.fr", la liste à jour des téléprocédures et des formulaires administratifs disponibles ».</p>
          <h4>Comment contôler ?</h4>
          <p>Les démarches en ligne sont référencées sur service-public.fr</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-44">
          Le site est bien référencé par les moteurs de recherche  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-44">              
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>La qualité d'un site ou d'une démarche en ligne ne s'évalue pas à partir de la page d'accueil de la démarche mais bien avant. Il est nécessaire de se mettre dans les pas de l'usager et de vérifier si son parcours est fluide et s'il est informé dès le début de son parcours. Par ailleurs, un bon référencement par les moteurs de recherche diminue la probabilité que les usagers se retrouvent sur un site privé payant pour le même service.</p>
          <h4>Comment contôler ?</h4>
          <p>Contrôler que les principaux moteurs (Google, Bing, Qwant) restituent bien le site dans les résultats lorsque l'on recherche le service (ie. pas en tapant le nom de l'institution mais le service qu'elle rend : on cherchera par exemple "Renouvellement carte grise" et non pas "ANTS") : 1/ parmi les trois premières occurrences et 2/ jamais derrière un site proposant le même service mais payant (hors sites sponsorisés dans les deux cas).</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-45">
          Le pied de page présente l'ensemble des liens obligatoires  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-45">                  
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Le pied de page constitue un élément de navigation et un point de repère tout au long du site. </p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon</p>
          <ul>
            <li>Le pied de page est présent et identique sur toutes les pages.</li>
            <li>Il est présent et identique sur les pages d’erreur.</li>
            <li>Les informations suivantes sont indiquées : Contact, Accessibilité, Mentions légales. Les sites gouvernementaux doivent également proposer des liens de pied de page vers le Répertoire des informations publiques ou data.gouv.fr, legifrance.gouv.fr, service-public.fr, gouvernement.fr, france.fr.</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-46">
          Le site ou la démarche en ligne propose au moins deux moyens de contact différents  
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-46">                  
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Le fait de proposer au moins deux moyens de contact différents permet de favoriser les retours d’information de la part des utilisateurs, tout en évitant de mettre ce dernier en difficulté en cas d’indisponibilité ou de problèmes d’utilisation de l’un des moyens de contact.</p>
          <p>Par ailleurs, toutes les administrations (services de l’État, mairies, organismes de service public, etc.) doivent pouvoir être saisies par voie électronique (SVE) sauf exception publiée au Journal Officiel.</p>
          <h4>Comment contôler ?</h4>
          <p>Vérifier que l'information "contact" permettant d'échanger avec un agent (ce qui exclut par exemple les tchat bots) est facile à trouver et qu'au moins deux alternatives existes (téléphone, mail, formulaire de contact, tchat, guichet physique local).</p>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-47">
          La informations relatives aux fichiers proposés en téléchargement sont indiquées   
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-47">                  
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Les utilisateurs - y compris ceux en situation de handicap - doivent savoir s'il est pertinent pour eux de télécharger les fichiers et si leurs outils le leur permettent.</p>
          <h4>Comment contôler ?</h4>
          <p>Pour chaque fichier proposé en téléchargement :</p>
          <ul>
            <li>Le format est indiqué</li>
            <li>La taille est indiquée</li>
            <li>La langue, lorsque ce n'est pas la même que celle de la page, est indiquée</li>
            <li>Le nom du fichier permet d'en identifier le contenu et la provenance</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="rf-accordion">
      <h3 class="rf-accordion__title">
        <button class="rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-48">
          Les fichiers bureautiques téléchargeables sur le site sont proposés dans un format ouvert et sont accessibles
        </button>
      </h3>
      <div class="rf-collapse" id="rf-accordion-48">                  
        <div class="rf-accordion__inner">
          <h4>Pourquoi ?</h4>
          <p>Lors de la mise en ligne de fichiers en téléchargement (traitement de texte, images, audio, vidéo, etc.) , il est nécessaire de proposer les formats ouverts afin que tout le monde puisse y avoir accès sans avoir à payer pour accéder à un format propriétaire.</p>
          <p>Découvrir les <a href="https://github.com/DISIC/guides-documents_bureautiques_accessibles" target="_blank" title="guides pour rédiger des documents bureautiques - Nouvelle fenêtre">guides pour rédiger des documents bureautiques accessibles</a></p>
          <h4>Comment contôler ?</h4>
          <p>Sur l'échantillon :</p>
          <ul>
            <li>pour mettre à disposition des documents que le destinataire n’a pas besoin de modifier, il faut utiliser le format PDF.</li>
            <li>pour diffuser un document de type texte, le format recommandé est ODT ;</li>
            <li>pour diffuser un document de type présentation, le format recommandé est ODP ;</li>
            <li>pour diffuser un document de type feuille de calcul, le format recommandé est ODS.</li>
          </ul>
          <p>La suite Office n'est pas interdite mais les alternatives ci-dessus doivent être proposées.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>

  </Layout>
</template>


<script>


export default {

  metaInfo: {
    title: "Diagnostic flash",
    meta: [{
      name: 'description',
      content: "Le diagnostic flash est destiné à tout personne souhaitant avoir un premier aperçu sur la qualité, l’accessibilité et le design d’un site."
    }],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page .rf-callout {
    padding: 0 1rem;
    .rf-accordion__btn{
      width: 95%;
    }
  }

      .rf-accordion__inner{
        background-color:var(--g200);
        padding:1rem 2rem;
      }

</style>
