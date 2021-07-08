<template>
  <div>

    <SkipLink/>

    <div v-show="$i18n.locale == 'en-gb' " class="if-english">
      <g-link to="/en/about" >
        Don't speak french? Take a quick tour of what we do
      </g-link>
    </div>

    <Header />

    <main class="layout" id="main" role="main">
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
  import Header from "~/components/Header.vue"
  import Newsletter from "~/components/messages/Newsletter.vue"
  import Offer from "~/components/messages/Offer.vue"
  import Footer from "~/components/Footer.vue"
  import SkipLink from "~/components/SkipLink.vue"

  export default {
    components: {
      Header,
      Newsletter,
      Offer,
      Footer,
      SkipLink,
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
    },
    mounted () {
      let src = "/assets/js/dsfr.module.min.js";
      let dsfr = document.createElement('script');
      dsfr.type = "module";
      dsfr.src = src;
      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }
      document.body.appendChild(dsfr);
    }
  }
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  @font-face {
    font-family: "Marianne";
    font-style: normal;
    font-weight: 800;
    src: url("../assets/fonts/Marianne-ExtraBold.woff") format("woff2"),
         url("../assets/fonts/Marianne-ExtraBold.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Inter-Regular-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Regular-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    src: url("../assets/fonts/Inter-Italic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Italic-Reduced.woff2") format("woff");
    font-display: fallback;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Inter-Medium-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Medium-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    src: url("../assets/fonts/Inter-MediumItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-MediumItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/Inter-Bold-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Bold-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    src: url("../assets/fonts/Inter-BoldItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-BoldItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  .if-english {
    background: $light-gray;
    text-align: center;

    a {
      display: block;
      border: 0;
      font-weight: bold;
      padding: 15px;
    }
  }

  .layout {
    max-width: 52rem;
    margin: 0 auto;
    padding: 0;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 12px;
    }

    ::after, ::before {
      box-sizing: unset;
    }
  }

</style>
