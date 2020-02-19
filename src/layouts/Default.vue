<template>
  <div>
    <header class="header">
      <div>
        <g-link to="/">
          <g-image class="marianne" src="~/assets/images/dinumLogoDesktop.svg" alt="DesignGouv - Retour à l'accueil"/>
          <g-image v-if="logoLarge === false" class="logoSmall" alt="DesignGouv" src="~/assets/images/logoBeta.svg"/>
        </g-link>
      </div>
      <div v-if="logoLarge" class="logoDesktop bottom">
        <g-image alt="DesignGouv" src="~/assets/images/logoBeta.svg"/>
      </div>
      <nav v-if="logoLarge" class="nav top">
        <Menu />
      </nav>
      <nav v-else class="nav">
        <Menu />
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
      <div class="layout">

        <g-link to="/">
          <g-image class="logoFooter" alt="DesignGouv" src="~/assets/images/logoBetaWhite.svg"/>
        </g-link>

        <p class="small"><strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a> (DINUM).<br>
        Accessibilité : en cours d'évaluation au 15 jan 2020<br>
        Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">code source</a> est disponible en licence libre.</p>

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

  .bottom {
    align-self: flex-end;
  }

  .top {
    align-self: flex-start;
  }

  .nav {
    width: 185px;
    text-align: right;

    @media only screen and (max-width: $mobileMaxWidth) {
      align-self: flex-start;
    }
  }

  .logoFooter {
    width: 220px;
  }

  .logoSmall {
    width: 220px;
    padding-left: 64px;
    padding-bottom: 48px;

    @media only screen and (max-width: $mobileMaxWidth) {
      display: none;
    }
  }

  .logoDesktop {
    @media only screen and (max-width: $desktopMinWidth) {
      display: none;
    }
  }

  /* .community {
    background-color: #FFFFFF;
    padding: 8px 22px;
    border: solid 1px $emerald;
    border-radius: 24px;
    text-decoration: none;
    color: $emerald;
    margin-right: 16px;

    &:hover, &:focus {
      background-color: $emerald;
      color: white;
    }

    @media only screen and (max-width: $mobileMaxWidth) {
      display: none;
    }
  } */

</style>
