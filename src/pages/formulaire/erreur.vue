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
