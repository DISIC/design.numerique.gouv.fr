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

      <h1>Checklist pour faire un PDF accessible</h1>
      <p class="fr-text--lead">Il arrive que l’on ne puisse pas se passer d’un document au format pdf.<br>Quelque soit le traitement de texte utilisé (LibreOffice ou Word), il est possible de rendre ce type de document accessible à tout le monde.</p>
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-callout fr-callout--purple-glycine fr-mt-4w">
          <h2 class="fr-callout__title">Ai-je vraiment besoin d’un PDF ?</h2>
          <ul class="fr-callout__text">
            <li>Le format PDF est adapté lorsque l’on veut préserver la mise en page (ex. impression)</li>
            <li>Vérifier s’il est possible de proposer un format alternatif avant de produire un PDF : HTML, EPUB, format bureautique (LibreOffice, Word )…</li>
            <li>Un PDF peut être généré automatiquement à partir d’un autre format (ex. HTML). Discutez-en avec vos équipes !</li>
          </ul>
        </div>
      </div>
      <p>Voici quelques règles à suivre :</p>
      <h2 class="fr-mt-4w">Structure du document</h2>
      <p>Réfléchir à la structure avant de commencer la rédaction.</p>
      <h3>Titres</h3>
      <ul>
          <li>Utiliser des titres hiérarchisés (“Titre 1”, “Titre 2”, “Titre 3” …)</li>
          <li>Ne pas utiliser un style de titre simplement pour « mettre le texte plus gros »</li>
      </ul>
      <h3>Styles</h3>
      <ul>
        <li> Utiliser les styles pour la mise en forme (paragraphe, caractère, lié, liste, tableau)</li>
          <li>Un passage de texte dans une autre langue ? Il faut utiliser un style en spécifiant cette langue</li>
      </ul>
      <h3>Listes</h3>
      <ul>
          <li>Utiliser les listes à puces ou numérotées</li>
          <li>Ne pas utiliser de symbole comme “-” (sauf si automatiquement converti en puce)</li>
      </ul>
      <h3>Espacements</h3>
      <ul>
          <li>Utiliser les sauts de page ou de section.</li>
          <li>Utiliser les styles de paragraphe en spécifiant des espacements avant et après le paragraphe</li>
          <li>Ne pas insérer d’espaces ou sauts de ligne pour séparer paragraphes et sections</li>
      </ul>
      <h2 class="fr-mt-4w">Contrastes et couleurs</h2>
      <ul>
          <li>Utiliser des couleurs contrastées (voir <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2" target="_blank" title="critère 3.2 du RGAA - nouvelle fenêtre" rel="noopener noreferrer">critère 3.2 du RGAA</a>) :
            <ul>https://comptoir-du-libre.org/fr/softwares/398
              <li>Vérification avec une pipette : <a href="https://comptoir-du-libre.org/fr/softwares/398" target="_blank" title="Colour Contrast Analyser - nouvelle fenêtre" rel="noopener noreferrer" lang="en">Colour Contrast Analyser</a></li>
              <li>Recherche de couleur alternative : <a href="https://contrast-finder.tanaguru.com/" target="_blank" title="Tanaguru Contrast Finder - nouvelle fenêtre" rel="noopener noreferrer" lang="en">Tanaguru Contrast Finder</a></li>
            </ul>
          </li>    
          <li>Ajouter un visuel (pictogramme ou encadré par exemple) si une information n’est donnée que par la couleur (voir <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1" target="_blank" title="critère 3.1 du RGAA - nouvelle fenêtre" rel="noopener noreferrer">critère 3.1 du RGAA</a>)</li>
      </ul>
      <h2 class="fr-mt-4w">Images et alternatives textuelles</h2>
      <ul>
          <li><strong>Image informative</strong> : ajouter une alternative textuelle (parfois nommée « description »)</li>
          <li><strong>Image décorative</strong> : à indiquer comme telle pour qu’elle soit ignorée par les aides techniques (case à cocher ou mettre une alternative textuelle vide)</li>
          <li><strong>Image complexe</strong> (ex. un graphique) : ajouter une description détaillée sous l’image</li>
          <li><strong>Image lien</strong> : indiquer la fonction ou la destination du lien</li>
      </ul>
      <h2 class="fr-mt-4w">Tableaux</h2>
      <ul>
        <li>Ne pas utiliser les tableaux pour la mise en forme</li>
          <li>Ajouter des en-têtes de colonnes et s’assurer qu’elles sont bien déclarées</li>
          <li>Ajouter une description du tableau dans les propriétés du tableau</li>
          <li>Éviter d’imbriquer des tableaux ou de fusionner des cellules</li>
      </ul>
      <h2 class="fr-mt-4w">Signets et navigation</h2>
      <ul>
          <li>Générer les signets PDF à partir des titres hiérarchisés (une case à cocher)</li>
          <li>Générer une table des matières basée sur les titres</li>
      </ul>
      <h2 class="fr-mt-4w">Métadonnées et propriétés du document</h2>
      <ul>
          <li>Ajouter un titre de document (affiché dans la visionneuse de PDF)</li>
          <li>Définir la langue du document (bonne prononciation des synthèses vocales)</li>
          <li>Il peut être obligatoire de renseigner l’auteur</li>
      </ul>
      <h2 class="fr-mt-4w">Export en PDF</h2>
      <ul>
          <li>Exporter les balises d’accessibilité (une case à cocher, parfois nommée « idéal pour la distribution électronique et l’accessibilité »)</li>
          <li>Cocher la case PDF/A (archive) peut améliorer l’accessibilité du PDF (police de caractères embarquée)</li>
      </ul>
      <h2 class="fr-mt-4w">Vérifications</h2>
      <ul>
          <li>Vérifier le titre, la langue et que le PDF est balisé (possible dans <span lang="en">Adobe Acrobat Reader</span>)</li>
          <li>Vérifier l’ordre de lecture (dans Adobe Acrobat Pro ou à l’aide d’une synthèse vocale)</li>
          <li>Vérifier l’accessibilité du PDF avec PAC (<span lang="en">PDF Accessibility Checker</span>) ou <span lang="en">Adobe Acrobat Pro</span></li>
          <li>Tester avec un lecteur d’écran : NVDA avec Firefox sur PC Windows, VoiceOver Mac ou VoiceOver iPhone avec Safari, TalkBack sur Android</li>
      </ul>
      <h2 class="fr-mt-4w">Corrections avancées</h2>
      <ul>
          <li>Impossible de générer un PDF accessible directement ? Utiliser Adobe Acrobat Pro</li>
          <li>Instructions pour corriger les problèmes relevés par PAC : <span lang="en">Tagged PDF</span> (anglais)</li>
          <li>Tanaguru propose une traduction française : PAC, comprendre et corriger les erreurs d’accessibilité</li>
      </ul>
      <h2 class="fr-mt-6w"><span class="fr-badge fr-badge--purple-glycine">Bonus</span> Quelques ressources</h2>
      <ul>
          <li>Consulter le <a href="https://accessibilite.numerique.gouv.fr" target="_blank" title="Référentiel Général d’Amélioration de l’Accessibilité - nouvelle fenêtre" rel="noopener noreferrer">Référentiel Général d’Amélioration de l’Accessibilité</a> (RGAA)</li>
          <li>Consulter le <a href="https://accessibilite.public.lu/fr/rapdf1/index.html" target="_blank" title="Référentiel d’évaluation de l’accessibilité des documents au format PDF - nouvelle fenêtre" rel="noopener noreferrer">Référentiel d’évaluation de l’accessibilité des documents au format PDF</a> produit par l’État du Luxembourg</li>
          <li>Se former avec les <a href="/outils/">ressources de DesignGouv</a></li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Checklist pdf",
    meta: [{
      name: 'description',
      content: "La checklist pour faire des documents pdf accessibles"
    },
    {
      property: 'og:title',
      content: "Checklist pdf - DesignGouv"
    },
    {
      property: 'og:description',
      content: "La checklist pour faire des documents pdf accessibles."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>
