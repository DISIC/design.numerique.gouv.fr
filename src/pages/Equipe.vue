<template>
  <Layout>

    <div class="cover">
     <div class="container">

       <p class="subhead">Notre équipe</p>
       <h1>Le pôle design des services numériques</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Notre mission</h2>
          <p>
            Le numérique est la promesse notamment d’un accès à une multitude d’informations et de services pour tous, et partout. Néanmoins, en France notamment, les produits et services numériques sont souvent conçus sans prendre le temps de comprendre l’audience qu’ils servent. C’est le cas pour de nombreux services publics numériques.
          </p>
          <p>
            En partenariat avec les administrations porteuses des principales démarches en ligne, nous accompagnons l'amélioration de l’expérience des démarches en ligne pour tous les usagers. Nous souhaitons des services numériques qui fonctionnent et paraissent simples, réactifs, attentifs, ludiques, bienveillants et humains.
          </p>
          <p>
            Le pôle design des services numériques est rattaché à la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a>.
          </p>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li v-for="{ node } in $page.allPeople.edges" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link"><g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link></p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <!-- <g-link :to="node.path">Read more</g-link> -->
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
        photo (width: 150, height: 150, quality: 100)
        path
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
      margin-bottom: 4px;
    }

    > li {
      list-style: none;
      text-align: center;
      width: 30%;
      margin: 24px 4px;

      @media only screen and (max-width: $mobileMaxWidth) {
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
