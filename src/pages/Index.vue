<template>

  <Layout>

    <div class="cover">
      <div class="cover__container">

        <CoverIllustration class="cover__home-illustration" aria-hidden="true"/>

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <p class="cover__subtitle">Des idées et des outils à la disposition des agents publics pour améliorer l'expérience usager des services publics numériques.</p>

      </div>
    </div>

    <div class="content">

      <div class="message commandoux">

          <h2>Commando UX</h2>

          <p>
            Designers et développeurs ont 4 mois pour améliorer l'expérience de 10 des 250&nbsp;services publics numériques les plus utilisés par les Français.
          </p>

          <g-link to="/commando-ux/" class="button">
            Suivre leur travail<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>

      </div>

      <section class="item">

          <div class="item__description">
            <Design class="item__icon" aria-hidden="true"/>

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

          <DesignIllustration class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="item__description">
          <Accessibilite class="item__icon" aria-hidden="true"/>

          <h2>Accessibilité</h2>

          <p>
            L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en <b>situation de handicap</b>.
          </p>

          <g-link to="/accessibilite-numerique/" class="button button--blue button--highlight">
            L'accessibilité en détails<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <AccessibiliteIllustration class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="item__description">
          <Services class="item__icon" aria-hidden="true"/>

          <h2>Besoin d'aide ?</h2>

          <p>
            Vous avez un besoin ou des questions pour l’<b>amélioration de vos démarches</b>, nous vous accompagnons.
          </p>

          <g-link to="/services/" class="button button--blue button--highlight">
            J'ai besoin d'aide<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <ServicesIllustration class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="item__description">
          <Formations class="item__icon" aria-hidden="true"/>

          <h2>Les formations</h2>

          <p>
            De nombreuses formations sont disponibles, que ce soit pour vous former <b>personnellement</b> ou en <b>équipe</b>
          </p>

          <g-link to="/formations/" class="button button--blue button--highlight">
            Je découvre les formations<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <FormationsIllustration class="item__illustration item__illustration--right" aria-hidden="true"/>

      </section>

      <!-- <section class="blog">

          <div class="blog__top">
            <div>
              <Blog class="blog__icon" aria-hidden="true"/>
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
              <g-image :src="node.illustration" aria-hidden="true"/>
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

  import CoverIllustration from "~/assets/images/coverIllustration.svg"
  import Design from "~/assets/images/design.svg"
  import DesignIllustration from "~/assets/images/designIllustration.svg"
  import Accessibilite from "~/assets/images/accessibilite.svg"
  import AccessibiliteIllustration from "~/assets/images/accessibiliteIllustration.svg"
  import Services from "~/assets/images/services.svg"
  import ServicesIllustration from "~/assets/images/servicesIllustration.svg"
  import Formations from "~/assets/images/formations.svg"
  import FormationsIllustration from "~/assets/images/formationsIllustration.svg"
  import Blog from "~/assets/images/blog.svg"

  export default {
    components: {
      CoverIllustration,
      Design,
      DesignIllustration,
      Accessibilite,
      AccessibiliteIllustration,
      Services,
      ServicesIllustration,
      Formations,
      FormationsIllustration,
      Blog,
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
        content: "https://designgouv.fr/designGouv.png"
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
        content: "https://designgouv.fr/designGouv.png"
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


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";
  @import "src/assets/scss/_articles.scss";

  .cover {
    padding-bottom: 48px;

    @media only screen and (max-width: $mobile-max-width) {
      padding-bottom: 80px;
    }

    h1 {
      line-height: 1.4;
    }

    &__subtitle {
      padding: 34px 20%;

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
      bottom: 0;
      z-index: -1;
      margin-left: -43vw;

      @media only screen and (min-width: 1280px) {
        margin-left: -550px;
      }

      @media only screen and (max-width: $mobile-max-width) {
        padding: 0;
      }
    }
  }

  .commandoux {
    margin-bottom: 120px;

    @media only screen and (max-width: $mobile-max-width) {
      margin-bottom: 96px;
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

  .item {
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: $mobile-max-width) {
      margin-bottom: 96px;
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
      height: 240px;

      @media only screen and (max-width: $mobile-max-width) {
        height: 160px;
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

    &:hover, &:focus {
      .item__icon {
        transform: rotate(180deg);
      }
    }
  }

</style>
