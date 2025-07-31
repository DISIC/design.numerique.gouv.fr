<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Checklist PDF</a>
          </li>
        </ol>
      </nav>

      <h1>Checklist : créer un PDF accessible à partir d’un traitement de texte</h1>
      <p class="fr-text--lead">Quel que soit le traitement de texte utilisé (LibreOffice ou Word), il est possible de rendre un document PDF accessible à tout le monde quel que soit le matériel ou l’aide technique utilisée.</p>
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-callout fr-callout--purple-glycine">
          <h2 class="fr-callout__title">Le format PDF est-il <em>nécessaire</em> ?</h2>
          <ul class="fr-callout__text">
            <li>Le format PDF est adapté lorsque l’on veut préserver la mise en page.</li>
            <li>Il est souvent plus pertinent de proposer un autre format que PDF : HTML, EPUB, format bureautique (LibreOffice, Word, etc.)…</li>
            <li>Un PDF peut être généré automatiquement à partir d’un autre format (HTML par exemple). Discutez-en avec vos équipes !</li>
          </ul>
        </div>
      </div>
      <p>Nous avons listé des règles générales, qui sont autant de points d’attention et de contrôle. Les évolutions de versions des outils de traitement de texte ne nous permettent pas de faire un cas par cas spécifique. </p>
      <p>Nous donnons quelques exemples - non exhaustifs - des conséquences que peuvent avoir le non-respect de ces règles, notamment pour les personnes aveugles et malvoyantes qui utilisent un lecteur d’écran sans avoir accès au contenu visuel.</p>
      <h2 class="fr-mt-2w">Styles</h2>
      <p>Dans un traitement de texte, les styles donnent un statut aux différents éléments (titre, paragraphe, liste, etc.). Ce statut est restitué par les aides techniques comme les lecteurs d’écran, contrairement à une simple mise en forme. Par exemple, une personne aveugle ou malvoyante utilisant un lecteur d’écran pourra naviguer de titre en titre comme le ferait une personne voyante qui se rend directement à la partie qui l’intéresse.</p>
      <ul>
        <li>Utiliser des titres hiérarchisés ("Titre" pour le titre principal, puis "Titre 1", "Titre 2", "Titre 3"…) de manière cohérente.</li>
        <li>Ne pas utiliser un style de titre simplement pour « mettre le texte plus gros ».</li>
        <li>Utiliser les listes à puces ou numérotées.</li>
        <li>Ne pas utiliser de symbole comme “-” (sauf si la conversion en puces se fait automatiquement).</li>
        <li>Générer une table des matières basée sur les titres. Attention : cette fonctionnalité sur Word crée des problèmes d’accessibilité dans l’export au format PDF <span aria-hidden="true">🤦</span>. S’il est nécessaire d’avoir une table des matières, il est donc préférable d’utiliser LibreOffice.</li>
      </ul>
      <h2 class="fr-mt-2w">Contenus</h2>
      <ul>
          <li>Utiliser des <a href="../diagnostic-flash/#11" >libellés de liens</a>  clairs et pertinents (les lecteurs d’écran permettent une navigation de lien en lien, en restituant leur libellé).</li>
          <li>Développer les sigles et acronymes à leur première occurrence.</li>
          <li>Utiliser les sauts de page ou de section (ne pas faire de sauts de ligne pour passer à la page suivante qui parasitent les lecteurs d’écran).</li>
          <li>Utiliser les styles de paragraphe en spécifiant des espacements avant et après le paragraphe (ne pas insérer d’espaces ou sauts de ligne pour séparer paragraphes et sections pour ne pas parasiter les lecteurs d’écran).</li>
      </ul>
      <h2 class="fr-mt-4w">Contrastes et couleurs</h2>
      <p>Les personnes aveugles, malvoyantes et daltoniennes n’ont pas accès aux informations véhiculées uniquement par la couleur. De même, des contrastes trop faibles empêchent une bonne lecture pour de nombreuses personnes.</p>
      <ul>
          <li>Utiliser des couleurs contrastées (voir le <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2" target="_blank" title="critère 3.2 du RGAA - nouvelle fenêtre" rel="noopener noreferrer">critère 3.2 du RGAA</a>) :
            <ul>
              <li>Vérification avec une pipette : <a href="https://comptoir-du-libre.org/fr/softwares/398" target="_blank" title="Colour Contrast Analyser - nouvelle fenêtre" rel="noopener noreferrer" lang="en">Colour Contrast Analyser</a>.</li>
              <li>Recherche de couleur alternative : <a href="https://contrast-finder.tanaguru.com/" target="_blank" title="Tanaguru Contrast Finder - nouvelle fenêtre" rel="noopener noreferrer" lang="en">Tanaguru Contrast Finder</a>.</li>
            </ul>
          </li>    
          <li>Ne  pas donner l’information uniquement par la couleur (voir le <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1" target="_blank" title="critère 3.1 du RGAA - nouvelle fenêtre" rel="noopener noreferrer">critère 3.1 du RGAA</a>) : ajouter du texte ou un visuel  (pictogramme ou encadré par exemple).</li>
      </ul>
      <h2 class="fr-mt-4w">Images et alternatives textuelles</h2>
      <p>Le principe est que les personnes aveugles et malvoyantes utilisant un lecteur d’écran puissent avoir accès aux informations pertinentes sans le ‘bruit’ des aspects esthétiques.</p>
      <ul>
          <li><strong>Image informative</strong> : ajouter une alternative textuelle (parfois nommée « description »).</li>
          <li><strong>Image décorative</strong> : à indiquer comme telle pour qu’elle soit ignorée par les aides techniques (case à cocher ou alternative textuelle vide).</li>
          <li><strong>Image complexe</strong> (par exemple un graphique ou un schéma) : ajouter un texte équivalent sous l’image.</li>
          <li><strong>Image lien</strong> : indiquer la fonction ou la destination du lien dans l’alternative textuelle de l’image.</li>
      </ul>
      <h2 class="fr-mt-4w">Tableaux</h2>
      <p>La bonne utilisation des tableaux est notamment importante pour que les lecteurs d’écran puissent renvoyer, à la lecture de chaque case, aux bons intitulés de colonne et de ligne (sans lesquels les informations n’ont pas de sens).</p>
      <ul>
        <li>Ne pas utiliser les tableaux pour la mise en forme.</li>
        <li>Ajouter des en-têtes de colonnes ou de lignes et s’assurer qu’elles sont bien indiquées comme telles dans les propriétés du tableau.</li>
        <li>Ajouter une description du tableau dans les propriétés du tableau.</li>
        <li>Éviter d’imbriquer des tableaux ou de fusionner des cellules.</li>
      </ul>
      <h2 class="fr-mt-4w">Métadonnées et propriétés du document</h2>
      <ul>
          <li>Ajouter un titre de document.</li>
          <li>Définir la langue du document (pour la bonne prononciation des synthèses vocales).</li>
          <li>Renseigner l’auteur.</li>
      </ul>
      <h2 class="fr-mt-4w">Export en PDF</h2>
      <ul>
          <li>Générer les signets PDF à partir des titres hiérarchisés (case à cocher au moment de l’export).</li>
          <li>Exporter les balises d’accessibilité (une case à cocher, parfois nommée « idéal pour la distribution électronique et l’accessibilité »).</li>
          <li>Cocher la case PDF/A (archive) peut améliorer l’accessibilité du PDF (police de caractères embarquée, par exemple si vous utilisez la police Marianne de l’État).</li>
      </ul>
      <h2 class="fr-mt-4w">Vérifications</h2>
      <ul>
          <li>Vérifier le titre, la langue et que le PDF est balisé (possible dans <span lang="en">Adobe Acrobat Reader</span>).</li>
          <li>Vérifier l’ordre de lecture (dans Adobe Acrobat Pro ou à l’aide d’une synthèse vocale).</li>
          <li>Vérifier l’accessibilité du PDF avec PAC (<span lang="en">PDF Accessibility Checker</span>) ou <span lang="en">Adobe Acrobat Pro</span>.</li>
          <li>Tester avec un lecteur d’écran : NVDA avec Firefox sur PC Windows, VoiceOver Mac ou VoiceOver iPhone avec Safari, TalkBack sur Android.</li>
      </ul>
      <h2 class="fr-mt-4w">Corrections avancées</h2>
      <ul>
          <li>Impossible d’exporter un PDF qui passe 100% des tests de PAC directement ? Utiliser Adobe Acrobat Pro pour corriger les dernières erreurs.</li>
          <li>Instructions pour corriger les problèmes relevés par PAC : <a href="https://taggedpdf.com/" target="_blank" title="Tagged PDF (en anglais) - nouvelle fenêtre" rel="noopener noreferrer"><span lang="en">Tagged PDF</span></a> (anglais).</li>
          <li>Tanaguru propose une traduction française d’une grande partie du contenu présent sur Tagged PDF : <a href="https://www.tanaguru.com/pac-comprendre-et-corriger-les-erreurs-daccessibilite/" target="_blank" title="PAC, comprendre et corriger les erreurs d’accessibilité - nouvelle fenêtre" rel="noopener noreferrer">PAC, comprendre et corriger les erreurs d’accessibilité</a>.</li>
      </ul>
      <hr>
      <p>L’État du Luxembourg est l’auteur d’un <a href="https://accessibilite.public.lu/fr/rapdf1/index.html" target="_blank" title="Référentiel d’évaluation de l’accessibilité des documents au format PDF - nouvelle fenêtre" rel="noopener noreferrer">Référentiel d’évaluation de l’accessibilité des documents au format PDF</a> qui permet un audit complet.</p>
      <p>La communauté beta.gouv propose également le guide <a href="https://doc.incubateur.net/communaute/travailler-chez-beta.gouv.fr/se-former/se-former-en-ligne/formation-a-laccessibilite/pdf-et-accessibilite" target="_blank" title="PDF et accessibilité - nouvelle fenêtre" rel="noopener noreferrer">PDF et accessibilité</a>.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Checklist pour faire un PDF accessible",
    meta: [{
      name: 'description',
      content: "La checklist pour faire des documents pdf accessibles à partir d’un traitement de texte."
    },
    {
      property: 'og:title',
      content: "Checklist pour faire un PDF accessible - DesignGouv"
    },
    {
      property: 'og:description',
      content: "La checklist pour faire des documents pdf accessibles à partir d’un traitement de texte."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>
