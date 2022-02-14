<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-4w">
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
        <p v-if="futurSessions.length >= 1" class="fr-badge fr-badge--new fr-mb-2w">Inscriptions ouvertes</p>
        <h1 class="dg-cover__title">{{ $page.cours.nom }}</h1>
        <ul class="fr-tags-group">
          <li v-for="tag in $page.cours.tags"><span class="fr-tag">{{ tag.charAt(0).toUpperCase() + tag.slice(1) }}</span></li>
        </ul>
      </div>
    </div>

    <div class="dg-content dg-content--xs fr-px-2w">

      <p class="fr-text--lead">{{ $page.cours.descriptionLongue }}</p>

      <div v-if="$page.cours.requis" class="fr-alert fr-alert--info fr-mb-6w">
        <p><strong>Prérequis</strong> : vous devez avoir suivi la formation <g-link :to="'/formations/' + $page.cours.requis.formation.slug + '/' + $page.cours.requis.slug + '/'">{{ $page.cours.requis.nom }}</g-link></p>
      </div>

      <div v-html="$page.cours.content.content" class="dg-contains-list"/>

      <div v-if="$page.cours.intervenants.length == 1">
        <p><strong>Formateur</strong> :</p>
        <div class="person">
          <g-image :src="$page.cours.intervenants[0].photo[0].url" width="120" alt="" class="person__photo"/>
          <p class="person__description">
            <strong class="person__name">{{ $page.cours.intervenants[0].nom }}</strong><br>
            {{ $page.cours.intervenants[0].poste }}
          </p>
        </div>
      </div>

      <div v-else-if="$page.cours.intervenants.length > 1">
        <p><strong>Formateurs</strong> :</p>
        <ul class="people">
          <li v-for="intervenant in $page.cours.intervenants" class="person">
            <g-image :src="intervenant.photo[0].url" width="120" alt="" class="person__photo"/>
            <p class="person__description">
              <strong class="person__name">{{ intervenant.nom }}</strong><br>
              {{ intervenant.poste }}
            </p>
          </li>
        </ul>
      </div>

      <div v-if="futurSessions.length > 1" class="dg-contains-list">
        <p><strong>Prochaines sessions</strong> :</p>
        <ul>
          <li v-for="session in futurSessions">{{ session.date }}</li>
        </ul>
      </div>
      <p v-else-if="futurSessions.length == 0"><strong>Session</strong> : aucune nouvelle session de prévue pour le moment.</p>

      <div v-if="futurSessions.length >= 1">
        <h2 class="fr-mt-6w">Inscription</h2>
        <p v-if="futurSessions.length == 1"><strong>Prochaine session</strong> : <span class="fr-badge fr-badge--green-tilleul-verveine">{{ futurSessions[0].date }} de {{ futurSessions[0].debut }} à {{ futurSessions[0].fin }}</span></p>
        <p class="fr-mb-4w">L’inscription est obligatoire, nous vous confirmerons votre participation par e-mail en fonction des places disponibles.</p>

        <form class="form" v-on:submit.prevent="addParticipant">
          <div v-if="futurSessions.length > 1" class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend class="fr-fieldset__legend fr-text--regular" id='radio-hint-legend'>
                Date de la session à laquelle vous souhaitez vous inscrire
              </legend>
              <div class="fr-fieldset__content">
                <div v-for="session in futurSessions" class="fr-radio-group">
                  <input type="radio" :id="session.id" :value="session.id" name="session" v-model="form.session" required>
                  <label class="fr-label" :for="session.id">
                    {{ session.date }} de {{ session.debut }} à {{ session.fin }}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="fr-form-group">
              <fieldset class="fr-fieldset">
                  <legend class="fr-fieldset__legend fr-text--regular" id='prerequis-legend'>
                      Avez-vous suivi notre formation <em>{{ $page.cours.requis.nom }}</em> ?
                  </legend>
                  <div class="fr-fieldset__content">
                      <div class="fr-radio-group">
                          <input type="radio" id="prerequis-1" name="prerequis" value="OK" v-model="form.prerequis" required>
                          <label class="fr-label" for="prerequis-1">Oui</label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="prerequis-2" name="prerequis" value="KO" v-model="form.prerequis" required>
                          <label class="fr-label" for="prerequis-2">Non</label>
                      </div>
                  </div>
              </fieldset>
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
            <label class="fr-label" for="email">Votre adresse e-mail professionnelle<span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
            <input class="fr-input" type="email" id="email" v-model="form.email" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="phone">Votre numéro de téléphone <span class="fr-hint-text">Par exemple : 01 02 03 04 05</span></label>
              <input class="fr-input" type="text" id="phone" v-model="form.phone" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="job">Votre fonction</label>
              <input class="fr-input" type="text" id="job" v-model="form.job" required>
          </div>
          <div class="fr-form-group">
              <fieldset class="fr-fieldset">
                  <legend class="fr-fieldset__legend fr-text--regular" id='statut-legend'>
                      Votre statut
                  </legend>
                  <div class="fr-fieldset__content">
                      <div class="fr-radio-group">
                          <input type="radio" id="statut-1" name="statut" value="Agent public" v-model="form.statut" required>
                          <label class="fr-label" for="statut-1">Agent public</label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="statut-2" name="statut" value="Prestataire pour un organisme public" v-model="form.statut" required>
                          <label class="fr-label" for="statut-2">Prestataire pour un organisme public</label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="statut-3" name="statut" value="Autre" v-model="form.statut" required>
                          <label class="fr-label" for="statut-3">Autre</label>
                      </div>
                  </div>
              </fieldset>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="organisme">Votre ministère de rattachement</label>
            <input class="fr-input" type="text" id="organisme" v-model="form.organisme" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="demarche">La démarche de l'Observatoire sur laquelle vous travaillez
                <span class="fr-hint-text">Vous pouvez retrouver l'Observatoire à cette adresse : <a href="https://observatoire.numerique.gouv.fr/observatoire/" target="_blank" title="L'observatoire de la qualité des démarches en ligne - nouvelle fenêtre">https://observatoire.numerique.gouv.fr</a></span>
              </label>
              <input class="fr-input" type="text" id="demarche" v-model="form.demarche" required>
          </div>
          <div class="fr-form-group">
              <fieldset class="fr-fieldset">
                  <legend class="fr-fieldset__legend fr-text--regular" id='expertise-legend'>
                      Votre niveau d'expertise sur le sujet
                  </legend>
                  <div class="fr-fieldset__content">
                      <div class="fr-radio-group">
                          <input type="radio" id="expertise-1" name="expertise" value="Novice" v-model="form.expertise" required>
                          <label class="fr-label" for="expertise-1">Novice
                            <span class="fr-hint-text">Vous avez tout à découvrir</span>
                          </label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="expertise-2" name="expertise" value="Débutant" v-model="form.expertise" required>
                          <label class="fr-label" for="expertise-2">Débutant
                            <span class="fr-hint-text">Vous avez commencé à pratiquer</span>
                          </label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="expertise-3" name="expertise" value="Intermédiaire" v-model="form.expertise" required>
                          <label class="fr-label" for="expertise-3">Intermédiaire
                            <span class="fr-hint-text">Vous pratiquez régulièrement</span>
                          </label>
                      </div>
                      <div class="fr-radio-group">
                          <input type="radio" id="expertise-4" name="expertise" value="Expert" v-model="form.expertise" required>
                          <label class="fr-label" for="expertise-4">Expert</label>
                      </div>
                  </div>
              </fieldset>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="attente">
              Vous attentes concernant cette formation, les freins et les limites que vous rencontrez sur le sujet (optionnel)
            </label>
            <textarea class="fr-input" id="attente" name="attente" v-model="form.attentes"></textarea>
          </div>
          <p><small>Les données recueillies sur ce formulaire sont traitées par les équipes de la DINUM. Elles nous permettent de vous informer via e-mail des nouvelles liées à cet événement.</small></p>
          <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
          <button class="fr-btn" id="submit" type="submit">S'inscrire à cette formation</button>
        </form>
      </div>

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
        slug
        formation {
          slug
        }
      }
      intervenants (sortBy: "name", order: DESC) {
        nom
        poste
        photo {
          url
        }
      }
      descriptionCourte
      descriptionLongue
      content {
        content
      }
      tags
      sessions (sortBy: "date", order: ASC) {
        id
        date
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          job: '',
          statut: '',
          organisme: '',
          demarche: '',
          expertise: '',
          session: '',
          attentes: '',
          prerequis: '',
        }
      }
    },
    computed: {
      futurSessions: function () {
        var futur = this.$page.cours.sessions.filter(session => new Date(session.date) > Date.now()).sort((a, b) => a.date > b.date);
        futur.forEach(session => {
          var date = new Date(session.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          session.date = date.charAt(0).toUpperCase() + date.slice(1);
        });
        return futur;
      },
    },
    methods: {
      addParticipant() {
        document.getElementById('submit').disabled = true;
        if (this.futurSessions.length == 1) {
          this.form.session = this.futurSessions[0].id;
        }
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_COURSE_NEW_BASE);
        base('Inscriptions').create([
        {
          "fields": {
            "E-mail": this.form.email,
            "Organisme": this.form.organisme,
            "Session": [this.form.session],
            "Prénom": this.form.firstName,
            "Nom": this.form.lastName,
            "Numéro": this.form.phone,
            "Nom": this.form.lastName,
            "Poste": this.form.job,
            "Statut": this.form.statut,
            "Démarche": this.form.demarche,
            "Niveau": this.form.expertise,
            "Attentes": this.form.attentes,
            "Prérequis": this.form.prerequis,
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


<style lang="scss">

  .people {
    margin-top: -0.75rem;
    margin-bottom: 1.5rem;
  }

  .person {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    &__photo {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      margin-right: 1rem;
      flex-basis: auto;
    }

    &__description {
      flex-basis: 20rem;
      margin: 0.5rem 0;
    }
  }

</style>
