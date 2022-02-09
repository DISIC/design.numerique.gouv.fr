<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/formation/" class="fr-breadcrumb__link">Formations</g-link>
            </li>
            <li>
              <g-link :to="'/formations/' + $page.cours.formation.slug + '/'" class="fr-breadcrumb__link">{{ $page.cours.formation.nom }}</g-link>
            </li>
            <li>
              <span aria-current="page">{{ $page.cours.nom }}</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">{{ $page.cours.nom }}</h1>
        <p class="fr-text--lead">{{ $page.cours.descriptionCourte }}</p>
      </div>
    </div>

    <div class="dg-content dg-content--xs fr-px-2w">

      <p>{{ $page.cours.descriptionLongue }}</p>

      <form class="form" v-on:submit.prevent="addParticipant">
        <div class="fr-input-group">
          <label class="fr-label" for="email">Votre adresse e-mail<span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
          <input class="fr-input" type="email" id="email" v-model="form.email" required>
        </div>
        <div class="fr-input-group">
          <label class="fr-label" for="organisme">Votre organisme</label>
          <input class="fr-input" type="text" id="organisme" v-model="form.organisme" required>
        </div>
        <div class="fr-form-group">
          <fieldset class="fr-fieldset">
            <legend class="fr-fieldset__legend fr-text--regular" id='radio-hint-legend'>
              Date de la session à laquelle vous souhaitez vous inscrire
              <span class="fr-hint-text">D'autres sessions seront disponibles par la suite</span>
            </legend>
            <div class="fr-fieldset__content">
              <div v-for="session in $page.cours.sessions" class="fr-radio-group">
                <input type="radio" :id="session.id" name="session" required>
                <label class="fr-label" :for="session.id">
                  Le {{ session.date }} de {{ session.debut }} à {{ session.fin }}
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <p><small>Les données recueillies sur ce formulaire sont traitées par les équipes de la DINUM. Elles nous permettent de vous informer via e-mail des nouvelles liées à cet événement.</small></p>
        <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
        <button class="fr-btn" id="submit" type="submit">S'inscrire</button>
      </form>

    </div>

  </Layout>
</template>


<page-query>
  query Cours ($id: ID!) {
    cours: cours(id: $id) {
      id
      slug
      nom
      formation {
        nom
        slug
      }
      type
      requis {
        nom
      }
      intervenants {
        nom
        poste
        photo {
          url
        }
      }
      descriptionCourte
      descriptionLongue
      tags
      sessions {
        id
        date (format: "D MMMM YYYY", locale : "fr")
        debut
        fin
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.cours.nom,
        meta: [
          {
            name: "description",
            content: this.$page.cours.descriptionCourte
          },
          {
            property: 'og:title',
            content: this.$page.cours.nom + " - DesignGouv"
          },
          {
            property: 'og:description',
            content: this.$page.cours.descriptionCourte
          },
            {
            property: 'og:image',
            content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
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
            content: this.$page.cours.nom + " - DesignGouv"
          },
          {
            name: "twitter:description",
            content: this.$page.cours.descriptionCourte
          },
          {
            name: "twitter:image",
            content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
          },
        ]
      };
    },
    data () {
      return {
        form: {
          email: '',
          organisme: '',
        }
      }
    },
    methods: {
      addParticipant() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_COURSE_NEW_BASE);
        base('Inscriptions').create([
        {
          "fields": {
            "E-mail": this.form.email,
            "Organisme": this.form.organisme,
            "Session": [document.querySelector('input[name="session"]:checked').id],
          }
        },], function(err, records) {
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
  };
</script>


<style lang="scss" scoped>
</style>
