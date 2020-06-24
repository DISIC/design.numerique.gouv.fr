<!-- Leaving this here until this is reutilised -->
<template>
  <Layout>

    <div class="cover">
     <div class="cover__container">

       <p class="cover__subhead">Recrutement</p>
       <h1 v-html="$page.job.title" />

      </div>
    </div>
    <div class="content job">
      <div class="about">
        <h3>À propos</h3>
        <p>En partenariat avec les administrations porteuses des démarches administratives les plus utilisées par les Français, nous travaillons pour une meilleure inclusion des usagers, et pour l'amélioration de l'expérience de ces services pour tous. <g-link to="/equipe/">Faites connaissance avec notre équipe</g-link>.</p>
        <ul>
          <li><strong>Contrat : </strong><span v-html="$page.job.type" /></li>
          <li><strong>Durée : </strong><span v-html="$page.job.length" /></li>
          <li><strong>Début : </strong><span v-html="$page.job.start_date" /></li>
          <li><strong>Localisation : </strong><span>20 avenue de Ségur, Paris (75) et en télétravail</span></li>
        </ul>
      </div>

      <div v-html="$page.job.content" />

      <div>
        <h3>Pour candidater</h3>
        <p>
          Adressez votre CV (sans photographie, âge ou situation familiale) et votre e-mail de motivation à : <a href="mailto:candidatures-DINUM@pm.gouv.fr">candidatures-DINUM@pm.gouv.fr</a>.
        </p>
        <p>
          Les services du Premier ministre sont engagés dans une politique active en faveur de la diversité, de l’égalité professionnelle et du handicap. A ce titre, le ou la candidat(e) ne doit indiquer aucune information personnelle (âge, situation de famille, photographie) sur sa candidature.
        </p>
        <p>
          Si vous avez des questions, contactez <span v-html="$page.job.contact" />.
        </p>
        <p>
          Cette offre a été publiée le <span v-html="$page.job.published_date" />.
        </p>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.job.title
    }
  }
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

<style lang="scss">
.job {
  h3 {
    margin-top: 54px;
  }
  .about {
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
      }
    }
  }
}
</style>
