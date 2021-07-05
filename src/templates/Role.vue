<template>
  <Layout class="role-page">

    <div class="cover">

      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol>
          <li>
            <g-link to="/">Accueil</g-link>
          </li>
          <li>
            <g-link to="/articles/">Vous êtes</g-link>
          </li>
          <li aria-current="page" v-html="$page.role.title" />
        </ol>
      </nav>

     <div class="cover__container">
        <div class="cover__text">
          <h1 v-html="$page.role.title" />
        </div>
      </div>
    </div>

    <div class="content">
      <div v-html="$page.role.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.role.title,
      meta: [{
        name: "description",
        content: this.$page.role.description
      },
      {
        property: "og:title",
        content: this.$page.role.title + " - DesignGouv"
      },
      {
        property: "og:description",
        content: this.$page.role.description
      }],
    }
  }
}
</script>

<page-query>
query Role ($id: ID!) {
  role: role (id: $id) {
    title
    description
    content
  }
}
</page-query>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .role-page {

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
        width: 100px;
        height: 100px;
        border-radius: 50%;
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
