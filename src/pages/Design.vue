<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Le Design numérique</h1>

      <p>Bienvenue ! Cet espace est dédié aux agents publics de l'État soucieux de créer des services numériques accessibles pour tous.</p>

      </div>
    </div>

    <div class="card" style="--color: #168376; --colorLight: #3CDDCA;">
      <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

      <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="title">Rejoignez la communauté&nbsp;!</a></p>

      <p class="homeItemText">DesignGouv, c’est aussi une communauté qui réunit celles et ceux qui s’engagent pour promouvoir et faire vivre la culture design au sein des administrations. Nous organisons régulièrement des événements, des rencontres et des discussions. Rejoignez-nous&nbsp;!</p>

      <a href="http://eepurl.com/gLJCsb" target="_blank" class="button">Je m'inscris à la newsletter</a>

      <p>Sur Twitter : <a href="https://twitter.com/designgouv" title="Twitter" target="_blank">@DesignGouv</a></p>
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
      { name: "description", content: "Cet espace est dédié aux agents publics de l'État soucieux de créer des services numériques accessibles pour tous." }
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
