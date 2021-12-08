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
       <p>Le jeu de l’organisation de l’amélioration de l’accessibilité (OAA) vous guide dans la mise en accessibilité de votre service numérique.</p>

      <section class="goose fr-mt-8w">
        <ul>
          <li v-for="step in $page.allGooseStep.edges" :key="step.node.id" class="goose__step">

            <div class="goose__step-title">
              <h2 :id="'step-'+step.node.id"><span class="goose__step-id">{{ step.node.id }}</span> {{ step.node.title }}</h2>
              <p>{{ step.node.duration }}</p>
            </div>

            <ul>
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

