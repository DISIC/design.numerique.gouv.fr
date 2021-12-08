<template>
  <Layout>
    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/recrutement/" class="fr-breadcrumb__link">Recrutement</g-link>
        </li>
        <li>
          <span aria-current="page">{{ $page.job.title }}</span>
        </li>
      </ol>
    </nav>

    <div class="content">
      <h1 v-html="$page.job.title" />
      <h2>Informations générales</h2>
        <ul>
          <li><strong>Contrat : </strong><span v-html="$page.job.type" /></li>
          <li><strong>Durée : </strong><span v-html="$page.job.length" /></li>
          <li><strong>Début : </strong><span v-html="$page.job.start_date" /></li>
          <li><strong>Localisation : </strong><span>20 avenue de Ségur, Paris (75) et en télétravail</span></li>
        </ul>

        <h2>Qui sommes-nous ?</h2>

        <h3>Direction interministérielle du numérique</h3>
        <p>La direction interministérielle du numérique (<abbr title="Direction interministérielle du numérique">DINUM</abbr>) est en charge de la transformation numérique de l’État. Elle et ses 200 agents accompagnent les ministères, conseillent le gouvernement et développent des services et ressources numériques partagées pour les citoyens et les agents publics. Le but : créer, grâce au numérique, le service public de demain.</p>

        <h3>Pôle design des services numériques</h3>
        <p>Le pôle Design des services numériques (<abbr title="Design des services numériques">DSN</abbr>) pilote l’<a href="https://observatoire.numerique.gouv.fr/" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>. Il promeut une culture du design au sein de l’État dans une volonté de placer l’inclusion et l’expérience de l’usager au cœur de la conception des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.</p>

    
      <div v-html="$page.job.content" />
      <p>Cette offre a été publiée le <span v-html="$page.job.published_date" />.</p>
     </div>
  </Layout>
</template>


<script>

  export default {
    metaInfo () {
      return {
        title: this.$page.job.title + " - " + this.$page.job.type + " - " + this.$page.job.length,
        meta: [{
          name: "description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          property: "og:title",
          content: this.$page.job.title + " - " + this.$page.job.type + " - " + this.$page.job.length + " - DesignGouv"
        },
        {
          property: "og:description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          property: "og:image",
          content: "https://design.numerique.gouv.fr/assets/images/rejoindre-equipe.png"
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
          content: this.$page.job.title + " - " + this.$page.job.type + " - " + this.$page.job.length + " - DesignGouv"
        },
        {
          name: "twitter:description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          name: "twitter:image",
          content: "https://design.numerique.gouv.fr/assets/images/rejoindre-equipe.png"
        }],
      }
    },
  }

</script>

<page-query>

  query Job ($id: ID!) {
    job: job (id: $id) {
      published_date
      title
      type
      start_date
      length
      path
      content
      contact
    }
  }

</page-query>

