<template>
  <div class="dg-content dg-message dg-text-center fr-py-3w fr-px-4w">
    <p class="fr-badge fr-badge--new">Nouveau</p>
    <h2 class="fr-h4 fr-mt-1w fr-mb-1w">Formation simplification de l'information</h2>
    <p class="fr-mb-2w">
      Nous lançons <strong>une nouvelle formation</strong> en ligne, sur la <strong>simplification de l'information à destination des usagers</strong> le jeudi 17 février prochain 🌼.
    </p>
    <g-link class="dg-message__link fr-link fr-fi-arrow-right-line fr-link--icon-right" to="/formations/simplification-information/">
      Infos et inscription
    </g-link>
  </div>
</template>


<script>

  export default {
    name: 'Message'
  }

</script>

<style lang="scss" scoped>

  .dg-message {
    position: relative;
    background-color: var(--background-default-grey);
    border: 1px solid var(--border-default-grey);

    &__link:after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

</style>
