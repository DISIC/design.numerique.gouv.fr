<template>
  <Layout>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
          <li>
            <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
          </li>
        <li>
          <span aria-current="page" v-html="cropedTitle" />
        </li>
      </ol>
    </nav>

    <div class="content">
      <p v-html="$page.article.publishedDate" />
      <h1 v-html="$page.article.title" />
      <div v-html="$page.article.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.article.title,
      meta: [{
        name: "description",
        content: this.$page.article.description
      },
      {
        property: "og:title",
        content: this.$page.article.title + " - DesignGouv"
      },
      {
        property: "og:description",
        content: this.$page.article.description
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr" + this.$page.article.illustration.src
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
        content: this.$page.article.title + " - DesignGouv"
      },
      {
        name: "twitter:description",
        content: this.$page.article.description
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr" + this.$page.article.illustration.src
      }],
    }
  },
  created() {
    this.illustration = this.$page.article.illustration.src
    this.cropedTitle =
      this.$page.article.title.length > 30 ?
      this.$page.article.title.substring(0, 28) + "..." :
      this.$page.article.title;
  }
}
</script>

<page-query>
query Article ($id: ID!) {
  article: article (id: $id) {
    title
    publishedDate (format: "D MMMM YYYY", locale : "fr")
    illustration
    description
    content
    tags {
      id
      path
    }
  }
}
</page-query>