<template>

  <Layout>

    <div class="cover">
      <div class="container">

        <h1>Concevons des services publics numériques <span class="highlight">accessibles</span>, <span class="highlight">inclusifs</span> et <span class="highlight">humains</span>.</h1>

        <!-- <g-image alt="Icone design" src="~/assets/images/design.svg"/>
        <g-image alt="Icone accesibilité" src="~/assets/images/accessibilite.svg"/>
        <g-image alt="Icone services" src="~/assets/images/services.svg"/>
        <g-image alt="Icone formations" src="~/assets/images/formations.svg"/> -->

        <p class="subtitle"><b>DesignGouv</b> rassemble les agents publics soucieux de la qualité des services numériques et met à disposition des outils pour leur amélioration.</p>

      </div>
    </div>

    <div class="content">

      <div class="message covid">

          <strong>COVID-19</strong>

          <p>Retrouvez les attestations de déplacements accessibles et inclusives ainsi qu'une liste d'initiatives pour s'impliquer et aider dans différents domaines.</p>

          <g-link to="/covid-19" class="button">
            Accéder aux documents et aux initiatives&nbsp;<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>

      </div>

      <section class="item">
        <!-- <g-link to="/design/"> -->

          <Design class="item-icon" title="Icon accessibilité"/>

          <h2>Design des services numériques</h2>

          <p>
            Le design permet de rendre les <b>services</b> numériques plus <b>simples</b>,
            <b>accessibles</b> et <b>agréables</b> pour tous. Concevoir par
            le design, c’est mettre en œuvre des solutions centrées sur les
            usagers, tout en s’appuyant sur de bonnes pratiques reconnues. Et c'est
            aussi un métier&nbsp;! Nous vous présenterons tout cela en détail bientôt.
          </p>

          <p class="disabled">
            Bientôt disponible !
          </p>

        <!-- </g-link> -->
      </section>

      <section class="item">
        <g-link to="/accessibilite-numerique/">

          <Accessibilite class="item-icon" title="Icon accessibilité"/>

          <h2>Accessibilité numérique</h2>

          <p>
            L'accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes handicapées. On vous dit tout.
          </p>

          <p class="button blue shadow">
            L'accessibilité en détails<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </p>

        </g-link>
      </section>

      <section class="item">
        <g-link to="/services/">

          <Services class="item-icon" title="Icon services"/>

          <h2>Besoin d'aide ? Nous vous accompagnons.</h2>

          <p>
            Vous avez des besoins en design&nbsp;?
            Vous vous <b>posez des questions</b> sur les sujets d'accessibilité&nbsp;? Vous souhaitez <b>obtenir des
            retours</b>, <b>demander des conseils</b> pour le développement ou l'amélioration
            de votre service&nbsp;? Nous vous aidons&nbsp;!
          </p>

          <p class="button blue shadow">
            J'ai besoin d'aide<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </p>

        </g-link>
      </section>

      <section class="item">
        <g-link to="/formations/">

          <Formations class="item-icon" title="Icon formations"/>

          <h2>Les formations pour vous et vos équipes</h2>

          <p>
            De nombreuses formations sont disponibles, certaines accessibles
            <b>gratuitement</b>, pour vous former <b>personnellement</b>
            ou <b>en équipe</b> sur les divers sujets liés au design, à la qualité des
            services numériques et à l’accessibilité.
          </p>

          <p class="button blue shadow">
            Je découvre les formations<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </p>

        </g-link>
      </section>

    </div>

  </Layout>

</template>


<script>

import Design from '~/assets/images/design.svg'
import Accessibilite from '~/assets/images/accessibilite.svg'
import Services from '~/assets/images/services.svg'
import Formations from '~/assets/images/formations.svg'

export default {
  components: {
    Design,
    Accessibilite,
    Services,
    Formations,
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

  h1 {
    margin-top: 0px;
  }

  .covid {
    margin-bottom: 80px;

    @media only screen and (max-width: $mobileMaxWidth) {
      margin-bottom: 64px;
    }
  }

  .item {

    h2 {
      margin: 16px 0 20px 0;
    }

    .item-icon {
      transition: .2s all;
    }

    a {
      display: block;
      text-decoration: none;
      color: $black;
    }

    .button {
      margin-top: 8px;
    }

    .disabled {
      font-weight: bold;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }
    }

    &:hover, &:focus {
      .item-icon {
        transform: rotate(180deg);
      }

      .button {
        color: white;
        background-color: $blue;
      }
    }
  }

</style>
