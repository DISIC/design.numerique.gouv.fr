<template>
  <Layout>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/">Commando UX</g-link>
        </li>
        <li>
          <g-link
            to="/accessibilite-numerique/cadre-legal"
            aria-current="page"
          ><span v-html="$page.challenge.title" /></g-link>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
      <div class="cover__container">
        <g-image :src="$page.challenge.illustration" class="cover__illustration--small" aria-hidden="true"/>
        <h1>{{ $page.challenge.title }}</h1>
        <p class="cover__subtitle">{{ $page.challenge.description }}</p>
      </div>
    </div>

    <div class="content content--challenge">

      <section>
        <h2>
        Éléments clés
        </h2>
        <p>
          <strong>Ministère bénéficiant du défi</strong>
          <br />
          <span v-html="$page.challenge.department" />
        </p>
        <p>
          <strong>Administration bénéficiant du défi</strong>
          <br />
          <span v-html="$page.challenge.direction" />
        </p>
        <p>
          <strong>Localisation du défi</strong>
          <br />
          <span v-html="$page.challenge.place" />
        </p>
        <p>
          <strong>Profils recherchés</strong>
          <br />
          <span v-html="$page.challenge.poste" />
        </p>

        <div v-html="$page.challenge.content" />
      </section>

      <!-- <div class="cta">
        <a
          href="https://www.demarches-simplifiees.fr/commencer/appel-a-candidatures-commando-ux"
          target="_blank"
          class="button">
          Canditater à ce défi !
        </a>
        <p>Jusqu'au dimanche 19 juillet 2020 à 23h59</p>
      </div> -->

    </div>
  </Layout>
</template>

<script>
import Services from "~/assets/images/services.svg";
import CommandoUX from "~/assets/images/services.svg";
import CommandouxIllustration from "~/assets/images/commandouxIllustration.svg";

export default {
  components: {
    Services,
    CommandoUX,
    CommandouxIllustration
  },
  metaInfo() {
    return {
      title: this.$page.challenge.title,
      meta: [
        {
          name: "description",
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
        {
          property: 'og:title',
          content: this.$page.challenge.title
        },
        {
          property: 'og:description',
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
          {
          property: 'og:image',
          content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
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
          content: this.$page.challenge.title
        },
        {
          name: "twitter:description",
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
        {
          name: "twitter:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
        },
      ]
    };
  }
};
</script>

<page-query>
query Challenge ($id: ID!) {
  challenge: challenge (id: $id) {
    description
    department
    direction
    content
    place
    title
    poste
    description
    illustration
  }
}
</page-query>

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

.button {
    text-decoration: none;
    border-color: $blue;
    background-color: $blue;
    color: white;
    border-radius: 32px;
    padding: 8px 24px;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;

    @media only screen and (max-width: $mobile-max-width) {
      font-size: 0.875em;
    }

    &:hover {
      background: $red;
      border-color: $red;
    }
  }

  .cta {
    text-align: center;
    margin-top: 28px;

    > p {
      margin: 0;
      display: block;
      font-size: 0.9em;
      color: $mid-gray;
    }
  }


.content {

  a {
    svg {
      padding-right: 12px;
      transition: 0.1s all;
    }

    &:hover {
      svg {
        padding-left: 8px;
        padding-right: 4px;
      }
    }
  }

  .subsection {
    margin-bottom: 40px;
  }
}
</style>
