<template>
  <Layout class="design-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Design class="h1__icon" focusable="false" aria-hidden="true"/>Le Design numérique</h1>

      <p class="cover__subtitle">Le design permet de rendre les services numériques plus
        simples, accessibles et agréables pour tous. Concevoir par le design, c’est
        mettre en œuvre des solutions centrées sur les usagers, tout en s’appuyant
        sur de bonnes pratiques reconnues.</p>

      <DesignIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

  </Layout>
</template>


<script>

  import Design from "~/assets/images/design.svg"
  import DesignIllustration from "~/assets/images/designIllustration.svg"

  export default {
    components: {
      Design,
      DesignIllustration,
    },
    metaInfo: {
      title: "Design numérique - DesignGouv",
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
