<template>
  <Layout :logoLarge="true">

    <div class="cover">
      <div class="coverContainer">

        <h1>DesignGouv <span class="beta">ßeta</span></h1>

        <p class="subtitle">Bienvenue&nbsp;! Cet espace est dédié aux agents publics soucieux de créer des services numériques de qualité et accessibles pour tous.</p>

      </div>
    </div>

    <HomeItem
      title="Découvrez le Design numérique"
      text="Le design permet de rendre les <b>services</b> numériques plus <b>simples</b>,
      <b>accessibles</b> et <b>agréables</b> pour tous. Concevoir par
      le design, c’est mettre en œuvre des solutions centrées sur les
      usagers, tout en s’appuyant sur de bonnes pratiques reconnues. Et c'est aussi un métier&nbsp;! Nous vous présenterons tout cela en détail bientôt."
      buttonText="Bientôt disponible !"
      v-bind:buttonActivated="false"
      link="/"
      iconSrc="design.svg"
      iconAlt="Star icon"
      color="#2854D6"
      colorLight="#ACBDF1"
    />

    <HomeItem
      title="Design & accessibilité : les outils"
      text="De nombreux outils peuvent vous aider à améliorer vous-même la qualité de vos
      démarches. <b>Bonnes pratiques</b>, <b>expérience utilisateur</b>, <b>accessibilité</b>&nbsp;:
      nous les avons réunis pour vous."
      buttonText="J'accède aux outils"
      v-bind:buttonActivated="true"
      link="/outils"
      iconSrc="tools.svg"
      iconAlt="Tool icon"
      color="#37863D"
      colorLight="#84CD86"
    />

    <HomeItem
      title="Besoin d'aide ? Nous vous accompagnons."
      text="Vous avez des besoins en design&nbsp;?
        Vous vous <b>posez des questions</b> sur les sujets d'accessibilité&nbsp;? Vous souhaitez <b>obtenir des
        retours</b>, <b>demander des conseils</b> pour le développement ou l'amélioration
        de votre service&nbsp;? Nous vous aidons&nbsp;!"
      buttonText="J'ai besoin d'aide"
      v-bind:buttonActivated="true"
      link="/services"
      iconSrc="services.svg"
      iconAlt="Lifebuoy icon"
      color="#EB1000"
      colorLight="#FFA89E"
    />

    <HomeItem
      title="Des formations pour vous et vos équipes"
      text="De nombreuses formations sont disponibles, certaines accessibles
        <b>gratuitement</b>, pour vous former <b>personnellement</b>
        ou <b>en équipe</b> sur les divers sujets liés au design, à la qualité des
        services numériques et à l’accessibilité."
      buttonText="Je découvre les formations"
      v-bind:buttonActivated="true"
      link="/formations"
      iconSrc="courses.svg"
      iconAlt="Book icon"
      color="#90731D"
      colorLight="#E2C56F"
    />

    <div class="card" id="communaute" style="--color: #168376; --colorLight: #3CDDCA;">
      <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

      <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="title">Rejoignez la communauté&nbsp;!</a></p>

      <p class="description">DesignGouv, c’est aussi une communauté qui réunit celles et ceux qui s’engagent pour promouvoir et faire vivre la culture design au sein des administrations. Nous organisons régulièrement des événements, des rencontres et des discussions. Rejoignez-nous&nbsp;!</p>

      <a href="http://eepurl.com/gLJCsb" target="_blank" class="button">Je m'inscris à la newsletter</a>

      <p>Sur Twitter : <a href="https://twitter.com/design_gouv" title="Twitter" target="_blank">@design_gouv</a></p>
    </div>

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
    HomeItem,
  },
  metaInfo: {
    title: "DesignGouv - Le design numérique au service des administrations",
    meta: [{
      name: "description",
      content: "Comment créer des services numériques de qualité et accessibles pour tous."
    },
    {
      property: "og:title",
      content: "DesignGouv - Le design numérique au service des administrations"
    },
    {
      property: "og:description",
      content: "Comment créer des services numériques de qualité et accessibles pour tous."
    },
    {
      property: "og:image",
      content: "https://designgouv.fr/designGouv.png"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:site",
      content: "@Design_Gouv"
    },
    {
      name: "twitter:title",
      content: "DesignGouv - Le design numérique au service des administrations"
    },
    {
      name: "twitter:description",
      content: "Comment créer des services numériques de qualité et accessibles pour tous."
    },
    {
      name: "twitter:image",
      content: "https://designgouv.fr/designGouv.png"
    }],
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/_vars.scss";

  .cover {
    background-color: $blue;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 4em;
      color: white;

      .beta {
        font-weight: 500;
      }

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 2em;
      }
    }

    .subtitle {
      color: white;
      font-weight: 600;
    }
  }

</style>
