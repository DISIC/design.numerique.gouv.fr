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
        <CommandouxIllustration class="cover__illustration--small" aria-hidden="true" />
        <!-- <p class="cover__subhead"><Services class="cover__subhead-icon" aria-hidden="true"/>Commando UX</p> -->
        <h1>{{ $page.challenge.title }}</h1>
        <p class="cover__subtitle">
          <span v-html="$page.challenge.name" />
        </p>
        <!-- tag designer et/ou developpeur a ajouter -->
        <section>
        <div class="cta">
        <a
          href="https://www.demarches-simplifiees.fr/commencer/appel-a-defis-commando-ux"
          target="_blank"
          class="button"
        >Canditater à ce défi !</a>
        <p>Jusqu'au vendredi 17 juillet 2020 à 23h59</p>
        </div>
      </section>
      </div>
    </div>

    <div class="content challenge">


      <section>
        <h2>
        Éléments clé
        </h2>
        <p>
          <strong>Ministère bénéficiant du défi</strong>
          <br />
          <span v-html="$page.challenge.departement" />
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

      <section>
        <div class="cta">
        <a
          href="https://www.demarches-simplifiees.fr/commencer/appel-a-defis-commando-ux"
          target="_blank"
          class="button"
        >Canditater à ce défi !</a>
        <p>Jusqu'au vendredi 17 juillet 2020 à 23h59</p>
        </div>
      </section>
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
          content: this.$page.challenge.name
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
    name
    departement
    direction
    content
    place
    title
    poste
  }
}
</page-query>

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

// p{
//   margin:0;
// }

.challenge{
  h3 {
    color: $blue;
    margin-top:36px;
  }

  h2{
    margin-top: 54px;
  }

  // h3, h4{
  //   margin-bottom:0px;
  // }
}

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
    margin-top:36px;

    > p {
      margin: 0;
      display: block;
      font-size: 0.9em;
      color: $mid-gray;
    }

    @media only screen and (max-width: $mobile-max-width) {
      text-align: left;
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

  .cta {
    text-align: center;

    > p {
      margin: 0;
      display: block;
      font-size: 0.9em;
      color: $mid-gray;
    }

    @media only screen and (max-width: $mobile-max-width) {
      text-align: left;
    }
  }
}
</style>

