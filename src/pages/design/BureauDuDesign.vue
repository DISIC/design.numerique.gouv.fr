<template>
  <Layout class="design-office-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/design/">Design</g-link>
        </li>
        <li>
          <span aria-current="page">Le bureau du design</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Design class="h1__icon" focusable="false" aria-hidden="true"/>Le bureau du Design</h1>

      <p class="cover__subtitle">
        Naviguez dans le bureau du Design et laissez-vous guider afin de réaliser des services publics numériques simples, accessibles et agréables pour tous.
      </p>

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

  .design-office-page {

  }

</style>
