<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav aria-label="Breadcrumb" class="fr-breadcrumb">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/commando-ux/" class="fr-breadcrumb__link">Accessibilité</g-link>
          </li>
          <li>
            <span aria-current="page">Nouveau marché public accessibilité numérique et design inclusif</span>
          </li>
        </ol>
      </nav>

      <h1>Nouveau marché public accessibilité numérique et design inclusif</h1>
      <p class="fr-text--lead">
        La direction des achats de l'État (DAE) lance un nouveau marché public au 2ème trimestre 2022. Celui-ci s'adressera aux entreprises/agences expertes de l'accessibilité, du design et/ou du développement de services numériques inclusifs.
      </p>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <p class="fr-text--lg"><strong>Renseignez vos coordonnées pour être prévenu dès son lancement&nbsp;:</strong></p>
        <form class="form" v-on:submit.prevent="addCandidate">
          <p><small>Tous les champs sont obligatoires</small></p>
            <div class="fr-input-group">
                <label class="fr-label" for="company">La raison sociale de votre entreprise</label>
                <input class="fr-input" type="text" id="company" v-model="form.company" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="siret">Le numéro de SIRET de votre entreprise <span class="fr-hint-text">Par exemple : 13002526500013</span></label>
                <input class="fr-input fr-col-sm-6" type="text" id="siret" v-model="form.siret" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="website">Le site de votre entreprise <span class="fr-hint-text">Au format https://nomdevotresite.fr</span></label>
                <input class="fr-input" type="url" id="website" v-model="form.website" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="firstName">Votre prénom</label>
                <input class="fr-input" type="text" id="firstName" v-model="form.firstName" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="lastName">Votre nom</label>
                <input class="fr-input" type="text" id="lastName" v-model="form.lastName" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="email">Votre adresse e-mail <span class="fr-hint-text">Au format prenom@mail.fr</span></label>
                <input class="fr-input" type="email" id="email" v-model="form.email" required>
            </div>
            <div class="fr-input-group">
                <label class="fr-label" for="phone">Votre numéro de téléphone <span class="fr-hint-text">Par exemple : 01 02 03 04 05</span></label>
                <input class="fr-input" type="text" id="phone" v-model="form.phone" required>
            </div>
            <div class="fr-form-group">
                <fieldset class="fr-fieldset">
                    <legend class="fr-fieldset__legend fr-text--regular" id='expertise-legend'>
                        Vos secteurs d'expertise :
                    </legend>
                    <div class="fr-fieldset__content">
                        <div class="fr-checkbox-group">
                            <input type="checkbox" id="sector-1" value="rec4MVKJY25cOHeuY" v-model="form.sectors">
                            <label class="fr-label" for="sector-1">Accessibilité numérique
                              <span class="fr-hint-text">Audit d’accessibilité d’un service numérique&nbsp;; accompagnement pour la mise en œuvre et le suivi du schéma pluriannuel de mise en accessibilité&nbsp;; accessibilité du code, des documents, des médias&nbsp;; développement d’un service numérique accessible</span>
                            </label>
                        </div>
                        <div class="fr-checkbox-group">
                            <input type="checkbox" id="sector-2" value="recY6yShtCJCQ2LwM" v-model="form.sectors">
                            <label class="fr-label" for="sector-2">Design inclusif
                              <span class="fr-hint-text">Recherche utilisateur (accompagnement relatif à la recherche et aux tests auprès des usagers)&nbsp;; design de services numériques inclusifs (conception de l’expérience utilisateur inclusive d’un service numérique) </span>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <p><small>Nous utiliserons les informations recueillies ci-dessus pour vous contacter lors du lancement de ce nouveau marché.</small></p>
            <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
            <button class="fr-btn" id="submit" type="submit">Partager mes informations</button>
        </form>
      </div>

    </div>
  </Layout>
</template>


<script>
  export default {
    components: {
    },
    metaInfo: {
      title: "Nouveau marché public accessibilité numérique et design inclusif",
      meta: [{
        name: 'description',
        content: "Vous êtes acteur de l'accessibilité numérique et/ou du design inclusif ? Renseignez vos coordonnées pour être prévenu dès son lancement."
      },
      {
        property: 'og:title',
        content: "Nouveau marché public accessibilité numérique et design inclusif - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Vous êtes acteur de l'accessibilité numérique et/ou du design inclusif ? Renseignez vos coordonnées pour être prévenu dès son lancement."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
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
        content: "Nouveau marché public accessibilité numérique et design inclusif - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Vous êtes acteur de l'accessibilité numérique et/ou du design inclusif ? Renseignez vos coordonnées pour être prévenu dès son lancement."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    },
    data () {
      return {
        form: {
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          company: '',
          siret: '',
          website: '',
          sectors: [],
        }
      }
    },
    methods: {
      addCandidate() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_DAE_BASE);
        base('Entreprises').create([
        {
          "fields": {
            "Entreprise ou groupement": this.form.company,
            "SIRET": this.form.siret,
            "Nom": this.form.lastName,
            "Prénom": this.form.firstName,
            "E-mail": this.form.email,
            "Périmètre Expertise": this.form.sectors,
            "Site": this.form.website,
            "Téléphone": this.form.phone
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
