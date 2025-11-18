<template>
  <Layout>
    <div class="dg-content fr-px-0 fr-px-md-2w">
      <div class="dg-cover dg-cover--linear fr-mb-4w">
        <div class="dg-cover__container fr-mb-1w">
          <nav aria-label="Breadcrumb" class="fr-breadcrumb">
            <ol class="fr-breadcrumb__list">
              <li>
                <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
              </li>
              <li>
                <g-link to="/accompagnement/" class="fr-breadcrumb__link"
                  >Accompagnement</g-link
                >
              </li>
              <li>
                <a class="fr-breadcrumb__link" aria-current="page"
                  >Obtenir un accompagnement</a
                >
              </li>
            </ol>
          </nav>

          <h1>Obtenir un accompagnement</h1>
          <p class="fr-text--lead">
            Chaque accompagnement est sur-mesure pour s’adapter à vos besoins,
            votre équipe, vos délais et vos objectifs. Tout ça financé par la
            direction interministérielle du numérique 🙂. Nos accompagnements
            design et accessibilité portent principalement sur les démarches
            essentielles et les outils à destination des agents ayant pour
            objectif l’amélioration de l’expérience utilisateur et la mise en
            conformité avec le RGAA.
          </p>
        </div>
      </div>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <form class="form" v-on:submit.prevent="addCandidate">
          <p>
            <small
              >Sauf mention contraire, tous les champs sont obligatoires.</small
            >
          </p>
          <div class="fr-input-group">
            <label class="fr-label" for="name">Votre nom</label>
            <input
              class="fr-input"
              type="text"
              id="name"
              v-model="form.name"
              required
            />
          </div>
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
          <div class="fr-input-group">
            <label class="fr-label" for="service"
              >Votre entité
              <span class="fr-hint-text"
                >Précisez également vos ministère et direction de
                rattachement</span
              ></label
            >
            <input
              class="fr-input"
              type="text"
              id="service"
              v-model="form.service"
              required
            />
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="url"
              >L'URL de votre site (optionnel)</label
            >
            <input class="fr-input" type="text" id="url" v-model="form.url" />
          </div>
          <fieldset
            :class="[
              'fr-fieldset',
              { 'fr-checkbox-group--error': errors.public_cible },
            ]"
            id="public-cible"
            aria-labelledby="public-cible-legend public-cible-messages"
          >
            <legend
              class="fr-fieldset__legend--regular fr-fieldset__legend"
              id="public-cible-legend"
            >
              Votre public cible
            </legend>
            <div
              v-for="(item, index) in this.public_cible"
              :key="`public-cible-${item}`"
              class="fr-fieldset__element fr-fieldset__element"
            >
              <div class="fr-checkbox-group">
                <input
                  name="public-cible"
                  :id="`checkbox-${index}-public-cible`"
                  type="checkbox"
                  :value="item"
                  :aria-describedby="`checkbox-${index}-public-cible-messages`"
                  v-model="form.public_cible"
                />
                <label
                  class="fr-label"
                  :for="`checkbox-${index}-public-cible`"
                  >{{ item }}</label
                >
                <div
                  class="fr-messages-group"
                  :id="`checkbox-${index}-public-cible-messages`"
                  aria-live="polite"
                ></div>
              </div>
            </div>
            <div
              class="fr-messages-group"
              id="public-cible-messages"
              aria-live="polite"
            >
              <div
                v-if="errors.public_cible"
                class="fr-error-text"
                id="public-cible-messages"
                aria-live="polite"
              >
                {{ errors.public_cible }}
              </div>
            </div>
          </fieldset>
          <fieldset
            class="fr-fieldset"
            id="demarche-essentielle"
            aria-labelledby="demarche-essentielle-legend demarche-essentielle-messages"
          >
            <legend
              class="fr-fieldset__legend--regular fr-fieldset__legend fa-label"
              id="demarche-essentielle-legend"
            >
              Votre démarche est-elle identifiée comme une démarche essentielle
              ?<span class="fr-hint-text"
                ><a href=""
                  >Accéder à la liste des démarches essentielles</a
                ></span
              >
            </legend>
            <div
              v-for="(item, index) in ['Oui', 'Non']"
              :key="`demarche-essentielle-${index}`"
              class="fr-fieldset__element"
            >
              <div class="fr-radio-group">
                <input
                  type="radio"
                  :id="`radio-${index}`"
                  required
                  name="radios-group-demarche-essentielle"
                  :value="item"
                  v-model="form.demarche_essentielle"
                />
                <label class="fr-label" :for="`radio-${index}`">{{
                  item
                }}</label>
              </div>
            </div>
          </fieldset>
          <fieldset
            :class="[
              'fr-fieldset',
              { 'fr-checkbox-group--error': errors.nature_du_besoin },
            ]"
            id="nature-besoin"
            aria-labelledby="nature-besoin-legend nature-besoin-messages"
          >
            <legend
              class="fr-fieldset__legend--regular fr-fieldset__legend"
              id="nature-besoin-legend"
            >
              Quel type d’accompagnement souhaitez-vous ?
            </legend>
            <div
              v-for="(item, index) in this.nature_du_besoin"
              :key="`nature-du-besoin-${index}`"
              class="fr-fieldset__element fr-fieldset__element"
            >
              <div class="fr-checkbox-group">
                <input
                  name="nature-du-besoin"
                  :id="`checkbox-${index}-nature-du-besoin`"
                  type="checkbox"
                  :value="item"
                  :aria-describedby="`checkbox-${index}-nature-du-besoin-messages`"
                  v-model="form.nature_du_besoin"
                />
                <label
                  class="fr-label"
                  :for="`checkbox-${index}-nature-du-besoin`"
                  >{{ item }}</label
                >
                <div
                  class="fr-messages-group"
                  :id="`checkbox-${index}-nature-du-besoin-messages`"
                  aria-live="polite"
                ></div>
              </div>
            </div>
          </fieldset>
          <div class="fr-select-group">
            <label class="fr-label" for="type-de-projet">
              Le type de votre projet
            </label>
            <select
              class="fr-select"
              aria-describedby="type-de-projet-messages"
              id="type-de-projet"
              name="type-de-projet"
              required
              v-model="form.type_de_projet"
            >
              <option value="" selected disabled hidden>
                Sélectionner une option
              </option>
              <option value="Création d'un nouveau service">
                Création d'un nouveau service
              </option>
              <option value="TMA">TMA</option>
              <option value="Refonte d'un service existant">
                Refonte d'un service existant
              </option>
              <option value="Autre">Autre</option>
            </select>
            <div
              class="fr-messages-group"
              id="type-de-projet-messages"
              aria-live="polite"
            ></div>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="temporalite">
              Votre calendrier
              <span class="fr-hint-text"
                >Avez-vous des jalons clés ou des délais à respecter ?</span
              >
            </label>
            <textarea
              class="fr-input"
              aria-describedby="temporalite-messages"
              id="temporalite"
              v-model="form.temporalite"
              required
            ></textarea>
            <div
              class="fr-messages-group"
              id="temporalite-messages"
              aria-live="polite"
            ></div>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="etat-d-avancement">
              Votre état d’avancement
              <span class="fr-hint-text"
                >Où en êtes-vous ? (définition des besoins, conception,
                développement, recette)</span
              >
            </label>
            <textarea
              class="fr-input"
              aria-describedby="etat-d-avancement-messages"
              id="etat-d-avancement"
              v-model="form.etat_d_avancement"
              required
            ></textarea>
            <div
              class="fr-messages-group"
              id="etat-d-avancement-messages"
              aria-live="polite"
            ></div>
          </div>

          <div class="fr-input-group">
            <label class="fr-label" for="description"
              >La description de votre contexte et de vos besoins</label
            >
            <textarea
              class="fr-input"
              type="text"
              id="description"
              v-model="form.description"
              required
            ></textarea>
          </div>
          <p>
            <small
              >Nous utiliserons les informations recueillies ci-dessus pour vous
              contacter dans le cadre de nos accompagnements.</small
            >
          </p>
          <p>
            <small
              >Conformément à la règlementation, vous disposez d’un droit
              d’opposition et d’un droit à la limitation du traitement de
              données vous concernant, ainsi que d’un droit d’accès, de
              rectification, de portabilité et d’effacement de vos données. Vous
              pouvez exercer vos droits en nous écrivant à
              contact@design.numerique.gouv.fr.</small
            >
          </p>
          <button class="fr-btn" id="submit" type="submit">
            Envoyer votre demande
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Obtenir un accompagnement",
    meta: [
      {
        name: "description",
        content:
          "Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂.",
      },
      {
        property: "og:title",
        content: "Obtenir un accompagnement - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂.",
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png",
      },
    ],
  },
  data() {
    return {
      poste: {},
      form: {
        name: "",
        email: "",
        service: "",
        url: "",
        public_cible: [],
        demarche_essentielle: null,
        nature_du_besoin: [],
        type_de_projet: "",
        temporalite: "",
        etat_d_avancement: "",
        description: "",
      },
      errors: {},
      public_cible: [],
      nature_du_besoin: [],
      type_de_projet: [],
    };
  },
  async mounted() {
    try {
      const targetUrl = `${process.env.GRIDSOME_GRIST_URL}/api/docs/${process.env.GRIDSOME_GRIST_REQUESTS_DOC_ID}/tables/Accompagnements/columns`;
      const response = await axios.get(
        `${process.env.GRIDSOME_GRIST_PHP_PROXY}/grist-proxy.php?url=${targetUrl}`,
      );
      const columns = response.data.columns;

      const public_cible = columns.find((elt) => elt.id === "public_cible");
      this.public_cible = JSON.parse(public_cible.fields.widgetOptions).choices;

      const nature_du_besoin = columns.find(
        (elt) => elt.id === "nature_du_besoin",
      );
      this.nature_du_besoin = JSON.parse(
        nature_du_besoin.fields.widgetOptions,
      ).choices;

      const type_de_projet = columns.find((elt) => elt.id === "type_de_projet");
      this.type_de_projet = JSON.parse(
        type_de_projet.fields.widgetOptions,
      ).choices;
    } catch (err) {
      this.error = "Une erreur est survenue : " + err.message;
    }
  },
  methods: {
    async addCandidate() {
      this.errors = {};

      if (this.form.public_cible.length === 0) {
        this.errors.public_cible =
          "Veuillez sélectionner au moins un public cible.";
      }

      if (this.form.nature_du_besoin.length === 0) {
        this.errors.nature_du_besoin =
          "Veuillez sélectionner au moins un type d'accompagnement.";
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      document.getElementById("submit").disabled = true;

      const date = new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const targetUrl = `${process.env.GRIDSOME_GRIST_URL}/api/docs/${process.env.GRIDSOME_GRIST_REQUESTS_DOC_ID}/tables/Accompagnements/records`;

      try {
        await axios({
          method: "post",
          url: `${process.env.GRIDSOME_GRIST_PHP_PROXY}/grist-proxy.php?url=${encodeURIComponent(targetUrl)}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            records: [
              {
                fields: {
                  name: this.form.name,
                  email: this.form.email,
                  service: this.form.service,
                  url: this.form.url,
                  public_cible: this.form.public_cible.join(", "),
                  demarche_essentielle:
                    this.form.demarche_essentielle === "Oui",
                  nature_du_besoin: this.form.nature_du_besoin.join(", "),
                  type_de_projet: this.form.type_de_projet,
                  temporalite: this.form.temporalite,
                  etat_d_avancement: this.form.etat_d_avancement,
                  description: this.form.description,
                  date,
                },
              },
            ],
          },
        });

        window.location.href = "/formulaire/succes/";
      } catch (error) {
        Sentry.captureException(error);
        window.location.href = "/formulaire/erreur/";
      }
    },
  },
};
</script>
