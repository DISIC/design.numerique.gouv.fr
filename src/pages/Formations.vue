<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Les formations</h1>

      <p class="subtitle">De nombreuses formations sont disponibles, certaines accessibles gratuitement, que ce soit pour vous former personnellement ou en équipe sur les divers sujets liés au design et à la qualité des services numérique, l’accessibilité etc. Nous proposons également un accompagnement sur ces sujets.</p>

      </div>
    </div>

    <div class="content">

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Lifebuoy icon" src="~/assets/images/services.svg"/>
          <span class="highlight">Les bureaux ouverts</span>
        </h2>
        <p>Rencontrez librement un designer qui prendra du temps pour répondre à vos questions, vous informer, vous donner des retours.</p>

        <strong>Qui</strong>
        <p>Qui que vous soyez, du moment que vous êtes un acteur public et que vous menez un projet numérique.</p>

        <strong>Quand</strong>
        <p>Dès que vous en avez besoin, nous sommes disponibles librement chaque vendredi de 10h à 12h, dans nos bureaux 20 avenue de Ségur 75007 Paris.</p>

        <strong>Comment</strong>
        <p>Très simplement, en prenant <a href="https://calendly.com/designgouv" target="_blank">rendez-vous ici.</a></p>

      </div>

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Lifebuoy icon" src="~/assets/images/services.svg"/>
          <span class="highlight">Les revues de conception</span>
        </h2>
        <p>Lors d'un atelier d'un demi-journée, présentez votre service à des membres de la communauté DesignGouv (designers, chefs de projet, etc.) qui vous aideront à mener à bien votre projet. Obtenez des avis, des conseils, des idées, des retours d'expérience.</p>

        <strong>Qui</strong>
        <p>Qui que vous soyez, du moment que vous êtes un acteur public et que vous menez un projet numérique.</p>

        <strong>Quand</strong>
        <p>Les revues de conception sont des évènements que nous organisons une fois tous les deux mois. Nous annoncerons bientôt les dates des premiers évènements !</p>

        <strong>Comment</strong>
        <p>Nous lancerons bientôt les inscriptions.</p>

      </div>

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Lifebuoy icon" src="~/assets/images/services.svg"/>
          <span class="highlight">Le commando UX</span>
        </h2>
        <p>Faites intervenir notre équipe pour vous aider à améliorer vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <strong>Qui</strong>
        <p>En priorité, les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" target="_blank">Observatoire de la qualité des démarches en ligne</a>. Votre démarche n'en fait pas partie ? Rencontrez-nous lors de nos Bureaux ouverts !</p>

        <strong>Quand</strong>
        <p>Nous conviendrons ensemble d'un premier rendez-vous pour discuter plus en détails de votre démarche et vous présenter un premier diagnostique rapide.</p>

        <strong>Comment</strong>
        <p>En nous contactant par email à l'adresse .</p>

      </div>

    </div>

    <div class="card" style="--color: #168376; --colorLight: #3CDDCA;">
      <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

      <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="h2"><h2>Rejoignez la communauté&nbsp;!</h2></a></p>

      <p class="homeItemText">DesignGouv, c’est aussi une communauté qui réunis celles et ceux qui s’engagent pour promouvoir et faire vivre la culture design au sein des administrations. Nous organisons régulièrement des évènements, des rencontres, des discussions. Rejoignez-nous !</p>

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
      inset 0 -0.05em $brown-light,
      inset 0 -0.3em white;
    display: inline;
    transition: .1s all;

    &:hover {
      box-shadow:
        inset 0 -0.05em $brown-light,
        inset 0 -1.4em white;
    }
  }

  .highlight {
    box-shadow:
      inset 0 -0.05em white,
      inset 0 -1.4em $brown-light;
  }

  .cover {
    background-color: $brown-light;
  }

  .content {

    a {
      color: $brown;
    }

    strong {
      color: $brown;
    }
  }

</style>
