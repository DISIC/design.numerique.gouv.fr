<template>
  <Layout class="goose-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Jeu de l’OAA</span>
        </li>
      </ol>
    </nav>

   <div class="cover">
     <div class="cover__container">




       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Le jeu de l’<abbr title="organisation de l’amélioration de l’accessibilité" class="text-highlight">OAA</abbr></h1>
       <p class="cover__subtitle">Le jeu de l’organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique.</p>

      </div>
    </div>
    <div class="content">
      <!--
      <div class="fr-callout">
          <p class="fr-callout__text">
            Cette ressource est en <strong>version beta</strong> et n’est que partiellement conforme au RGAA.<br>
            Votre avis est précieux : aidez-nous à l’améliorer en partageant vos idées et suggestions en nous écrivant à l’adresse contact@design.numerique.gouv.fr ou en <a href="https://github.com/DISIC/design.numerique.gouv.fr/issues" target="_blank" rel="noreferrer noopener" title="créant un ticket - nouvelle fenêtre">créant un ticket</a> sur le dépot.
          </p>
      </div>
      -->
      <section class="goose fr-mt-8w">
        <ol>
          <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="goose__step">

            <div class="goose__step-title">
              <h2 :id="'step-'+step.node.id"><span class="goose__step-id">{{ step.node.id }}</span> {{ step.node.title }}</h2>
              <p>{{ step.node.duration }}</p>
            </div>

            <ol>
              <li v-for="(card, index) in $page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)"
                    :key="card.node.id"
                    class="goose__card"
                    :class="{ 'goose__card--top250': card.node.top250 }">

                  <p v-if="card.node.top250" class="goose__card-id">Top250</p>
                  <p v-else class="goose__card-id">
                    {{ card.node.id }}
                    <font-awesome  class="goose__card-icon" :icon="card.node.icon" width="16" height="16" aria-hidden="true" />
                  </p>
                  <h3><button class="goose__card-title"  data-fr-opened="false" :aria-controls="card.node.id" :id="card.node.id + '__open-button'">{{ card.node.title }}</button></h3>
                  <dialog :aria-labelledby="'fr-modal-'+card.node.id" :id="card.node.id" class="fr-modal">
                      <div class="fr-container">
                          <div class="fr-grid-row fr-grid-row--center">
                              <div class="fr-col-xs-12 fr-col-sm-10 fr-col-md-8">
                                  <div class="fr-modal__body">
                                      <div class="fr-modal__header">
                                          <button class="fr-link--close fr-link" title="Fermer la fenêtre modale" :aria-controls="card.node.id" :id="card.node.id + '__close-button'">Fermer</button>
                                      </div>
                                      <div class="fr-modal__content">
                                        <p v-if="card.node.top250" class="goose__modal-icon">Top250</p>
                                        <font-awesome v-else class="goose__modal-icon" :icon="card.node.icon" width="16" height="16" aria-hidden="true" />
                                        <h1 :id="'fr-modal-'+card.node.id" class="fr-modal__title">{{ card.node.title }}</h1>
                                        <p v-if="card.node.top250" class="goose__modal-notice">
                                          <font-awesome :icon="['fas', 'info-circle']" height="16" width="16" aria-hidden="true" /> Cette étape concerne uniquement les démarches du <a href="https://observatoire.numerique.gouv.fr/" target="_blank" rel="noreferrer noopener" title="Site de l'Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre">Top250</a>
                                        </p>
                                        <div v-html="card.node.content" />
                                      </div>
                                      <div class="fr-modal__footer goose__modal-navigation">
                                        <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index - 1]"
                                                name="Précédent"
                                                class="goose__previous-card"
                                                v-on:click.stop="previousCard(card.node.id, index, step.node.id)">
                                          <font-awesome  width="18px" class="button__left-icon" :icon="['fas', 'arrow-left']"/> Étape précédente
                                        </button>
                                        <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index + 1]"
                                                name="Suivant"
                                                class="goose__next-card"
                                                v-on:click="nextCard(card.node.id, index, step.node.id)">
                                          Étape suivante <font-awesome  width="18px" class="button__icon" :icon="['fas', 'arrow-right']"/>
                                        </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </dialog>
              </li>
            </ol>
          </li>
        </ol>
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
        var button = document.getElementById(id + '__open-button');
        if (button) {
          button.click();
        }
      },
      closeModal (id) {
        var button = document.getElementById(id + '__close-button');
        if (button) {
          button.click();
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
      title: "Jeu de l'oaa",
      meta: [{
        name: 'description',
        content: "Le jeu de l'organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique."
      },
      {
        property: 'og:title',
        content: "DesignGouv présente son jeu de l’oaa"
      },
      {
        property: 'og:description',
        content: "Le jeu de l'organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
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

      ol {
        padding: 0;
        margin: 0;

        > li.goose__step, > li.goose__card {
          list-style: none;
          box-sizing: initial;
          &::before {
            content: none;
          }
        }
      }

      &__step {
        background-color: $light-gray;
        padding: 12px 16px;
        margin-bottom: 16px;
        border-radius: 32px;

        > ol {
          display: flex;
          flex-wrap: wrap;
        }

        @media only screen and (max-width: $mobile-max-width) {
          border-radius: 24px;
          padding: 12px;
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

          @media only screen and (max-width: $mobile-max-width) {
            margin: 12px 16px 12px 40px;
          }
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
        box-sizing: content-box;
      }

        &__card-icon {
          font-size: 0.875rem;
          float: right;
          color: $red;
          margin: 3px;
          text-align: right;
        }

      &__card {
        background-color: white;
        border: solid 2px $gray;
        border-radius: 16px;
        margin: 8px;
        padding: 12px 16px;
        flex-shrink: 0;
        width: 145px;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          width: 86%;
          margin: 4px;
        }

        &:hover, &:focus {
          border-color: $blue;
          box-shadow: 5px 5px 0px $light;
        }

        &-id {
          margin: 0;
          font-weight: bold;
        }

        &-title {
          border: none;
          text-align: left;
          margin: 0;
          padding: 0;
          color: black;
          background: none;
          border-radius: unset;

          &:focus, &:hover{
            color: $blue;
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

        &--top250 {
          border-color: white;
          background-color: $light-gray;

          h3, p {
            color: $dark-gray;
          }
        }

        h3 {
          margin: 8px 0 0 0;

          button {
            font-size: 0.875rem;
            font-weight: bold;
          }

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0;
          }
        }

        p {
          font-size: 0.875rem;
        }

        .goose__modal-icon {
          font-size: 1.5rem !important;
          font-weight: bold !important;
          color: $red !important;
          margin-bottom: 12px !important;
        }

        .goose__modal-notice {
          padding-bottom: 16px;

          svg {
            margin-right: 4px;
          }
        }

        .goose__modal-navigation {
           display: flex;
           justify-content: space-between;

           .goose__previous-card, .goose__next-card {
             font-weight: bold;
             color: $black;
             font-size: 0.875rem;
             border: none;
             border-radius: 32px;
             background-color: white;
             cursor: pointer;
             padding: 8px 12px;

             &:hover {
               color: white;
               background-color: $black;
             }

             .button__icon, .button__left-icon {
               width: 18px;
             }
           }

           .goose__next-card {
             margin-left: auto;
             text-align: right;
             padding-left: 16px;
           }
         }

        .fr-container {
          @media only screen and (min-width: $mobile-max-width + 1) {
            margin-bottom: 112px;
          }
        }

        .fr-modal__footer {
          padding: 16px;

          @media only screen and (max-width: $mobile-max-width) {
            padding: 12px 4px;
          }
        }
      }
    }
  }

</style>
