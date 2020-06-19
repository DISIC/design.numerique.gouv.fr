<template>

  <Layout>

    <div class="cover">
      <div class="container">

        <CoverIllustration class="home-illustration" aria-hidden="true"/>

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <p class="subtitle">Des idées et des outils à la disposition des agents publics pour améliorer l'expérience usager des services publics numériques.</p>

      </div>
    </div>

    <div class="content">

      <div class="message commandoux">

          <h2>Commando UX</h2>

          <p>
            <strong>Appel à défis en cours !</strong> Vous avez jusqu'au <strong>19 juin 2020</strong> pour soumettre le projet de l'Observatoire que vous portez et pour lequel vous souhaitez drastiquement améliorer l'expérience pour les usagers.
          </p>

          <g-link to="/commando-ux/" class="button">
            En savoir plus
            <span class='arrow'>→</span>
          </g-link>

      </div>

      <section class="item">

          <div class="description">
            <Design class="item-icon" aria-hidden="true"/>

            <h2>Design numérique</h2>

            <p>
              Le design permet de rendre les <strong>services numériques</strong>
              plus <strong>simples</strong>, <strong>accessibles</strong>
              et <strong>agréables</strong> pour tous les usagers.
            </p>

            <p class="disabled">
              Bientôt disponible !
            </p>
          </div>

          <DesignIllustration class="illustration right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="description">
          <Accessibilite class="item-icon" aria-hidden="true"/>

          <h2>Accessibilité</h2>

          <p>
            L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en <b>situation de handicap</b>.
          </p>

          <g-link to="/accessibilite-numerique/" class="button blue shadow">
            L'accessibilité en détails<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <AccessibiliteIllustration class="illustration right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="description">
          <Services class="item-icon" aria-hidden="true"/>

          <h2>Besoin d'aide ?</h2>

          <p>
            Vous avez un besoin ou des questions pour l’<b>amélioration de vos démarches</b>, nous vous accompagnons.
          </p>

          <g-link to="/services/" class="button blue shadow">
            J'ai besoin d'aide<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <ServicesIllustration class="illustration right" aria-hidden="true"/>

      </section>

      <section class="item">

        <div class="description">
          <Formations class="item-icon" aria-hidden="true"/>

          <h2>Les formations</h2>

          <p>
            De nombreuses formations sont disponibles, que ce soit pour vous former <b>personnellement</b> ou en <b>équipe</b>
          </p>

          <g-link to="/formations/" class="button blue shadow">
            Je découvre les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <FormationsIllustration class="illustration right" aria-hidden="true"/>

      </section>

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


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .cover {
    padding-bottom: 48px;

    @media only screen and (max-width: $mobile-max-width) {
      padding-bottom: 80px;
    }

    .subtitle {
      padding: 34px 20%;

      @media only screen and (max-width: $mobile-max-width) {
        padding: 0;
        max-width: 360px;
      }
    }

    .home-illustration {
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

    .description {
      display: inline-block;
      width: 64%;

      @media only screen and (max-width: $mobile-max-width) {
        width: 100%;
        text-align: center;
      }
    }

    .illustration {
      display: inline-block;
      height: 240px;

      @media only screen and (max-width: $mobile-max-width) {
        height: 160px;
        width: 100%
      }

      &.right {
        padding-left: 40px;

        @media only screen and (max-width: $mobile-max-width) {
          padding-left: 0px;
          padding-bottom: 24px;
        }
      }

      &.left {
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

    .item-icon {
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

    .button {
      display: inline-block;
      text-align: center;
      margin-top: 8px;
    }

    .disabled {
      font-weight: bold;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 0.875em;
      }
    }

    &:hover, &:focus {
      .item-icon {
        transform: rotate(180deg);
      }
    }
  }

</style>
