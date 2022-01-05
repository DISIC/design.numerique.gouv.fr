<template>
  <Layout class="articles-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Portail numérique unique</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">
       <h1 class="text-highlight">Portail numérique unique</h1>
      </div>
    </div>

    <div class="content">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div v-for="{ node } in $page.allPnu.edges" :key="node.id" class="fr-col-12" :class="{ 'fr-col-xs-12 fr-col-sm-6 fr-col-md-4': node.order > 0 && node.order < 10 }">
          <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
            <div class="fr-tile__body">
              <h2 class="fr-tile__title">
                <g-link  class="fr-tile__link" :to="node.path">
                  {{ node.title }}
                </g-link>
              </h2>
              <p class="fr-tile__desc">{{ node.description }}</p>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

  query {
    allPnu  (sortBy: "order", order: ASC){
      edges {
        node {
        	id
          title
          description
          order
          path
        }
      }
    }
  }

</page-query>

<script>

  export default {
    metaInfo: {
      title: "Portail numérique unique",
      meta: [{
        name: "description",
        content: "Découvrez le portail numérique unique"
      },
      {
        property: "og:title",
        content: "Portail numérique unique - DesignGouv"
      },
      {
        property: "og:description",
        content: "Découvrez le portail numérique unique."
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
        content: "Portail numérique unique - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "DDécouvrez le portail numérique unique."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>

