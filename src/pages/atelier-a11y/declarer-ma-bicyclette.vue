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
          <p class="text-color">Seuls les champs facultatifs ne sont pas obligatoires</p>
          <form action="/atelier-a11y/merci/">
            <div class="fr-input-group">
              <label class="fr-label" for="bike-brand">Marque du vélo <small>(obligatoire)</small></label>
              <input
                tabindex="1"
                class="fr-input"
                type="text"
                id="bike-brand"
                name="bike-brand"
              />
            </div>
            <div class="fr-input-group">
              <label class="fr-label" for="bike-color">Couleur du vélo <small>(obligatoire)</small></label>
              <span class="fr-hint-text"
                >Merci d’utiliser de préférence une couleur du nuancier RAL</span
              >
              <input
                tabindex="2"
                class="fr-input "
                type="text"
                id="bike-color"
                name="bike-color"
              />
            </div>
            <div class="fr-input-group">
              <label class="fr-label text-color" for="bike-name">Surnom du vélo</label>
              <span class="fr-hint-text"
                >C’est ridicule, mais comme <em>les gens</em> le font, merci de
                l’indiquer</span
              >
              <input
                tabindex="3"
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
                  id="bike-type"
                >
                  Type de vélo <small>(obligatoire)</small>
                </legend>
                <div class="fr-fieldset__content">
                  <div class="fr-radio-group">
                    <input tabindex="4" type="radio" id="radio-1" name="radio" />
                    <label class="fr-label" for="radio-1">Route</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="5" type="radio" id="radio-2" name="radio" />
                    <label class="fr-label" for="radio-2">VTT</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="6" type="radio" id="radio-3" name="radio" />
                    <label class="fr-label" for="radio-3">VTC</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="7" type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">Fixie</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="8" type="radio" id="radio-4" name="radio" />
                    <label class="fr-label" for="radio-4">BMX</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="9" type="radio" id="radio-5" name="radio" />
                    <label class="fr-label" for="radio-5">Gravel</label>
                  </div>
                  <div class="fr-radio-group">
                    <input tabindex="10" type="radio" id="radio-6" name="radio" />
                    <label class="fr-label" for="radio-6">Cargo</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="fr-upload-group">
              <label class="text-color fr-label" for="bike-pic"
                >Ajouter une photo
                <span class="fr-hint-text"
                  >Taille maximale : 1 Mo. Formats supportés : jpg ou png.</span
                >
              </label>
              <input
              tabindex="13" 
                class="fr-upload"
                type="file"
                id="bike-pic"
                name="bike-pic"
              />
            </div>
            <div class="fr-checkbox-group">
              <input tabindex="12" type="checkbox" id="vae" name="checkbox" />
              <label class="fr-label" for="vae"
                >Cochez la case, s’il s’agit d’un VAE.</label
              >
            </div>
            <div class="fr-checkbox-group">
              <input tabindex="11" type="checkbox" id="auto" name="checkbox" />
              <label class="fr-label" for="auto"
                >Cochez la case, si vous avez vendu votre automobile.</label
              >
            </div>

            <div class="fr-select-group">
              <label class="fr-label" for="because">Pourquoi un vélo ? <small>(obligatoire)</small></label>
              <select tabindex="14" class="fr-select" id="because" name="because">
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
            <button tabindex="15"  class="fr-btn fr-fi-checkbox-circle-line fr-btn--icon-left">
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


