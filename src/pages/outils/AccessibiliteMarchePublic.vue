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
            <span aria-current="page">L’accessibilité numérique dans les marchés publics</span>
          </li>
        </ol>
      </nav>

      <h1>L’accessibilité numérique dans les marchés publics</h1>
      <p class="fr-text--lead">L’accessibilité dans les projets numériques dépend de sa bonne prise en compte dans la rédaction des marchés publics et dans les offres des répondants. Les exigences de l’administration doivent être explicites ; les offres doivent y répondre et inclure les compétences des équipes et l’organisation prévue.</p>

      <h2>Explicitation des exigences</h2>
      <ul class="fr-mb-3w">
        <li>Prévoir un critère spécifique pour l’accessibilité numérique dans la grille d’analyse des offres, au poids d’environ 10 %.</li>
        <li>Préciser tant le référentiel officiel qui sera utilisé (RGAA pour les sites, norme européenne EN 301 549 pour les applications mobiles, etc.) que sa version en vigueur à la date de publication du marché : RGAA v4, EN 301 549 v3.2.1, etc. Une référence au guide officiel d’accessibilité de la ou les plateformes mobiles concernées (iOS, Android, etc.) pourra être fournie.</li>
        <li>Expliciter l’engagement du répondant et donc du titulaire à réaliser un site accessible, avec engagement explicite à corriger gratuitement durant la période de garantie corrective les défauts d’accessibilité signalés.</li>
        <li>Exiger la méthodologie envisagée pour le respect de l’accessibilité puisqu’elle ne peut être imposée (obligation générale de résultats et non de moyens).</li>
      </ul>

      <p>Lors de l’étude des offres :</p>
      <ul class="fr-mb-3w">
        <li>Vérifier que, dans le descriptif des offres, l’accessibilité soit intégrée tout au long du projet (et non une étape finale d’audit, ou un sprint spécifique en mode agile). Cela doit couvrir toutes les étapes couvertes par le marché : rédaction de spécifications, recherche utilisateur, maquettes et prototypes, développement, rédaction de documentation utilisateur et médias associés (vidéos, animations de démonstration, etc.), tests et ainsi de suite. Une facturation séparée de l’accessibilité dans une offre sera donc un point négatif pour cette dernière (sauf dans le cas du développement d’un composant très spécifique, dont l’accessibilité pourrait être complexe à réaliser et qui serait déléguée).</li>
        <li>Vérifier que, dans le cas d’utilisation de briques logicielles sur étagère (CMS…), le répondant fournit le niveau initial d’accessibilité de celles-ci, les remédiations éventuelles qu’il envisage et le niveau atteint après application de celles-ci.</li>
        <li>Vérifier que les solutions logicielles permettant de la production de contenu garantissent la faculté de production d’un contenu accessible par un contributeur formé, même en situation de handicap, dans la mesure de ses capacités</li>
      </ul>

      <h2>Compétence et organisation</h2>
      <p>Concernant les compétences et l’organisation des répondants, il convient de demander et de contrôler les points suivants :</p>
      <ul class="fr-mb-3w">
        <li>Les références fournies de sites publics sont récentes et réalisées par l’équipe et non par l’entreprise, surtout si cette dernière est de taille importante. L’administration pourra analyser leurs déclarations d’accessibilité et pourra prendre contact avec l’administration cliente.</li>
        <li>Les compétences individuelles des membres de l’équipe garantissent la couverture complète des besoins en accessibilité.</li>
        <li>Les offres indiquant que les tests d’accessibilité seront réalisés par le titulaire voire que la déclaration d’accessibilité sera fournie sont à privilégier. Le recours à un cabinet extérieur spécialisé est une garantie d’indépendance.</li>
        <li>Si plusieurs entreprises interviennent, les périmètres et responsabilités de chacune du point de vue de l’accessibilité doivent être clarifiés. Si un consortium intervient, celui-ci devra avoir précisé ces points dans son offre.</li>
      </ul>

    </div>
  </Layout>
</template>


<script>


export default {

  metaInfo: {
    title: "L’accessibilité numérique dans les marchés publics",
    meta: [{
      name: 'description',
      content: "Les points important dans la rédaction des marchés et l'analyse des offres."
    },
    {
      property: 'og:title',
      content: "L’accessibilité numérique dans les marchés publics - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Les points important dans la rédaction des marchés et l'analyse des offres."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>
