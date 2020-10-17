<template>
  <Layout class="team-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Notre équipe</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <h1>Le pôle design des services numériques</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Mission</h2>
          <p>
            En 2017, Emmanuel Macron a fixé deux objectifs à 2022 : rendre 100% des démarches administratives réalisables en ligne, et améliorer les services publics du quotidien grâce au numérique.
          </p>
          <p>
            Le numérique, c'est la promesse d’un accès à une multitude d’informations, de culture et services pour tous, et partout. Néanmoins, en France notamment, les produits et services numériques sont encore trop souvent conçus sans prendre en compte l'audience qu’ils servent. C’est le cas pour de nombreux services publics numériques. <strong>Le numérique doit nous permettre d'améliorer la relation entre les usagers et l'administration, à travers des services simples, accessibles et humains.</strong>
          </p>
          <p>
            En partenariat avec les ministères porteurs des démarches administratives les plus utilisées par les Français, nous travaillons pour qu'un plus grand nombre puissent utiliser ces services en toute autonomie, notamment les 12M de personnes en situation de handicap. Pour ce faire, nous pilotons et suivons la qualité de cette numérisation des services à travers l'<a href="https://observatoire.numerique.gouv.fr">Observatoire</a> depuis juin 2019. Nous avons lancé en septembre 2020 le <a href="https://design.numerique.gouv.fr/commando-ux">Commando UX</a> pour déployer des designers et développeurs au sein des ministères qui concoivent ces services publics. Enfin, nous participons au développement d’une culture de design d'inclusion au sein de l’État, et à la mise en communauté de compétences de design dans les administrations.
          </p>
          <p>
            Le pôle Design des services numériques est rattaché à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank">direction interministérielle du numérique</a> et placé, par délégation du Premier ministre, sous l’autorité de la ministre de la transformation et de la fonction publiques <a href="https://twitter.com/AdeMontchalin">Amélie de Montchalin</a>.
          </p>
          <h2>Mesures de succès d'ici 2022</h2>
          <ul>
            <li>
              Achever la numérisation de 100% des <a href="https://observatoire.numerique.gouv.fr">250 démarches administratives</a> les plus utilisées par les Français
            </li>
            <li>
              80% des démarches qui s'adressent aux particuliers, et 90% des démarches qui s'adressent aux professionnels devront obtenir une note de satisfaction supérieur à 7/10
            </li>
            <li>
              80% de ces démarches administratives devront être accessibles aux personnes en situation de handicap
            </li>
          </ul>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li v-for="{ node } in team" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>En appui</h2>
          <ul class="team">
            <li v-for="{ node } in external" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Le commando</h2>
          <ul class="team">
            <li v-for="{ node } in commando" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<page-query>

  query {
    allPeople (sortBy: "lastName", order: ASC) {
      edges {
        node {
        	id
          firstName
          lastName
          job_title
          sub_team
          sub_team_link
          twitter
          photo (width: 150, height: 150, quality: 100)
          group
          content
        }
      }
    }
  }

</page-query>

<script>

  export default {
    metaInfo: {
      title: "Équipe",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
    computed: {
      team: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'team')
      },
      external: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'external')
      },
      commando: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'commando')
      },
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .team-page {

    .team {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      h3 {
        margin: 4px 0;

        a {
          color: $black;
          border: none;

          &:hover {
            color: $blue;
          }
        }
      }

      > li {
        list-style: none;
        text-align: center;
        width: 30%;
        margin: 24px 4px;

        @media only screen and (max-width: $mobile-max-width) {
          width: 46%;
        }

        img {
          border-radius: 50em;
          max-width: 150px;
        }

        p {
            margin: 0;
        }
      }
    }
  }

</style>
