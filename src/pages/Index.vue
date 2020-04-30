<template>

  <Layout>

    <div class="cover">
      <div class="container">

        <CoverIllustration class="illustration" title="Illustration"/>

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <!-- <g-image alt="Icone design" src="~/assets/images/design.svg"/>
        <g-image alt="Icone accesibilité" src="~/assets/images/accessibilite.svg"/>
        <g-image alt="Icone services" src="~/assets/images/services.svg"/>
        <g-image alt="Icone formations" src="~/assets/images/formations.svg"/> -->

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
        <!-- <g-link to="/design/"> -->
          <div class="description">
            <Design class="item-icon" title="Icon design"/>

            <h2>Design numérique</h2>

            <p>
              Le design permet de rendre les <b>services numériques</b> plus <b>simples</b>, <b>accessibles</b>
              et <b>agréables</b> pour tous les usagers.
            </p>

            <p class="disabled">
              Bientôt disponible !
            </p>
          </div>

          <DesignIllustration class="illustration right" title="Icon design"/>

        <!-- </g-link> -->
      </section>

      <section class="item">

        <AccessibiliteIllustration class="illustration left" title="Illustration accessibilité"/>

        <div class="description">
          <g-link to="/accessibilite-numerique/">
            <Accessibilite class="item-icon" title="Icon accessibilité"/>

            <h2>Accessibilité numérique</h2>

            <p>
              L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en <b>situation de handicap</b>.
            </p>

            <p class="button blue shadow">
              L'accessibilité en détails<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </p>
          </g-link>
        </div>

      </section>

      <section class="item">

        <div class="description">
          <g-link to="/services/">
            <Services class="item-icon" title="Icon services"/>

            <h2>Besoin d'aide ?</h2>

            <p>
              Vous avez un besoin ou des questions pour l’<b>amélioration de vos démarches</b>, nous vous accompagnons.
            </p>

            <p class="button blue shadow">
              J'ai besoin d'aide<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </p>
          </g-link>
        </div>

        <ServicesIllustration class="illustration right" title="Illustration services"/>

      </section>

      <section class="item">

        <FormationsIllustration class="illustration left" title="Illsutration formations"/>

        <div class="description">
          <g-link to="/formations/">
            <Formations class="item-icon" title="Icon formations"/>

            <h2>Les formations</h2>

            <p>
              De nombreuses formations sont disponibles, que ce soit pour vous former <b>personnellement</b> ou en <b>équipe</b>
            </p>

            <p class="button blue shadow">
              Je découvre les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </p>
          </g-link>
        </div>

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
    padding-top: 0px;
    padding-bottom: 5%;

    .container {
      width: 72vw;
      max-width: 1200px;
    }

    h1 {
      font-size: 4.4vw;
      @media only screen and (min-width: 1666px) {
        font-size: 4.5em;
      }
      margin-top: 0px;
      padding-top: 5%;
    }

    .subtitle {
      font-size: 1.6vw;
      @media only screen and (min-width: 1666px) {
        font-size: 1.6em;
      }
      padding: 3% 20%;
    }

    .illustration {
      position: absolute;
      width: 86vw;
      max-width: 1400px;
      margin-left: -43vw;
      @media only screen and (min-width: 1466px) {
        margin-left: -700px;
      }
      left: 50%;
      bottom: 0;
      //padding-left: 20px;
      //padding-right: 20px;
      z-index: -1;
    }
  }



  .covid {
    margin-bottom: 120px;

    @media only screen and (max-width: $mobileMaxWidth) {
      margin-bottom: 64px;
    }
  }

  .item {
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {
      display: inline-block;
      width: 56%;
    }

    .illustration {
      display: inline-block;
      //width: 40%;
      height: 320px;

      &.right {
        padding-left: 64px;
      }

      &.left {
        padding-right: 54px;
      }
    }

    h2 {
      margin: 16px 0 20px 0;
    }

    .item-icon {
      transition: .2s all;
    }

    a {
      display: block;
      text-decoration: none;
      color: $black;
    }

    .button {
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

      .button {
        color: white;
        background-color: $blue;
      }
    }
  }

</style>
