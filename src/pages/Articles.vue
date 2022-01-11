<template>
  <Layout>
    <div class="dg-content fr-px-2w">

        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Articles</span>
            </li>
          </ol>
        </nav>

        <h1>Articles</h1>

        <section class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-sm-6" v-for="{ node } in $page.allArticle.edges" :key="node.id">
            <article class="fr-card fr-enlarge-link" >
              <div class="fr-card__body">
                  <h2 class="fr-card__title">
                    <g-link :to="node.path" class="fr-card__link">{{ node.title }}</g-link>
                  </h2>
                  <p class="fr-card__desc">{{ node.description }}.</p>
                  <p class="fr-card__detail">{{ node.publishedDate }}</p>
              </div>
              <div class="fr-card__img">
                  <g-image :src="node.illustration" class="fr-responsive-img" alt=""/>
              </div>
            </article>
          </div>
        </section>

    </div>
  </Layout>
</template>

<page-query>

  query {
    allArticle (sortBy: "publishedDate", order: DESC) {
      edges {
        node {
        	id
          title
          publishedDate (format: "D MMMM YYYY", locale : "fr")
          illustration
          description
          path
        }
      }
    }
  }

</page-query>

<script>
  export default {
    metaInfo: {
      title: "Articles",
      meta: [{
        name: "description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
      },
      {
        property: "og:title",
        content: "Articles - DesignGouv"
      },
      {
        property: "og:description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
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
        content: "Articles - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>
