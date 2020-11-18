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
          <span aria-current="page">Checklist rapide</span>
        </li>
      </ol>
    </nav>


    <div class="cover">
     <div class="cover__container">

      <h1>La <span class="highlight">Checklist rapide</span> de DesignGouv</h1>

      <p class="cover__subtitle">Avant de lancer un audit complet, il est intéressant qu'un chef de produit ou de projet puisse réaliser lui-même une évaluation rapide de la qualité au regard de la <a href="#">checklist Pidila</a> d'un site ou d'une livraison de pages pour s'en faire une première idée.</p>
      <p>Cette page liste ces tests et indique comment les réaliser.</p>
      </div>
    </div>

<div class="content">
    <p><em>Dans le cadre de l'évaluation rapide d'un site, nous recommandons d'effectuer ces tests sur trois pages&nbsp;: la page d'accueil, une page comportant un formulaire, une page de contenu.</em></p>
    <div class="quick-test">
    <h2>Page affichée (16 tests)</h2>
    <ul>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-01</b> Le titre de chaque page est composée du titre de son contenu, suivi du nom du site</h3>
        <div class="js-expandmore-panel">
            <p>Il s'agit du titre de la fenêtre ou de l'onglet ouvert du navigateur. Vérifier que ce titre est bien constitué de deux parties, la première reprenant le titre de la page, la seconde le nom du site. En parcourant d'autres pages du site, vérifier qu'à chaque fois le titre est pertinent et unique.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-02</b> Le bandeau supérieur et le pied de page sont présents sur toutes les pages</h3>
        <div class="js-expandmore-panel">
            <p>Parcourir quelques pages du site en vérifiant que l'entête et le pied de page y sont présents et constants.</p>
            <p>Cette règle s'applique aussi aux pages d'erreur. Pour le vérifier, ajouter un caractère quelconque à la fin de l'url, ce qui devrait aboutir sur une page d'erreur 404 ("cette page n'existe pas")</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-03</b> Il est possible de revenir à la page d'accueil depuis toutes les pages</h3>
        <div class="js-expandmore-panel">
            <p>Un lien de retour à l'accueil est présent sur toutes les pages. De préférence, ce lien se retrouve à deux endroits au moins : sur l'entête du site et en premier item du fil d'Ariane.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-04</b> Chaque page comporte des liens d'accès rapides vers le contenu principal, le menu et le moteur de recherche si il existe</h3>
        <div class="js-expandmore-panel">
            <p>Ces liens sont au tout début de la page. Ils sont de préférence visibles en permanence mais peuvent éventuellement ne s'afficher qu'au cours de la navigation au clavier. Rafraîchir la page puis actionner la touche de tabulation pour les faire apparaître.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-05</b> Chaque page affiche un fil d'Ariane représentant la position de la page dans l'arborescence du site</h3>
        <div class="js-expandmore-panel">
            <p>Généralement, le fil d'Ariane s'affiche juste au-dessus du contenu de la page. Il permet de remonter l'arborescence d'où elle est issue.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-06</b> Aucune information n'est véhiculée que par la couleur</h3>
        <div class="js-expandmore-panel">
            <p>Il n'y a pas d'éléments qui ne seraient compréhensibles qu'en fonction de leur couleur (par exemple pas de portion de texte telle que «&#8239;cliquez sur le bouton rouge&#8239;»).</p>
            <p>Les liens sont visibles autrement que par une couleur distincte&nbsp;: de fait, on vérifie lors de ce test que les liens sont soulignés.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-07</b> Le soulignement est réservé aux hyperliens</h3>
        <div class="js-expandmore-panel">
            <p>Par convention, le soulignement identifie un lien. On s'assure donc qu'il n'est utilisé que pour les liens pour ne pas créer d'ambiguïté.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-08</b> Le contenu reste lisible lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur</h3>
        <div class="js-expandmore-panel">
            <p><em>Pour effectuer ce test, choisir d'abord dans le menu <i>Affichage</i> du navigateur l'item <i>Zoom texte seulement</i>.</em></p>
            <p>Pour augmenter la taille des caractères, effectuer la combinaison de touches <kbd>ctrl</kbd>&nbsp;+&nbsp;<kbd>+</kbd> six fois. Les anomalies le plus souvent rencontrées sont la disparition de texte blanc qui était sur un fond de couleur non extensible ou la page «&#8239;coupée&#8239;» à droite.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-09</b> Chaque champ de formulaire est associé à son étiquette</h3>
        <div class="js-expandmore-panel">
            <p>Sur une page du site présentant un formulaire, cliquer sur les intitulés (labels) des champs et s'assurer que le curseur vient bien se positionner alors dans le champ concerné.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-10</b> Les champs dont la saisie est obligatoire sont signalés</h3>
        <div class="js-expandmore-panel">
            <p>Une mention est présente pour les champs dont la saisie est obligatoire, soit explicitement, soit par le biais d'une indication (souvent un astérisque) dont l'explication est donnée au début du formulaire. Note&nbsp;: la seule présence d'un astérisque et/ou une coloration différente ne sont pas suffisantes.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-11</b> L'utilisateur est averti de l'ouverture d'une nouvelle fenêtre</h3>
        <div class="js-expandmore-panel">
            <p>Cet avertissement doit être présent visuellement (présentation différente, présence d'un pictogramme&hellip;) et textuellement&nbsp;: généralement, au survol du lien apparaît une étiquette rappelant le texte du lien + la mention «&#8239;nouvelle fenêtre&#8239;». Si ça n'apparaît pas au survol c'est peut-être dans un texte caché visuellement mais présent dans le code source.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-12</b> Le site n'impose pas de mouvements ni de clignotement déclenchés automatiquement, de plus de 5 secondes et ne pouvant pas être contrôlés par l'utilisateur</h3>
        <div class="js-expandmore-panel">
            <p>On vérifie qu'il n'y a pas d'animations se déclenchant systématiquement et n'offrant pas de possibilité de les interrompre (publicités tournantes, carousels, vidéos etc.).</p>
            <p>A noter : si le <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr> fixe une limite de temps pour les animations déclenchées automatiquement, les autres référentiels, eux (Charte internet de l'Etat, Bonnes pratiques Opquast) bannissent tout déclenchement automatique.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-13</b> Le site ne comporte pas d'éléments déclenchant la lecture de son durant plus de 3 secondes et ne pouvant pas être arrêtés</h3>
        <div class="js-expandmore-panel">
            <p>Idem que ci-dessus, cette fois pour les sons et avec une durée maximale de 3 secondes.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-14</b> Les vidéos sont sous-titrées</h3>
        <div class="js-expandmore-panel">
            <p>L'exception est accordée pour les diffusions en direct.</p>
            <p>Les profils techniques peuvent s'assurer au passage que le lecteur est pilotable au clavier.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-15</b> Le site est entièrement utilisable au clavier et à la souris</h3>
        <div class="js-expandmore-panel">
            <p>Rafraîchir la page. S'assurer qu'on peut naviguer de lien en lien (ou bouton) à l'aide de la touche tabulation. Lorsque le focus est posé sur un lien ou un bouton la touche d'espacement active ledit lien ou bouton. Les boutons sont également activables grâce à la touche <i>Return</i>.</p>
            <p>Lors du test, on utilisera aussi la combinaison de touches <kbd>maj</kbd>&nbsp;+&nbsp;<kbd>tab</kbd> pour vérifier qu'on peut naviguer à reculons.</p>
            <p>Additionnellement, on s'assure que le focus est visible, c'est-à-dire qu'on distingue bien où la tabulation nous a conduits.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-16</b> Le contenu de chaque page est disponible à l'impression sans blocs de navigation</h3>
        <div class="js-expandmore-panel">
            <p>Dans le menu du navigateur, choisir l'aperçu avant impression. S'assurer que les éléments inutiles dans une version papier ont bien disparu et qu'il n'existe pas de gros aplats de couleur.</p>
        </div>
        </li>
    </ul>


    <h2>À réaliser avec des extensions pour le navigateur (2 tests)</h2>
    <p><em>Extensions pour Firefox à installer : <a href="https://addons.mozilla.org/en-us/firefox/addon/wcag-contrast-checker/" lang="en">WCAG Contrast Checker</a> ; <a href="https://addons.mozilla.org/en-us/firefox/addon/headingsmap/" lang="en">HeadingsMap</a></em>.</p>
    <ul>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-17</b> Le texte et le texte mis en image de taille courante sont disponibles avec un rapport de contraste d'au moins 4,5 avec leur arrière-plan</h3>
        <div class="js-expandmore-panel">
            <p>Lancer l'extension <span lang="en">WCAG Contrast Checker</span> (symbolisé par une roue multicolore).</p>
            <p>Les croix rouges indiquent les contrastes non conformes, les coches vertes indiquent les contrastes conformes.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-18</b> La hiérarchie des titres est complète et cohérente</h3>
        <div class="js-expandmore-panel">
            <p>Lancer l'extension <span lang="en">HeadingsMap</span> (symbolisé par le pictogramme <code>&lt;h/&gt;</code>. Dans le panneau qui s'ouvre à gauche, s'assurer que c'est bien l'onglet Headers Structure qui est activé (et non HTML5 Outline).</p>
            <p>Vérifier qu'il y a au moins un titre de niveau 1 et que l'arbre des titres est logique et cohérent.</p>
        </div>
        </li>
    </ul>

    <h2>Code source de la page (4 tests)</h2>
    <p><em>Pour afficher le code d'une page, utilisez la combinaison de touches <kbd>ctrl</kbd> + <kbd>u</kbd> (Windows), <kbd>cmd</kbd> + <kbd>u</kbd> (MacOS).</em></p>
    <ul>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-19</b> Le code source de chaque page commence par une déclaration d'utilisation d'une DTD dont la syntaxe et la position sont conformes</h3>
        <div class="js-expandmore-panel">
            <p>Une déclaration correcte facilitera le travail des aides techniques. Pour réaliser ce test, vérifier que la première ligne comporte bien <code>&lt;!doctype html&gt;</code>.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-20</b> Le code source de chaque page définit les zones de contenu, de navigation, d'en-têtes, de pied de page et de recherche</h3>
        <div class="js-expandmore-panel">
            <p>Pour réaliser ce test, vérifier qu'il existe bien un <code>role="main"</code> sur le contenu principal de la page, <code>role="nav"</code> sur le menu principal, <code>role="banner"</code> sur l'entête du site, <code>role="content-info"</code> sur le pied de page, <code>role="search"</code> sur le bloc de recherche.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-21</b> La langue principale du document est bien définie</h3>
        <div class="js-expandmore-panel">
            <p>Pour réaliser ce test, vérifier qu'il existe bien un attribut <code>lang="fr"</code> (ou en si c'est en anglais, it en italien, etc.) dans la balise <code>&lt;html&gt;</code> située au début du document, juste après la balise doctype ci-dessus évoquée.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-22</b> L'attribut alt des images, zones réactives et boutons graphiques est présent</h3>
        <div class="js-expandmore-panel">
            <p>Si des images porteuses de sens sont présentes, elles doivent être accompagnées d'un texte de remplacement. Ce texte sera lu par les aides techniques. Le texte alternatif doit être pertinent c'est-à-dire transmettre les intentions de l'image et non leur description factuelle.</p>
            <p>À noter&nbsp;: si l'image est purement décorative, l'attribut alt doit être présent et vide.</p>
            <p>Passation du test&nbsp;: dans le code source, rechercher <code>&lt;img </code> et vérifier que chacune de ces balises comporte un attribut <code>alt="ici le texte alternatif"</code>.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-23</b> Le code HTML de chaque page web doit être conforme à la DTD définie.</h3>
        <div class="js-expandmore-panel">
            <p>Utiliser le <a target="_blank" title="validateur du w3c - nouvelle fenêtre" href="https://validator.w3.org/">validateur du w3c</a>. Il existe trois méthodes :</p>
            <ul>
            <li>Coller l'URL de la page dans le champ <em lang="en">Address</em> puis cliquer sur <strong lang="en">Check</strong>.</li>
            <li>Télécharger le fichier HTML depuis son ordinateur à l'aide du champ <em lang="en">Address</em> puis cliquer sur <strong lang="en">Check</strong>.</li>
            <li>Coller le code HTML dans le champ puis cliquer sur <strong lang="en">Check</strong>.</li>
            </ul>
        </div>
        </li>
    </ul>


    <h2>Spécificités des sites gouvernementaux (2 tests)</h2>
    <ul data-multiselectable="true">
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-23</b> Le bloc Marianne est présent en haut à gauche de toutes les pages</h3>
        <div class="js-expandmore-panel">
            <p>Un bloc identifie les sites de la sphère gouvernementale. Il est composé de la Marianne, du nom de l'entité (ministère) sous ce logo et du titre du site. Rien n'est placé à sa gauche et rien au-dessus sauf éventuellement pour orienter vers des sections importantes (par exemple Particuliers et Professionnels).</p>
            <p>L'exception est accordée pour les éventuels liens d'accès rapides vers les zones principales de la page.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-24</b> Le pied de page comporte les liens obligatoires des sites publics</h3>
        <div class="js-expandmore-panel">
            <p>Sur tous les sites publics, le pied de page comporte des liens vers :  une page de contact, Plan du site, Mentions légales, Page Accessibilité, Aide aux usagers, Recueil de l'avis des utilisateurs, Répertoire des informations publiques ou data.gouv.fr, Horaires et plans d'accès (si la page existe) et démarches en ligne (si la page existe).</p>
            <p>Les sites gouvernementaux doivent également proposer des liens de pied de page vers legifrance.gouv.fr, service-public.fr, gouvernement.fr, france.fr.</p>
        </div>
        </li>
    </ul>

    <h2>Support mobile (2 tests)</h2>
    <p>S'il est possible d'afficher le site sur un mobile, on peut procéder à quelques tests simples.</p>
    <ul>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-25</b> Le site ne bloque pas le zoom</h3>
        <div class="js-expandmore-panel">
            <p>On peut zoomer le contenu de la page à l'aide des doigts.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-26</b> La zone de clic est utilisable aux doigts</h3>
        <div class="js-expandmore-panel">
            <p>Les zones cliquables, notamment quand elles sont proches les unes des autres, sont suffisamment grandes pour permettre de les actionner facilement et sans risquer d'activer un lien en croyant en activer un autre.</p>
        </div>
        </li>
        <li class="js-expandmore">
        <h3 class="js-expandmore-title h4"><b>ER-27</b> Sauf cas particuliers, la page est adaptée à la largeur du support de consultation</h3>
        <div class="js-expandmore-panel">
            <p>Le site est "responsive" c'est-à-dire que l'affichage s'adapte au support, sans perte d'informations et sans tronquer les contenus ni provoquer d'ascenseurs à la fois horizontal et vertical. Des cas particuliers sont admis comme - par exemple - les tableaux complexes.</p>
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
    title: "Checklist rapide",
    meta: [{
      name: 'description',
      content: "La checklist rapide pour tous les métiers et profils pour une meilleure prise en compte de l'accessibilité numérique (RGAA)."
    }],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";
 
</style>
