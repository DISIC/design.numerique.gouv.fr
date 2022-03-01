<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav aria-label="Breadcrumb" class="fr-breadcrumb">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/formations/" class="fr-breadcrumb__link">Formations</g-link>
            </li>
            <li>
              <span aria-current="page">Formation à l’écoconception</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Formation à l’écoconception</h1>
        <p class="fr-text--lead">Pourquoi et comment écoconcevoir des services publics numériques.</p>
      </div>
    </div>

    <div class="dg-content dg-content--xs fr-px-2w fr-mt-6w">
      <h2>Revivez la formation en vidéo</h2>
      <p>La formation a eu lieu en direct le 16 décembre. Vous pouvez la revivre <a href="https://www.youtube.com/watch?v=qaPFSK-Jbxg" target="_blank" title="sur notre chaîne YouTube - Nouvelle fenêtre">sur notre chaîne YouTube</a>.</p>

      <h3>Objectifs</h3>
      <ul>
        <li>Connaître et mesurer les impacts environnementaux du numérique</li>
        <li>Mettre en œuvre le référentiel général d’écoconception de services numériques</li>
      </ul>

      <h3>Public concerné</h3>
      <p>Agents de la fonction publique ou prestataires impliqués dans la conception des services numériques publics.</p>

      <h3>Programme</h3>
      <ul>
        <li>Les impacts environnementaux du numérique</li>
        <li>La mission Green Tech – numérique écoresponsable</li>
        <li>L’analyse du cycle de vie</li>
        <li>Pourquoi l’écoconception de services numériques ? Pour qui ?</li>
        <li>La mise en œuvre du référentiel d’écoconception de service numérique</li>
        <li>Les outils libres et open source dédiés à la mesure</li>
        <li>Le système de design de l’État</li>
        <li>Les clés à retenir</li>
      </ul>
      <p>C’est important, c’est gratuit, c’est ludique, c’est opérationnel et c’est toujours disponible <a href="https://www.youtube.com/watch?v=qaPFSK-Jbxg" target="_blank" title="sur notre chaîne YouTube - Nouvelle fenêtre">sur notre chaine Youtube</a> !</p>
      <p>N'oubliez pas, nous proposons d’autres formations : <g-link to="/formations/design/">design</g-link>, <g-link to="/formations/accessibilite/">accessibilité</g-link>, <g-link to="/formations/recherche-utilisateur/">recherche utilisateur</g-link> et <g-link to="/formations/simplification-information/">simplification de l’information</g-link>.</p>
    </div>

  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Formation à l’écoconception",
      meta: [{
        name: "description",
        content: ""
      },
      {
        property: "og:title",
        content: "Formation à l’écoconception - DesignGouv"
      },
      {
        property: "og:description",
        content: ""
      },
      {
        property: "og:image",
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
        content: "Formation à l’écoconception - DesignGouv"
      },
      {
        name: "twitter:description",
        content: ""
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    },
    data () {
      return {
        form: {
          email: '',
          organisme: '',
          formation: 'Écoconception',
          session: '2021-12-16'
        }
      }
    },
    methods: {
      addParticipant() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_COURSE_BASE);
        base('Inscriptions').create([
        {
          "fields": {
            "E-mail": this.form.email,
            "Organisme": this.form.organisme,
            "Formation": this.form.formation,
            "Session": this.form.session,
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
