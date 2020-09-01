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

  .articles {
    padding: 0;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      list-style: none;
      text-align: left;
      width: 48%;
      margin: 0px 4px 64px 4px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 100%;
      }

      h2 {
        margin: 0px;
        font-size: 1.6em;
        padding-bottom: 12px;

        a {
          color: $black;
          border: none;

          &:hover {
            color: $blue;
          }
        }
      }

      // a::after {
      //     position: absolute;
      //     content: "";
      //     top: 0;
      //     bottom: 0;
      //     left: 0;
      //     right: 0;
      // }

      img {
        object-fit: cover;
        width: 100%;
        max-height: 180px;
      }

      p {
          margin: 0;
      }
    }

    &__date {
      padding: 12px 0;
    }

    &__link {
      display: inline-block;
      margin-top: 12px;
    }
  }

</style>
