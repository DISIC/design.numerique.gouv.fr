<template>

  <div class="menuButton">
    <button @click="toggle" v-click-outside="hide">
      <span class="menuText">Menu</span>
      <g-image class="menuIcon" alt="Menu" src="~/assets/images/menu.svg"/>
    </button>
    <div id="menu" class="menuContent">
      <button @click="toggle" class="closeButton">Fermer ✕</button>
      <g-link to="/">Accueil</g-link>
      <g-link to="/covid-19/">Covid-19</g-link>
      <g-link to="/accessibilite-numerique/">Accessibilité numérique</g-link>
      <g-link to="/services/">Nos services</g-link>
      <g-link to="/formations/">Les formations</g-link>
      <a href="/recrutement/">Recrutement</a>
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

  .menuText {
    font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-size: 1em;

    @media only screen and (max-width: $mobileMaxWidth) {
      display: none;
    }
  }

  .menuIcon {
    display: none;

    @media only screen and (max-width: $mobileMaxWidth) {
      display: inline-block;
    }
  }

  button {
    margin: 0 30px 0 40px;

    @media only screen and (max-width: $mobileMaxWidth) {
      margin: 0 12px 0 16px;
      padding: 12px 16px;
    }
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
    top: 14px;
    right: 20px;

    a {
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
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
      color: $emerald;
    }
  }

  .closeButton {
    text-align: right;
    margin: 0px;
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
