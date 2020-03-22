<template>
  <Layout :logoLarge="true">

    <div class="cover">
      <div class="coverContainer">

        <h1>DesignGouv <span class="beta">ßeta</span></h1>

        <p class="subtitle">Bienvenue&nbsp;! Cet espace est dédié aux agents publics soucieux de créer des services numériques de qualité et accessibles pour tous.</p>

      </div>
    </div>

    <div class="message">

        <strong>COVID-19</strong>

        <p>Nous avons créé des attestations de déplacements accessibles et inclusives pour toutes et tous, à imprimer ou à recopier.</p>

        <g-link to="/covid-19" class="button">
          Accéder aux documents
          <span class='arrow'>→</span>
        </g-link>

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
      title="Accessibilité numérique"
      text="De nombreux outils peuvent vous aider à améliorer vous-même la qualité de vos
      démarches. <b>Bonnes pratiques</b>, <b>expérience utilisateur</b>, <b>accessibilité</b>&nbsp;:
      nous les avons réunis pour vous."
      buttonText="J'accède aux outils"
      v-bind:buttonActivated="true"
      link="/accessibilite-numerique"
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

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
    HomeItem
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
    },
    {
      name: "google-site-verification",
      content: "3lr6jhip11QgAYBjIlgBMRAi7CfsjE8mQygaLbZo68A"
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

  .message {
    text-align: center;
    background-color: $light-gray;
    padding: 24px 48px 16px 48px;
    margin-top: -48px;
    margin-bottom: 108px;
    border-radius: 32px;

    @media only screen and (max-width: $mobileMaxWidth) {
      margin-top: -16px;
      margin-bottom: 80px;
      padding: 24px 16px 16px 16px;
    }

    strong {
      font-size: 1.5em;
    }

    .button {
      text-decoration: none;
      color: $gray;
      border: 2px solid $gray;
      background-color: white;
      border-radius: 32px;
      padding: 8px 24px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 1em;
      }

      &:hover {
        background: $gray;
        color: white;
      }
    }
  }

</style>
