<template>
<Layout class="partage-interet-page" hideNewsletter>

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li>
        <g-link to="/">Accueil</g-link>
      </li>
      <li>
        <g-link to="/commando-ux/">Commando UX</g-link>
      </li>
      <li>
        <span aria-current="page">Partager votre intérêt</span>
      </li>
    </ol>
  </nav>

  <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><CommandoUX class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Commando UX</div>
        <h1>Experts de l'expérience utilisateur : vous souhaitez vous impliquer&nbsp;? Partagez votre intérêt&nbsp;!</h1>
        <p class="cover__subtitle">
          Nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne.
        </p>
      </div>
  </div>

  <div class="content rf-container">
    <div class="rf-grid-row rf-grid-row--gutters rf-grid-row--center">
        <div class="rf-col-12 rf-col-md-8">
            <form class="form" v-on:submit.prevent="addCandidate">
              <p class="message-required"><small>Les champs signalés par un astérisque <strong class="required">*</strong> sont obligatoires.</small></p>
                <div class="rf-input-group">
                    <label class="rf-label" for="prenom">Votre prénom <span class="required" title="Ce champ est requis.">*</span></label>
                    <input class="rf-input" type="text" id="prenom" v-model="form.firstName" required>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="nom">Votre nom <span class="required" title="Ce champ est requis.">*</span></label>
                    <input class="rf-input" type="text" id="nom" v-model="form.lastName" required>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="email">Votre adresse e-mail <span class="required" title="Ce champ est requis.">*</span> <span class="rf-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
                    <input class="rf-input" type="email" id="email" v-model="form.email" required>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="tel">Votre téléphone</label>
                    <input class="rf-input" type="tel" id="tel" v-model="form.phone">
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="commune">Dans quelle commune habitez-vous&nbsp;?</label>
                    <input class="rf-input" type="text" id="commune" v-model="form.city">
                </div>
                <div class="rf-form-group">
                    <fieldset class="rf-fieldset">
                        <legend class="rf-fieldset__legend rf-text--regular" id='expertise-legend'>
                            Votre expertise
                        </legend>
                        <div class="rf-fieldset__content">
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-1" value="Design UX" v-model="form.skills">
                                <label class="rf-label" for="expertise-1">Design UX</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-2" value="Design UI" v-model="form.skills">
                                <label class="rf-label" for="expertise-2">Design UI</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-3" value="Design de services" v-model="form.skills">
                                <label class="rf-label" for="expertise-3">Design de services</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-4" value="Développement accessibilité" v-model="form.skills">
                                <label class="rf-label" for="expertise-4">Développement accessibilité</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-5" value="Recherche utilisateur" v-model="form.skills">
                                <label class="rf-label" for="expertise-5">Recherche utilisateur («&nbsp;User research&nbsp;»)</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="expertise-6" value="Sciences comportementales" v-model="form.skills">
                                <label class="rf-label" for="expertise-6">Sciences comportementales</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="checkboxes-7" value="Rédaction UX" v-model="form.skills">
                                <label class="rf-label" for="checkboxes-7">Rédaction UX («&nbsp;UX writing&nbsp;»)</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="autres-competences">Vos autres compétences</label>
                    <input class="rf-input" type="text" id="vos-autres-competences" v-model="form.otherSkills">
                </div>
                <div class="rf-form-group">
                    <fieldset class="rf-fieldset">
                        <legend class="rf-fieldset__legend rf-text--regular" id='radio-legend'>
                            Votre expérience professionnelle dans ces domaines d’expertise <span class="required" title="Ce champ est requis.">*</span>
                        </legend>
                        <div class="rf-fieldset__content">
                            <div class="rf-radio-group">
                                <input type="radio" id="radio-1" name="experience" value="Moins d’1 an" v-model="form.experience" required>
                                <label class="rf-label" for="radio-1">Moins d’1 an</label>
                            </div>
                            <div class="rf-radio-group">
                                <input type="radio" id="radio-2" name="experience" value="1 à 3 ans" v-model="form.experience" required>
                                <label class="rf-label" for="radio-2">De 1 à 3 ans</label>
                            </div>
                            <div class="rf-radio-group">
                                <input type="radio" id="radio-3" name="experience" value="3 à 5 ans" v-model="form.experience" required>
                                <label class="rf-label" for="radio-3">De 3 à 5 ans</label>
                            </div>
                            <div class="rf-radio-group">
                                <input type="radio" id="radio-4" name="experience" value="5 à 10 ans" v-model="form.experience" required>
                                <label class="rf-label" for="radio-4">De 5 à 10 ans</label>
                            </div>
                            <div class="rf-radio-group">
                                <input type="radio" id="radio-5" name="experience" value="Plus de 10 ans" v-model="form.experience" required>
                                <label class="rf-label" for="radio-5">Plus de 10 ans</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="delai">Lien vers votre CV <span class="required" title="Ce champ est requis.">*</span>  <span class="rf-hint-text">Le lien vers votre CV doit débuter par http:// ou https://</span></label>
                    <input class="rf-input" type="url" id="delai" v-model="form.cv" required>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="profil">D'autres liens présentant votre profil</label>
                    <textarea class="rf-input" type="text" id="profil" v-model="form.profil"></textarea>
                </div>
                <div class="rf-form-group">
                    <fieldset class="rf-fieldset">
                        <legend class="rf-fieldset__legend rf-text--regular" id='duree-legend'>
                            La durée d’intervention que vous recherchez
                        </legend>
                        <div class="rf-fieldset__content">
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="duree-1" value="Ponctuelle" v-model="form.duration">
                                <label class="rf-label" for="duree-1">Ponctuelle</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="duree-2" value="Moins de 3 mois" v-model="form.duration">
                                <label class="rf-label" for="duree-2">Moins de 3 mois</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="duree-3" value="3 mois à 1 an" v-model="form.duration">
                                <label class="rf-label" for="duree-3">De 3 mois à 1 an</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="duree-4" value="Plus d’1 an" v-model="form.duration">
                                <label class="rf-label" for="duree-4">Plus d’1 an</label>
                            </div>
                            <div class="rf-checkbox-group">
                                <input type="checkbox" id="duree-5" value="Je ne sais pas" v-model="form.duration">
                                <label class="rf-label" for="duree-5">Je ne sais pas</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="delai">Quel est le délai minimum pour vous prévenir avant le début d’une intervention ? <span class="required" title="Ce champ est requis.">*</span></label>
                    <input class="rf-input" type="text" id="delai" v-model="form.delay" required>
                </div>
                <div class="rf-input-group">
                    <label class="rf-label" for="autresInfos">D’autres informations que vous souhaitez partager&nbsp;?</label>
                    <textarea class="rf-input" type="text" id="autresInfos" v-model="form.more"></textarea>
                </div>

                <p class="rgpd">
                  Nous utiliserons les informations recueillies ci-dessous pour vous contacter si nous identifions des opportunités qui pourraient vous intéresser.
                </p>

                <p class="rgpd rgpd--small">
                  Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.
                </p>

                <button class="button" type="submit">Partager votre intérêt</button>
            </form>
            </div>
            </div>
        </div>

</Layout>
</template>


<script>
  import CommandoUX from "~/assets/images/accompagnement.svg"

  export default {
    components: {
      CommandoUX,
    },
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
        content: "Partager votre intérêt pour le Commando UX - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Experts du numérique : nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
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
            "Profil": this.form.profil,
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


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .partage-interet-page {

    .cover {
      h1 {
        font-size: 3rem;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 1.5rem;
        }
      }
    }
  }

</style>
