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
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../../assets/images/design-picto.svg"
            aria-hidden="true"
          />
          Bien concevoir un service numérique
        </h1>
        <p class="fr-text--lead">
          Concevoir un service numérique simple, inclusif, humain nécéssite de
          faire appel aux
          <strong>bonnes expertises</strong> pour mettre en œuvre les
          <strong>bonnes pratiques</strong> aux <strong>bons moments</strong>.
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
                >Ce guide présente les étapes et compétences indispensables à la
                conception.
              </span>
              <span class="fr-notice__desc"
                >Chaque projet étant spécifique, il sera nécéssaire d'adapter ce
                cadre à votre contexte. <strong>N'improvisez pas</strong>,
                faîtes appel aux experts des métiers impliqués !</span
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
          <li>
            Quand et comment traîter du sujet de l'acessibilité numérique ?
          </li>
        </ul>
      </div>

      <div class="fr-mb-6w">
        <h2 class="fr-h3">Les expertises à mobiliser</h2>
        <p>
          Nous concentrons notre attention sur
          <strong
            >les expertises indispensables à la conception du service</strong
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
              >éco</span
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
          Le symbole ★ indique la personne responsable du bon déroulé de l'étape
          . Les autres compétences indispensables sont listée ensuite.
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
    title: "Bien concevoir un service numérique",
    meta: [
      {
        name: "description",
        content:
          "Les étapes et compétences clés de la conception d'un services numérique de qualité",
      },
      {
        property: "og:title",
        content: "Bien concevoir un service numérique - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Les étapes et compétences clés de la conception d'un services numérique de qualité",
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
