<template>
  <form @submit.prevent="search">
    <div class="fr-input-group">
      <label class="fr-label" for="search">
        Rechercher dans les critères
      </label>
      <input
        class="fr-input"
        type="text"
        id="search"
        name="search"
        v-model.trim="searchQuery"
      />
    </div>

    <button class="fr-btn fr-btn--secondary" type="submit">Go</button>
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