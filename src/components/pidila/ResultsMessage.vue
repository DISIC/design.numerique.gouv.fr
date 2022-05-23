<template>
  <!-- Search and profiles -->
  <p v-if="search && profiles.length">
    {{ pluralizedCriterion }} correspondant à la recherche «
    <strong>{{ search }}</strong> » pour
    <template v-if="profiles.length > 1">
      <template v-for="(profile, i) in profiles">
        <template v-if="i !== 0"> ou </template>
        <strong :key="i">{{ profile }}</strong>
      </template>
    </template>
    <strong v-else>{{ profiles[0] }}</strong
    >.
  </p>

  <!-- Only search -->
  <p v-else-if="search">
    {{ pluralizedCriterion }} correspondant à la recherche «
    <strong>{{ search }}</strong> ».
  </p>

  <!-- Only profiles -->
  <p v-else-if="profiles.length">
    {{ pluralizedCriterion }} pour
    <template v-if="profiles.length > 1">
      <template v-for="(profile, i) in profiles">
        <template v-if="i !== 0"> ou </template>
        <strong :key="i">{{ profile }}</strong>
      </template>
    </template>
    <strong v-else>{{ profiles[0] }}</strong
    >.
  </p>

  <!-- Default -->
  <p v-else>
    {{ pluralizedCriterion }} sans aucun filtre ni recherche appliqués pour le
    moment.
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
  },
};
</script>
