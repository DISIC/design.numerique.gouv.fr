<template>
  <Layout class="design-office-page">
      <h1>Le bureau du Design</h1>
      <Bureau class="design-office--fs"/>
  </Layout>
</template>


<script>

  import Layout from "~/layouts/Empty.vue"
  import Bureau from "~/components/Bureau.vue"

  export default {
    components: {
      Layout,
      Bureau,
    },
    metaInfo: {
      title: "Le bureau du Design",
      meta: [
        { name: "description", content: "Cet espace est dédié aux agents publics soucieux de créer des services numériques accessibles pour tous." }
      ],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .design-office-fs-page {

  }

</style>
