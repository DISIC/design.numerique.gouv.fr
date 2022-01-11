<template>
  <Layout>

    <section class="dg-cover">
      <div class="dg-cover__inner">
        <div class="dg-cover__container dg-cover__container--lg fr-mt-6w">
          <h1 class="fr-display-sm dg-text-center">Concevons des services publics numériques <strong>accessibles</strong>, <strong>inclusifs</strong> et <strong>humains</strong>.</h1>
          <p class="dg-content dg-text-center fr-px-2w fr-text--lead fr-mb-5w">Les services publics numériques sont encore trop souvent conçus sans prendre en compte l’audience qu’ils servent. Nous mettons à la disposition des administrations des idées et outils pour améliorer l’expérience usager de leurs services.</p>
          <Message/>
        </div>
      </div>
    </section>

    <section class="dg-content dg-content--lg">
      <section class="dg-block dg-content dg-content--lg fr-mt-8w fr-px-2w fr-py-6w">
        <div class="dg-content fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <h2 class="fr-tile__title">
                  <g-link class="fr-tile__link fr-text--lg" to="/design-numerique/">Le design</g-link>
                </h2>
                <p class="fr-tile__desc">Rendre les services numériques plus <strong>simples</strong>, <strong>accessibles</strong> et <strong>agréables</strong> pour les usagers.</p>
              </div>
              <div class="fr-tile__img dg-picto">
                <img svg-inline src="../assets/images/design-picto.svg" class="fr-responsive-img" aria-hidden="true">
              </div>
            </div>
          </div>
          <div class="fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <h2 class="fr-tile__title">
                  <g-link class="fr-tile__link fr-text--lg" to="/accessibilite-numerique/">L'accessibilité</g-link>
                </h2>
                <p class="fr-tile__desc">Rendre les services en ligne accessibles aux personnes en <strong>situation de handicap</strong>. </p>
              </div>
              <div class="fr-tile__img dg-picto">
                <img svg-inline src="../assets/images/accessibilite-picto.svg" class="fr-responsive-img" aria-hidden="true">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-content fr-mt-8w fr-px-2w">
        <div class="dg-section-with-link">
          <h2 class="dg-section-with-link_title">Nos offres</h2>
          <g-link class="dg-section-with-link__link fr-link fr-link--lg fr-fi-arrow-right-line fr-link--icon-right" to="/accompagnement/">Voir toutes nos offres</g-link>
          <div class="dg-section-with-link__blocks fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-sm-6">
              <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                <div class="fr-tile__body">
                  <h2 class="fr-tile__title">
                    <g-link class="fr-tile__link fr-text--lg" to="/accompagnement/">Les experts</g-link>
                  </h2>
                  <p class="fr-tile__desc">Nos experts pour vous aider au quotidien 🌟</p>
                </div>
                <div class="fr-tile__img">
                  <img svg-inline src="../assets/images/experts.svg" class="fr-responsive-img" aria-hidden="true">
                </div>
              </div>
            </div>
            <div class="fr-col-sm-6">
              <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                <div class="fr-tile__body">
                  <h2 class="fr-tile__title">
                    <g-link class="fr-tile__link fr-text--lg" to="/commando-ux/">Le Commando UX</g-link>
                  </h2>
                  <p class="fr-tile__desc">Des designers déployés au sein de votre équipe 👍 </p>
                </div>
                <div class="fr-tile__img">
                  <img svg-inline src="../assets/images/commando.svg" class="fr-responsive-img" aria-hidden="true">
                </div>
              </div>
            </div>
            <div class="fr-col-sm-6">
              <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                <div class="fr-tile__body">
                  <h2 class="fr-tile__title">
                    <a class="fr-tile__link fr-text--lg" href="https://observatoire.numerique.gouv.fr/Aide/Donner%20son%20avis" title="Je donne mon avis - Nouvel onglet" target="_blank">Je donne mon avis</a>
                  </h2>
                  <p class="fr-tile__desc">Le bouton pour mesurer la satisfaction de vos usagers 💬  </p>
                </div>
                <div class="fr-tile__img">
                  <img svg-inline src="../assets/images/jdma.svg" class="fr-responsive-img" aria-hidden="true">
                </div>
              </div>
            </div>
            <div class="fr-col-sm-6">
              <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                <div class="fr-tile__body">
                  <h2 class="fr-tile__title">
                    <a class="fr-tile__link fr-text--lg" href="https://observatoire.numerique.gouv.fr/" title="L'observatoire - Nouvel onglet" target="_blank">L'Observatoire</a>
                  </h2>
                  <p class="fr-tile__desc">Les 250 démarches les plus utilisées passées à la loupe 🔎 </p>
                </div>
                <div class="fr-tile__img">
                  <img svg-inline src="../assets/images/observatoire.svg" class="fr-responsive-img" aria-hidden="true">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-block dg-content dg-content--lg fr-mt-8w fr-px-2w fr-py-6w">
        <div class="dg-content fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <h2 class="fr-tile__title">
                  <g-link class="fr-tile__link fr-text--lg" to="/outils/">Outils</g-link>
                </h2>
                <p class="fr-tile__desc">Nous mettons à votre disposition un ensemble d’outils pour vous guider sur les sujets du <strong>design</strong> et de l’<strong>accessibilité</strong>.</p>
              </div>
              <div class="fr-tile__img dg-picto">
                <img svg-inline src="../assets/images/outils-picto.svg" class="fr-responsive-img" aria-hidden="true">
              </div>
            </div>
          </div>
          <div class="fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <h2 class="fr-tile__title">
                  <g-link class="fr-tile__link fr-text--lg" to="/formations/">Formations</g-link>
                </h2>
                <p class="fr-tile__desc">De nombreuses formations sont disponibles, que ce soit pour vous former <strong>personnellement</strong> ou en <strong>équipe</strong>. </p>
              </div>
              <div class="fr-tile__img dg-picto">
                <img svg-inline src="../assets/images/formation-picto.svg" class="fr-responsive-img" aria-hidden="true">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-content fr-mt-8w fr-px-2w">
        <div class="dg-section-with-link">
          <h2 class="dg-section-with-link_title">Nos articles</h2>
          <g-link class="dg-section-with-link__link fr-link fr-link--lg fr-fi-arrow-right-line fr-link--icon-right" to="/articles/">Voir tous nos articles</g-link>
          <div class="dg-section-with-link__blocks fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-sm-6" v-for="{ node } in $page.allArticle.edges" :key="node.id">
              <div class="fr-card fr-enlarge-link" >
                <div class="fr-card__body">
                    <h2 class="fr-card__title">
                      <g-link :to="node.path" class="fr-card__link">{{ node.title }}</g-link>
                    </h2>
                    <p class="fr-card__desc">{{ node.description }}.</p>
                    <p class="fr-card__detail">{{ node.publishedDate }}</p>
                </div>
                <div class="fr-card__img">
                    <g-image :src="node.illustration" class="fr-responsive-img" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-content fr-mt-8w fr-px-2w">
        <h2>Notre équipe</h2>
        <div class="dg-team">
          <g-image class="dg-team__image" src="~/assets/images/team-photos/equipe-designgouv.jpg" alt="L’équipe DesignGouv sourire aux lèvres"/>
          <div class="dg-team__description">
            <p>DesignGouv c’est avant tout une équipe, <strong>le pôle Design des services numériques</strong>, diverse et heureuse de contribuer aux côtés des administrations à l’amélioration du quotidien des Français et des Françaises ☀️.</p>
            <g-link to="/equipe/" class="fr-link fr-fi-arrow-right-line fr-link--icon-right">Découvrir l’équipe et notre mission</g-link>
          </div>
        </div>
      </section>
    </section>

  </Layout>
</template>


<script>
  import Message from "~/components/Message.vue"

  export default {
    components: {
      Message,
    },
    metaInfo: {
      title: "DesignGouv - Le design numérique au service des administrations",
      meta: [{
        name: "description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        property: "og:title",
        content: "DesignGouv - Le design numérique au service des administrations"
      },
      {
        property: "og:description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv"
      },
      {
        name: "twitter:title",
        content: "DesignGouv - Le design numérique au service des administrations"
      },
      {
        name: "twitter:description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      },
      {
        name: "google-site-verification",
        content: "3lr6jhip11QgAYBjIlgBMRAi7CfsjE8mQygaLbZo68A"
      }],
    }
  }

</script>


<page-query>
  query {
    allArticle (limit: 2, sortBy: "publishedDate", order: DESC) {
      edges {
        node {
        	id
          title
          publishedDate (format: "D MMMM YYYY", locale : "fr")
          illustration
          description
          path
        }
      }
    }
  }
</page-query>


<style lang="scss" scoped>

  .dg-team {
    display: flex;
    align-items: flex-start;

    &__image {
      max-width: 260px;
      margin-right: 1rem;
    }

    &__description > p {
      padding-left: 0.75rem;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: $md-point) {
      flex-wrap: wrap;

      &__image {
        padding-left: 0.75rem;
      }

      &__description {
        margin-top: 1rem;
      }
    }
  }
</style>
