<template>
  <div>

    <header>
      <div>
        <g-link to="/">
          <g-image src="~/assets/images/marianne.svg" width="80" alt="Marianne" />
        </g-link>
        <strong>
          <g-link class="title" to="/">design.numerique.gouv.<span>fr</span></g-link>
        </strong>
      </div>
      <nav>
        <Menu />
      </nav>
    </header>

    <main class="layout">
      <slot/>
    </main>

    <footer>
      <div class="layout">

        <div class="">
          <g-link to="/">
            <g-image class="logo" alt="DesignGouv" width="320" src="~/assets/images/logoBetaWhite.svg"/>
          </g-link>
          <p>
            DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a> (DINUM).</br>
            Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">code source</a> est disponible en licence libre. Et nous vous invitons à contribuer.
          </p>
        </div>

        <div class="websites">
          <div>
            DesignGouv
            <ul>
              <li><a href="https://twitter.com/design_gouv" target="_blank">
                Twitter <font-awesome :icon="['fab', 'twitter']"/>
                </a></li>
              <li><a href="https://www.numerique.gouv.fr/donnees-personnelles/" target="_blank">Données personnelles</a></li>
              <li><a href="https://www.numerique.gouv.fr/mentions-legales/" target="_blank">Mentions légales</a></li>
              <li><a href="https://www.numerique.gouv.fr/accessibilite/" target="_blank">Accessibilité</a></li>
              <!-- <li><a href="" target="_blank">Contact</a></li> -->
            </ul>
          </div>
          <div>
            Autres services
            <ul>
              <li><a href="https://observatoire.numerique.gouv.fr" target="_blank">observatoire.numerique.gouv.fr</a></li>
              <li><a href="https://demarches-simplifiees.fr" target="_blank">demarches-simplifiees.fr</a></li>
              <li><a href="https://franceconnect.gouv.fr" target="_blank">franceconnect.gouv.fr</a></li>
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

export default {
  components: {
    Menu,
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

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800,900&display=swap');

  @font-face {
    font-family: "Marianne";
    font-weight: 300;
    src: url("../assets/fonts/Marianne-Light.ttf") format("ttf"),
         url("../assets/fonts/Marianne-Light.woff") format("woff2"),
         url("../assets/fonts/Marianne-Light.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 400;
    src: url("../assets/fonts/Marianne-Regular.ttf") format("ttf"),
         url("../assets/fonts/Marianne-Regular.woff") format("woff2"),
         url("../assets/fonts/Marianne-Regular.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 700;
    src: url("../assets/fonts/Marianne-Bold.ttf") format("ttf"),
         url("../assets/fonts/Marianne-Bold.woff") format("woff2"),
         url("../assets/fonts/Marianne-Bold.woff2") format("woff");
  }
  @font-face {
    font-family: "Marianne";
    font-weight: 800;
    src: url("../assets/fonts/Marianne-ExtraBold.ttf") format("ttf"),
         url("../assets/fonts/Marianne-ExtraBold.woff") format("woff2"),
         url("../assets/fonts/Marianne-ExtraBold.woff2") format("woff");
  }

  header {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    margin: 12px auto;

    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 0 8px;
    }

    .title {
      color: $gray;
      text-decoration: none;
      margin-left: 10px;
    }

    nav {
      text-align: right;

      @media only screen and (max-width: $mobileMaxWidth) {
        align-self: flex-end;
      }
    }

    div {
      display: flex;
      align-items: center;
    }

    span {
      font-style: italic;
      font-family: serif;
      font-size: 1.2em;
      font-weight: normal;
    }
  }

  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 20px;
  }

  footer {
    padding: 48px 0 24px 0;
    margin-top: 100px;
    background: $dark;
    color: #fafafa;

    a {
      text-decoration: none;
      color: $blue-light;

      &:hover {
        text-decoration: underline;
        color: $blue-light;
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
    }

    ul {
      padding: 0;

      li {
        list-style-type: none;
      }
    }

    .logo {
      max-width: 80%;
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
        //opacity: 0.8;
      }
    }
  }

</style>
