<template>
  <Layout>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Nos articles sur le thème <span>{{ this.$route.params.id }}</span></h1>
       <g-link to="/blog/"><font-awesome class="button__left-icon" :icon="['fas', 'arrow-left']" transform="shrink-3"/>Voir tous les articles</g-link>

      </div>
    </div>

    <div class="content">

        <section class="articles">
          <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
            <g-link class="articles__image" :to="node.path">
              <g-image :src="node.illustration"/>
            </g-link>
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
query articlesByTags($id: String) {
  allArticle (filter: {tags: {contains: [$id]}}, sortBy: "title", order: ASC) {
    edges {
      node {
      	id
        title
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
      name: "robots",
      content: "noindex"
    }],
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

  .cover {
    margin-bottom: 96px;

    h1 {
      font-size: 2.5em;
      margin-bottom: 16px;
      line-height: 1.2;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 2em;
      }

      > span {
        color: $blue;
      }
    }
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

    &__image {
      border: none;

      img {
        object-fit: cover;
        width: 100%;
        max-height: 180px;
      }
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
