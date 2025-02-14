<template>
  <Layout>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Recrutement</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../assets/images/recrutement-picto.svg"
            aria-hidden="true"
          />Recrutement
        </h1>
        <p class="fr-text--lead">Aucun poste ouvert pour le moment.</p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <!-- <div class="fr-mb-6w">
        <p class="dg-inline-block fr-mr-1w fr-mt-1v">Filtrer par catégorie :</p>
        <div class="dg-inline-block ">
          <ul class="fr-tags-group">
            <li v-for="tag in tagList.sort((a, b) => (a > b))" :key="tag">
              <button class="fr-tag" :id="tag" aria-pressed="false" @click="changeTypes($event)">{{ tag }}</button>
            </li>
          </ul>
        </div>
      </div> -->

      <h2 class="fr-h6">
        Vous êtes disponible pour des missions au sein de l'administration ?
      </h2>
      <p>
        Nous pouvons vous aider à intervenir au profit des administrations, dans
        le cadre de l’amélioration de la qualité de leurs démarches en ligne.
      </p>
      <g-link
        to="/recrutement/partager-interet/"
        class="fr-btn fr-btn--icon-right fr-icon-arrow-right-line"
        >Partager votre intérêt</g-link
      >
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Recrutement",
    meta: [
      {
        name: "description",
        content:
          "Améliorons ensemble la qualité des services publics numériques.",
      },
      {
        property: "og:title",
        content: "Recrutement - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Améliorons ensemble la qualité des services publics numériques.",
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
