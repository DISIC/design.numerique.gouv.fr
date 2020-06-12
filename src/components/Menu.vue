<template>

  <div>
    <button id="menu-button" type="button" aria-haspopup="true" title="Menu"
      aria-expanded="false" @click="toggle" v-click-outside="hide">
      <span id="menu-button-text" class="text">Menu</span>
      <font-awesome id="menu-button-icon" class="icon" :icon="['fas', 'bars']"/>
    </button>
    <ul id="menu" role="menu">
      <li role="none"><g-link class="button" to="/" role="menuitem">Accueil<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
      <li role="none"><g-link class="button" to="/accessibilite-numerique/" role="menuitem">Accessibilité<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
      <li role="none"><g-link class="button" to="/services/" role="menuitem">Nos services<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
      <li role="none"><g-link class="button" to="/formations/" role="menuitem">Les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
      <li role="none"><g-link class="button" to="/equipe/" role="menuitem">Notre équipe<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
      <li role="none"><g-link class="button" to="/recrutement/" role="menuitem">Recrutement<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link></li>
    </ul>
  </div>

</template>


<script>

  import ClickOutside from 'vue-click-outside'

  export default {
    name: 'Menu',
    methods: {
      toggle() {
        document.getElementById("menu").classList.toggle("show");
        document.getElementById("menu-button-text").classList.toggle("show");
        document.getElementById("menu-button-icon").classList.toggle("hide");
        document.getElementById("menu-button").classList.toggle("open");
        var expanded = document.getElementById("menu-button").getAttribute("aria-expanded");
        var text = "Menu";
        if (expanded == "true") {
          expanded = "false";
          text = "Menu";
        } else {
          expanded = "true";
          text = "Fermer";
        }
        document.getElementById("menu-button").setAttribute("aria-expanded", expanded);
        document.getElementById("menu-button-text").innerHTML = text;
      },
      hide() {
        document.getElementById("menu").classList.remove("show");
        document.getElementById("menu-button").classList.remove("open");
        document.getElementById("menu-button").setAttribute("aria-expanded", false);
        document.getElementById("menu-button-text").innerHTML = "Menu";
        document.getElementById("menu-button-text").classList.remove("show");
        document.getElementById("menu-button-icon").classList.remove("hide");
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
    height: 44px;
    transition: none;
    @media only screen and (max-width: $mobileMaxWidth) {
      width: 44px;
      padding: 8px;
      border-radius: 50%;
    }

    &.open {
      position: absolute;
      top: 52px;
      right: 30px;
      border-radius: 0;
      width: 284px;
      @media only screen and (max-width: $mobileMaxWidth) {
        width: 100vw;
        top: 0;
        right: 0;
        border: none;
        height: 71px;
        text-align: right;
        padding-right: 27px;
      }
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

  ul {
    display: none;
    position: absolute;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 2px solid $black;
    width: 280px;
    z-index: 1;
    top: 94px;
    right: 30px;

    @media only screen and (max-width: $mobileMaxWidth) {
      border: none;
      top: 71px;
      right: 0px;
      width: 100vw;
      height: 100vh;
    }

    li {
      list-style-type: none;

      a {
        display: block;
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
    }

    .close {
      width: 100%;
      border: none;
      border-radius: 0px;
      text-align: right;
      padding: 14px 24px;

      @media only screen and (max-width: $mobileMaxWidth) {
        padding: 32px 32px 48px 0;
        width: 100vw;
      }
    }
  }

  .show {
    display: inline-block !important;
  }

  .hide {
    display: none !important;
  }
</style>
