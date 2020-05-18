<template>

  <Layout>

    <div class="cover">
      <div class="coverContainer">

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <p class="subtitle">Des idées et des outils à la disposition des agents publics pour améliorer l'expérience usager des services publics numériques.</p>

      </div>
    </div>

    <div class="content">

      <div class="message">

          <strong>Coronavirus</strong>

          <p>Retrouvez notre liste d'initiatives pour s'impliquer et aider dans différents domaines.</p>

          <g-link to="/covid-19/" class="button">
            Accéder aux initiatives
            <span class='arrow'>→</span>
          </g-link>

      </div>

      <section class="homeItem design">

        <Design class="icon" title="Star icon"/>

        <h2><span>Design des services numériques</span></h2>

        <p class="homeItemText">
          Le design permet de rendre les <b>services</b> numériques plus <b>simples</b>,
          <b>accessibles</b> et <b>agréables</b> pour tous. Concevoir par
          le design, c’est mettre en œuvre des solutions centrées sur les
          usagers, tout en s’appuyant sur de bonnes pratiques reconnues. Et c'est aussi un métier&nbsp;! Nous vous présenterons tout cela en détail bientôt.
        </p>

        <p class="buttonDisabled">Bientôt disponible !</p>

      </section>

      <section class="homeItem accessibility">

        <Tools class="icon" title="Tool icon"/>

        <h2><g-link to="/accessibilite-numerique/">Accessibilité numérique</g-link></h2>

        <p class="homeItemText">
          L'accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes handicapées. On vous dit tout.
        </p>

        <g-link to="/accessibilite-numerique/" class="button">
          L'accessibilité en détails
          <span class='arrow'>→</span>
        </g-link>

      </section>

      <section class="homeItem services">

        <Services class="icon" title="Lifebuoy icon"/>

        <h2><g-link to="/services/">Besoin d'aide ? Nous vous accompagnons.</g-link></h2>

        <p class="homeItemText">
          Vous avez des besoins en design&nbsp;?
            Vous vous <b>posez des questions</b> sur les sujets d'accessibilité&nbsp;? Vous souhaitez <b>obtenir des
            retours</b>, <b>demander des conseils</b> pour le développement ou l'amélioration
            de votre service&nbsp;? Nous vous aidons&nbsp;!
        </p>

        <g-link to="/services/" class="button">
          J'ai besoin d'aide
          <span class='arrow'>→</span>
        </g-link>

      </section>

      <section class="homeItem courses">

        <Courses class="icon" title="Book icon"/>

        <h2><g-link to="/formations/">Les formations pour vous et vos équipes</g-link></h2>

        <p class="homeItemText">
          De nombreuses formations sont disponibles, certaines accessibles
            <b>gratuitement</b>, pour vous former <b>personnellement</b>
            ou <b>en équipe</b> sur les divers sujets liés au design, à la qualité des
            services numériques et à l’accessibilité.
        </p>

        <g-link to="/formations/" class="button">
          Je découvre les formations
          <span class='arrow'>→</span>
        </g-link>

      </section>

    </div>

  </Layout>

</template>


<script>

import Design from '~/assets/images/design.svg'
import Tools from '~/assets/images/tools.svg'
import Services from '~/assets/images/services.svg'
import Courses from '~/assets/images/courses.svg'

export default {
  components: {
    Design,
    Tools,
    Services,
    Courses,
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
    background-color: $blue;

    h1 {
      padding: 0;
      margin: 0;
      color: white;
      font-weight: bold;

      .highlight {
        box-shadow:
          inset 0 -0.05em $blue,
          inset 0 -0.3em lighten($blue, 10%);
        display: inline;
        transition: .1s all;

        &:hover {
          box-shadow:
            inset 0 -0.05em $blue,
            inset 0 -1.2em lighten($blue, 10%);
        }
      }

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 1.8em;
      }
    }

    .logo {
      padding-bottom: 16px;
    }

    .subtitle {
      color: white;
      font-weight: normal;
      font-size: 1.25em;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 1.125em;
      }
    }
  }

  .homeItem {

    .icon {
      display: block;
      padding-bottom: 16px;
    }

    h2 {
      padding: 0;
      margin: 0;
      transition: .1s all;

      a {
        text-decoration: none;
        color: $dark;
        display: inline;
      }
    }

    .homeItemText {
      margin-top: 24px;
    }

    .button {
      background-color: white;
      border-radius: 32px;
      padding: 8px 24px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;
      border: 2px solid;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }
    }

    .buttonDisabled {
      color: $gray;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0 0 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }
    }

    &.design {
      h2 span {
        display: inline;
        box-shadow:
          inset 0 -0.05em white,
          inset 0 -0.4em $blue-light;
      }

      .button {
        color: $blue;
        border-color: $blue;

        &:hover, &:focus {
          color: white;
          background: $blue;
        }
      }
    }

    &.accessibility {
      h2 a {
        box-shadow:
          inset 0 -0.05em white,
          inset 0 -0.4em $green-light;

        &:hover, &:focus {
          box-shadow:
            inset 0 -0.05em white,
            inset 0 -1.4em $green-light;
        }
      }

      .button {
        color: $green;
        border-color: $green;

        &:hover, &:focus {
          color: white;
          background: $green;
        }
      }
    }

    &.services {
      h2 a {
        box-shadow:
          inset 0 -0.05em white,
          inset 0 -0.4em $red-light;

        &:hover, &:focus {
          box-shadow:
            inset 0 -0.05em white,
            inset 0 -1.4em $red-light;
        }
      }

      .button {
        color: $red;
        border-color: $red;

        &:hover, &:focus {
          color: white;
          background: $red;
        }
      }
    }

    &.courses {
      h2 a {
        box-shadow:
          inset 0 -0.05em white,
          inset 0 -0.4em $brown-light;

        &:hover, &:focus {
          box-shadow:
            inset 0 -0.05em white,
            inset 0 -1.4em $brown-light;
        }
      }

      .button {
        color: $brown;
        border-color: $brown;

        &:hover, &:focus {
          color: white;
          background: $brown;
        }
      }
    }
  }

</style>
