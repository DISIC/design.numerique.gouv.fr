<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Recrutement</span>
        </li>
      </ol>
    </nav>
    
    <div class="cover">
     <div class="cover__container">

       <h1>Recrutement</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <p>
            Rejoignez le pôle design des services numériques pour améliorer ensemble la qualité des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.
          </p>
          <p>
            Nous sommes rattachés à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank">direction interministérielle du numérique</a>.
          </p>
        </section>

        <section>
          <h2>Les offres</h2>
          <ul class="jobs">
            <li v-for="{ node } in $page.allJob.edges" :key="node.id">
              <g-link :to="node.path">
                <h3>{{ node.title }}</h3>
                <p>{{ node.type }}</p>
              </g-link>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<page-query>
query {
  allJob (sortBy: "title", order: ASC) {
    edges {
      node {
      	id
        title
        type
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Recrutement",
    meta: [{
      name: "description",
      content: "Améliorons ensemble la qualité des services publics numériques."
    },
    {
      property: "og:title",
      content: "Recrutement - DesignGouv"
    },
    {
      property: "og:description",
      content: "Améliorons ensemble la qualité des services publics numériques."
    },
    {
      property: "og:image",
      content: "https://designgouv.fr/designGouv.png"
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
      content: "Recrutement - DesignGouv"
    },
    {
      name: "twitter:description",
      content: "Nous améliorons les services publics numériques. Rejoingnez-nous !"
    },
    {
      name: "twitter:image",
      content: "https://designgouv.fr/designGouv.png"
    }],
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

  .jobs {
    padding: 0;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;

    h3 {
      margin-bottom: 4px;
    }

    > li {
      list-style: none;
      text-align: center;
      width: 48%;
      margin: 24px 4px;

      a {
        border: 1px solid $gray-hover;
        padding: 8px 12px 20px;
        border-radius: 8px;
        text-decoration: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;

        h3 {
          color: black;
        }

        p {
          color: $mid-gray;
        }

        &:hover {
          border-color: $blue;

          h3 {
            color: $blue;
          }
        }

      }

      @media only screen and (max-width: $mobile-max-width) {
        width: 100%;
      }

      p {
          margin: 0;
      }
    }
  }

</style>
