<template>
  <div>
    <header class="header">
      <div>
        <g-link to="/">
          <g-image src="~/assets/images/marianne.svg" width="80" alt="Marianne" />
        </g-link>
        <strong>
          <g-link class="title" to="/">design.numerique.gouv.<span>fr</span></g-link>
        </strong>
      </div>
      <nav class="nav">
        <Menu />
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
      <div class="layout">

        <g-link to="/">
          <g-image class="logo" alt="DesignGouv" width="320" src="~/assets/images/logoBetaWhite.svg"/>
        </g-link>

        <p class="small">
          <strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a> (DINUM).</br>
          Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">code source</a> est disponible en licence libre. Et nous vous invitons à contribuer.
        </p>

        <p>
          Accessibilité : en cours d'évaluation.
        </p>

        <div class="public">
          <span>LES SITES PUBLICS :</span>
          <a href="https://elysee.fr" target="_blank">Elysee.fr</a>
          <a href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
          <a href="https://www.service-public.fr" target="_blank">service-public.fr</a>
          <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
          <a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a>
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

  .header {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    margin: 12px auto;

    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 0 8px;
      // flex-direction: column;
      // align-items: flex-start;
      // margin-bottom: 20px;
    }

    .title {
      color: $gray;
      text-decoration: none;
      margin-left: 10px;

      // @media only screen and (max-width: $mobileMaxWidth) {
      //   display: none;
      // }
    }

    .nav {
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

  .footer {
    padding: 40px 0;
    margin-top: 100px;
    background: $dark;
    color: #fafafa;

    a {
      text-decoration: none;
      color: $blue-hover;

      &:hover {
        text-decoration: underline;
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
        margin-right: 5px;
      }

      a {
        margin-right: 10px;
        opacity: 0.8;
      }
    }
  }

</style>
