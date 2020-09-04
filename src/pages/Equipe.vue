<template>
  <Layout>

    <div class="cover">
     <div class="cover__container">

       <p class="cover__subhead">À propos</p>
       <h1>Le pôle design des services numériques</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Notre mission</h2>
          <p>
            Le numérique, c'est la promesse d’un accès à une multitude d’informations et de services pour tous, et partout. Néanmoins, en France notamment, les produits et services numériques sont encore trop souvent conçus sans prendre en compte l'audience qu’ils servent. C’est le cas pour de nombreux services publics numériques.
          </p>
          <p>
            En partenariat avec les administrations porteuses des démarches administratives les plus utilisées par les Français, nous travaillons pour une meilleure inclusion des usagers, et pour l'amélioration de l'expérience de ces services pour tous. Nous souhaitons des services numériques qui fonctionnent et paraissent simples, réactifs, attentifs, ludiques, bienveillants et humains.
          </p>
          <h3>Nos objectifs</h3>
          <ul>
            <li>
              Définir une stratégie globale pour l'évolution des services en ligne rendus aux usagers, tenant compte des décisions gouvernementales, des besoins des usagers, et des possibilités de mise en œuvre par les administrations.
            </li>
            <li>
              Faire évoluer et piloter la mise en œuvre la politique de mesure des usages des services en ligne et de la satisfaction des usagers sur ces services en ligne
            </li>
            <li>
              Fournir ressources et aide aux administrations pour la mise en œuvre et l’améliorations de leurs services en ligne : référentiels, guides, outils, briques réutilisables, dispositifs d’accompagnement
            </li>
            <li>
              Animer un réseau de correspondants dans les administrations
            </li>
            <li>
              Participer au développement d’une culture de Design au sein de l’État, et à la mise en communauté de compétences de design dans les administrations
            </li>
            <li>
              En lien avec l’Agence du Numérique, de stimuler en interministériel le développement d’actions en faveur d’une meilleure inclusion de l’ensemble des usagers dans le cadre de la transformation numérique des services publics
            </li>
          </ul>
          <p>
            Le pôle design des services numériques est rattaché à la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a> et placé, par délégation du Premier ministre, sous l’autorité du ministre de l’action et des comptes publics.
          </p>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li v-for="{ node } in team" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" />
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
              <g-image :src="node.photo" quality="100" height="150" width="150" />
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
              <g-image :src="node.photo" quality="100" height="150" width="150" />
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
          path
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

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

  .team {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    h3 {
      margin: 4px 0;
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

</style>
