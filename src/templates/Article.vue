<template>
  <Layout>

    <div class="cover">

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
              <span v-html="cropedTitle" />
            </p>
          </li>
        </ol>
      </nav>

     <div
        class="cover__container"
        :style="{ backgroundImage: `url(${illustration})` }">

        <div class="cover__text">
          <p class="cover__subtitle"><span v-html="$page.article.published_date" /></p>
          <h1 v-html="$page.article.title" />
        </div>
      </div>
    </div>

    <div class="content">

      <div v-html="$page.article.content" />

      <div class="tags">
        <g-link class="tags__item" v-for="(tag, id) in $page.article.tags.split(',')" :key="id" :to="'/blog/' + tag">{{tag}}</g-link>
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
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;

    @media only screen and (max-width: $mobile-max-width) {
      margin-top: 8px;
    }

    p {
      display: inline-block;
    }
  }

  .cover {
    margin-top: 0px;
    margin-bottom: 64px;

    @media only screen and (max-width: $mobile-max-width) {
      margin-bottom: 48px;
    }

    &__container {
      height: 360px;
      padding: 0;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    &__text {
      width: 640px;
      background-color: white;
      padding: 4px 32px 0 32px;
    }

    h1 {
      font-size: 2.5em;
      line-height: 1.2;
      color: $black;
      display: inline-block;
      margin: 8px 0 0 0;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 2em;
        margin: 0;
      }
    }

    &__subtitle {
      margin-top: 8px;
    }
  }

  .content {
    max-width: 640px;
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
