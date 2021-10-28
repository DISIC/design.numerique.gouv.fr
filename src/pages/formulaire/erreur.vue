<template>
<Layout class="error-page">

  <div class="cover">
      <div class="cover__container">
        <h1>Oups, il y a eu une erreur lors du traitement de votre demande</h1>
        <p class="cover__subtitle">
          Merci de réessayer
        </p>
        <a href="javascript:history.back()" class="button">Retourner au formulaire</a>
      </div>
  </div>

</Layout>
</template>


<script>
  import CommandoUX from "~/assets/images/accompagnement.svg"

  export default {
    metaInfo: {
      title: "Il y a eu une erreur lors du traitement de votre demande",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
  }
</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .error-page {
    .cover {
      &__container {
        max-width: 48rem;
        padding-top: 2rem;

        @media only screen and (max-width: $mobile-max-width) {
          padding-top: 0;
        }

        h1 {
          color: $red;
        }

        .button {
          margin-top: 2rem;
        }
      }
    }
  }


</style>
