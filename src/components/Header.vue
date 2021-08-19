<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République<br>Française
                </p>
              </div>
              <div class="fr-header__navbar">
                <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/" title="Retour à l’accueil DesignGouv"  class="fr-header__service-title  text-highlight">DesignGouv</a>
              <p class="fr-header__service-tagline">Par le pôle Design des services numériques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navigation />
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

  .fr-header {
    box-shadow: none !important;
    margin: 0 0 16px 0 !important;
      .fr-header__logo .fr-logo {
        font-size: 1rem;
      }

    .fr-header__body {
      margin: 0 auto;

      .fr-header {
        &__service-title {
          font-size: 2rem;
          font-weight: 800;
          color: $blue;

          @media only screen and (max-width: $mobile-max-width) {
            font-size: 1.5rem;
          }
        }

        &__service-tagline {
          font-size: 0.875rem;
          margin-left: 0.125rem;
          margin-top: 0.125rem;
          font-weight: bold;
        }
      }

      .fr-header__navbar {
        @media only screen and (max-width: $mobile-max-width) {
          margin-top: 0.5rem;
        }
      }
    }
  }

</style>
