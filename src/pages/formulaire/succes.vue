<template>
<Layout class="succes-page">

  <div class="cover">
      <div class="cover__container">
        <h1>Merci&nbsp;! Votre demande a bien été prise en compte</h1>
        <g-link to="/" class="button">Retourner à l'accueil</g-link>
      </div>
  </div>

</Layout>
</template>


<script>
  import CommandoUX from "~/assets/images/accompagnement.svg"

  export default {
    metaInfo: {
      title: "Votre demande a bien été prise en compte",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
  }
</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .succes-page {
    .cover {
      &__container {
        max-width: 40rem;

        .button {
          margin-top: 2rem;
        }
      }
    }
  }


</style>
