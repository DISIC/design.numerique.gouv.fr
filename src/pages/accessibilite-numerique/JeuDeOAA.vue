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
          <span aria-current="page">Le jeu de l'OAA</span>
        </li>
      </ol>
    </nav>

   <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Le jeu de l'<abbr title="organisation de l’amélioration de l’accessibilité">OAA</abbr></h1>
       <p class="cover__subtitle">Le jeu de l'organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique.</p>

      </div>
    </div>
    <div class="content">
      <div class="rf-callout">
          <p class="rf-callout__text">
            Cette ressource est en <strong>version beta</strong> et n’est pas conforme au RGAA.<br>
            Votre avis est précieux : aidez-nous à l’améliorer en partageant vos idées et suggestions en nous écrivant à l’adresse contact@design.numerique.gouv.fr ou en <a href="https://github.com/DISIC/design.numerique.gouv.fr/issues" target="_blank" title="créant un ticket - nouvelle fenêtre">créant un ticket</a> sur le dépot.  
          </p>
      </div>
      <section class="goose rf-mt-8w">
        <ul>
          <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="goose__step">

            <div class="goose__step-title">
              <h2 :id="'step-'+step.node.id"><span class="goose__step-id">{{ step.node.id }}</span>{{ step.node.title }}</h2>
              <p>{{ step.node.duration }}</p>
            </div>

            <ul>
              <li v-for="(card, index) in $page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)"
                    :key="card.node.id"
                    class="goose__card"
                    :class="{ 'goose__card--top250': card.node.top250 }"
                    v-on:click="openModal(card.node.id)">
                  <p v-if="card.node.top250" class="goose__card-id">Top250</p>
                  <p v-else class="goose__card-id">{{ card.node.id }}</p>
                  <h3><button class="goose__card-id" title="" aria-expanded="false" :aria-controls="card.node.id">{{ card.node.title }}</button></h3>

                  <dialog :aria-labelledby="'rf-modal-'+card.node.id" :id="card.node.id" class="rf-modal">
                      <div class="">
                          <div class="rf-grid-row rf-grid-row--center">
                              <div class="rf-col-12 rf-col-md-6">
                                  <div class="rf-modal__body">
                                      <div class="rf-modal__header">
                                          <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" :aria-controls="card.node.id">Fermer</button>
                                      </div>
                                      <div class="rf-modal__content">
                                        <h1 :id="'rf-modal-'+card.node.id" class="rf-modal__title"><span class="rf-fi-arrow-right-line rf-fi--lg"></span>{{ card.node.title }}</h1>
                                        <p v-if="card.node.top250" class="goose__modal-notice">
                                          <font-awesome :icon="['fas', 'info-circle']"/>Cette étape concerne uniquement les démarches du <a href="https://observatoire.numerique.gouv.fr/" target="_blank" title="Site de l'Observatoire de la qualité des démarche en ligne - Nouvelle fenêtre">Top250</a>
                                        </p>
                                        <div v-html="card.node.content" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </dialog>

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
      title: "Jeu de l'oaa - DesignGouv",
      meta: [{
        name: 'description',
        content: "Le jeu de l'organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique."
      },
      {
        property: 'og:title',
        content: "Designgouv présente son jeu de l’oaa"
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

        > li.goose__step, > li.goose__card {
          list-style: none;
          box-sizing: initial;
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
          margin: 12px 16px 8px 40px;
          font-size: 1.125rem;
          display: inline-block;
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
        position: absolute;
        color: $blue;
        border: 2px solid $blue;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        padding: 2px;
        text-align: center;
        margin: -4px 0 0 -36px;
      }

      &__card {
        background-color: white;
        border: solid 2px $gray;
        border-radius: 16px;
        margin: 8px;
        padding: 12px 16px;
        flex-shrink: 0;
        width: 130px;
        position: relative;
 
        .goose__card-id {
          border: none;
          text-align: left;
          margin: 0;
          padding: 0;
          color: black;
          background: none;
          &:focus, &:hover{
            color:#3355E3;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            cursor: pointer;
          }
        }

        @media only screen and (max-width: $mobile-max-width) {
          width: 86%;
          margin: 4px;
        }

        h3 {
          font-size: 0.875rem;
          margin: 0;
        }

        p {
          font-size: 0.875rem;
          font-weight: bold;
          margin: 0 0 8px 0;
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

          .goose__modal-content {

            h3, p {
              color: $black;
            }
          }
        }
      }

      &__card-id {
        color: $blue;
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

        p, ul {
          font-weight: normal;
          margin-bottom: 32px;
          font-size: 1rem;
          padding-left: 1em;
        }
        
        li {
          list-style: disc;
          list-style-position: inside;

          &::marker {
            color: blue;
          }
        }
        .goose__modal-subhead {
           font-weight: bold;
        }

        .goose__modal-notice {
          display: inline-block;
          background-color: $lighter-gray;
          padding: 0px 16px 0px 0px;
          border-radius: 16px;
          margin-left: -2px;
          margin-bottom: 16px;
          padding-bottom: 2px;

          svg {
            color: $red;
            padding-right: 4px;
            font-size: 1.75rem;
            margin-bottom: -5px;
          }
        }
      }
    }

  }

</style>
