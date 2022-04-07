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
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Atelier a11é</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Merci</h1>
        <p class="fr-text--lead">Votre vélo a bien été enregistré.</p>
        <p
          >Note pour plus tard : même si votre vélo est immortel il faut en
          prendre soin.</p
        >
      </div>
    </section>
    <div class=" fr-px-2w fr-mb-8w fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      <div class="fr-col-sm-4">
        <a href="https://voxusagers.numerique.gouv.fr/Demarches/3372?&view-mode=formulaire-avis&nd_mode=en-ligne-enti%C3%A8rement&nd_source=button&key=c0750ed0b02f89b76c1f7d7f9abf3d68"><img src="https://voxusagers.numerique.gouv.fr/static/bouton-bleu.svg" alt="Je donne mon avis" /></a>
      </div>
    </div>
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

