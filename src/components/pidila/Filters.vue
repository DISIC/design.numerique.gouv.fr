<template>
  <div class="fr-form-group">
    <fieldset class="fr-fieldset fr-fieldset--inline">
      <!-- Profiles -->
      <legend
        class="fr-fieldset__legend fr-text--regular"
        id="checkboxes-inline-legend"
      >
        Filtrer par profil
      </legend>
      <div class="fr-fieldset__content">
        <div class="fr-checkbox-group">
          <input
            type="checkbox"
            id="filters-profile-all"
            name="filters-profile-all"
            value="Tous"
            v-model="allProfile"
          />
          <label class="fr-label" for="filters-profile-all">Tous</label>
        </div>
        <div
          v-for="profile in profiles"
          :key="profile"
          class="fr-checkbox-group"
        >
          <input
            type="checkbox"
            :id="`filters-profile-${profile}`"
            :name="`filters-profile-${profile}`"
            :value="profile"
            v-model="profileFilters"
            @change="filterProfile"
          />
          <label class="fr-label" :for="`filters-profile-${profile}`"
            >{{ profile }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      profiles: [
        "Pilotage",
        "Conception",
        "Graphisme",
        "Intégration",
        "Développement",
        "Rédactionnel",
      ],
      profileFilters: [],
    };
  },
  mounted() {
    const { profil } = this.$route.query;
    this.profileFilters = profil ? JSON.parse(profil) : [];
    this.filterProfile();
  },
  computed: {
    allProfile: {
      get() {
        return !this.profileFilters.length;
      },
      set() {
        this.profileFilters = [];
        this.filterProfile();
      },
    },
  },
  methods: {
    filterProfile() {
      this.$emit("filter-profile", this.profileFilters);
    },
  },
  watch: {
    "$route.query"(to, from) {
      this.profileFilters = to.profil ? JSON.parse(to.profil) : [];
    },
  },
};
</script>