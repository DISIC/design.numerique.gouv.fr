<template>
  <header role="banner" class="rf-header">
    <div class="rf-container rf-container__header">
      <div class="rf-header__body">
        <div class="rf-header__brand">
          <img src="/assets/images/logoRF.svg" width="96" class="header__logo-rf" alt="République Française. Liberté Égalité Fraternité."/>
        </div>
        <div class="rf-header__navbar">
          <div class="rf-service">
            <a class="rf-service__title" href="/" title="Retour à l'accueil DesignGouv">
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

      .rf-header__body {
        padding-bottom: 1rem !important;
        max-width: 1080px;
        margin: 0 auto;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;

        .rf-service {
          margin-top: -32px;

          &__title {
            font-size: 2.125rem;
            font-weight: 800;
          }

          &__tagline {
            font-size: 0.775rem;
            margin-top: -3px;
            margin-left: 2px;
          }
        }
      }
    }
  }

</style>
