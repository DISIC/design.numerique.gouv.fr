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
              <span aria-current="page">Checklist PiDila</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../assets/images/accessibilite-picto.svg"
            aria-hidden="true"
          />
          La checklist PiDila
        </h1>
        <p class="fr-text--lead">
          Une liste unique des bonnes pratiques et obligations pour les sites
          web publics : Marque de l’État,
          <abbr title="Référentiel Général d’Amélioration de l’Accessibilité"
            >RGAA</abbr
          >, Éco-conception, Loi informatique et liberté,
          <abbr title="Référentiel Général d’Interopérabilité">RGI</abbr> et
          Règles Opquast.
        </p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <Toolbar />
      <Search @search="updateSearch" />

      <!-- Checklist -->
      <ul class="fr-accordions-group">
        <li v-for="edge in filteredCriteria" :key="edge.node.id">
          <section class="fr-accordion">
            <h2 class="fr-accordion__title">
              <button
                class="fr-accordion__btn"
                aria-expanded="false"
                :aria-controls="`accordion-${edge.node.id}`"
              >
                Pi-{{ edge.node.id }} : {{ edge.node.title }}
              </button>
            </h2>
            <div class="fr-collapse" :id="`accordion-${edge.node.id}`">
              <!-- Main content -->
              <h3 class="sr-only">Test</h3>
              <div v-html="edge.node.content" />

              <!-- Tags list -->
              <ul class="fr-tags-group">
                <li>
                  <ul aria-label="Profils">
                    <li
                      class="fr-tag"
                      v-for="profile in edge.node.profiles"
                      :key="profile"
                    >
                      {{ profile }}
                    </li>
                  </ul>
                </li>
                <li>
                  <ul aria-label="Références">
                    <li
                      class="fr-tag"
                      v-for="reference in edge.node.references"
                      :key="reference"
                    >
                      {{ reference }}
                    </li>
                  </ul>
                </li>
                <li>
                  <ul aria-label="Thématiques">
                    <li
                      class="fr-tag"
                      v-for="category in edge.node.categories"
                      :key="category"
                    >
                      {{ category }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </li>
      </ul>
    </section>
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
        categories
        references
        content
      }
    }
  }
}
</page-query>

<script>
import Toolbar from "../components/pidila/Toolbar.vue";
import Search from "../components/pidila/Search.vue";

export default {
  components: { Toolbar, Search },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    /**
     * Filter criteria based on search, profile and reference.
     * @returns {Object[]}
     */
    filteredCriteria() {
      // Search filter based on criterion's title and content
      if (this.searchQuery) {
        return this.$page.allPidilaCriterion.edges.filter((edge) => {
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

      return this.$page.allPidilaCriterion.edges;
    },
  },
  methods: {
    /**
     * Set search value and update URL query params
     */
    updateSearch(value) {
      if (this.searchQuery === value) return;

      this.searchQuery = value;

      // Update or remove `search` query param
      this.$router
        .push(
          !value
            ? { path: this.$route.path }
            : {
                query: {
                  ...this.$route.query,
                  search: value,
                },
              }
        )
        .catch(() => {});
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
  },
  metaInfo: {
    title: "Checklist PiDila",
    meta: [
      {
        name: "description",
        content:
          "Une liste unique des bonnes pratiques et obligations pour les sites web publics : Marque de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
      },
      {
        property: "og:title",
        content: "Checklist PiDila - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Une liste unique des bonnes pratiques et obligations pour les sites web publics : Marque de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
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
          "Une liste unique des bonnes pratiques et obligations pour les sites web publics : Marque de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast.",
      },
      {
        name: "twitter:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>