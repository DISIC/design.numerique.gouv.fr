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
              <a href="../"  class="fr-breadcrumb__link">Accueil Atelier</a>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Déclarer ma bicyclette</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Déclarer ma bicyclette</h1>
      </div>
    </section>

    <section class="fr-container fr-px-2w fr-mb-8w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-md-6">
          <p class="text-color"
            >Les champs <em>verts</em> sont obligatoires</p
          >
          <form id="declaVelo" action="/atelier-a11y/merci/">
            <div class="fr-input-group">
              <label class="fr-label  text-color" for="bike-brand"
                >Marque du vélo <small>(obligatoire)</small></label
              >
              <input
                required
                tabindex="1"
                class="fr-input"
                type="text"
                id="bike-brand"
                name="bike-brand"
              />
              <p
                id="text-input-error-desc-error"
                class="fr-error-text fr-hidden"
              >
                La marque du vélo est obligatoire.
              </p>
            </div>
            <div class="fr-input-group">
              <label class="fr-label  text-color" for="bike-color"
                >Couleur du vélo <small>(obligatoire)</small></label
              >
              <span class="fr-hint-text"
                >Merci d’utiliser de préférence une couleur du nuancier
                RAL</span
              >
              <input
                required
                tabindex="2"
                class="fr-input"
                type="text"
                id="bike-color"
                name="bike-color"
              />
              <p
                id="text-input-error-desc-error"
                class="fr-error-text fr-hidden"
              >
                La couleur du vélo est obligatoire.
              </p>
            </div>
            <div class="fr-input-group">
              <label class="fr-label" for="bike-name"
                >Surnom du vélo</label
              >
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
            <div class="fr-input-group fr-form-group">

              <fieldset class="fr-fieldset"><legend class="fr-label fr-mb-2w">Type de vélo</legend>
                <div class="fr-fieldset__content">
                  <div class="fr-radio-group">
                    <input
                      tabindex="4"
                      type="radio"
                      id="radio-1"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-1">Route</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="5"
                      type="radio"
                      id="radio-2"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-2">VTT</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="6"
                      type="radio"
                      id="radio-3"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-3">VTC</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="7"
                      type="radio"
                      id="radio-4"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-4">Fixie</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="8"
                      type="radio"
                      id="radio-4"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-4">BMX</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="9"
                      type="radio"
                      id="radio-5"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-5">Gravel</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      tabindex="10"
                      type="radio"
                      id="radio-6"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-6">Cargo</label>
                  </div>
                  <div class="fr-radio-group">
                    <input
                      type="radio"
                      id="radio-7"
                      name="radio"
                    />
                    <label class="fr-label" for="radio-7">Autre</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="fr-input-group fr-upload-group">
              <label class="fr-label" for="bike-pic"
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
            <div class="fr-input-group fr-checkbox-group">
              <input tabindex="12" type="checkbox" id="vae" name="checkbox" />
              <label class="fr-label" for="vae"
                >Cochez la case, s’il s’agit d’un VAE.</label
              >
            </div>
            <div class="fr-input-group fr-checkbox-group">
              <input tabindex="11" type="checkbox" id="auto" name="checkbox" />
              <label class="fr-label" for="auto"
                >Cochez la case, si vous avez vendu votre automobile.</label
              >
            </div>
            <div class="fr-input-group fr-checkbox-group">
              <input checked type="checkbox" id="robot" name="checkbox" />
              <label class="fr-label" for="robot"
                >Décochez la case, si vous êtes une vraie personne. <span class="fr-hint-text">Vous êtes un robot ? N’y touchez pas ! Merci.</span></label
              >
            </div>
            <div class="fr-input-group fr-select-group">
              <label class="fr-label" for="because">Pourquoi un vélo ? </label>
              <select
                tabindex="14"
                class="fr-select"
                id="because"
                name="because"
              >
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
                <option value="5">Cela ne vous regarde pas</option>
              </select>
            </div>
            <div
              id="btn"
              class="fr-btn"
            >
              Valider
            </div>
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
  mounted() {
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', validateForm, false);

    // form validation
    function validateForm(e) {
      const form = document.querySelector('#declaVelo');
      const fields = Array.from(form.elements);

      let errorsCount = 0;
      // apply invalid class
      for (let i = 0, il = fields.length, f; i < il; ++i) {
        f = fields[i];
        const isValid = f.checkValidity && f.checkValidity();
        if (f.nextSibling && f.nextSibling.classList) {
          f.nextSibling.classList.toggle('fr-hidden', isValid);
        }
        if (!isValid) {
          fields.find((j) => !j.checkValidity()).focus();
          ++errorsCount;
        }
      }
      if (!errorsCount) {
        location.assign(form.action);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
#btn {
  cursor: pointer;
}
</style>
