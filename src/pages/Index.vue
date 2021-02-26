<template>
  <Layout class="index-page">

    <div class="cover">
      <div class="cover__container">


        <h1>Concevons des services publics numériques <span class="text-highlight">accessibles</span>, <span class="text-highlight">inclusifs</span> et <span class="text-highlight">humains</span>.</h1>

        <p class="cover__subtitle">Des idées et des outils à la disposition des agents publics pour améliorer l'expérience usager des services publics numériques.</p>

        <CoverIllustration class="cover__home-illustration" focusable="false" aria-hidden="true"/>
      </div>
    </div>

    <div class="content">

      <Commando/>

      <section class="item">

          <div class="item__description">
            <Design focusable="false" class="item__icon" aria-hidden="true"/>

            <h2>Design numérique</h2>

            <p>
              Le design permet de rendre les <strong>services numériques</strong>
              plus <strong>simples</strong>, <strong>accessibles</strong>
              et <strong>agréables</strong> pour tous les usagers.
            </p>

            <p class="item__disabled-button">
              Bientôt disponible !
            </p>
          </div>

          <DesignIllustration focusable="false" class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="item__description">
          <Accessibilite focusable="false" class="item__icon" aria-hidden="true"/>

          <h2>Accessibilité</h2>

          <p>
            L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en <strong>situation de handicap</strong>.
          </p>

          <g-link to="/accessibilite-numerique/" class="button button--blue button--highlight">
            L'accessibilité en détails<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <AccessibiliteIllustration focusable="false" class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <section class="bricks">

        <div class="brick brick--left">
          <div class="brick__description">
            <Outils focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Outils</h2>

            <p>
              Nous mettons à votre disposition un ensemble d'outils pour vous guider sur les sujets du <b>design</b> et de l'<b>accessibilité</b>.
            </p>
          </div>
          <g-link to="/outils/" class="brick__link">
            J'accède aux outils<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <div class="brick brick--right">
          <div class="brick__description">
            <Formations focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Formations</h2>

            <p>
              De nombreuses formations sont disponibles, que ce soit pour vous former <strong>personnellement</strong> ou en <strong>équipe</strong>.
            </p>
          </div>
          <g-link to="/formations/" class="brick__link">
            Je découvre les formations<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <div class="brick brick--full">
          <div class="brick__description">
            <Services focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Accompagement</h2>

            <p>
              Vous avez un besoin ou des questions pour l’<strong>amélioration de vos démarches</strong>, nous sommes là pour vous accompagner !
            </p>
          </div>
          <g-link to="/accompagnement/" class="brick__link">
            J'ai besoin d'aide<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

      </section>

      <section class="actions">

        <div class="actions__title">
          <Actions focusable="false" class="actions__title-icon" aria-hidden="true"/>
          <h2>Nos actions</h2>
        </div>

        <div class="actions__list">
          <div class="action">
            <AccessibiliteIllustration focusable="false" class="action__illustration" aria-hidden="true"/>
            <a href="https://observatoire.numerique.gouv.fr/" title="L'observatoire de la qualité des démarche en ligne - Nouvelle fenêtre" target="_blank"><h3>L'observatoire de la qualité des démarche en ligne</h3></a>
          </div>

          <div class="action">
            <AccessibiliteIllustration focusable="false" class="action__illustration" aria-hidden="true"/>
            <g-link to="/commando-ux/"><h3>Le Commando UX</h3></g-link>
          </div>

          <div class="action">
            <AccessibiliteIllustration focusable="false" class="action__illustration" aria-hidden="true"/>
            <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Le guichet FranceRelance - Nouvelle fenêtre" target="_blank"><h3>Le guichet FranceRelance</h3></a>
          </div>
        </div>

      </section>

      <!-- <section class="blog">

          <div class="blog__top">
            <div>
              <Blog class="blog__icon" focusable="false" aria-hidden="true"/>
              <h2>Notre blog</h2>
            </div>

            <div class="blog__allArticlesLinkDesktop">
              <g-link to="/blog/">
                Voir toutes nos publications<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
              </g-link>
            </div>
          </div>

          <div class="articles">
            <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
              <g-image :src="node.illustration" alt=""/>
              <p class="articles__date">{{ node.publishedDate }}</p>
              <h3><g-link :to="node.path">{{ node.title }}</g-link></h3>
              <p>{{ node.description }}</p>
            </article>
          </div>

          <div class="blog__allArticlesLinkMobile">
            <g-link to="/blog/">
              Voir toutes nos publications<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section> -->

    </div>

  </Layout>
</template>


<script>

  import Commando from "~/components/alerts/Commando.vue"
  import CoverIllustration from "~/assets/images/coverIllustration.svg"
  import Design from "~/assets/images/design.svg"
  import DesignIllustration from "~/assets/images/designIllustration.svg"
  import Accessibilite from "~/assets/images/accessibilite.svg"
  import AccessibiliteIllustration from "~/assets/images/accessibiliteIllustration.svg"
  import Outils from "~/assets/images/outils.svg"
  import Services from "~/assets/images/services.svg"
  import Formations from "~/assets/images/formations.svg"
  import Blog from "~/assets/images/blog.svg"
  import Actions from "~/assets/images/actions.svg"

  export default {
    components: {
      Commando,
      CoverIllustration,
      Design,
      DesignIllustration,
      Accessibilite,
      AccessibiliteIllustration,
      Outils,
      Services,
      Formations,
      Blog,
      Actions,
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


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .index-page {

    .cover {

      @media only screen and (max-width: $mobile-max-width) {
        padding-bottom: 56px;
        margin-top: 0;
        margin-bottom: 80px;
      }

      h1 {
        line-height: 1.4;
      }

      &__subtitle {
        padding: 24px 20%;

        @media only screen and (max-width: $mobile-max-width) {
          padding: 0;
          max-width: 360px;
        }
      }

      &__home-illustration {
        position: absolute;
        width: 86vw;
        max-width: 1100px;
        left: 50%;
        bottom: -32px;
        z-index: -1;
        margin-left: -43vw;

        @media only screen and (min-width: 1280px) {
          margin-left: -550px;
        }
        @media only screen and (max-width: $mobile-max-width) {
          bottom: -200px;
        }
      }
    }

    .alert {
      margin-bottom: 80px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 64px;
      }
    }

    .actions {
      margin-bottom: 64px;

      &__title {

        h2 {
          display: inline-block;
          padding: 8px 0;
          margin: 0 0 16px 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

        &-icon {
          display: inline-block;
          transition: .2s all;
          height: 36px;
          width: 36px;
          margin-bottom: -5px;
          margin-right: 16px;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            height: 32px;
            width: 32px;
            margin-bottom: -6px;
            margin-right: 12px;
          }
        }
      }

      &__list {
        display: flex;

        .action {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 33%;
          border-radius: 32px;
          background-color: $lighter-gray;
          margin: 8px;
          padding: 16px;

          a {
            border-bottom: 0px !important;

            &:after {
              position: absolute;
              content: "";
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }

            h3 {
              display: inline-block;
              width: 100%;
              text-align: center;
              font-size: 1rem;
              margin: 8px 0 0 0;
            }
          }

          &__illustration {
            display: inline-block;
            height: 64px;
            width: 64px;
            background-color: white;
            border-radius: 50%;
            padding: 8px;
          }

          &:hover {
            box-shadow: 5px 5px 0px $light;
          }
        }
      }
    }

    .blog {

      &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: $mobile-max-width) {
          display: block;
        }
      }

      &__allArticlesLinkDesktop {
        margin-top: 8px;

        @media only screen and (max-width: $mobile-max-width) {
          display: none;
        }
      }

      &__allArticlesLinkMobile {
        display: none;

        @media only screen and (max-width: $mobile-max-width) {
          display: block;
          text-align: right;
          margin-top: -16px;
        }
      }

      h2 {
        display: inline-block;

        @media only screen and (max-width: $mobile-max-width) {
          margin-bottom: 40px;
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        height: 36px;
        width: 36px;
        margin-bottom: -5px;
        margin-right: 16px;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          height: 32px;
          width: 32px;
          margin-bottom: -6px;
          margin-right: 12px;
        }
      }

      &:hover, &:focus {
        .blog__icon {
          transform: rotate(180deg);
        }
      }
    }

    .bricks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 96px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-top: 80px;
      }

      .brick {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 1;
        flex-basis: 48%;
        margin-bottom: 24px;
        background-color: $lighter-gray;
        border-radius: 32px;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          margin-bottom: 16px;
        }

        &__description {
          display: inline-block;
          margin: 24px 24px 0 24px;
        }

        &--right {
          margin-left: 1%;
        }

        &--left {
          margin-right: 1%;
        }

        &--full {
          flex-basis: 100%;
        }

        h2 {
          display: inline-block;
          padding: 4px 0;
          margin: 0;
          font-size: 1.75em;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            font-size: 1.5em;
          }
        }

        &__link {
          margin: 4px 24px 24px 24px;
          text-align: right;
          border: none;
        }

        &__icon {
          display: inline-block;
          transition: .2s all;
          height: 28px;
          width: 28px;
          margin-bottom: -4px;
          margin-right: 12px;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            height: 32px;
            width: 32px;
            margin-bottom: -6px;
            margin-right: 12px;
          }
        }

        a {
          border-bottom: none !important;

          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &:hover {
          box-shadow: 5px 5px 0px $light;

          .brick__icon {
            transform: rotate(180deg);
          }
        }
      }
    }

    .item {
      margin-bottom: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 64px;
        flex-direction: column-reverse;
        align-items: start;
      }

      &__description {
        display: inline-block;
        width: 64%;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          text-align: center;
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        height: 36px;
        width: 36px;
        margin-bottom: -5px;
        margin-right: 16px;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          height: 32px;
          width: 32px;
          margin-bottom: -6px;
          margin-right: 12px;
        }
      }

      &__illustration {
        display: inline-block;
        height: 160px;

        @media only screen and (max-width: $mobile-max-width) {
          height: 120px;
          width: 100%
        }

        &--right {
          padding-left: 40px;

          @media only screen and (max-width: $mobile-max-width) {
            padding-left: 0px;
            padding-bottom: 24px;
          }
        }

        &--left {
          padding-right: 40px;

          @media only screen and (max-width: $mobile-max-width) {
            padding-right: 0px;
            padding-bottom: 24px;
          }
        }
      }

      h2 {
        display: inline-block;
        padding: 8px 0;
        margin: 0;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
        }
      }

      .button {
        display: inline-block;
        text-align: center;
        margin-top: 8px;
      }

      &__disabled-button {
        font-weight: bold;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 0.875em;
        }
      }

      a::after {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &:hover, &:focus {
        .item__icon {
          transform: rotate(180deg);
        }
      }
    }
  }

</style>
