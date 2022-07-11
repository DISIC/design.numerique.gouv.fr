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
                <g-link to="/recrutement/" class="fr-breadcrumb__link">Recrutement</g-link>
              </li>
              <li>
                <span aria-current="page">Partager votre intérêt</span>
              </li>
            </ol>
          </nav>

          <h1 v-if="!this.$route.query.poste">Partagez votre intérêt&nbsp;!</h1>
          <h1 v-else class="fr-mb-6w">Votre candidature pour le poste de {{this.$route.query.intitule}}</h1>
          <p v-if="!this.$route.query.poste" class="fr-text--lead">
            Nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne.
          </p>
        </div>
      </div>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <form class="form" v-on:submit.prevent="addCandidate">
          <p><small>Sauf mention contraire, tous les champs sont obligatoires.</small></p>
          <div class="fr-input-group">
            <label class="fr-label" for="prenom">Votre prénom</label>
            <input class="fr-input" type="text" id="prenom" v-model="form.firstName" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="nom">Votre nom</label>
            <input class="fr-input" type="text" id="nom" v-model="form.lastName" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="email">Votre adresse e-mail <span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
            <input class="fr-input" type="email" id="email" v-model="form.email" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="tel">Votre téléphone (facultatif)</label>
            <input class="fr-input" type="tel" id="tel" v-model="form.phone">
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="commune">Dans quelle commune habitez-vous&nbsp;? (facultatif)</label>
            <input class="fr-input" type="text" id="commune" v-model="form.city">
          </div>
          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='expertise-legend'>
                Votre expertise <span class="fr-hint-text">Plusieurs choix possibles</span></span>
              </legend>
              <div class="fr-fieldset__content">
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-1" value="Recherche utilisateur" v-model="form.skills">
                  <label class="fr-label" for="expertise-1">Recherche utilisateur</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-2" value="Design UX" v-model="form.skills">
                  <label class="fr-label" for="expertise-2">Design UX</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-3" value="Design UI" v-model="form.skills">
                  <label class="fr-label" for="expertise-3">Design UI</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-4" value="Design de services" v-model="form.skills">
                  <label class="fr-label" for="expertise-4">Design de services</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-5" value="Accessibilité numérique" v-model="form.skills">
                  <label class="fr-label" for="expertise-5">Accessibilité numérique</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-6" value="Audit RGAA" v-model="form.skills">
                  <label class="fr-label" for="expertise-6">Audit RGAA</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-7" value="Développement front-end" v-model="form.skills">
                  <label class="fr-label" for="expertise-7">Développement front-end</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-8" value="Développement back-end" v-model="form.skills">
                  <label class="fr-label" for="expertise-8">Développement back-end</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="checkboxes-9" value="Rédaction UX" v-model="form.skills">
                  <label class="fr-label" for="checkboxes-9">Rédaction UX</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="checkboxes-10" value="Pilotage" v-model="form.skills">
                  <label class="fr-label" for="checkboxes-10">Pilotage</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="autres-competences">Vos autres compétences (facultatif)</label>
            <input class="fr-input" type="text" id="autres-competences" v-model="form.otherSkills">
          </div>
          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='radio-legend'>
                Votre expérience professionnelle dans ces domaines d’expertise</span>
              </legend>
              <div class="fr-fieldset__content">
                <div class="fr-radio-group">
                  <input type="radio" id="radio-1" name="experience" value="Moins d’1 an" v-model="form.experience" required>
                  <label class="fr-label" for="radio-1">Moins d’1 an</label>
                </div>
                <div class="fr-radio-group">
                  <input type="radio" id="radio-2" name="experience" value="1 à 3 ans" v-model="form.experience" required>
                  <label class="fr-label" for="radio-2">De 1 à 3 ans</label>
                </div>
                <div class="fr-radio-group">
                  <input type="radio" id="radio-3" name="experience" value="3 à 5 ans" v-model="form.experience" required>
                  <label class="fr-label" for="radio-3">De 3 à 5 ans</label>
                </div>
                <div class="fr-radio-group">
                  <input type="radio" id="radio-4" name="experience" value="5 à 10 ans" v-model="form.experience" required>
                  <label class="fr-label" for="radio-4">De 5 à 10 ans</label>
                </div>
                <div class="fr-radio-group">
                  <input type="radio" id="radio-5" name="experience" value="Plus de 10 ans" v-model="form.experience" required>
                  <label class="fr-label" for="radio-5">Plus de 10 ans</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="CV">Le lien vers votre CV <span class="fr-hint-text">Le lien vers votre CV doit débuter par http:// ou https://</span></label>
            <input class="fr-input" type="url" id="CV" v-model="form.cv" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="portfolio">Le lien vers votre portfolio ou votre site (facultatif) <span class="fr-hint-text">Le lien vers votre portfolio (ou votre site) doit débuter par http:// ou https://</span></label>
            <input class="fr-input" type="url" id="portfolio" v-model="form.portfolio"></input>
          </div>
          <div v-if="!this.$route.query.poste" class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='duree-legend'>
                La durée d’intervention que vous recherchez
              </legend>
              <div class="fr-fieldset__content">
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="duree-1" value="Ponctuelle" v-model="form.duration">
                  <label class="fr-label" for="duree-1">Ponctuelle</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="duree-2" value="Moins de 3 mois" v-model="form.duration">
                  <label class="fr-label" for="duree-2">Moins de 3 mois</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="duree-3" value="3 mois à 1 an" v-model="form.duration">
                  <label class="fr-label" for="duree-3">De 3 mois à 1 an</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="duree-4" value="Plus d’1 an" v-model="form.duration">
                  <label class="fr-label" for="duree-4">Plus d’1 an</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="duree-5" value="Je ne sais pas" v-model="form.duration">
                  <label class="fr-label" for="duree-5">Je ne sais pas</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div v-if="!this.$route.query.poste" class="fr-input-group">
              <label class="fr-label" for="delai">Quel est le délai minimum pour vous prévenir avant le début d’une intervention ?</span></label>
              <input class="fr-input" type="text" id="delai" v-model="form.delay" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="autres-infos">Vos motivations</label>
              <textarea class="fr-input" type="text" id="autres-infos" v-model="form.more" required></textarea>
          </div>
          <p><small>Nous utiliserons les informations recueillies ci-dessus pour vous contacter dans le cadre des missions que nous proposons.</small></p>
          <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
          <button class="fr-btn" id="submit" type="submit">Envoyer votre candidature</button>
        </form>
      </div>

    </div>
  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Partager votre intérêt",
      meta: [{
        name: 'description',
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        property: 'og:title',
        content: "Partager votre intérêt - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
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
        content: "Partager votre intérêt - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipde.png"
      }],
    },
    data () {
      return {
        form: {
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          city: '',
          skills: [],
          otherSkills: '',
          experience: '',
          profil: '',
          duration: [],
          delay: '',
          cv: '',
          more: '',
          poste: this.$route.query.poste ? [this.$route.query.poste] : [],
        }
      }
    },
    methods: {
      addCandidate() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_CANDIDATE_BASE);
        base('Candidats').create([
        {
          "fields": {
            "Email": this.form.email,
            "Prénom": this.form.firstName,
            "Nom": this.form.lastName,
            "Téléphone": this.form.phone,
            "Commune": this.form.city,
            "Expertise": this.form.skills,
            "Autres compétences": this.form.otherSkills,
            "Expérience": this.form.experience,
            "Portfolio": this.form.portfolio,
            "Durée": this.form.duration,
            "Délai": this.form.delay,
            "CV": this.form.cv,
            "Plus": this.form.more,
            "Poste": this.form.poste,
          }
        },
      ], function(err, records) {
        if (err) {
          window.location.href = "/formulaire/erreur/";
          console.error(err);
          return;
        } else {
          window.location.href = "/formulaire/succes/";
        }
      });
    }
  },
}
</script>
