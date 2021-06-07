<template>
  <Layout class="job-page" >
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
        <h2>Informations générales</h2>
        <ul>
          <li><strong>Contrat : </strong><span v-html="$page.job.type" /></li>
          <li><strong>Durée : </strong><span v-html="$page.job.length" /></li>
          <li><strong>Début : </strong><span v-html="$page.job.start_date" /></li>
          <li><strong>Localisation : </strong><span>20 avenue de Ségur, Paris (75) et en télétravail</span></li>
        </ul>

        <h2>Qui sommes-nous ?</h2>

        <h3>Direction interministérielle du numérique</h3>
        <p>La direction interministérielle du numérique (<abbr title="direction interministérielle du numérique">DINUM</abbr>) est en charge de la transformation numérique de l’État. Elle accompagne les ministères, conseille le gouvernement et développe des services et ressources numériques partagées pour les citoyens et les agents publics. Service du Premier ministre, placé sous l’autorité de la ministre de la Transformation et de la Fonction publiques, elle pilote le programme interministériel d’accélération de la transformation numérique du service public TECH.GOUV. Dans le cadre du plan France Relance, elle pilote la mise en œuvre du volet Transformation numérique de l’État et des territoires.</p>
        <p>Rejoindre la <abbr title="direction interministérielle du numérique">DINUM</abbr>, c’est prendre part à un collectif de près de 200 agents réunis autour d’une même ambition : créer, grâce au numérique, le service public de demain.</p>

        <h3>Pôle design des services numériques</h3>
        <p>Au sein de la <abbr title="direction interministérielle du numérique">DINUM</abbr>, le pôle Design des services numériques pilote, en partenariat avec les ministères, l'<a href="https://observatoire.numerique.gouv.fr/" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a> - qui suit la qualité de la dématérialisation des 250 démarches administratives les plus utilisées par les Français - pour les rendre plus fluides, efficaces, inclusives et compréhensibles.</p>
        <p>Le pôle promeut une culture du design au sein de l’État, notamment grâce au <g-link to="/commando-ux/">Commando UX</g-link> et à l'animation d'une communauté de compétences en design au sein des administrations, dans une volonté de placer l'inclusion et l'expérience de l'usager au cœur de la conception des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.</p>

      </div>

      <div class="details" v-html="$page.job.content" />

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

  @import "src/assets/scss/_vars.scss";

  .job-page {

    .job {

      p + h3,
      div > h3 {
        margin-top: 2em;
        color: $blue;
      }

      h2 + h3 {
        margin-top: 1em;
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
