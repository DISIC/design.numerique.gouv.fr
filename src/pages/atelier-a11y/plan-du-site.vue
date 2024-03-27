<template>
  <Exercise>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <a href="../"  class="fr-breadcrumb__link">Accueil</a>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Plan du site</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Plan du site</h1>
        <p class="fr-text--lead">Vous êtes perdu ?</p>
      </div>
    </section>
    <div class=" fr-px-2w fr-mb-8w fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      <div class="fr-col-sm-4">
        <ul>
          <li><a href="/atelier-a11y/">Accueil</a></li>
          <li><a href="/atelier-a11y/declarer-ma-bicyclette/">Déclarer ma bicyclette</a></li>
          <li><a href="/atelier-a11y/aide/">Aide</a></li>
          <li><a href="/atelier-a11y/plan-du-site/">Plan du site</a></li>
          <li><a href="/atelier-a11y/accessibilite/">Accessibilité</a></li>
        </ul>
      </div>
    </div>
    <figure class="fr-content-media" role="group" aria-label="Grande traversée du Jura 2022">
    <div class="fr-content-media__img">
        <img class="fr-responsive-img fr-ratio-16x9" src="/assets/images/gravel.jpg" alt="Tu es perdu ? C'est tout droit !" />
    </div>
</figure>
  </Exercise>
</template>

<script>
export default {
  metaInfo: {
    title: 'Qui sommes-nous ?',
    meta: [
      {
        name: 'description',
        content: 'Exercice d’audit et de mise en conformité RGAA',
      },
    ],
  },
};
</script>

