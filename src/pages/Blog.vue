<template>
  <Layout>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Notre blog</h1>

      </div>
    </div>

    <div class="content">

        <section class="articles">
          <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
            <g-image :src="node.illustration" alt="Image d'illustration de l'article"/>
            <p class="articles__date">{{ node.publishedDate }}</p>
            <h2><g-link :to="node.path">{{ node.title }}</g-link></h2>
            <p>{{ node.description }}</p>
          </article>
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
    title: "Notre blog",
    meta: [{
      name: "description",
      content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
    },
    {
      property: "og:title",
      content: "Notre blog - DesignGouv"
    },
    {
      property: "og:description",
      content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
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
      content: "Notre blog - DesignGouv"
    },
    {
      name: "twitter:description",
      content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
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
  @import "src/assets/scss/_articles.scss";

  .cover {
    margin-bottom: 80px;

    h1 {
      font-size: 2.5em;
      line-height: 1.2;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 2em;
      }
    }
  }

</style>
