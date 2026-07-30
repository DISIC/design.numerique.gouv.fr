<template>
  <Layout>
    <!-- Hero banner -->
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
              <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page"
                >Chartability</a
              >
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../../assets/images/outils-picto.svg"
            aria-hidden="true"
          />
          Chartability
        </h1>
        <p class="fr-text--lead">
          Chartability permet aux designers et développeurs d'<b
            >évaluer l'accessibilité des interfaces autour des données
            (datavisualisations, cartographies, dashboards...)</b
          >
          avec des heuristiques vérifiables, pour évaluer et améliorer
          l'inclusivité de ces interfaces.
        </p>
      </div>
    </section>

    <div class="fr-grid-row fr-grid-row--gutters">
      <div class="fr-col-12 fr-col-md-3">
        <nav
          class="fr-summary"
          role="navigation"
          aria-labelledby="fr-summary-title"
        >
          <h2 class="fr-summary__title" id="fr-summary-title">Catégories</h2>
          <ol>
            <li><a class="fr-summary__link" href="#cat1">Perceptible</a></li>
            <li><a class="fr-summary__link" href="#cat2">Utilisable</a></li>
            <li><a class="fr-summary__link" href="#cat3">Compréhensible</a></li>
            <li><a class="fr-summary__link" href="#cat4">Robuste</a></li>
            <li><a class="fr-summary__link" href="#cat5">Accomodant</a></li>
            <li><a class="fr-summary__link" href="#cat6">Aidant</a></li>
            <li><a class="fr-summary__link" href="#cat7">Flexible</a></li>
          </ol>
        </nav>

        <div class="fr-toggle fr-toggle--border-bottom fr-mb-4w">
          <input
            type="checkbox"
            class="fr-toggle__input"
            id="toggle-input-open"
            aria-describedby="toggle-input-open"
            @change="toggleAll"
          />
          <label class="fr-toggle__label" for="toggle-input-open">{{
            allOpen ? "Replier tout" : "Déplier tout"
          }}</label>
        </div>

        <p class="fr-text--sm fr-mt-4w">
          Cette page est une traduction libre du travail de Frank Elavsky, sur
          <a href="https://chartability.github.io/POUR-CAF/" lang="en"
            >Chartability</a
          >. Ce contenu est donc est sous licence
          <a href="https://creativecommons.org/licenses/by-sa/3.0/" lang="en"
            >CC-BY-SA (Creative Commons Attribution-ShareAlike 3.0 Unported)</a
          >, comme l'outil original.
        </p>

        <div class="fr-alert fr-alert--warning fr-alert--sm">
          <p>
            Chartability ne remplace pas un audit RGAA pour les interfaces
            soumises à cette réglementation. L&#39;outil s&#39;utilise en
            complément.
          </p>
        </div>
      </div>

      <div class="fr-col-12 fr-col-md-1"></div>

      <div class="fr-col-12 fr-col-md-8">
        <h2>À propos</h2>
        <p>
          <b>Chartability</b> est conçu pour repérer les problèmes
          d'accessibilité dans les datavisualisations, dashboards ou
          cartographies. Chaque heuristique est formulée à la négative : ce sont
          des barrières à éviter.
        </p>

        <p>
          Ces heuristiques s'organisent en sept catégories : <i>Perceptible</i>,
          <i>Utilisable</i>, <i>Compréhensible</i> et <i>Robuste</i>, selon les
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/fr"
            >principes généraux d'accessibilité</a
          >
          ; ainsi que <i>Accomodant</i> (<i
            ><span lang="en">compromising</span></i
          >
          en anglais), <i>Aidant</i> (<i><span lang="en">assistive</span></i> en
          anglais) et <i>Flexible</i>, qui étendent le principe de
          <i>Robustesse</i>.
        </p>
        <!-- TODO expliquer le vocabulaire utilisé une fois, pour être inclusif de toutes les expériences -->

        <h2 class="fr-mt-4w">Pièges à éviter</h2>
        <section
          :class="'cat' + cat.node.id"
          :id="'cat' + cat.node.id"
          v-for="cat in $page.allChartabilityCat.edges"
        >
          <h3>{{ cat.node.title }}</h3>
          <!-- <p class="fr-text--lead" v-html="cat.node.content" /> -->

          <ul
            class="accordions fr-accordions-group fr-mb-4w"
            :id="'accordeon' + cat.node.id"
          >
            <li
              class="fr-accordion"
              v-for="(
                criterion, index
              ) in $page.allChartabilityHeuristics.edges.filter(
                (edge) => edge.node.cat.id === cat.node.id,
              )"
            >
              <h4 class="fr-accordion__title">
                <button
                  class="fr-accordion__btn"
                  aria-expanded="false"
                  :aria-controls="criterion.node.id"
                >
                  <span>{{ criterion.node.title }}&nbsp;</span>
                  <span
                    class="fr-badge fr-badge--sm fr-badge--warning fr-ml-2w"
                    v-if="criterion.node.critical"
                    >Problème majeur</span
                  >
                </button>
              </h4>
              <div class="fr-collapse" :id="criterion.node.id">
                <div class="fr-accordion__inner">
                  <div v-html="criterion.node.content" />

                  <p
                    v-if="criterion.node.reference_link"
                    class="fr-text--sm fr-quote__source fr-mt-4w"
                  >
                    <b>Source de la recommandation :</b><br />
                    {{ criterionOrigin(criterion.node.origin) }}
                    <a :href="criterion.node.reference_link" lang="en">{{
                      criterion.node.reference_name
                    }}</a>
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div class="fr-grid-row fr-grid-row--right fr-my-2w">
            <a
              href="#main"
              target="_self"
              class="fr-link fr-text--sm fr-icon-arrow-up-fill fr-link--icon-left"
              >Haut de page</a
            >
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allChartabilityCat (filter: {}, sort: [ { by: "id", order: ASC }]) {
      edges {
        node {
          id
          title
          content
        }
      }
    },
    allChartabilityHeuristics(sort: [ { by: "id", order: ASC }]) {
      edges {
        node {
          id
          title
          content
          critical
          origin
          reference_link
          reference_name
          cat {
            id
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  props: {
    criterion: {
      type: Object,
      required: true, // ou false si optionnel
    },
  },
  metaInfo: {
    title: "Chartability en français",
    meta: [
      {
        name: "description",
        content: "TODO Desc",
      },
      {
        property: "og:title",
        content: "TODO - DesignGouv",
      },
      {
        property: "og:description",
        content: "TODO Desc",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
  data() {
    return {
      allOpen: false,
      criterionOriginMapping: {
        standard: "Cette recommandation est la synthèse d'un critère WCAG : ",
        research:
          "Cette recommandation est la synthèse d'un publication scientifique : ",
        "community practice":
          "Cette recommandation est synthétisée à partir de travaux de la communauté : ",
      },
    };
  },
  methods: {
    toggleAll() {
      document.querySelectorAll(".fr-collapse").forEach((collapse) => {
        if (this.allOpen) {
          document
            .querySelectorAll(".accordions")
            .forEach((el) => el.classList.add("fr-accordions-group"));
          window.dsfr(collapse).collapse.conceal();
        } else {
          document
            .querySelectorAll(".accordions")
            .forEach((el) => el.classList.remove("fr-accordions-group"));
          window.dsfr(collapse).collapse.disclose();
        }
      });
      this.allOpen = !this.allOpen;
    },
    criterionOrigin(origin) {
      return this.criterionOriginMapping[origin] || origin;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordions {
  list-style-type: none;
  padding-left: 0;
}
</style>
