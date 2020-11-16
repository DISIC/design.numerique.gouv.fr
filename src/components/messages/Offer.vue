<template>

  <div class="message">
    <h2>Vous avez besoin d'aide&nbsp;?</h2>

    <p>Vous êtes une administration et vous souhaitez améliorer l'expérience usager (UX) et l'accessibilité de l'un de vos services ? Nous pouvons vous accomagner&nbsp;!</p>

    <g-link class="button" to="/services" title="Nos offres d'accompagnement">Nos offres d'accompagnement</g-link>
  </div>

</template>


<script>

  export default {
    name: 'Offer'
  }

</script>


<style lang="scss">

  .message {
    margin-top: 80px;

    .button {
      margin-bottom: 0;
    }
  }

</style>
