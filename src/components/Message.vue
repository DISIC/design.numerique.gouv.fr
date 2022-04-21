<template>
  <div class="dg-content dg-message dg-text-center fr-py-3w fr-px-4w">
    <p class="fr-badge fr-badge--new">Nouveau</p>
    <h2 class="fr-h4 fr-mt-1w fr-mb-1w">Un nouveau webinaire et deux nouveaux ateliers !</h2>
    <p class="fr-mb-2w">
      Bien faire du numérique public&nbsp;; les tests usagers dans la pratique&nbsp;; l'accessibilité numérique pour les designer&nbsp;: découvrez nos <strong>trois nouvelles formations</strong>&nbsp;🌈.
    </p>
    <g-link class="dg-message__link fr-btn fr-btn--tertiary-no-outline fr-fi-arrow-right-line fr-btn--icon-right" to="/formations#formations">Infos et inscription</g-link>
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
