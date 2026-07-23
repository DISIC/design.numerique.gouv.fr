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
            <a class="fr-breadcrumb__link" aria-current="page">Chartability</a>
          </li>
        </ol>
      </nav>

      <h1>Chartability</h1>
      <p class="fr-text--lead">
        Chartability permet d'<b
          >évaluer l'accessibilité de datavisualisations</b
        >. L'outil propose des heuristiques vérifiables, pour aider les
        designers et les développeurs à évaluer et à améliorer l'inclusivité des
        visualisations de données et des interfaces fondées sur des données.
      </p>

      <h2>À propos</h2>

      <p>
        <b>Chartability</b> est conçu pour repérer les lacunes en matière
        d'accessibilité dans la conception de datavisualisations et
        cartographies. Chaque heuristique est formulée à la négative : ce sont
        des barrières à éviter.
      </p>

      <p>
        Ces heuristiques s'organisent en sept catégories, dont quatre reposent
        sur des
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/fr"
          >principes généraux d'accessibilité</a
        >
        : perceptible, utilisable, compréhensible et robuste. Les trois
        dernières catégories étendent le principe de robustesse : accomodant (<i
          ><span lang="en">compromising</span></i
        >
        en anglais), aidant (<i><span lang="en">assistive</span></i> en anglais)
        et flexible.
      </p>

      <div class="fr-callout fr-mt-4w">
        <p class="fr-callout__text fr-text--sm">
          Cette page est une traduction libre du travail de Frank Elavsky, sur
          <a href="https://chartability.github.io/POUR-CAF/" lang="en"
            >Chartability</a
          >. Ce travail de traduction est sous licence
          <a href="https://creativecommons.org/licenses/by-sa/3.0/" lang="en"
            >CC-BY-SA (Creative Commons Attribution-ShareAlike 3.0 Unported)</a
          >, comme l'outil original.
        </p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
</page-query>

<script>
export default {
  metaInfo: {
    title: "Chartability en français",
    meta: [
      {
        name: "description",
        content: "TODO Desc",
      },
      {
        property: "og:title",
        content: "TODO - DesignGouv",
      },
      {
        property: "og:description",
        content: "TODO Desc",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>

<style lang="scss" scoped></style>
