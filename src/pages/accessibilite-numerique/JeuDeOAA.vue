<template>
  <Layout>

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

    <div class="content">
       <h1>Le jeu de l’<abbr title="organisation de l’amélioration de l’accessibilité" >OAA</abbr></h1>
       <p class="fr-text--lead">Le jeu de l’organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique.</p>

      <section class="dg-goose fr-mt-8w">
        <ul>
          <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="dg-goose__step fr-mb-2w fr-p-2w">

            <div class="dg-goose__step-title fr-mt-1w">
              <h2 class="fr-h6" :id="'step-'+step.node.id"><span class="dg-goose__step-id">{{ step.node.id }}</span> {{ step.node.title }}</h2>
              <p>{{ step.node.duration }}</p>
            </div>

            <ul>
              <li v-for="(card, index) in $page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)"
                    :key="card.node.id"
                    class="dg-goose__card fr-mr-2w fr-mb-2w fr-p-2w"
                    :class="{ 'dg-goose__card--top250': card.node.top250 }">

                <p v-if="card.node.top250" class="dg-goose__card-id fr-mb-2w">Top250</p>
                <p v-else class="dg-goose__card-id fr-mb-2w">
                  {{ card.node.id }}
                  <font-awesome  class="dg-goose__card-icon" :icon="card.node.icon" width="16" height="16" aria-hidden="true" />
                </p>
                <h3 class="fr-mb-1w"><button class="dg-goose__card-title fr-text"  data-fr-opened="false" :aria-controls="card.node.id" :id="card.node.id + '__open-button'"><strong>{{ card.node.title }}</strong></button></h3>
                <dialog :aria-labelledby="'fr-modal-'+card.node.id" :id="card.node.id" class="fr-modal">
                  <div class="fr-container">
                    <div class="fr-grid-row fr-grid-row--center">
                      <div class="fr-col-xs-12 fr-col-sm-10 fr-col-md-8">
                        <div class="fr-modal__body">
                          <div class="fr-modal__header">
                              <button class="fr-link--close fr-link" title="Fermer la fenêtre modale" :aria-controls="card.node.id" :id="card.node.id + '__close-button'">Fermer</button>
                          </div>
                          <div class="fr-modal__content">
                            <p v-if="card.node.top250" class="dg-goose__modal-icon">Top250</p>
                            <font-awesome v-else class="dg-goose__modal-icon" :icon="card.node.icon" width="16" height="16" aria-hidden="true" />
                            <h1 :id="'fr-modal-'+card.node.id" class="fr-modal__title">{{ card.node.title }}</h1>
                            <p v-if="card.node.top250" class="dg-goose__modal-notice">
                              <font-awesome :icon="['fas', 'info-circle']" height="16" width="16" aria-hidden="true" /> Cette étape concerne uniquement les démarches du <a href="https://observatoire.numerique.gouv.fr/" target="_blank" rel="noreferrer noopener" title="Site de l'Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre">Top250</a>
                            </p>
                            <div v-html="card.node.content" />
                          </div>
                          <div class="fr-modal__footer dg-goose__modal-navigation">
                            <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index - 1]"
                                    name="Précédent"
                                    class="dg-goose__previous-card"
                                    v-on:click.stop="previousCard(card.node.id, index, step.node.id)">
                              <font-awesome  width="18px" class="button__left-icon" :icon="['fas', 'arrow-left']"/> Étape précédente
                            </button>
                            <button v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index + 1]"
                                    name="Suivant"
                                    class="dg-goose__next-card"
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
            </ul>
          </li>
        </ul>
      </section>
    </div>

  </Layout>
</template>

<script>
  export default {
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


<style scoped lang="scss">

  .dg-goose {

    ul {
      padding: 0;
      margin: 0;

      > li.dg-goose__step, > li.dg-goose__card {
        list-style: none;
        box-sizing: initial;
        &::before {
          content: none;
        }
      }
    }

    &__step {
      background-color: var(--background-alt-grey);

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
        display: inline-block;
      }

      p {
        color: blue;
        flex-shrink: 0;
      }
    }

    &__step-id {
      display: inline-block;
      color: blue;
      border: 2px solid blue;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      padding: 2px;
      text-align: center;
      line-height: 1.2rem;
    }

    &__card {
      background-color: var(--background-default-grey);
      border: 1px solid var(--border-default-grey);
      flex-shrink: 0;
      width: 12rem;
      position: relative;

      @media only screen and (max-width: 576px) {
        width: 86%;
      }

      &:hover, &:focus {
        border-color: blue;
        box-shadow: 5px 5px 0px blue;
      }

      &-title {
        text-align: left;
        font-size: 1rem;

        &:focus, &:hover{
          color: blue;
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

      &-icon {
        float: right;
        color: red;
        text-align: right;
      }

      &--top250 {
        border-color: white;
        background-color: var(--background-alt-grey);

        .dg-goose__step-id {
          color: var(--text-mention-grey);
        }
      }

      .fr-modal__body {

        p {
          margin: 0.5rem 0;
        }

        h1 {
            font-size: 2em;
            color: blue;
            line-height: 1.2;
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 1.5em;
        }

        h3 {
            font-size: 1.25em;
            margin: 2rem auto 1.25rem;
        }
      }

      .dg-goose__modal-icon {
        font-size: 1.5rem !important;
        font-weight: bold !important;
        color: red !important;
        margin-bottom: 12px !important;
      }

      .dg-goose__modal-notice {
        padding-bottom: 16px;

        svg {
          margin-right: 4px;
        }
      }

      .dg-goose__modal-navigation {
        display: flex;
        justify-content: space-between;

        .dg-goose__previous-card, .dg-goose__next-card {
          font-weight: bold;
          color: black;
          font-size: 0.875rem;
          border: none;
          border-radius: 32px;
          background-color: white;
          cursor: pointer;
          padding: 8px 12px;

          &:hover {
            color: white;
            background-color: black;
          }

          .button__icon, .button__left-icon {
            width: 18px;
          }
        }

        .dg-goose__next-card {
          margin-left: auto;
          text-align: right;
          padding-left: 16px;
        }
      }
    }
  }

</style>
