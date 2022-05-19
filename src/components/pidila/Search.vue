<template>
  <form @submit.prevent="search" class="fr-mb-2w">
    <div class="fr-search-bar" id="header-search" role="search">
      <label class="fr-label" for="search">Rechercher parmi les critères</label>
      <input
        class="fr-input"
        placeholder="Schéma pluriannuel"
        type="search"
        id="search"
        name="search"
        v-model.trim="searchQuery"
      />
      <button class="fr-btn" title="Rechercher">Rechercher</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchQuery: "",
    };
  },
  mounted() {
    const { search } = this.$route.query;
    if (search) {
      this.searchQuery = search;
      this.search();
    }
  },
  methods: {
    search() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>