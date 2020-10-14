<template>
  <Layout class="digital-accessibility-pages">
    <div class="rf-container">
      <div class="cover__container">
        <h1>Oups, <span class="highlight">cette page n'existe pas</span></h1>
        <p class="cover__subtitle">Vous pouvez <a href="./">retourner à l'accueil</a>, consulter le <a href="/misc/plan-du-site/">plan du site</a> ou aller faire un tour de vélo ;)</p><br />
        <RideIllustration class="illustration" focusable="false" aria-hidden="true"/>
      </div>
    </div>
  </Layout>
</template>


<script>

  import RideIllustration from "~/assets/images/ride.svg";

  export default {
    components: {
      RideIllustration,
    },
    metaInfo: {
      title: "Erreur 404 - DesignGouv",
      meta: [{
          name: 'description',
          content: "Oups, cette page n'existe pas."
        }],
      }
    }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";
  
</style>
