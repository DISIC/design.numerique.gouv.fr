<template>

  <div>
    <button type="button" @click="toggle" v-click-outside="hide">
      <span class="text">Menu</span><font-awesome class="icon" :icon="['fas', 'bars']"/>
    </button>
    <div id="menu" class="menu shadow">
      <button type="button" @click="toggle" class="close">Fermer ✕</button>
      <g-link class="button" to="/">Accueil<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link class="button" to="/covid-19">Covid-19<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link class="button" to="/accessibilite-numerique">Accessibilité numérique<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link class="button" to="/services">Nos services<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link class="button" to="/formations">Les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
      <g-link class="button" to="/recrutement">Recrutement<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
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
    font-weight: normal;

    @media only screen and (max-width: $mobileMaxWidth) {
      width: 44px;
      height: 44px;
      padding: 8px;
      border-radius: 50%;
    }

    .text {
      @media only screen and (max-width: $mobileMaxWidth) {
        display: none;
      }
    }

    .icon {
      display: none;

      @media only screen and (max-width: $mobileMaxWidth) {
        padding: 0;
        display: inline-block;
      }
    }
  }

  .menu {
    display: none;
    position: fixed;
    background-color: white;
    border: 2px solid $black;
    width: 280px;
    z-index: 1;
    top: 52px;
    right: 30px;

    @media only screen and (max-width: $mobileMaxWidth) {
      font-size: 1.2em;
      border: none;
      top: 0px;
      right: 0px;
      width: 100vw;
      height: 100vh;
    }

    a {
      display: block;
      text-align: left;
      border: none;
      border-radius: 0;
      padding: 14px 24px;

      .icon {
        display: none;
        color: $light;
      }

      &:hover, &:focus {
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
      width: 100%;
      border: none;
      border-radius: 0px;
      text-align: right;
      padding: 14px 24px;
      margin: 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        padding: 32px 32px 48px 0;
        width: 100vw;
      }
    }
  }

  .show {
    display: block;
  }

</style>
