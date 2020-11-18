<template>
  <div>

    <!--skipLink/-->
    <Header />

    <main class="layout" id="main" role="main">
      <!--Breadcrumb /-->
      <slot/>
      <Newsletter v-if="!hideNewsletter"/>
      <Offer v-if="showServices"/>
    </main>

    <Footer />

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
  import Menu from "~/components/Menu.vue"
  import Header from "~/components/Header.vue"
  import Newsletter from "~/components/messages/Newsletter.vue"
  import Offer from "~/components/messages/Offer.vue"
  import Footer from "~/components/Footer.vue"

  export default {
    components: {
      Header,
      Menu,
      Newsletter,
      Offer,
      Footer,
    },
    props: {
      hideNewsletter: {
        default: false,
        type: Boolean
      },
      showServices: {
        default: false,
        type: Boolean
      },
    }
  }
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";
/*
  @font-face {
    font-family: "Marianne";
    font-weight: 400;
    src: url("../assets/fonts/Marianne/Marianne-Regular.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-Regular.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-Regular.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Marianne";
    font-weight: 700;
    src: url("../assets/fonts/Marianne/Marianne-Bold.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-Bold.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-Bold.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Marianne";
    font-weight: 800;
    src: url("../assets/fonts/Marianne/Marianne-ExtraBold.ttf") format("ttf"),
         url("../assets/fonts/Marianne/Marianne-ExtraBold.woff") format("woff2"),
         url("../assets/fonts/Marianne/Marianne-ExtraBold.woff2") format("woff");
    font-display: fallback;
  }
*/
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Inter/Inter-Regular-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Regular-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    src: url("../assets/fonts/Inter/Inter-Italic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Italic-Reduced.woff2") format("woff");
    font-display: fallback;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Inter/Inter-Medium-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Medium-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    src: url("../assets/fonts/Inter/Inter-MediumItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-MediumItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/Inter/Inter-Bold-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-Bold-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    src: url("../assets/fonts/Inter/Inter-BoldItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter/Inter-BoldItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }



  ul li::before, ol li::before {
    display: none;
  }


  a {
    box-shadow:none;
  }
  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 30px;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 12px;
    }
  }

/*
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
     margin: auto;

    .logo {

      align-items: center;
      position: relative;

      .block-link {
        align-items: center;
        display: flex;

        a::after {
          position: absolute;
          content: "";
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        a:focus {
          background-color: inherit;
        }
      }
    }
    .header__logos {
      justify-content: flex-start;
      align-items: center;
      border: none;
    }

    .header__logo-rf {
      flex-shrink: 0;
      width: 121px;
      margin: 30px 40px 0px 30px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 64px;
        margin: 12px 24px 0px 12px;
      }
    }

    .header__logo-dg {
      max-width: 260px;
      padding-top: 16px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 160px;
        padding-top: 4px;
      }
    }

    nav {
      padding: 7px 30px 0 30px;

      @media only screen and (max-width: $mobile-max-width) {
        padding: 0px 12px;
      }
    }
  }
*/
  footer {
    padding: 20px 20px 24px 20px;
    margin-top: 120px;
    border-top: 6px solid $gray;
    color: $black;
    display: flex;
    justify-content: center;
    align-items: flex-start;

      a {
        box-shadow: none;
        border: none;
      }
    p a {
      text-decoration: underline;
    }  
    @media only screen and (max-width: $mobile-max-width) {
      padding: 20px 12px 24px 12px;
      margin-top: 64px;
      display: inline-block;
    }

    .footer__logo-rf {
      width: 121px;
      margin: 20px;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0 0 20px 0;
      }
    }

    .footer__logo-dg {
      width: 260px;
      max-width: 80%;
    }

    .footer__content {
      margin: 18px 40px 0px 40px;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0;
      }
    }

    .footer__description {
      margin-top: 16px;
      max-width: 640px;
    }

    .footer__websites {
      margin: 16px 0 8px 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div {
        margin-right: 48px;
      }

      ul {
        padding: 0;

        li {
          list-style-type: none;
        }
      }
    }

    .footer__sites-publics {
      font-size: .875em;

      ul {
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          list-style-type: none;
          margin-right: 3em;
          display: inline-flex;
        }
      }

      a, span {
        margin-right: 12px;
      }
    }
  }

</style>
