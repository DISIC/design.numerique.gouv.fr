<template>
  <Layout class="job-page">
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/recrutement/">Recrutement</g-link>
        </li>
        <li>
          <span aria-current="page">{{ $page.job.title }}</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <p class="cover__subhead">Recrutement</p>
       <h1 v-html="$page.job.title" />

      </div>
    </div>
    <div class="content job">
      <div class="about">
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

  .job-page {

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
  }

</style>
