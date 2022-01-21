<template>
  <Layout>
    <div class="dg-content dg-text-center fr-px-2w fr-mt-4w">
      <h1 class="dg-text-red fr-display-xs">Oups, il y a eu une erreur lors du traitement de votre demande</h1>
      <p>Merci de réessayer</p>
      <a href="javascript:history.back()" class="fr-btn">Retourner au formulaire</a>
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
