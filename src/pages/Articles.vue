<template>
  <Layout>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Articles</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../assets/images/article-picto.svg"
            aria-hidden="true"
          />Articles
        </h1>
        <ul class="fr-tags-group fr-mt-4w">
          <li v-for="tag in $page.allTag.edges" :key="tag.node.id">
            <g-link class="fr-tag" target="_self" :to="tag.node.path">{{
              tag.node.id.charAt(0).toUpperCase() + tag.node.id.slice(1)
            }}</g-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="dg-content fr-px-0 fr-px-md-2w">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div
          class="fr-col-sm-6"
          v-for="{ node } in $page.allArticle.edges"
          :key="node.id"
        >
          <article class="fr-card fr-enlarge-link">
            <div class="fr-card__body">
              <div class="fr-card__content">
                <h2 class="fr-card__title">
                  <g-link :to="node.path" class="fr-card__link">{{
                    node.title
                  }}</g-link>
                </h2>
                <p class="fr-card__desc">{{ node.description }}</p>
                <div class="fr-card__start">
                  <p class="fr-card__detail">{{ node.publishedDate }}</p>
                </div>
              </div>
            </div>
            <div class="fr-card__header">
              <div>
                <img
                  :src="node.illustration.src"
                  class="fr-responsive-img"
                  alt=""
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
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
          illustration (width: 800, height: 312, quality: 50)
          description
          path
        }
      }
    },
    allTag (sortBy: "id", order: ASC) {
      edges {
        node {
        	id
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
    meta: [
      {
        name: "description",
        content:
          "Découvrez nos dernières publications sur le design et l'accessibilité numérique.",
      },
      {
        property: "og:title",
        content: "Articles - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Découvrez nos dernières publications sur le design et l'accessibilité numérique.",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>
