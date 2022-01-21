<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav aria-label="Breadcrumb" class="fr-breadcrumb">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/formations/" class="fr-breadcrumb__link">Formations</g-link>
          </li>
          <li>
            <span aria-current="page">Formation au design</span>
          </li>
        </ol>
      </nav>

      <h1>Formation au design</h1>
      <p class="fr-text--lead">Connaître les principes du design centré sur les besoins des usagers et des citoyens (UX) et les moyens de leur mise en œuvre pour la conception de services publics numériques.</p>

      <h2>Revivez la formation en vidéo</h2>
      <p>La formation a eu lieu en direct le 30 novembre. Vous pouvez la revivre <a href="https://www.youtube.com/watch?v=QjGzdw4OSO8" target="_blank" title="sur notre chaîne YouTube - Nouvelle fenêtre">sur notre chaîne YouTube</a>.</p>

      <h3>Objectifs</h3>
      <ul>
        <li>Connaitre les principes fondamentaux et les définitions</li>
        <li>Découvrir les bénéfices de cette approche</li>
        <li>Mettre en œuvre les méthodes dans la conception et l'amélioration des démarches administratives numériques</li>
        <li>Identifier les rôles et responsabilités</li>
        <li>Disposer d'une boite à outils et d'un carnet de contacts</li>
      </ul>

      <h3>Public concerné</h3>
      <p>Agents de la fonction publique ou prestataires impliqués dans la conception des démarches administratives numériques.</p>

      <h3>Programme</h3>
      <ul>
        <li>Qu'est-ce que le design centré usager ? Objectifs, principes et définitions</li>
        <li>Les résultats de sa mise en œuvre</li>
        <li>Comment intégrer le design dans la conception des démarches numériques ?</li>
        <li>La recherche utilisateur</li>
        <li>Utiliser le système de design de l'État</li>
        <li>L'accessibilité et le design</li>
        <li>Quels rôles et quelle organisation</li>
        <li>Les interlocuteurs et outils pour la mise en œuvre</li>
      </ul>
      <p>C’est important, c’est gratuit, c’est ludique, c’est opérationnel et c’est toujours disponible <a href="https://www.youtube.com/watch?v=QjGzdw4OSO8" target="_blank" title="sur notre chaîne YouTube - Nouvelle fenêtre">sur notre chaine Youtube</a> !</p>
      <p>N'oubliez pas, nous proposons trois autres formations : <g-link to="/formations/accessibilite/">accessibilité</g-link>, <g-link to="/formations/recherche-utilisateur/">recherche utilisateur</g-link> et <g-link to="/formations/ecoconception/">écoconception</g-link>.</p>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Formation au design",
      meta: [{
        name: "description",
        content: "Connaître les principes du design centré sur les besoins des usagers et des citoyens (UX) et les moyens de leur mise en œuvre pour la conception de services publics numériques"
      },
      {
        property: "og:title",
        content: "Formation au design - DesignGouv"
      },
      {
        property: "og:description",
        content: "Connaître les principes du design centré sur les besoins des usagers et des citoyens (UX) et les moyens de leur mise en œuvre pour la conception de services publics numériques"
      },
      {
        property: "og:image",
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
        content: "Formation au design - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Connaître les principes du design centré sur les besoins des usagers et des citoyens (UX) et les moyens de leur mise en œuvre pour la conception de services publics numériques"
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
          organisme: '',
          formation: 'Design',
          session: '2021-11-30'
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
