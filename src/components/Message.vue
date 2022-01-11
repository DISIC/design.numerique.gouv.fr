<template>
  <div class="dg-content dg-message dg-text-center fr-py-3w fr-px-4w">
    <p class="dg-badge">⚡️ NOUVEAU</p>
    <h2 class="fr-h4 fr-mt-1w fr-mb-1w">Lancement de notre programme de formations !</h2>
    <p class="fr-mb-2w">
      Nous lançons <strong>quatre formations gratuites</strong> en ligne, sur les sujets indispensables à la conception de services publics numériques : <strong>accessibilité</strong>, <strong>design</strong>, <strong>recherche utilisateur</strong> et <strong>écoconception</strong>.<br>
    </p>
    <g-link class="dg-message__link fr-link fr-fi-arrow-right-line fr-link--icon-right" to="/articles/2021-10-29-formations-design-accessibilite-recherche-ecoconception/">
      Infos et inscriptions à nos formations
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
