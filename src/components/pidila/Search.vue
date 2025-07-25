<template>
  <form @submit.prevent="launchSearch" class="fr-mb-4v fr-mb-md-12v">
    <div class="fr-search-bar" id="header-search" role="search">
      <label class="fr-label" for="search">Rechercher parmi les critères</label>
      <input
        class="fr-input"
        placeholder="Rechercher"
        type="search"
        id="search"
        name="search"
        v-model.trim="searchQuery"
      />
      <button class="fr-btn" type="submit" title="Rechercher">
        Rechercher
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Search",
  props: {
    search: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      searchQuery: this.search,
    };
  },
  mounted() {
    this.launchSearch();
  },
  methods: {
    launchSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>
