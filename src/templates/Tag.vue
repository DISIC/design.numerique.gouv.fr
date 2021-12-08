<template>
  <Layout>
    <div class="content">
       <h1>Nos publications sur le thème <span>{{ this.$route.params.id }}</span></h1>
       <g-link to="/articles/">Voir toutes nos publications</g-link>

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

