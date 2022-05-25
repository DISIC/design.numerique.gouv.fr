<template>
  <li>
    <section class="fr-accordion">
      <!-- Title -->
      <h2 class="fr-accordion__title">
        <button
          class="fr-accordion__btn"
          aria-expanded="false"
          :aria-controls="`accordion-${criterion.node.id}`"
        >
          Pi-{{ criterion.node.id }} : {{ criterion.node.title }}
        </button>
      </h2>
      <div class="fr-collapse" :id="`accordion-${criterion.node.id}`">
        <!-- Main content -->
        <h3 class="fr-sr-only">Test</h3>
        <div v-html="criterion.node.content" />

        <!-- Tags list -->
        <ul class="fr-tags-group">
          <li>
            <ul aria-label="Profils">
              <li
                class="fr-tag"
                v-for="profile in criterion.node.profiles"
                :key="profile"
              >
                {{ profile }}
              </li>
            </ul>
          </li>
          <li>
            <ul aria-label="Références">
              <li
                class="fr-tag"
                v-for="reference in criterion.node.references"
                :key="reference"
              >
                {{ reference }}
              </li>
            </ul>
          </li>
          <li>
            <ul aria-label="Thématiques">
              <li
                class="fr-tag"
                v-for="category in criterion.node.categories"
                :key="category"
              >
                {{ category }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </li>
</template>

<script>
export default {
  name: "Criterion",
  props: {
    criterion: {
      type: Object,
      required: true,
    },
  },
};
</script>