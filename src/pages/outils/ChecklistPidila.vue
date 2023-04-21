<template>
  <Layout>
    <dialog
      aria-labelledby="fr-modal-title-modal-1"
      role="dialog"
      id="fr-modal-1"
      class="fr-modal fr-unhidden-sm fr-hidden-md"
    >
      <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
          <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <button
                  class="fr-link--close fr-link"
                  title="Fermer la fenêtre modale"
                  aria-controls="fr-modal-1"
                >
                  Fermer
                </button>
              </div>
              <div class="fr-modal__content">
                <h1 id="fr-modal-title-modal-1" class="fr-modal__title">
                  Filtrer les critères
                </h1>
                <Filters
                  mode="condensed"
                  @filter-profile="updateProfileFilters"
                  @filter-reference="updateReferenceFilters"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
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
              <span aria-current="page">Checklist PiDila</span>
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
          La checklist PiDila
        </h1>
        <p class="fr-text--lead">
          Une liste unique des obligations et bonnes pratiques pour les sites
          web publics : Système de design de l’État,
          <abbr title="Référentiel Général d’Amélioration de l’Accessibilité"
            >RGAA</abbr
          >, Éco-conception, Loi informatique et liberté,
          <abbr title="Référentiel Général d’Interopérabilité">RGI</abbr> et
          Règles Opquast.
        </p>
      </div>
    </section>

    <div class="fr-grid-row fr-grid-row--gutters">
      <div class="fr-col-12 fr-col-md-3">
        <!-- Filters and tools -->
        <Search @search="updateSearch" />
        <section>
          <div class="fr-unhidden-sm fr-hidden-md">
            <button
              class="
                fr-btn fr-btn--secondary fr-btn--icon-right
                fr-icon-filter-line
                btn-filters
              "
              data-fr-opened="false"
              aria-controls="fr-modal-1"
            >
              Filtres
            </button>
          </div>
          <div class="fr-hidden fr-unhidden-md">
            <Filters
              @filter-profile="updateProfileFilters"
              @filter-reference="updateReferenceFilters"
            />
          </div>
        </section>
      </div>
      <div class="fr-col-12 fr-col-md-1"></div>
      <div class="fr-col-12 fr-col-md-8">
        <!-- Results info -->
        <div
          class="result-bar fr-mb-4v fr-mb-md-12v"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <ResultsMessage
            :results-count="filteredCriteria.length"
            :search="searchQuery"
            :profiles="profileFilters"
            :references="referenceFilters"
          />
          <Toolbar
            @conceal-all="toggleAll(false)"
            @disclose-all="toggleAll(true)"
            class="result-bar-tools"
          />
        </div>
        <!-- Criteria list -->
        <section>
          <ul v-if="filteredCriteria.length" class="accordions">
            <Criterion
              v-for="edge in filteredCriteria"
              :key="edge.node.id"
              :criterion="edge"
            />
          </ul>
          <div v-else class="fr-p-2w">
            Aucun critère ne correspond aux filtres appliqués.
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPidilaCriterion (sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        profiles
        references
        content
      }
    }
  }
}
</page-query>

<script>
import Toolbar from "../../components/pidila/Toolbar.vue";
import Search from "../../components/pidila/Search.vue";
import Filters from "../../components/pidila/Filters.vue";
import ResultsMessage from "../../components/pidila/ResultsMessage.vue";
import Criterion from "../../components/pidila/Criterion.vue";

export default {
  components: { Toolbar, Search, Filters, ResultsMessage, Criterion },
  computed: {
    searchQuery() {
      return this.$route.query.search;
    },
    profileFilters() {
      return this.$route.query.profil
        ? JSON.parse(this.$route.query.profil)
        : [];
    },
    referenceFilters() {
      return this.$route.query.reference
        ? JSON.parse(this.$route.query.reference)
        : [];
    },
    /**
     * Filter criteria based on search, profile and reference.
     * @returns {Object[]}
     */
    filteredCriteria() {
      let criteria = this.$page.allPidilaCriterion.edges;

      // Search filter based on criterion's title and content
      if (this.searchQuery) {
        criteria = criteria.filter((edge) => {
          return (
            this.cleanString(edge.node.title).includes(
              this.cleanString(this.searchQuery)
            ) ||
            this.cleanString(edge.node.content).includes(
              this.cleanString(this.searchQuery)
            )
          );
        });
      }

      // Profile filter
      if (this.profileFilters.length) {
        criteria = criteria.filter((edge) => {
          return edge.node.profiles.some((p) =>
            this.profileFilters.includes(p)
          );
        });
      }

      // Reference filter
      if (this.referenceFilters.length) {
        criteria = criteria.filter((edge) => {
          return edge.node.references.some((r) =>
            this.referenceFilters.includes(r)
          );
        });
      }

      return criteria;
    },
    isFiltered() {
      return (
        this.searchQuery ||
        this.profileFilters.length ||
        this.referenceFilters.length
      );
    },
    pageTitle() {
      const appliedFiltersCount = [
        this.searchQuery,
        this.profileFilters.length,
        this.referenceFilters.length,
      ].filter(Boolean).length;

      // X critère(s) pour X filtre(s) appliqué(s)
      if (this.isFiltered) {
        return `${this.filteredCriteria.length} critère${
          this.filteredCriteria.length > 1 ? "s" : ""
        } pour ${appliedFiltersCount} filtre${
          appliedFiltersCount > 1 ? "s" : ""
        } appliqué${appliedFiltersCount > 1 ? "s" : ""}`;
      }

      return "Checklist PiDila";
    },
  },
  methods: {
    /**
     * Update `search` query params. "undefined" removes the query param instead of setting it to an empty value.
     * @param {string} value
     */
    updateSearch(value) {
      this.updateQueryParams("search", value || undefined);
    },
    /**
     * Update `profil` query param. "undefined" removes the query param instead of setting it to an empty value.
     * @param {string[]} value
     */
    updateProfileFilters(value) {
      this.updateQueryParams("profil", value.length ? value : undefined);
    },
    /**
     * Update `reference` query param. "undefined" removes the query param instead of setting it to an empty value.
     * @param {string[]} value
     */
    updateReferenceFilters(value) {
      this.updateQueryParams("reference", value.length ? value : undefined);
    },
    /**
     * Update URL query params based on filters values
     * @param {string} key The query param name (e.g. "search")
     * @param {string|array} value The query param value (e.g. "rgaa")
     */
    updateQueryParams(key, value) {
      // if params have not changed, nothing to do
      if (this.$route.query[key] === JSON.stringify(value)) {
        return;
      }

      const queryParams = {
        ...this.$route.query,
        [key]: Array.isArray(value) ? JSON.stringify(value) : value,
      };

      return this.$router
        .replace({
          path: this.$route.path,
          query: Object.keys(queryParams).length ? queryParams : null,
        })
        .catch(() => {});
    },
    resetFilters() {
      this.$router.push({ path: this.$route.path });
    },
    /**
     * Remove accents and uppercase characters.
     * @param {string}
     * @returns {string}
     */
    cleanString(string) {
      return string
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    },
    toggleAll(value) {
      // TODO: implement display/hide all
      console.log(`${value ? "Révéler" : "Cacher"} tous les critères`);
    },
  },
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "description",
          content:
            "Une liste unique des obligations et bonnes pratiques pour les sites web publics : Système de design de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
        },
        {
          property: "og:title",
          content: "Checklist PiDila - DesignGouv",
        },
        {
          property: "og:description",
          content:
            "Une liste unique des obligations et bonnes pratiques pour les sites web publics : Système de design de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
        },
        {
          property: "og:image",
          content:
            "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@Design_Gouv",
        },
        {
          name: "twitter:title",
          content: "Checklist PiDila - DesignGouv",
        },
        {
          name: "twitter:description",
          content:
            "Une liste unique des obligations et bonnes pratiques pour les sites web publics : Système de design de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
        },
        {
          name: "twitter:image",
          content:
            "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.accordions {
  list-style-type: none;
  padding-left: 0;
}
.btn-filters {
  width: 100%;
  justify-content: center;
}
.result-bar {
  display: flex;
  align-items: center;
  gap: 1em;
  @media only screen and (max-width: $sm-point) {
    flex-wrap: wrap;
  }

  p {
    margin: 0;
  }
}
.result-bar-tools {
  flex: 1 0 auto;
  margin-right: -1rem;
  margin-bottom: -1rem;
}
</style>
