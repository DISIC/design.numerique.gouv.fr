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
        <ul>
          <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="goose__step">

            <div class="goose__step-title">
              <h2><span class="goose__step-id">{{ step.node.id }}</span>{{ step.node.title }}</h2>
              <p>{{ step.node.duration }}</p>
            </div>

            <ul>
              <li v-for="(card, index) in $page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)"
                    :key="card.node.id"
                    class="goose__card"
                    :class="{ 'goose__card--top250': card.node.top250 }"
                    role="button"
                    v-on:click="openModal(card.node.id)">
                <div>
                  <font-awesome  class="goose__card-icon" :icon="card.node.icon"/>
                  <p v-if="card.node.top250" class="goose__card-id">Top250</p>
                  <p v-else class="goose__card-id">{{ card.node.id }}</p>
                  <h3>{{ card.node.title }}</h3>

                  <div :id="card.node.id" class="goose__modal">
                    <div class="goose__modal-content">
                      <button name="Fermer" class="close" v-on:click.stop="closeModal(card.node.id)">&times;</button>
                      <p class="goose__modal-subhead">{{ step.node.id + '. ' + step.node.title }}</p>
                      <h3>{{ card.node.title }}</h3>
                      <div v-html="card.node.content" />
                      <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index - 1]"
                              name="Suivant"
                              class="goose__previous-card"
                              v-on:click.stop="previousCard(card.node.id, index, step.node.id)">
                        Étape précédente
                      </button>
                      <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index + 1]"
                              name="Suivant"
                              class="goose__next-card"
                              v-on:click.stop="nextCard(card.node.id, index, step.node.id)">
                        Étape suivante
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

          </li>
        </ul>
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
    methods: {
      openModal (id) {
        var modal = document.getElementById(id);
        if (modal) {
          modal.style.display = "block";
        }
      },
      closeModal (id) {
        var modal = document.getElementById(id);
        if (modal) {
          modal.style.display = "none";
        }
      },
      previousCard (cardID, index, stepID) {
        this.closeModal(cardID);
        this.openModal(this.$page.allGooseCard.edges.filter(edge => edge.node.step.id === stepID)[index - 1].node.id);
      },
      nextCard (cardID, index, stepID) {
        this.closeModal(cardID);
        this.openModal(this.$page.allGooseCard.edges.filter(edge => edge.node.step.id === stepID)[index + 1].node.id);
      },
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
          icon
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

      ul {
        padding: 0;
        margin: 0;

        > li {
          list-style: none;
        }
      }

      &__step {
        background-color: $lighter-gray;
        padding: 12px 16px;
        margin-bottom: 16px;
        border-radius: 32px;

        > ul {
          display: flex;
          flex-wrap: wrap;
        }
      }

      &__step-title {
        flex-shrink: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        h2 {
          margin: 8px;
          font-size: 1.125rem;
        }

        p {
          margin: 11px;
          font-weight: bold;
          color: $blue;
          flex-shrink: 0;
        }
      }

      &__step-id {
        display: inline-block;
        color: $blue;
        border: 2px solid $blue;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        padding: 2px;
        text-align: center;
        margin-right: 8px;
      }

      &__card {
        background-color: white;
        border: solid 2px $gray;
        border-radius: 16px;
        margin: 8px;
        padding: 12px 16px;
        flex-shrink: 0;
        width: 130px;
        cursor: pointer;

        h3 {
          font-size: 0.875rem;
          margin: 0;
        }

        p {
          font-size: 0.875rem;
          font-weight: bold;
          margin: 0 0 8px 0;
          color: $blue;
        }

        &:hover, &:focus {
          border-color: $blue;
          box-shadow: 5px 5px 0px $light;
        }

        &--top250 {
          border-color: white;
          background-color: $lighter-gray;

          h3, p {
            color: $dark-gray;
          }
        }
      }

      &__card-icon {
        font-size: 0.875rem;
        float: right;
        color: $red;
        margin: 3px;
        text-align: right;
      }

      &__modal {
        display: none;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgba($black, 0.7);
        cursor: auto;
      }

      &__modal-content {
        background-color: white;
        margin: 8% auto;
        padding: 24px 32px 32px 32px;
        border: 2px solid $black;
        border-radius: 24px;
        max-width: 720px;

        .close, .close:hover {
          float: right;
          border: none;
          color: $black;
          background-color: white;
          font-size: 2rem;
          margin-top: -20px;
          margin-right: -32px;

        }

        h3 {
          font-size: 2rem;
          margin: 40px 0 32px 0;
          color: $blue !important;
        }

        p {
          font-weight: normal;
          margin-bottom: 32px;
        }

        .goose__modal-subhead {
           font-weight: bold;
        }
      }

      &__previous-card {

      }

      &__next-card {
        float: right;
      }
    }

  }

</style>
