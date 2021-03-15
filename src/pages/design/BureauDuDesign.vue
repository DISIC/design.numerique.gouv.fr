<template>
  <Layout class="design-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Design class="h1__icon" focusable="false" aria-hidden="true"/>Le bureau du Design</h1>

      <p class="cover__subtitle">Le design permet de rendre les services numériques plus
        simples, accessibles et agréables pour tous.</p>

      </div>
    </div>

    <div class="content">

      <Bureau/>

    </div>

  </Layout>
</template>


<script>

  import Design from "~/assets/images/design.svg"
  import Bureau from "~/components/Bureau.vue"

  export default {
    components: {
      Design,
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

  .design-page {

  }

</style>
