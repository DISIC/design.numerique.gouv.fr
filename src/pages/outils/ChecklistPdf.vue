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

      <h1>Checklist PDF</h1>


 <p class="fr-text--lead">Check-list pour faire un PDF accessible depuis LibreOffice ou Word</p>

<h2>Ai-je vraiment besoin d’un PDF ?</h2>
<ul>
    <li>Le format PDF est adapté lorsque l’on veut préserver la mise en page (ex. impression)</li>
    <li>Vérifier s’il est possible de proposer un format alternatif avant de produire un PDF : HTML, EPUB, format bureautique (LibreOffice, Word), …</li>
    <li>À savoir : un PDF peut être généré automatiquement à partir d’un autre format (ex. HTML). Discutez-en avec vos équipes !</li>
</ul>
<h2>Structure du document</h2>

<p>Réfléchir à la structure avant de commencer la rédaction.</p>

<h3>Titres</h3>
<ul>
    <li>Utiliser des titres hiérarchisés (“Titre 1”, “Titre 2”, “Titre 3”, …)</li>
    <li>Ne pas utiliser un style de titre simplement pour « mettre le texte plus gros »</li>
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
<h2>Contrastes et couleurs</h2>
<ul>
    <li>Utiliser des couleurs contrastées (voir critère 3.2 du RGAA) :
      <ul>
        <li>Vérification avec une pipette : Colour Contrast Analyser</li>
        <li>Recherche de couleur alternative : Tanaguru Contrast Finder</li>
      </ul>
    </li>    
    <li>Ajouter un visuel (pictogramme ou encadré par exemple) si une information n’est donnée que par la couleur (voir critère 3.1 du RGAA)</li>
</ul>
<h2>Images et alternatives textuelles</h2>
<ul>
    <li>Image informative : ajouter une alternative textuelle (parfois nommée « description »)</li>
    <li>Image décorative : à indiquer comme telle pour qu’elle soit ignorée par les aides techniques (case à cocher ou mettre une alternative textuelle “”)</li>
    <li>Image complexe (ex. un graphique) : ajouter une description détaillée sous l’image</li>
    <li>Image avec lien : indiquer la fonction ou la destination du lien</li>
</ul>
<h2>Tableaux</h2>
<ul>
  <li>Ne pas utiliser les tableaux pour la mise en forme</li>
    <li>Ajouter des en-têtes de colonnes et s’assurer qu’elles sont bien déclarées</li>
    <li>Ajouter une description du tableau dans les propriétés du tableau</li>
    <li>Éviter d’imbriquer des tableaux ou de fusionner des cellules</li>
</ul>
<h2>Signets et navigation</h2>
<ul>
    <li>Générer les signets PDF à partir des titres hiérarchisés (une case à cocher)</li>
    <li>Astuce : on peut aussi générer une table des matières basée sur les titres.</li>
</ul>
<h2>Métadonnées et propriétés du document</h2>
<ul>
    <li>Ajouter un titre de document (affiché dans la visionneuse de PDF)</li>
    <li>Définir la langue du document (bonne prononciation des synthèses vocales)</li>
    <li>Note : parfois il peut être obligatoire de renseigner l’auteur (légal)</li>
</ul>
<h2>Export en PDF</h2>
<ul>
    <li>Exporter les balises d’accessibilité (une case à cocher, parfois nommée « idéal pour la distribution électronique et l’accessibilité »)</li>
    <li>Cocher la case PDF/A (archive) peut améliorer l’accessibilité du PDF (police de caractères embarquée)</li>
</ul>
<h2>Vérifications</h2>
<ul>
    <li>Vérifier le titre, la langue et que le PDF est balisé (possible dans Adobe Acrobat Reader)</li>
    <li>Vérifier l’ordre de lecture (dans Adobe Acrobat Pro ou à l’aide d’une synthèse vocale)</li>
    <li>Vérifier l’accessibilité du PDF avec PAC (PDF Accessibility Checker) ou Adobe Acrobat Pro</li>
    <li>Tester avec un lecteur d’écran : NVDA avec Firefox sur PC Windows, VoiceOver Mac ou VoiceOver iPhone avec Safari, TalkBack sur Android</li>
</ul>
<h2>Corrections avancées</h2>
<ul>
    <li>Impossible de générer un PDF accessible directement ? Utiliser Adobe Acrobat Pro.</li>
    <li>Instructions pour corriger les problèmes relevés par PAC : Tagged PDF (anglais)</li>
    <li>Tanaguru propose une traduction française : PAC, comprendre et corriger les erreurs d’accessibilité.</li>
</ul>
<h2>Bonus : quelques ressources</h2>
<ul>
    <li>Consulter le Référentiel d’évaluation de l’accessibilité des documents au format PDF (RAPDF 1)</li>
    <li>Consulter le Référentiel Général d’Amélioration de l’Accessibilité (RGAA)</li>
    <li>Se former avec les ressources de DesignGouv et utiliser ARA pour réaliser des audits d’accessibilité</li>
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
