<template>
  <header role="banner" class="rf-header">
    <div class="rf-container rf-container__header">
      <div class="rf-header__body">
        <div class="rf-header__brand">
          <img src="/assets/images/logoRF.svg" width="120" class="header__logo-rf" alt="République Française. Liberté Égalité Fraternité."/>
        </div>
        <div class="rf-header__navbar">
          <div class="rf-service">
            <a class="rf-service__title" href="/" title="Retour à l'accueil DesignGouv">
              Design des services numériques
            </a>
            <p class="rf-service__tagline">Un service proposé par la Dinum</p>
          </div>
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
<style>
.rf-service a {
  border: none;
}
</style>