<template>
  <form @submit.prevent="search" class="fr-mb-4v fr-mb-md-12v">
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
  watch: {
    "$route.query"(to, from) {
      this.searchQuery = to.search;

      if (to.search) {
        this.search();
      }
    },
  },
};
</script>
