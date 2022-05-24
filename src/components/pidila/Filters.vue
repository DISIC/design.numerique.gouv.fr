<template>
  <div>
    <!-- Profiles -->
    <div class="fr-form-group">
      <fieldset class="fr-fieldset fr-fieldset--inline">
        <legend class="fr-fieldset__legend fr-text--regular">
          Filtrer par profil
        </legend>
        <div class="fr-fieldset__content">
          <div class="fr-checkbox-group">
            <input
              type="checkbox"
              id="filters-profile-all"
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
              :id="`filters-profile-${profile.replaceAll(' ', '-')}`"
              :value="profile"
              v-model="profileFilters"
              @change="filterProfile"
            />
            <label
              class="fr-label"
              :for="`filters-profile-${profile.replaceAll(' ', '-')}`"
              >{{ profile }}
            </label>
          </div>
        </div>
      </fieldset>
    </div>

    <!-- References -->
    <div class="fr-form-group">
      <fieldset class="fr-fieldset fr-fieldset--inline">
        <legend class="fr-fieldset__legend fr-text--regular">
          Filtrer par référence
        </legend>
        <div class="fr-fieldset__content">
          <div class="fr-checkbox-group">
            <input
              type="checkbox"
              id="filters-reference-all"
              value="Tous"
              v-model="allReference"
            />
            <label class="fr-label" for="filters-reference-all">Tous</label>
          </div>
          <div
            v-for="reference in references"
            :key="reference"
            class="fr-checkbox-group"
          >
            <input
              type="checkbox"
              :id="`filters-reference-${reference.replaceAll(' ', '-')}`"
              :value="reference"
              v-model="referenceFilters"
              @change="filterReference"
            />
            <label
              class="fr-label"
              :for="`filters-reference-${reference.replaceAll(' ', '-')}`"
            >
              {{ reference }}
            </label>
          </div>
        </div>
      </fieldset>
    </div>
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
      references: [
        "RGAA",
        "Marque de l’État",
        "Règles Opquast",
        "Éco-conception",
        "Référentiel général d'interopérabilité",
        "Loi informatique et Liberté",
      ],
      referenceFilters: [],
    };
  },
  mounted() {
    const { profil, reference } = this.$route.query;
    this.profileFilters = profil ? JSON.parse(profil) : [];
    this.filterProfile();
    this.referenceFilters = reference ? JSON.parse(reference) : [];
    this.filterReference();
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
    allReference: {
      get() {
        return !this.referenceFilters.length;
      },
      set() {
        this.referenceFilters = [];
        this.filterReference();
      },
    },
  },
  methods: {
    filterProfile() {
      this.$emit("filter-profile", this.profileFilters);
    },
    filterReference() {
      this.$emit("filter-reference", this.referenceFilters);
    },
  },
  watch: {
    "$route.query"(to, from) {
      this.profileFilters = to.profil ? JSON.parse(to.profil) : [];
      this.referenceFilters = to.reference ? JSON.parse(to.reference) : [];
    },
  },
};
</script>