<template>
  <Layout>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/design-numerique/" class="fr-breadcrumb__link"
                >Design</g-link
              >
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Étapes clés</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Les étapes clés de la conception</h1>
        <p class="fr-text--lead">
          Prendre en compte les utilisateurs et utilisatrices d'un service
          numérique au cours de sa conception nécéssite de faire appel aux
          <strong>bonnes expertises</strong> pour mettre en œuvre les
          <strong>bonnes méthodes</strong> aux <strong>bons moments</strong>.
          Suivez le guide !
        </p>
      </div>
    </section>

    <section class="dg-content dg-content--sm">
      <div class="fr-notice fr-notice--info fr-mb-4w">
        <div class="fr-container">
          <div class="fr-notice__body">
            <p>
              <span class="fr-notice__title"
                >Nos recommandations illustrent l'ensemble des étapes
                indispensables.
              </span>
              <span class="fr-notice__desc"
                >Chaque projet étant spécifique, il sera nécéssaire d'adapter ce
                cadre à votre contexte. <strong>N'improvisez pas</strong>,
                faîtes appel aux experts de métiers impliqués !</span
              >
            </p>
            <button
              title="Masquer le message"
              onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)"
              id="button-1299"
              class="fr-btn--close fr-btn"
            >
              Masquer le message
            </button>
          </div>
        </div>
      </div>

      <div class="fr-mb-4w">
        <h2 class="fr-h3">Les bonnes questions</h2>
        <p>
          Ce guide vous apportera les réponses aux (bonnes) questions suivantes
          :
        </p>
        <ul>
          <li>Comment se lancer dans la conception d'un service numérique ?</li>
          <li>
            Quelles sont les étapes clés à respecter pour assurer la conception
            d'un services de qualité ?
          </li>
          <li>
            Quelles expertises impliquer dans la conception, à quels moments ?
          </li>
          <li>
            Quand et comment impliquer les usagers lors de la conception ?
          </li>
          <li>Quand traîter du sujet de l'acessibilité numérique ?</li>
        </ul>
      </div>

      <div class="fr-mb-6w">
        <h2 class="fr-h3">Les expertises à mobiliser</h2>
        <p>
          Nous concentrons notre attention sur
          <strong
            >les expertises indispensables à la conception d'un service
            numérique de qualité</strong
          >. Un équipe produit complète nécéssitera d'autres compétences, non
          mentionnées ici.
        </p>
        <ul class="dg-list-no-decoration">
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >produit</span
            >
            : le ou la responsable produit
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >design</span
            >
            : designer, designer UX/UI, designer produit, designer de contenu
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >recherche utilisateur</span
            >
            : chargé de recherche utilisateur
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >accessibilité</span
            >
            : expert en accessibilité numérique
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >Eco</span
            >
            : expert en numérique écoresponsable
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >seo</span
            >
            : chargé de référencement naturel
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >données</span
            >
            : chargé d'analyse des données d'utilisation
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >métier</span
            >
            : équipes métiers
          </li>
          <li>
            <span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron"
              >technique</span
            >
            : équipes techniques (développement, infrastructure, sécurité, etc.)
          </li>
        </ul>
      </div>

      <div class="">
        <h2 class="fr-h3">Les étapes clés</h2>
        <p>
          Pour chaque étape, les compétences indpensables sont listées. Le
          symbole ★ indique la personne responsable de l'étape.
        </p>
        <ol class="fr-pl-0">
          <il
            class="fr-card fr-enlarge-link fr-card--horizontal fr-card--no-border fr-mb-2w"
            v-for="{ node } in $page.allEtape.edges"
            :key="node.id"
          >
            <div class="fr-card__body fr-pl-1w">
              <div class="fr-card__content fr-pt-1w fr-pb-8w">
                <h3 class="fr-card__title">
                  <g-link
                    :to="'/design-numerique/etapes-cles/' + node.slug + '/'"
                    >{{ node.title }}</g-link
                  >
                </h3>
                <p class="fr-card__desc">{{ node.description }}</p>
                <div class="fr-card__end">
                  <ul class="fr-badges-group">
                    <li v-for="c in node.cat" :key="c.id">
                      <span
                        class="fr-mr-1w fr-badge fr-badge--sm fr-badge--pink-macaron"
                        >{{ c }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="fr-card__header">
              <p class="dg-text-with-picto">
                <strong class="dg-picto dg-picto--md fr-mr-3v">{{
                  node.order
                }}</strong>
              </p>
            </div>
          </il>
        </ol>
      </div>

      <!-- <div class="fr-grid-row fr-grid-row--center fr-mt-4w">
        <ol class="fr-accordions-group">
          <il
            class="fr-col-12"
            v-for="{ node } in $page.allEtapes.edges"
            :key="node.id"
          >
            <section class="fr-accordion">
              <h2 class="fr-accordion__title">
                <button
                  class="fr-accordion__btn"
                  aria-expanded="false"
                  :aria-controls="node.id"
                >
                  <span class="dg-text-with-picto step-title">
                    <strong class="dg-picto dg-picto--sm fr-mr-3v">{{
                      node.order
                    }}</strong>
                    {{ node.title }}
                  </span>
                </button>
              </h2>
              <p class="step-description">{{ node.description }}</p>
              <p class="step-expert">Expertises mobilisées :
                <span
                  v-for="c in node.cat"
                  :key="c.id"
                  class="fr-ml-1w fr-badge fr-badge--sm fr-badge--pink-macaron"
                  >{{ c }}</span
                >
              </p>
              <div class="fr-collapse dg-content dg-content--sm" :id="node.id">
                <div class="fr-callout">
                  <p class="fr-callout__text">{{ node.description }}</p>
                </div>
                <div v-html="node.content"></div>
              </div>
            </section>
          </il>
        </ol>
      </div> -->
    </section>
  </Layout>
</template>

<page-query>
  query {
    allEtape (sort: { by: "order", order: ASC }) {
      edges {
        node {
        	id
          slug
          title
          order
          description
          cat
          path
          content
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Étapes clés",
    meta: [
      {
        name: "description",
        content: "Les étapes clés de la conception d'un services numérique",
      },
      {
        property: "og:title",
        content: "Étapes clés - DesignGouv",
      },
      {
        property: "og:description",
        content: "Les étapes clés de la conception d'un services numérique",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>

<style scoped>
button.fr-accordion__btn svg {
  margin-right: 1em;
}

.fr-card__header {
  flex: initial !important;
  width: inherit !important;
}

.fr-card {
  padding: 0.5rem;
  border-bottom: 1px solid var(--background-contrast-pink-macaron);
  /* --idle: transparent;
    --hover: var(--background-contrast-pink-macaron);
    --active: var(--background-contrast-pink-macaron-hover);
    background-color: var(--background-alt-grey); */
}

/* .step-title {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .step-description {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .step-expert {
    margin-left: 1rem;
  } */
</style>
