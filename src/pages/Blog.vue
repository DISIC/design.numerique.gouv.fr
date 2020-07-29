<template>
  <Layout>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Nos articles</h1>

      </div>
    </div>

    <div class="content">

        <section class="articles">
          <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
            <g-image :src="node.illustration" quality="100" height="150" width="150" />
            <p class="articles__date">{{ node.published_date }}</p>
            <g-link :to="node.path">
              <h2>{{ node.title }}</h2>
            </g-link>
            <p>{{ node.description }}</p>
            <g-link :to="node.path" class="articles__link">
              Lire l'article<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </article>
        </section>

    </div>

  </Layout>
</template>

<page-query>
query {
  allArticle (sortBy: "title", order: ASC) {
    edges {
      node {
      	id
        title
        tags
        published_date
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
    title: "Blog",
    meta: [{
      name: "description",
      content: "Découvrez nos derniers articles."
    },
    {
      property: "og:title",
      content: "Blog - DesignGouv"
    },
    {
      property: "og:description",
      content: "Découvrez nos derniers articles."
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
      content: "Blog - DesignGouv"
    },
    {
      name: "twitter:description",
      content: "Découvrez nos derniers articles."
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

  h1 {
    font-size: 3em;
  }

  .articles {
    padding: 0;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      margin: 0px;
      font-size: 1.6em;
      padding-bottom: 12px;
      text-decoration: none;
      border: none;

      &:hover {
        color: $blue;
      }
    }

    img {
      width: 100%;
    }

    > article {
      list-style: none;
      text-align: left;
      width: 48%;
      margin: 0px 4px 64px 4px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 100%;
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
