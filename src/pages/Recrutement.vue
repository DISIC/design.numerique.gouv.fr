<template>
  <Layout class="jobs-page">
    <div class="cover">
      <div class="cover__container">
        <h1 class="text-highlight">Recrutement</h1>
<!--      
        <p class="cover__jobs">Nombre de postes ouverts : <span>{{ $page.allJob.edges.length }}</span></p>
 -->
        <p class="cover__subtitle" >Nous n’avons pas d’offre pour le moment.</p>
<!--
        <p class="cover__subtitle" >Rejoignez le pôle design des services numériques pour améliorer ensemble la qualité des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.</p>
        <p>Nous sommes rattachés à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</p>
-->
      </div>
    </div>
 
      <div class="content">
           <h2>Les offres</h2>
          <ul class="jobs">
            <li v-for="{ node } in $page.allJob.edges" :key="node.id">
              <g-link :to="node.path" class="button">
                <h3>{{ node.title }}</h3>
                <p>{{ node.type }}</p>
              </g-link>
            </li>
          </ul>
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
          path
          type
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
        content: "Recrutement - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Nous améliorons les services publics numériques. Rejoingnez-nous !"
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .jobs-page {

    h1 {
      margin-bottom: 0.5rem;
    }

    .cover__jobs {
      display: inline-block;
      font-weight: bold;
      color: $red;
      background-color: $light-gray;
      border-radius: 1rem;
      padding: 0.25rem 1rem;
      margin: 0 0 1rem 0;
    }

    .jobs {
      padding: 0;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      flex-wrap: wrap;

      > li {
        list-style: none;
        text-align: center;
        width: 48%;
        margin: 8px 4px;

        a {
          padding: 8px 16px 16px;
          border-radius: 16px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;

          h3 {
            margin-bottom: 8px;
          }

          p {
            font-weight: normal;
            margin: 0;
          }
        }

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
        }
      }
    }
  }

</style>
