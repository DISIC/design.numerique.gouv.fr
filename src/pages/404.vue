<template>
  <Layout>
    <div class="dg-content fr-px-2w fr-pt-4w">
      <h1>Oups, cette page n'existe pas</h1>
      <p>Vous pouvez <a href="/">retourner à l'accueil</a>, consulter le <a href="/misc/plan-du-site/">plan du site</a> ou aller faire un tour de vélo ;).</p><br />
      <RideIllustration class="illustration" focusable="false" aria-hidden="true"/>
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
      title: "Page non trouvée",
      meta: [{
          name: 'description',
          content: "Oups, cette page n'existe pas."
        }],
      }
    }
</script>
