<template>
  <Layout>

    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
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
        <h1>Le jeu de l’<abbr title="organisation de l’amélioration de l’accessibilité" >OAA</abbr></h1>
        <p class="fr-text--lead">Le jeu de l’organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique.</p>
      </div>
    </section>

    <section class="dg-content dg-goose fr-px-2w">
      <ul>
        <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="dg-goose__step fr-mb-2w fr-p-2w">
          <div class="dg-goose__step-title fr-mt-1w">
            <h2 class="fr-h6 fr-mb-1w" :id="'step-'+step.node.id"><span class="dg-goose__step-id">{{ step.node.id }}</span> {{ step.node.title }}</h2>
            <p>{{ step.node.duration }}</p>
          </div>
          <ul>
            <li v-for="(card, index) in $page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)"
                  :key="card.node.id"
                  class="dg-goose__card fr-mr-1w fr-mb-1w fr-pt-2w fr-px-2w fr-pb-1w"
                  :class="{ 'dg-goose__card--top250': card.node.top250 }">

              <p v-if="card.node.top250" class="dg-goose__card-id fr-mb-1w">Top250</p>
              <p v-else class="dg-goose__card-id fr-mb-1w">
                {{ card.node.id }}
                <font-awesome  class="dg-goose__card-icon" :icon="card.node.icon" width="16" height="16" aria-hidden="true" />
              </p>
              <h3 class="fr-mb-1w"><button class="dg-goose__card-title"  data-fr-opened="false" :aria-controls="card.node.id" :id="card.node.id + '__open-button'"><strong>{{ card.node.title }}</strong></button></h3>

              <dialog :aria-labelledby="'fr-modal-'+card.node.id" :id="card.node.id" class="fr-modal" role="dialog">
                <div class="fr-container fr-container--fluid fr-container-md">
                  <div class="fr-grid-row fr-grid-row--center">
                    <div class="fr-col-12fr-col-md-8">
                      <div class="fr-modal__body">
                        <div class="fr-modal__header">
                            <button class="dg-goose__modal-close fr-link--close fr-link" title="Fermer la fenêtre modale" :aria-controls="card.node.id" :id="card.node.id + '__close-button'">Fermer</button>
                        </div>
                        <div class="fr-modal__content">
                          <h1 :id="'fr-modal-'+card.node.id" class="fr-modal__title">{{ card.node.title }}</h1>
                          <p v-if="card.node.top250">
                            <span class="fr-fi-information-line" aria-hidden="true"></span> Cette étape concerne uniquement les démarches du <a href="https://observatoire.numerique.gouv.fr/" target="_blank" rel="noreferrer noopener" title="Site de l'Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre">Top250</a>
                          </p>
                          <div v-html="card.node.content" />
                        </div>
                        <div class="fr-modal__footer">
                          <ul class="dg-goose__modal-footer fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm fr-btns-group--icon-right fr-btns-group--sm">
                            <li>
                              <button class="dg-goose__modal-action fr-btn fr-fi-arrow-right-line"
                                      v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index + 1]"
                                      name="Suivant"
                                      v-on:click="nextCard(card.node.id, index, step.node.id)">
                                  Étape suivante
                              </button>
                            </li>
                            <li>
                              <button class="dg-goose__modal-action dg-goose__modal-action--left fr-btn fr-btn--secondary fr-fi-arrow-left-line"
                                      v-if="$page.allGooseCard.edges.filter(edge => edge.node.step.id === step.node.id)[index - 1]"
                                      name="Précédent"
                                      v-on:click.stop="previousCard(card.node.id, index, step.node.id)">
                                  Étape précédente
                              </button>
                            </li>
                          </ul>
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
        color: var(--text-default-grey);
        flex-shrink: 0;
      }
    }

    &__step-id {
      display: inline-block;
      border: 2px solid var(--text-default-grey);
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
      width: 9.875rem;
      position: relative;

      @media only screen and (max-width: $sm-point) {
        width: 86%;
      }

      &:hover, &:focus {
        border-color: var(--artwork-minor-red-marianne);
        box-shadow: 5px 5px 0px var(--artwork-minor-red-marianne);
      }

      &-id {
        font-weight: bold;
      }

      &-title {
        padding: 0;
        text-align: left;
        font-size: 0.875rem;
        color: var(--text-default-grey);

        &:focus, &:hover{
          background: none;
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
        color: var(--artwork-minor-red-marianne);
        text-align: right;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }

      &--top250 {
        border-color: var(--background-default-grey);
        background-color: var(--background-alt-grey);
      }
    }

    &__modal {
      &-close {
        padding-top: 0;
        padding-bottom: 0;
      }

      &-footer {
        justify-content: space-between !important;
      }

      &-action {
        @media only screen and (min-width: $sm-point) {
          margin: 0 !important;
        }

        &--left {
          flex-direction: row !important;

          &:before {
            margin: 0 0.5rem 0 -0.25rem !important;
          }
        }
      }
    }
  }
</style>
