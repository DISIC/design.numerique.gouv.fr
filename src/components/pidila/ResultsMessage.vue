<template>
  <p>
    {{ pluralizedCriterion }}
    <!-- Default -->
    <template v-if="isNotFiltered">
      sans aucun filtre ni recherche appliqués pour le moment</template
    >

    <!-- Text search -->
    <template v-if="search">
      correspondant à la recherche «&nbsp;<strong>{{ this.search }}</strong
      >&nbsp;»</template
    >

    <!-- Profiles -->
    <template v-if="profiles.length">
      pour
      <template :key="p" v-for="(p, i) in profiles">
        <template v-if="i !== 0"> ou </template>
        <strong>{{ p }}</strong>
      </template>
    </template>

    <!-- References -->
    <template v-if="references.length">
      dans
      <template :key="r" v-for="(r, j) in references">
        <template v-if="j !== 0"> ou </template>
        <strong>{{ r }}</strong>
      </template> </template
    >.
  </p>
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
    isNotFiltered() {
      return !this.search && !this.profiles.length && !this.references.length;
    },
  },
};
</script>
