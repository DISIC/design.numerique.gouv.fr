<template>
  <header role="banner" class="rf-header">
    <div class="rf-container rf-container__header">
      <div class="rf-header__body">
        <div class="rf-header__brand">
          <img src="/assets/images/logoRF.svg" width="96" height="89" class="header__logo-rf" alt="République Française. Liberté Égalité Fraternité."/>
        </div>
        <div class="rf-header__navbar">
          <div class="rf-service">
            <a class="rf-service__title" href="/" title="Retour à l’accueil DesignGouv">
              DesignGouv
            </a>
            <p class="rf-service__tagline">Par le pôle Design des services numériques</p>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  </header>
</template>

<script>
  import Navigation from "~/components/Navigation.vue"

  export default {
    name: 'Header',
    components: {
        Navigation
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .rf-header {
    box-shadow: none !important;
    margin: 0 0 16px 0 !important;

    .rf-container__header {
      margin: 0;
      max-width: none;
      padding-right: 0rem;
      padding-left: 0rem;

      .rf-header__body {
        max-width: 1080px;
        margin: 0 auto;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;

        .rf-service {
          &__title {
            font-size: 2rem;
            font-weight: 800;

            @media only screen and (max-width: $mobile-max-width) {
              font-size: 1.5rem;
            }
          }

          &__tagline {
            margin-left: 2px;
          }
        }

        .rf-header__navbar {
          @media only screen and (max-width: $mobile-max-width) {
            margin-top: 0.5rem;
          }

          //Fix menu icon positoin on Safari
          @media not all and (min-resolution:.001dpcm) {
            @supports (-webkit-appearance:none) {
              .rf-btn::before {
                padding-bottom: 32px;
              }
            }
          }
        }
      }
    }
  }

</style>
