<template>
<Layout>

  <div class="content">
        <h1>Oups, il y a eu une erreur lors du traitement de votre demande</h1>
        <p>
          Merci de réessayer
        </p>
        <a href="javascript:history.back()" class="button">Retourner au formulaire</a>

  </div>

</Layout>
</template>


<script>

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
