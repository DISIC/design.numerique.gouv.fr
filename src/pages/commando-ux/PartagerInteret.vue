<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav aria-label="Breadcrumb" class="fr-breadcrumb">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/commando-ux/" class="fr-breadcrumb__link">Commando UX</g-link>
          </li>
          <li>
            <span aria-current="page">Partager votre intérêt</span>
          </li>
        </ol>
      </nav>

      <h1>Experts de l'expérience utilisateur : vous souhaitez vous impliquer&nbsp;? Partagez votre intérêt&nbsp;!</h1>
      <p class="fr-text--lead">
        Nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne.
      </p>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <form class="form" v-on:submit.prevent="addCandidate">
          <p><small>Les champs signalés par un astérisque <strong class="required">*</strong> sont obligatoires.</small></p>
          <div class="fr-input-group">
            <label class="fr-label" for="prenom">Votre prénom <span class="required" title="Ce champ est requis.">*</span></label>
            <input class="fr-input" type="text" id="prenom" v-model="form.firstName" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="nom">Votre nom <span class="required" title="Ce champ est requis.">*</span></label>
            <input class="fr-input" type="text" id="nom" v-model="form.lastName" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="email">Votre adresse e-mail <span class="required" title="Ce champ est requis.">*</span> <span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
            <input class="fr-input" type="email" id="email" v-model="form.email" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="tel">Votre téléphone</label>
            <input class="fr-input" type="tel" id="tel" v-model="form.phone">
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="commune">Dans quelle commune habitez-vous&nbsp;?</label>
            <input class="fr-input" type="text" id="commune" v-model="form.city">
          </div>
          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='expertise-legend'>
                Votre expertise
              </legend>
              <div class="fr-fieldset__content">
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-1" value="Design UX" v-model="form.skills">
                  <label class="fr-label" for="expertise-1">Design UX</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-2" value="Design UI" v-model="form.skills">
                  <label class="fr-label" for="expertise-2">Design UI</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-3" value="Design de services" v-model="form.skills">
                  <label class="fr-label" for="expertise-3">Design de services</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-4" value="Développement accessibilité" v-model="form.skills">
                  <label class="fr-label" for="expertise-4">Développement accessibilité</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-5" value="Recherche utilisateur" v-model="form.skills">
                  <label class="fr-label" for="expertise-5">Recherche utilisateur</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="expertise-6" value="Sciences comportementales" v-model="form.skills">
                  <label class="fr-label" for="expertise-6">Sciences comportementales</label>
                </div>
                <div class="fr-checkbox-group">
                  <input type="checkbox" id="checkboxes-7" value="Rédaction UX" v-model="form.skills">
                  <label class="fr-label" for="checkboxes-7">Rédaction UX</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="autres-competences">Vos autres compétences</label>
            <input class="fr-input" type="text" id="autres-competences" v-model="form.otherSkills">
          </div>
          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='radio-legend'>
                Votre expérience professionnelle dans ces domaines d’expertise <span class="required" title="Ce champ est requis.">*</span>
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
            <label class="fr-label" for="CV">Le lien vers votre CV <span class="required" title="Ce champ est requis.">*</span> <span class="fr-hint-text">Le lien vers votre CV doit débuter par http:// ou https://</span></label>
            <input class="fr-input" type="url" id="CV" v-model="form.cv" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="portfolio">Le lien vers votre portfolio (ou votre site) <span class="fr-hint-text">Le lien vers votre portfolio (ou votre site) doit débuter par http:// ou https://</span></label>
            <input class="fr-input" type="url" id="portfolio" v-model="form.portfolio"></input>
          </div>
          <div class="fr-form-group">
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
          <div class="fr-input-group">
              <label class="fr-label" for="delai">Quel est le délai minimum pour vous prévenir avant le début d’une intervention ? <span class="required" title="Ce champ est requis.">*</span></label>
              <input class="fr-input" type="text" id="delai" v-model="form.delay" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="autres-infos">D’autres informations que vous souhaitez partager&nbsp;?</label>
              <textarea class="fr-input" type="text" id="autres-infos" v-model="form.more"></textarea>
          </div>
          <p><small>Nous utiliserons les informations recueillies ci-dessus pour vous contacter si nous identifions des opportunités qui pourraient vous intéresser.</small></p>
          <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
          <button class="fr-btn" id="submit" type="submit">Partager votre intérêt</button>
        </form>
      </div>

    </div>
  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Partager votre intérêt pour le Commando UX",
      meta: [{
        name: 'description',
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        property: 'og:title',
        content: "Partager votre intérêt pour le Commando UX - DesignGouv"
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
        content: "Partager votre intérêt pour le Commando UX - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
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
            "Plus": this.form.more
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
