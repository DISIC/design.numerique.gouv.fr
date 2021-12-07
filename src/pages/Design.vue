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