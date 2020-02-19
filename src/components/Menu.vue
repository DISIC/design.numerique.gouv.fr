<template>

  <div class="menuButton">
    <button @click="toggle" v-click-outside="hide">Menu</button>
    <div id="menu" class="menuContent">
      <button @click="toggle" class="closeButton">Fermer ✕</button>
      <g-link to="/">Accueil</g-link>
      <g-link to="/design">Le design numérique</g-link>
      <g-link to="/outils">Les outils</g-link>
      <g-link to="/accompagnement">Notre accompagnement</g-link>
      <g-link to="/formations">Les formations</g-link>
      <a class="community" href="http://eepurl.com/gLJCsb">Rejoindre la communauté</a>
    </div>
  </div>

</template>


<script>

import ClickOutside from 'vue-click-outside'

export default {
  name: 'Menu',
  methods: {
    toggle() {
      document.getElementById("menu").classList.toggle("show");
    },
    hide() {
      if (document.getElementById("menu").classList.contains("show")) {
        document.getElementById("menu").classList.remove("show");
      }
    }
  },
  directives: {
    ClickOutside
  }
}

</script>


<style lang="scss" scoped>

  @import "src/assets/scss/_vars.scss";

  .menuButton {
    position: relative;
    display: inline-block;
  }

  #menu {
    position: fixed;
  }

  .menuContent {
    display: none;
    position: absolute;
    background-color: $light-gray;
    width: 248px;
    z-index: 1;
    top: 20px;
    right: 20px;

    a {
      color: $dark;
      font-weight: bold;
      text-align: left;
      padding: 12px 24px;
      text-decoration: none;
      display: block;

      &:hover, &:focus {
        background-color: $light-gray-hover
      }

      @media only screen and (max-width: $mobileMaxWidth) {
        text-align: center;
      }
    }

    @media only screen and (max-width: $mobileMaxWidth) {
      top: 0px;
      right: 0px;
      width: 100vw;
      height: 100vh;

      .closeButton {
        padding-bottom: 40px;
      }
    }

    .community {
      display: none;
      color: $emerald;

      @media only screen and (max-width: $mobileMaxWidth) {
        display: block;
      }
    }
  }

  .closeButton {
    text-align: right;
    padding: 12px 24px;
    width: 248px;
    border-radius: 0px;

    &:hover, &:focus {
      background-color: $light-gray-hover
    }

    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 35px 24px 12px 24px;
      width: 100vw;
    }
  }

  .show {
    display: block;
  }

</style>
