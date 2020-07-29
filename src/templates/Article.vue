<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/blog/">Blog</g-link>
        </li>
        <li>
          <g-link
            to="/blog/cadre-legal"
            aria-current="page"
          ><span v-html="$page.article.title" /></g-link>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <h1 v-html="$page.article.title" />
       <p class="cover__subtitle"><span v-html="$page.article.published_date" /></p>

      </div>
    </div>

    <div class="content">

      <div v-html="$page.article.content" />

      <p class="tags">Tags : <span v-html="$page.article.tags" /></p>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.article.title
    }
  }
}
</script>

<page-query>
query Article ($id: ID!) {
  article: article (id: $id) {
    title
    tags
    published_date
    illustration
    content
  }
}
</page-query>

<style scoped lang="scss">

  .job {

    h3 {
      margin-top: 54px;
    }

    .about {

      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
        }
      }
    }
  }

  .tags {
    margin-top: 4em;
  }

</style>
