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
