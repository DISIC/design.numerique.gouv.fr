<template>
  <Layout class="services-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Accompagnement class="h1__icon" focusable="false" aria-hidden="true"/>Nos dispositifs d'accompagnement</h1>

      <p class="cover__subtitle">Vous avez des besoins en design&nbsp;? Vous vous posez des
        questions sur les sujets d'accessibilité&nbsp;? Vous souhaitez obtenir des retours,
        demander des conseils pour le développement ou l'amélioration de votre service&nbsp;?
        Nous vous aidons&nbsp;!</p>

      </div>
    </div>

    <div class="content">

      <section v-for="{ node } in $page.allAction.edges" :key="node.id" class="action">

        <div class="action__title">
          <g-image :src="node.icon" class="action__icon" focusable="false" aria-hidden="true"/>
          <h2 v-if="node.link.includes('http')"><a :href="node.link" :title="node.title + ' - Nouvelle fenêtre'" target="_blank">{{ node.title }}</a></h2>
          <h2 v-else><g-link :to="node.link">{{ node.title }}</g-link></h2>
        </div>

        <div v-html="node.content"></div>

      </section>

    </div>

  </Layout>
</template>


<page-query>

  query {
    allAction (sortBy: "rank", order: ASC) {
      edges {
        node {
          id
          title
          icon
          description
          link
          rank
          content
        }
      }
    }
  }

</page-query>


<script>

  import Accompagnement from "~/assets/images/accompagnement.svg"

  export default {
    components: {
      Accompagnement,
    },
    metaInfo: {
      title: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques",
      meta: [{
        name: 'description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:title',
        content: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:image',
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
        content: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .services-page {

    .content {

      .action {
        &__title {
          margin-bottom: 1rem;
          display: flex;

          @media only screen and (max-width: $mobile-max-width) {
            display: flex;
          }

          h2 {
            display: inline;
            padding: 0.25rem 0;
            margin: 0;

            @media only screen and (max-width: $mobile-max-width) {
              display: inline;
            }
          }

          a {
            border-bottom: none !important;
          }
        }

        &__icon {
          display: inline-block;
          height: 2.75rem;
          width: 2.75rem;
          margin-right: 1rem;
          color: $red;
          background-color: $light-gray;
          border-radius: 50%;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            height: 2.25rem;
            width: 2.25rem;
          }
        }

        h3 {
          margin-bottom: 0rem;
        }

        p {
          margin: 0.5rem 0;
        }
      }
    }
  }

</style>
