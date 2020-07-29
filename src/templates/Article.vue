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
          <p aria-current="page">
            <span v-html="$page.article.title" />
          </p>
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

      <div class="tags">
        <g-link class="tags__item" v-for="tag in $page.article.tags.split(',')" :to="'/blog/' + tag">{{tag}}</g-link>
      </div>

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

  @import "src/assets/scss/_vars.scss";

  .breadcrumb {
    p {
      display: inline-block;
    }
  }

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

    &__item {
      display: inline-block;
      padding: 2px 10px;
      margin: 0px 12px 12px 0;
      border-radius: 16px;
      border: 2px solid $gray;
      font-size: 0.825em;
      font-weight: bold;
      //background-color: $gray;
      color: $black;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0px 8px 8px 0;
      }

      &:hover {
        border: 2px solid $blue;
        color: $blue;
      }
    }
  }

</style>
