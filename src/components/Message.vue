<template>
  <div class="dg-content dg-message dg-text-center fr-py-3w fr-px-4w">
    <p class="fr-badge fr-badge--new">Nouveau</p>
    <h2 class="fr-h4 fr-mt-1w fr-mb-1w">Atelier : dans la peau d’une auditrice accessibilité !</h2>
    <p class="fr-mb-2w">
      Nous lançons un nouvel <strong>atelier de formation</strong> en ligne, <strong>Dans la peau d’un auditeur ou d’une auditrice accessibilité</strong> le mardi 12 avril prochain&nbsp;🌈.
    </p>
    <g-link class="dg-message__link fr-btn fr-btn--tertiary-no-outline fr-fi-arrow-right-line fr-btn--icon-right" to="/formations/accessibilite/atelier-coder-accessible/">Infos et inscription</g-link>
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
