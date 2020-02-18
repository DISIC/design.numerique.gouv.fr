<template>

  <div class="menu">
    <button @click="toggle" id="menuButton">Menu</button>
    <div id="menu" class="menuContent">
      <g-link to="/">Accueil</g-link>
      <g-link to="/design">Le design numérique</g-link>
      <g-link to="/outils">Les outils</g-link>
      <g-link to="/accompagnement">Notre accompagnement</g-link>
      <g-link to="/formations">Les formations</g-link>
    </div>
  </div>

</template>


<script>

export default {
  name: 'Menu',
  methods: {
    toggle() {
      document.getElementById("menu").classList.toggle("show");
      if(this.opened) {
        document.getElementById("menuButton").classList.toggle("menuShown");
        document.getElementById("menuButton").innerHTML = "Menu";
        this.opened = false;
      } else {
        document.getElementById("menuButton").classList.toggle("menuShown");
        document.getElementById("menuButton").innerHTML = "Fermer ✕";
        this.opened = true;
      }
    }
  },
  data () {
    return {
      opened: false,
    }
  },
}

</script>


<style lang="scss" scoped>

  @import "src/assets/scss/_vars.scss";

  .menu {
    position: relative;
    display: inline-block;
  }

  .menuContent {
    display: none;
    position: absolute;
    background-color: $light-gray;
    width: 248px;
    z-index: 1;
    left: -1;
    right: 0;

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
    }
  }

  .menuShown {
    text-align: right;
    width: 248px;
    border-radius: 0px;

    &:hover, &:focus {
      background-color: $light-gray-hover
    }
  }

  .show {
    display: block;
  }

</style>
