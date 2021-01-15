<template>
  <Layout class="goose-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Jeu de l'oie</span>
        </li>
      </ol>
    </nav>

   <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Jeu de l'oie</h1>

      </div>
    </div>

    <div class="content">

      <section class="goose">
        <div v-for="{ node } in $page.allGooseStep.edges" :key="node.id" class="goose__step">

          <div class="goose__step-title">
            <h2>{{ node.title }}</h2>
            <p>{{ node.duration }}</p>
          </div>

          <div v-for="{ node } in $page.allGooseCard.edges.filter(edge => edge.node.step.id === node.id)" :key="node.id" class="goose__card" :class="{ 'goose__card--top250': node.top250 }">
            <div v-if="node.top250">
              <p>Top250</p>
              <h3>{{ node.title }}</h3>
            </div>
            <div v-else>
              <!-- <g-image :src="node.illustration" focusable="false" aria-hidden="true"/> -->
              <p>{{ node.id.slice(node.id.length - 1) }}</p>
              <h3>{{ node.title }}</h3>
              <!-- <div v-html="node.content" /> -->
            </div>
          </div>

        </div>
      </section>

    </div>

  </Layout>
</template>


<script>

  import Accessibilite from "~/assets/images/accessibilite.svg"

  export default {
    components: {
      Accessibilite,
    },
    metaInfo: {
      title: "Jeu de l'oie - DesignGouv",
      meta: [{
        name: 'description',
        content: ""
      },
      {
        property: 'og:title',
        content: ""
      },
      {
        property: 'og:description',
        content: ""
      },
      {
        property: 'og:image',
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>


<page-query>

  query {
    allGooseStep (sortBy: "id", order: ASC) {
      edges {
        node {
          id
          title
          duration
        }
      }
    },
    allGooseCard (sortBy: "id", order: ASC) {
      edges {
        node {
          id
          title
          content
          top250
          step {
            id
          }
        }
      }
    }
  }

</page-query>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .goose-page {

    .goose {

      &__step {
        background-color: $lighter-gray;
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        margin-bottom: 16px;
        border-radius: 32px;
      }

      &__step-title {
        flex-shrink: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        h2 {
          margin: 12px;
          font-size: 1.5rem;
        }

        p {
          margin: 16px;
          font-weight: bold;
          color: $blue;
          flex-shrink: 0;
        }
      }

      &__card {
        background-color: white;
        border: solid 2px $gray;
        border-radius: 16px;
        margin: 8px;
        padding: 16px;
        flex-shrink: 0;
        width: 130px;

        h3 {
          font-size: 1rem;
          margin: 0;
        }

        p {
          font-weight: bold;
          margin: 0 0 16px 0;
        }

        &:hover {
          border-color: $blue;
          box-shadow: 5px 5px 0px $light;

          h3, p {
            color: $black;
          }
        }

        &--top250 {
          border-color: white;
          background-color: $lighter-gray;

          h3, p {
            color: $dark-gray;
          }
        }
      }
    }

  }

</style>
