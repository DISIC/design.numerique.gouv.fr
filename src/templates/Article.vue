<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <div class="dg-content dg-content--xs">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
              <li>
                <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
              </li>
            <li>
              <span aria-current="page" v-html="this.cropedTitle" />
            </li>
          </ol>
        </nav>

        <h1 v-html="$page.article.title" />

        <ul v-if="$page.article.tags.length" class="fr-tags-group">
          <li v-for="tag in $page.article.tags" :key="tag.id">
            <g-link class="fr-tag  fr-tag--sm fr-mr-1w" target="_self" :to="tag.path">{{ tag.id.charAt(0).toUpperCase() + tag.id.slice(1) }}</g-link>
          </li>
        </ul>

        <p class="fr-text fr-text--sm">Date de publication : {{ $page.article.publishedDate }}<strong  v-if="$page.article.updatedDate" > - Mis à jour le {{ $page.article.updatedDate }}</strong></p>
      </div>

      <g-image class="fr-responsive-img fr-mb-4w" :src="$page.article.illustration" alt=""/>

      <div class="dg-content dg-content--xs">
          <div v-html="$page.article.content" />
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.article.title,
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@id':'https://design.numerique.gouv.fr'+this.$route.fullPath,
          'publisher': {
            '@type':'Organization',
            '@id':'https://design.numerique.gouv.fr',
            'name':'DesignGouv',
            'logo': {
              '@type':'ImageObject',
              'url':'https://design.numerique.gouv.fr/assets/images/logo-designgouv.png',
              'width':'188',
              'height':'37'
            },
          },
          'author': {
            '@type':'Organization',
            'name':'DesignGouv',
            'url':'https://design.numerique.gouv.fr',
          },
          '@type':'NewsArticle',
          'headline':this.$page.article.title,
          "image": [
            'https://design.numerique.gouv.fr'+this.$page.article.illustration.src,
           ],
          'thumbnailUrl':'https://design.numerique.gouv.fr'+this.$page.article.illustration.src,
          'datePublished':this.$page.article.publishedDate,
          'description':this.$page.article.description,
          'articleBody':this.$page.article.content
        }
      }],
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
      }]
    }
  },
  created() {
    this.cropedTitle =
      this.$page.article.title.length > 48 ?
      this.$page.article.title.substring(0, 46) + "..." :
      this.$page.article.title;
  },
  mounted() {
    var images = document.getElementsByTagName('img');
    images.forEach(image => image.classList.add('fr-responsive-img'));
  }
}
</script>

<page-query>
query Article ($id: ID!) {
  article: article (id: $id) {
    title
    publishedDate (format: "D MMMM YYYY", locale : "fr")
    updatedDate (format: "D MMMM YYYY", locale : "fr")
    illustration (quality: 50)
    description
    content
    tags {
      id
      path
    }
  }
}
</page-query>
