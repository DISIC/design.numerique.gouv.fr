<template>
  <Layout class="tag-page">

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Nos publications sur le thème <span>{{ this.$route.params.id }}</span></h1>
       <g-link to="/articles/"><font-awesome class="button__left-icon" :icon="['fas', 'arrow-left']" transform="shrink-3"/>Voir toutes nos publications</g-link>

      </div>
    </div>

    <div class="content">

      <section class="articles">
        <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
          <g-image :src="node.illustration" alt=""/>
          <p class="articles__date">{{ node.publishedDate }}</p>
          <h2><g-link :to="node.path">{{ node.title }}</g-link></h2>
          <p>{{ node.description }}</p>
        </article>
      </section>

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


<style lang="scss">

  @import "src/assets/scss/_vars.scss";
  @import "src/assets/scss/_articles.scss";

  .tag-page {

    .cover {
      margin-bottom: 96px;

      h1 {
        font-size: 2.5em;
        margin-bottom: 12px;
        line-height: 1.2;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 2em;
        }

        > span {
          color: $blue;
        }
      }
    }
  }

</style>
