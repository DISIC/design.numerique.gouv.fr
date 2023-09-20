<template>
  <Layout>

    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page" v-html="this.tag + ' : nos articles'" />
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/article-picto.svg" aria-hidden="true">{{ this.tag }} : nos articles</h1>
        <g-link class="fr-link fr-fi-arrow-left-line fr-link--icon-left fr-mt-1w fr-mb-2w" to="/articles/">Voir tous nos articles</g-link>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-sm-6" v-for="article in $page.tag.belongsTo.edges" :key="article.node.id">
          <article class="fr-card fr-enlarge-link" >
            <div class="fr-card__body">
              <div class="fr-card__content">
                <h2 class="fr-card__title">
                  <g-link :to="article.node.path" class="fr-card__link">{{ article.node.title }}</g-link>
                </h2>
                <p class="fr-card__desc">{{ article.node.description }}.</p>
                <div class="fr-card__start">
                  <p class="fr-card__detail">{{ article.node.publishedDate }}</p>
                </div>
              </div>
            </div>
            <div class="fr-card__header">
              <div class="">
                  <g-image :src="article.node.illustration" class="fr-responsive-img" alt=""/>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

  </Layout>
</template>


<page-query>
  query Tag ($id: ID!) {
    tag: tag (id: $id) {
      title
      belongsTo (sortBy: "publishedDate", order: DESC) {
        totalCount
        edges {
          node {
            ...on Article {
              title
              description
              publishedDate (format: "D MMMM YYYY", locale : "fr")
              illustration (quality: 50)
              path
            }
          }
        }
      }
    }
  }
</page-query>


<script>
  export default {
    data () {
      return {
        tag: ''
      }
    },
    created () {
      this.tag = this.$page.tag.title.charAt(0).toUpperCase() + this.$page.tag.title.slice(1)
    },
    metaInfo () {
      return {
        title: this.tag + " : nos articles",
        meta: [{
          name: "robots",
          content: "noindex"
        }],
      }
    }
  }
</script>
