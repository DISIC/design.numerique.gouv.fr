<template>
  <li class="dg-pidila__accordion">
    <section class="fr-accordion">
      <!-- Title -->
      <h2 class="fr-accordion__title">
        <button
          class="fr-accordion__btn"
          aria-expanded="false"
          :aria-controls="`accordion-${criterion.node.id}`"
        >
          <span class="dg-pidila__criterion-id-container">
            <span class="dg-pidila__criterion-id">
              Pi-{{ criterion.node.id }}
            </span>
            <span>
              {{ criterion.node.title }}
            </span>
          </span>
        </button>
      </h2>
      <div class="fr-collapse" :id="`accordion-${criterion.node.id}`">
        <!-- Main content -->
        <div v-html="criterion.node.content" />
        <hr class="fr-mt-4w" />
        <!-- Tags list -->
        <ul class="fr-tags-group">
          <li>
            <ul aria-label="Profils">
              <li
                class="
                  fr-tag
                  dg-pidila__criterion-tag dg-pidila__criterion-tag--profile
                "
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
                class="
                  fr-tag
                  dg-pidila__criterion-tag dg-pidila__criterion-tag--reference
                "
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
                class="
                  fr-tag
                  dg-pidila__criterion-tag dg-pidila__criterion-tag--category
                "
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