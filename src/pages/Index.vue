<template>

  <Layout>

    <div class="cover">
      <div class="container">

        <CoverIllustration class="illustration" aria-hidden="true"/>

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <p class="subtitle"><b>DesignGouv</b> rassemble les agents publics soucieux de la qualité des services numériques et met à disposition des outils pour leur amélioration.</p>

      </div>
    </div>

    <div class="content">

      <div class="message covid">

          <strong>COVID-19</strong>

          <p>Retrouvez les attestations de déplacements accessibles et inclusives ainsi qu'une liste d'initiatives pour s'impliquer et aider dans différents domaines.</p>

          <g-link to="/covid-19" class="button">
            Accéder aux documents et aux initiatives&nbsp;<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>

      </div>

      <section class="item">

          <div class="description">
            <Design class="item-icon" aria-hidden="true"/>

            <h2>Design numérique</h2>

            <p>
              Le design permet de rendre les <b>services numériques</b> plus <b>simples</b>, <b>accessibles</b>
              et <b>agréables</b> pour tous les usagers.
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

          <h2>Accessibilité numérique</h2>

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
    padding-top: 8px;
    padding-bottom: 48px;

    .subtitle {
      padding: 3% 20%;
    }

    .illustration {
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
    }
  }

  .covid {
    margin-bottom: 120px;

    @media only screen and (max-width: $mobileMaxWidth) {
      margin-bottom: 64px;
    }
  }

  .item {
    margin-bottom: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {
      display: inline-block;
      width: 64%;
    }

    .illustration {
      display: inline-block;
      height: 240px;

      &.right {
        padding-left: 40px;
      }

      &.left {
        padding-right: 40px;
      }
    }

    h2 {
      display: inline-block;
      padding: 8px 0;
      margin: 0;
    }

    .item-icon {
      display: inline-block;
      transition: .2s all;
      height: 36px;
      width: 36px;
      margin-bottom: -5px;
      margin-right: 16px;
    }

    .button {
      display: inline-block;
      text-align: center;
      margin-top: 8px;
    }

    .disabled {
      font-weight: bold;

      @media only screen and (max-width: $mobileMaxWidth) {
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
