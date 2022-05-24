<template>
  <p v-html="message" />
</template>

<script>
export default {
  name: "ResultsMessage",
  props: {
    resultsCount: {
      type: Number,
      required: true,
    },
    search: {
      type: String,
      default: null,
    },
    profiles: {
      type: Array,
      default: () => [],
    },
    references: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    pluralizedCriterion() {
      switch (this.resultsCount) {
        case 0:
          return "Aucun critère";
        case 1:
          return "1 critère";
        default:
          return `${this.resultsCount} critères`;
      }
    },
    message() {
      let string = this.pluralizedCriterion;

      if (!this.search && !this.profiles.length && !this.references.length) {
        string += " sans aucun filtre ni recherche appliqués pour le moment";
      }

      if (this.search) {
        string += ` correspondant à la recherche « <strong>${this.search}</strong> »`;
      }

      if (this.profiles.length) {
        string += ` pour ${this.profiles
          .map((p, i) => `${i !== 0 ? " ou " : ""} <strong>${p}</strong>`)
          .join("")}`;
      }

      if (this.references.length) {
        string += ` dans ${this.references
          .map((r, i) => `${i !== 0 ? " ou " : ""} <strong>${r}</strong>`)
          .join("")}`;
      }

      string += ".";

      return string;
    },
  },
};
</script>
