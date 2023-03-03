<template>
  <div>
    <!-- Profiles -->
    <div class="fr-form-group">
      <fieldset class="fr-fieldset fr-fieldset--inline">
        <legend
          class="fr-fieldset__legend fr-text--regular"
          title="Filter les critères par profils"
        >
          Filtrer par profil
        </legend>
        <div class="fr-fieldset__content">
          <ul class="fr-tags-group tags-group--vertical-group">
            <li>
              <button
                class="fr-tag"
                id="filters-profile-all"
                value="Tous"
                :aria-pressed="allProfiles"
                @click="allProfiles = true"
                >Tous</button
              >
            </li>
            <li v-for="(profile, i) in profiles" :key="profile">
              <button
                class="fr-tag"
                :id="`filters-profile-${i}`"
                :value="profile"
                :aria-pressed="isProfileFiltered(profile)"
                @click="onProfileButtonClick"
                >{{ profile }}</button
              >
            </li>
          </ul>
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
          <ul class="fr-tags-group tags-group--vertical-group">
            <li>
              <button
                class="fr-tag"
                id="filters-profile-all"
                value="Tous"
                :aria-pressed="allReferences"
                @click="allReferences = true"
                >Toutes</button
              >
            </li>
            <li v-for="(reference, i) in references" :key="reference">
              <button
                class="fr-tag"
                :id="`filters-reference-${i}`"
                :value="reference"
                :aria-pressed="isReferenceFiltered(reference)"
                @click="onReferenceButtonClick"
                >{{ reference }}</button
              >
            </li>
          </ul>
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
        "Système de design de l'État",
        "Règles Opquast",
        "Éco-conception",
        "RGI",
        "Loi informatique et Liberté",
      ],
      referenceFilters: [],
    };
  },
  mounted() {
    const { profil, reference } = this.$route.query;
    this.profileFilters = profil ? JSON.parse(profil) : [];
    this.filterProfiles();
    this.referenceFilters = reference ? JSON.parse(reference) : [];
    this.filterReferences();
  },
  computed: {
    allProfiles: {
      get() {
        return !this.profileFilters.length;
      },
      set() {
        this.profileFilters = [];
        this.filterProfiles();
      },
    },
    allReferences: {
      get() {
        return !this.referenceFilters.length;
      },
      set() {
        this.referenceFilters = [];
        this.filterReferences();
      },
    },
  },
  methods: {
    isProfileFiltered(profile) {
      return this.profileFilters.includes(profile);
    },
    onProfileButtonClick(event) {
      const profile = event.target.value;
      const i = this.profileFilters.indexOf(profile);
      if (i === -1) {
        this.profileFilters.push(profile);
      } else {
        this.profileFilters.splice(i, 1);
      }
      this.filterProfiles();
    },
    filterProfiles() {
      this.$emit("filter-profile", this.profileFilters);
    },
    isReferenceFiltered(profile) {
      return this.referenceFilters.includes(profile);
    },
    onReferenceButtonClick(event) {
      const profile = event.target.value;
      const i = this.referenceFilters.indexOf(profile);
      if (i === -1) {
        this.referenceFilters.push(profile);
      } else {
        this.referenceFilters.splice(i, 1);
      }
      this.filterReferences();
    },
    filterReferences() {
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

<style lang="scss" scoped>
.tags-group--vertical-group {
  display: block;
}
.tags-group--vertical-group > li {
  display: block;
}
</style>
