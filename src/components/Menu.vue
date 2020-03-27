<template>

  <div>
    <button type="button" @click="toggle" v-click-outside="hide">
      <span class="text">Menu</span><font-awesome class="icon" :icon="['fas', 'bars']"/>
    </button>
    <div id="menu" class="menu">
      <button type="button" @click="toggle" class="close">Fermer ✕</button>
      <g-link to="/">Accueil<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link to="/covid-19">Covid-19<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link to="/accessibilite-numerique">Accessibilité numérique<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link to="/services">Nos services<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link to="/formations">Les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link to="/recrutement">Recrutement<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
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

  button {
    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 12px 16px;
    }

    .text {
      @media only screen and (max-width: $mobileMaxWidth) {
        display: none;
      }
    }

    .icon {
      display: none;

      @media only screen and (max-width: $mobileMaxWidth) {
        display: inline-block;
      }
    }
  }

  .menu {
    display: none;
    position: fixed;
    background-color: $gray;
    width: 256px;
    z-index: 1;
    top: 52px;
    right: 20px;

    @media only screen and (max-width: $mobileMaxWidth) {
      top: 0px;
      right: 0px;
      width: 100vw;
      height: 100vh;
    }

    a {
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      color: $dark;
      font-weight: bold;
      text-align: left;
      padding: 12px 24px;
      text-decoration: none;
      display: block;
      transition: .1s all;

      .icon {
        display: none;
        padding-left: 8px;
      }

      &:hover, &:focus {
        background-color: $gray-hover;
        color: $blue;

        .icon {
          @media only screen and (min-width: $mobileMaxWidth+1) {
            display: inline-block;
          }
        }
      }

      @media only screen and (max-width: $mobileMaxWidth) {
        text-align: center;
      }
    }

    .close {
      text-align: right;
      padding: 12px 24px;
      width: 256px;
      border-radius: 0px;

      @media only screen and (max-width: $mobileMaxWidth) {
        padding: 35px 24px 12px 24px;
        width: 100vw;
      }
    }
  }

  .show {
    display: block;
  }

</style>
