<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Le Design numérique</h1>

      <p>Bienvenue ! Cet espace est dédié aux agents publics soucieux de créer des services numériques accessibles pour tous.</p>

      </div>
    </div>

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
  },
  metaInfo: {
    title: "DesignGouv - Le design numérique au service des administrations",
    meta: [
      { name: "description", content: "Cet espace est dédié aux agents publics soucieux de créer des services numériques accessibles pour tous." }
    ],
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/_vars.scss";

  h1 {
    box-shadow:
      inset 0 -0.05em white,
      inset 0 -0.4em $blue-light;
    display: inline;
    transition: .1s all;

    &:hover {
      box-shadow:
        inset 0 -0.05em white,
        inset 0 -1.4em $blue-light;
    }
  }

</style>
