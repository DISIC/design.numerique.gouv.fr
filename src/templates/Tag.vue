<template>
  <Layout>
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-md-10">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
            </li>
            <li>
              <span aria-current="page" v-html="this.$route.params.id + ' : tous nos articles'" />
            </li>
          </ol>
        </nav>

        <h1 class="fr-mb-1w">{{ this.$route.params.id }} : tous nos articles</span></h1>
        <g-link class="fr-link fr-fi-arrow-left-line fr-link--icon-left fr-mb-4w" to="/articles/">Voir toutes nos publications</g-link>

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
    </div>

  </Layout>
</template>


<page-query>

  query articlesByTags($id: ID) {
    allArticle (filter: {tags: {contains: [$id]}}, sortBy: "publishedDate", order: DESC) {
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
        name: "robots",
        content: "noindex"
      }],
    }
  }

</script>
