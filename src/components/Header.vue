<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand">
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
            <div class="fr-header__operator">
              <g-link to="/">
                <img svg-inline src="../assets/images/logoBasline.svg" class="fr-responsive-img" role="img" aria-labelledby="Accueil - DesignGouv, par le pôle design des services numériques"/>
              </g-link>
            </div>
          </div>
          <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-links-group">
                <li>
                  <g-link class="fr-link fr-fi-information-line" to="/a-propos/">Qui sommes-nous</g-link>
                </li>
                <!-- <li>
                  <button class="fr-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
                </li> -->
              </ul>
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
