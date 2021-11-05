<template>
  <Layout class="article-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
          <li>
            <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
          </li>
        <li>
          <span aria-current="page" v-html="cropedTitle" />
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div
        class="cover__container"
        :style="{ backgroundImage: `url(${illustration})` }">

        <div class="cover__text">
          <p class="cover__subtitle"><span v-html="$page.article.publishedDate" /></p>
          <h1 v-html="$page.article.title" />
        </div>
      </div>
    </div>

    <div class="content">

      <div v-html="$page.article.content" />

      <div class="tags">
        <g-link class="tags__item" v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path">{{tag.id}}</g-link>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.article.title,
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
      }],
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
    publishedDate (format: "D MMMM YYYY", locale : "fr")
    illustration
    description
    content
    tags {
      id
      path
    }
  }
}
</page-query>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .article-page {

    .fr-breadcrumb {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 1.5rem;

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
      padding: 0 2rem;

      h2 {
        margin-top: 1.5em;
      }

      .guests { /* special pour l'evenement */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        flex-basis: auto;
        text-align: center;

        > div {
          width: 48%;
        }

      }

      img {
        max-width: 100%;
        text-align: center;
      }

      img[alt='Logo Framadate'] {
        width: 200px;
      }

      img[alt='Demo Framadate'] {
        width: 200px;
      }
    }

    .tags {
      margin-top: 3em;

      &__item {
        display: inline-block;
        padding: 2px 10px;
        margin: 0px 12px 12px 0;
        border-radius: 16px;
        border: 2px solid $gray;
        font-size: 0.825em;
        font-weight: 900;
        color: $black;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0px 8px 8px 0;
          font-size: 0.825em;
        }

        &:hover {
          border: 2px solid $blue;
          color: $blue;
        }
      }
    }
  }

</style>
