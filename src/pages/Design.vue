<template>
  <Layout class="design-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Design class="h1__icon" focusable="false" aria-hidden="true"/>Design numérique</h1>

      <p class="cover__subtitle">Le design permet de rendre les services numériques plus
        simples, accessibles et agréables pour tous. Concevoir par le design, c’est
        mettre en œuvre des solutions centrées sur les usagers, tout en s’appuyant
        sur de bonnes pratiques reconnues.</p>

      </div>
    </div>

    <div class="content">
      <section>
        <p>Pour vous aider dans la conception de vos services publics numériques, découvrez le Bureau du Design !</p>
        <g-link to="/design/bureau-du-design/" class="button">Se rendre au bureau<font-awesome :icon="['fas', 'arrow-right']" class="button__right-icon" transform="shrink-3"  aria-hidden="true" height="16px" width="16px"/></g-link>
      </section>
    </div>

  </Layout>
</template>


<script>

  import Design from "~/assets/images/design.svg"

  export default {
    components: {
      Design,
    },
    metaInfo: {
      title: "Design numérique",
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
