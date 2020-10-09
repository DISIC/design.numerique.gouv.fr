<template>
    <header role="banner" class="rf-header">
      <div class="rf-container">
        <div class="logo">
            <div class="block-link">
            <img src="/assets/images/logoRF.svg" width="120" class="header__logo-rf" alt="République Française. Liberté Égalité Fraternité."/>
            <g-link class="header__logos" to="/" >
                <img src="/assets/images/logoDG.svg"  width="260"  class="header__logo-dg" alt="DesignGouv - Retour à l'accueil"/>
            </g-link>
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
