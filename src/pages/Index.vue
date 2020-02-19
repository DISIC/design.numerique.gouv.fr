<template>
  <Layout :logoLarge="true">

    <div class="cover">
      <div class="coverContainer">

        <p class="logo"><g-image alt="DesignGouv" src="~/assets/images/logoBeta.svg"/></p>

        <p>
          <g-link to="/design"><g-image class="icon" alt="Le design numérique en détails" src="~/assets/images/design.svg"/></g-link>
          <g-link to="/outils"><g-image class="icon" alt="J'accède aux outils" src="~/assets/images/tools.svg"/></g-link>
          <g-link to="/accompagnement"><g-image class="icon" alt="J'ai un besoin en Design" src="~/assets/images/services.svg"/></g-link>
          <g-link to="/formations"><g-image class="icon" alt="Je découvre les formations" src="~/assets/images/courses.svg"/></g-link>
          <a href="#communaute"><g-image class="icon" alt="La communauté" src="~/assets/images/community.svg"/></a>
        </p>

        <p>Bienvenue ! Cet espace est dédié aux agents publics de l'État soucieux de créer des services numériques accessibles pour tous.</p>

      </div>
    </div>

    <HomeItem
      title="Découvrez le Design numérique"
      text="Le design permet de rendre les <b>services</b> numériques plus <b>simples</b>, <b>accessibles</b> et <b>agréables</b> pour tous les usagers. Concevoir par le design, c’est mettre en oeuvre une démarche de création centrée sur les usagers, tout en s’appuyant sur de bonnes pratiques reconnues. Nous vous expliquons tout cela en détails."
      buttonText="Le design numérique →"
      link="/design"
      iconSrc="design.svg"
      iconAlt="Star icon"
      color="#2854D6"
      colorLight="#ACBDF1"
    />

    <HomeItem
      title="Les outils à votre disposition"
      text="De nombreux outils peuvent vous aider à améliorer la qualité de vos démarches vous-même. Utilisabilité, accessibilité, protection des données personnelles, bonnes pratiques, laissez vous guider."
      buttonText="J'accède aux outils →"
      link="/outils"
      iconSrc="tools.svg"
      iconAlt="Tool icon"
      color="#37863D"
      colorLight="#84CD86"
    />

    <HomeItem
      title="Un besoin en Design ? Nous vous aidons."
      text="Vous avez un besoin urgent ou des questions concernant l’amélioration de vos démarches, nous pouvons vous accompagner."
      buttonText="J'ai un besoin en Design →"
      link="/services"
      iconSrc="services.svg"
      iconAlt="Lifebuoy icon"
      color="#EB1000"
      colorLight="#FFA89E"
    />

    <HomeItem
      title="Des formations pour vous et vos équipes"
      text="De nombreuses formations sont disponibles, certaines accessibles gratuitement, que ce soit pour vous former personnellement ou en équipe sur les divers sujets liés au design et à la qualité des services numérique, l’accessibilité etc. Nous proposons également un accompagnement sur ces sujets."
      buttonText="Je découvre les formations →"
      link="/formations"
      iconSrc="courses.svg"
      iconAlt="Book icon"
      color="#90731D"
      colorLight="#E2C56F"
    />

    <div class="card" id="communaute" style="--color: #168376; --colorLight: #3CDDCA;">
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
    HomeItem,
  },
  metaInfo: {
    title: "DesignGouv - Le design numérique au service des administrations",
    meta: [
      { name: "description", content: "Cet espace est dédié aux agents publics de l'État soucieux de créer des services numériques accessibles pour tous." }
    ],
  }
}
</script>
