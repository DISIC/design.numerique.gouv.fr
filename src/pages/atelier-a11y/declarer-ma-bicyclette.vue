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
        <h1 class="dg-cover__title">Déclarer ma bicyclette</h1>
      </div>
    </section>

    <section class="fr-container fr-px-2w fr-mb-8w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-md-6">
          <form action="/atelier-a11y/merci/" method="POST">
            <div class="fr-input-group">
              <label class="fr-label" for="bike-brand">Marque du vélo</label>
              <input
                class="fr-input"
                type="text"
                id="bike-brand"
                name="text-input-groups1"
              />
            </div>
            <div class="fr-input-group">
              <label class="fr-label" for="bike-color">Couleur du vélo</label>
              <span class="fr-hint-text"
                >Merci d’utiliser une couleur du nuancier RAL</span
              >
              <input
                class="fr-input"
                type="text"
                id="bike-color"
                name="text-input-groups1"
              />
            </div>
            <div class="fr-input-group">
              <label class="fr-label" for="bike-name">Surnom du vélo</label>
              <span class="fr-hint-text"
                >C’est ridicule, mais comme <em>les gens</em> le font, merci de
                l’indiquer</span
              >
              <input
                class="fr-input"
                type="text"
                id="bike-name"
                name="bike-name"
              />
            </div>
            <div class="fr-form-group">
              <fieldset class="fr-fieldset">
                <legend
                  class="fr-fieldset__legend fr-text--regular"
                  id="radio-legend"
                >
                  Type de vélo
                </legend>
                <div class="fr-fieldset__content">
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-1" name="radio" />
                    <label class="fr-label" for="radio-1">Route</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-2" name="radio" />
                    <label class="fr-label" for="radio-2">VTT</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-3" name="radio" />
                    <label class="fr-label" for="radio-3">VTC</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">Fixie</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">BMX</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">Gravel</label>
                  </div>
                  <div class="fr-radio-group">
                    <input type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">Cargo</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="fr-upload-group">
              <label class="fr-label" for="file-upload"
                >Ajouter une photo
                <span class="fr-hint-text"
                  >Taille maximale : 1 Mo. Formats supportés : jpg ou png.</span
                >
              </label>
              <input
                class="fr-upload"
                type="file"
                id="file-upload"
                name="file-upload"
              />
            </div>
            <div class="fr-checkbox-group">
              <input type="checkbox" id="vae" name="checkbox" />
              <label class="fr-label" for="vae"
                >Cochez la case, s’il s’agit d’un VAE.</label
              >
            </div>
            <div class="fr-checkbox-group">
              <input type="checkbox" id="auto" name="checkbox" />
              <label class="fr-label" for="auto"
                >Cochez la case, si vous avez vendu votre automobile.</label
              >
            </div>

            <div class="fr-select-group">
              <label class="fr-label" for="select">Pourquoi un vélo ?</label>
              <select class="fr-select" id="select" name="select">
                <option value="" selected disabled hidden
                  >Selectionnez une seule option (ouais, c’est balèze)</option
                >
                <option value="1">Parce que !</option>
                <option value="1">C’est pas cher</option>
                <option value="2">C’est plus beau</option>
                <option value="3">Ça va plus vite</option>
                <option value="4">C’est bon pour la planète</option>
                <option value="4">Je me sens plus libre</option>
                <option value="4"
                  >Pour le vent dans les cheveux (ou dans le nez, si vous portez
                  un casque)</option
                >
              </select>
            </div>

            <button class="fr-btn fr-fi-checkbox-circle-line fr-btn--icon-left">
              Valider
            </button>
          </form>
        </div>
      </div>
    </section>
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

<style type="scoped">
a[href] {
  box-shadow: none;
  color: var(--background-active-blue-france);
}
</style>
