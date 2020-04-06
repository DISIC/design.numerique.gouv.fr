<template>
  <div>

    <header>
      <div>
        <g-link to="/">
          <g-image class="logo" src="~/assets/images/logoMDGB.svg" width="320" alt="Logo DesignGouv" />
        </g-link>
      </div>
      <nav>
        <Menu />
      </nav>
    </header>

    <main class="layout">
      <slot/>
      <div>
        <Newsletter />
      </div>
    </main>

    <footer>

      <div class="footer-logo">
        <g-link to="/">
          <g-image class="logoRF" alt="Logo République française" width="200" src="~/assets/images/logoRF.svg"/>
        </g-link>
      </div>

      <div class="footer-content">
        <div class="">
          <g-link to="/">
            <g-image class="logoDG" alt="Logo DesignGouv" width="280" src="~/assets/images/logoDGB.svg"/>
          </g-link>
          <p>
            DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a>.</br>
            Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">code source</a> est disponible en licence libre.
          </p>
        </div>

        <div class="websites">
          <div>
            DesignGouv
            <ul>
              <li><a href="https://twitter.com/design_gouv" target="_blank">
                Twitter <font-awesome :icon="['fab', 'twitter']"/>
                </a></li>
              <li><a href="mailto:contact@design.numerique.gouv.fr" target="_blank">
                  Contact <font-awesome :icon="['fas', 'paper-plane']" transform="shrink-2"/>
                  </a></li>
              <li><g-link to="/recrutement">Recrutement</g-link></li>
              <li><g-link to="/misc/accessibilite">Accessibilité</g-link></li>
              <li><g-link to="/misc/donnees-personnelles">Données personnelles</g-link></li>
              <li><g-link to="/misc/mentions-legales">Mentions légales</g-link></li>
            </ul>
          </div>
          <div>
            Autres services
            <ul>
              <li><a href="https://observatoire.numerique.gouv.fr" target="_blank">L'observatoire du numérique</a></li>
              <li><a href="https://demarches-simplifiees.fr" target="_blank">Demarches simplifiées</a></li>
              <li><a href="https://franceconnect.gouv.fr" target="_blank">FranceConnect</a></li>
              <li><a href="https://voxusagers.gouv.fr" target="_blank">Voxusagers</a></li>
            </ul>
          </div>
          <div>
            Autres univers
            <ul>
              <li><a href="https://etalab.gouv.fr" target="_blank">etalab.gouv.fr</a></li>
              <li><a href="https://beta.gouv.fr" target="_blank">beta.gouv.fr</a></li>
              <li><a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a></li>
              <li><a href="https://api.gouv.fr" target="_blank">api.gouv.fr</a></li>
            </ul>
          </div>
        </div>

        <div class="public">
          <span>Les sites publics :</span>
          <a href="https://elysee.fr" target="_blank">Elysee.fr</a>
          <a href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
          <a href="https://www.service-public.fr" target="_blank">service-public.fr</a>
          <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
        </div>
      </div>

    </footer>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Menu from '~/components/Menu.vue'
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    Menu,
    Newsletter
  },
  props: {
    logoLarge: {
      default: false,
      type: Boolean
    },
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  @font-face {
    font-family: "Marianne";
    font-weight: 300;
    src: url("../assets/fonts/Marianne/Marianne-Light.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-Light.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-Light.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 400;
    src: url("../assets/fonts/Marianne/Marianne-Regular.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-Regular.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-Regular.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 700;
    src: url("../assets/fonts/Marianne/Marianne-Bold.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-Bold.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-Bold.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 800;
    src: url("../assets/fonts/Marianne/Marianne-ExtraBold.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-ExtraBold.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-ExtraBold.woff2") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 300;
    src: url("../assets/fonts/Inter/Inter-Light.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Light.woff2") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 400;
    src: url("../assets/fonts/Inter/Inter-Regular.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Regular.woff2") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 500;
    src: url("../assets/fonts/Inter/Inter-Medium.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Medium.woff2") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 700;
    src: url("../assets/fonts/Inter/Inter-Bold.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Bold.woff2") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 900;
    src: url("../assets/fonts/Inter/Inter-Black.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Black.woff2") format("woff");
  }

  header {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 0 8px;
      height: 64px;
    }

    .logo {
      padding-top: 8px;

      @media only screen and (max-width: $mobileMaxWidth) {
        width: 240px;
      }
    }
  }

  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 20px;
  }

  footer {
    padding: 40px 20px 24px 20px;
    margin-top: 100px;
    background: $light-gray;
    color: #black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    @media only screen and (max-width: $mobileMaxWidth) {
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: $blue;

      &:hover {
        text-decoration: underline;
        color: $blue;
      }
    }

    .footer-logo {

      .logoRF {
        padding-bottom: 24px;
      }
    }

    .footer-content {
      padding-top: 8px;
      margin: 0 64px;
      max-width: 80%;

      @media only screen and (max-width: $mobileMaxWidth) {
        max-width: 100%;
        margin: 0;
      }

      .logoDG {
        max-width: 80%;
      }
    }

    .websites {
      margin: 32px 0 8px 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div {
        margin-right: 48px;
        margin-bottom: 16px;
      }

      font-awesome {
        padding-left: 4px;
      }
    }

    ul {
      padding: 0;

      li {
        list-style-type: none;
      }
    }

    .public {
      font-size: .8em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      span {
        margin-right: 12px;
      }

      a {
        margin-right: 12px;
      }
    }
  }

</style>
