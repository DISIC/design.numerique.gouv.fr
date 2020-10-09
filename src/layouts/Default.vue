<template>
  <div>

    <!--skipLink/-->
    <Header />

    <main class="layout" id="main" role="main">
      <!--Breadcrumb /-->
      <slot/>
      <Newsletter />
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
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Newsletter from "~/components/Newsletter.vue"
import Vue from 'vue';

export default {
  components: {
    Header,
    Footer,
    Newsletter,
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

  ol li::before {
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

  body { background-color:none;}

  .rf-header {
    box-shadow: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
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

  footer {
    padding: 20px 20px 24px 20px;
    margin-top: 120px;
    border-top: 6px solid $gray;
    color: $black;
    display: flex;
    justify-content: center;
    align-items: start;

    a {
      border: none;
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
      max-width: 640px;
    }

    .footer__websites {
      margin: 32px 0 8px 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div {
        margin-right: 48px;
        margin-bottom: 16px;
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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      ul {
        padding: 0;
        display: flex;
        li {
          list-style-type: none;
        }
      }

      a, span {
        margin-right: 12px;
      }
    }
  }

</style>
