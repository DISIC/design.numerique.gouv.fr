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
                <g-link to="/accompagnement/" class="fr-breadcrumb__link">Accompagnement</g-link>
              </li>
              <li>
                <a class="fr-breadcrumb__link" aria-current="page">Obtenir un accompagnement</a>
              </li>
            </ol>
          </nav>

          <h1>Obtenir un accompagnement</h1>
          <p class="fr-text--lead">
            Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂.
          </p>
        </div>
      </div>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <form class="form" v-on:submit.prevent="addCandidate">
          <p><small>Sauf mention contraire, tous les champs sont obligatoires.</small></p>
          <div class="fr-input-group">
            <label class="fr-label" for="name">Votre nom</label>
            <input class="fr-input" type="text" id="name" v-model="form.name" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="email">Votre adresse e-mail <span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
            <input class="fr-input" type="email" id="email" v-model="form.email" required>
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="service">Votre entité <span class="fr-hint-text">Précisez également vos ministère et direction de rattachement</span></label>
            <input class="fr-input" type="text" id="service" v-model="form.service" required>
          </div>
          <div class="fr-input-group">
              <label class="fr-label" for="description">La description de votre contexte et de vos besoins</label>
              <textarea class="fr-input" type="text" id="description" v-model="form.description" required></textarea>
          </div>
          <p><small>Nous utiliserons les informations recueillies ci-dessus pour vous contacter dans le cadre de nos accompagnements.</small></p>
          <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.</small></p>
          <button class="fr-btn" id="submit" type="submit">Envoyer votre demande</button>
        </form>
      </div>

    </div>
  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Obtenir un accompagnement",
      meta: [{
        name: 'description',
        content: "Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂."
      },
      {
        property: 'og:title',
        content: "Obtenir un accompagnement - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂."
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
        content: "Obtenir un accompagnement - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Chacun de nos accompagnements est contruit sur-mesure avec vous pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et tout ça gratuitement 🙂."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipde.png"
      }],
    },
    data () {
      return {
        poste: {},
        form: {
          name: '',
          email: '',
          service: '',
          description: '',
        }
      }
    },
    methods: {
      addCandidate() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_OBSERVATORY_BASE);
        base('tblfDh7NA0MCjxxsN').create([
        {
          "fields": {
            "fldy4RnxSe4Zvj8vq": this.form.name,
            "fldth995tXb2utb94": this.form.email,
            "fld4TfBjLenSsDt0F": this.form.service,
            "fldHMNxUJPYcwsW7k": this.form.description,
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
