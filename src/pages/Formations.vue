<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Les formations</h1>

      <p class="subtitle">De nombreuses formations sont disponibles, certaines accessibles
        gratuitement, que ce soit pour vous former personnellement ou en équipe
        sur les divers sujets liés au design, à la qualité des services numérique,
        à l’accessibilité etc.</p>

      </div>
    </div>

    <div class="content">

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="highlight">Initiations</span>
        </h2>
        <p>Initier vous gratuitement, c'est une bonne manière de découvrir rapidement un nouveau sujet&nbsp;!</p>

        <h3>Design</h3>
        <p>
          <a href="http://eepurl.com/gLJCsb" target="_blank" class="buttonLight">Initiez-vous au Design</a>, 6 heures, gratuit.</br>
          <a href="http://eepurl.com/gLJCsb" target="_blank" class="buttonLight">UX design : découvrez les fondamentaux</a>, 8 heures, gratuit.
        </p>

        <h3>Accessibilité</h3>
        <p>
          <a href="https://www.fun-mooc.fr/courses/inria/41012/session01/about" target="_blank" class="buttonLight">L'accessibilité numérique</a>, 15 heures, gratuit.</br>
          <a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" target="_blank" class="buttonLight">Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.
        </p>

      </div>

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="highlight">Certifications</span>
        </h2>
        <p>Avec les formations certifiantes, vous pouvez acquerir rapidement des
          compétences sur les sujets qui vous intéressent.</p>

        <h3>Qualité</h3>
        <p>
          <a href="https://www.opquast.com/formation/" target="_blank" class="buttonLight"> Maîtrise de la qualité en projet web</a>, 14 heures, 250€ HT.</br>
        </p>

      </div>

      <div class="">

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="highlight">Diplômes</span>
        </h2>
        <p>Les formations diplômantes vous permettent de vous former à un nouveau
          metier, pour en devenir expert.</p>

        <h3>Bientôt disponible</h3>

      </div>

    </div>

    <div class="card" style="--color: #168376; --colorLight: #3CDDCA;">
      <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

      <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="h2"><h2>Rejoignez la communauté&nbsp;!</h2></a></p>

      <p class="homeItemText">DesignGouv, c’est aussi une communauté qui réunis celles et ceux qui s’engagent pour promouvoir et faire vivre la culture design au sein des administrations. Nous organisons régulièrement des évènements, des rencontres, des discussions. Rejoignez-nous&nbsp;!</p>

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

    .buttonLight {
      text-decoration: none;
      background-color: white;
      font-weight: bold;
      display: inline-block;
      margin: 0 0 16px 0;

      &:hover {
        .arrow {
          padding: 0 0 0 10px;
        }
      }
    }
  }

</style>
