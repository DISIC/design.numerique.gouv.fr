<template>
  <Layout>
    <div class="dg-content fr-px-2w">
      <div class="dg-cover dg-cover--linear fr-mb-4w">
        <div class="dg-cover__container fr-mb-1w">
          <nav aria-label="Breadcrumb" class="fr-breadcrumb">
            <ol class="fr-breadcrumb__list">
              <li>
                <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
              </li>
              <li>
                <span aria-current="page">Bientôt</span>
              </li>
            </ol>
          </nav>

          <h1>Bientôt, vous pourrez faire des audits d’accessibilité numérique entièrement en ligne</h1>
          <p class="fr-text--lead">
            Vous souhaitez être informé·e de la sortie de <strong>Confiture</strong> notre outil pour réaliser des audits RGAA et faciliter leur lecture ?
          </p>
        </div>
      </div>

      <div
        v-if="!this.$route.query.poste || this.poste.intitule"
        class="dg-content dg-content--xs fr-mt-6w"
      >
        <form class="form" v-on:submit.prevent="addInterestedUser">
          <div class="fr-input-group">
            <label class="fr-label" for="email"
              >Votre adresse e-mail
              <span class="fr-hint-text"
                >L’adresse e-mail doit être au format prenom@mail.fr</span
              ></label
            >
            <input
              class="fr-input"
              type="email"
              id="email"
              v-model="form.email"
              required
            />
          </div>
          <button class="fr-btn" id="submit" type="submit">
          Je m’inscris
          </button>
          <p class="fr-mt-2w">
            <small>Conformément à la règlementation, vous disposez d’un droit
              d’opposition et d’un droit à la limitation du traitement de
              données vous concernant, ainsi que d’un droit d’accès, de
              rectification, de portabilité et d’effacement de vos données. Vous
              pouvez exercer vos droits en nous écrivant à
              contact@design.numerique.gouv.fr.</small
            >
          </p>
        </form>
      </div>
    </div>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Bientôt",
    meta: [
      {
        name: "description",
        content:
          "Être informé·e de la sortie de Confiture : notre outil pour réaliser des audits RGAA et faciliter leur lecture.",
      },
      {
        property: "og:title",
        content: "Être informé·e de la sortie de Confiture",
      },
      {
        property: "og:description",
        content:
          "Être informé·e de la sortie de Confiture : notre outil pour réaliser des audits RGAA et faciliter leur lecture.",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv",
      },
      {
        name: "twitter:title",
        content: "Être informé·e de la sortie de Confiture",
      },
      {
        name: "twitter:description",
        content:
          "Être informé·e de la sortie de Confiture : notre outil pour réaliser des audits RGAA et faciliter leur lecture.",
      },
    ],
  },
  data() {
    return {
      poste: {},
      form: {
        email: "",
      },
    };
  },
  methods: {
    addInterestedUser() {
      document.getElementById("submit").disabled = true;
      var Airtable = require("airtable");
      var base = new Airtable({
        apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY,
      }).base(process.env.GRIDSOME_AIRTABLE_CONFITURE_BASE);
      base("BetaNews").create(
        [
          {
            fields: {
              fldkSQ2bs5QcaQrbw: this.form.email,
            },
          },
        ],
        function (err, records) {
          if (err) {
            window.location.href = "/formulaire/erreur/";
            console.error(err);
            return;
          } else {
            window.location.href = "/formulaire/succes/";
          }
        }
      );
    },
  },
};
</script>
