<template>

<!-- pied de page avec logo opérateur -->
<footer class="fr-footer" role="contentinfo" id="footer">
    <div class="fr-container">
        <div class="footer fr-footer__body fr-footer__body--operator">
            <div class="fr-footer__brand fr-enlarge-link">
                <p class="fr-logo" title="république française">
                    république
                    <br>française
                </p>
                <g-link class="fr-footer__brand-link" to="/" title="DesignGouv, par le pôle design des services numériques - Retour à l'accueil">
                    <img svg-inline class="fr-footer__logo" src="../assets/images/logoBasline.svg" aria-hidden="true">
                </g-link>
            </div>
            <div class="fr-footer__content ">
              <p class="fr-footer__content-desc">DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</br>Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">code source</a> est disponible en licence libre.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://gouvernement.fr">gouvernement.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://service-public.fr">service-public.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://data.gouv.fr">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
       <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/contact/">Contact</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/equipe/">Notre équipe</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/plan-du-site/">Plan du site</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/accessibilite/">Accessibilité : totalement conforme</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/mentions-legales/">Mentions légales</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link"  to="/misc/donnees-personnelles/">Données personnelles et cookies</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <button class="fr-footer__bottom-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
    <dialog id="fr-theme-modal" class="fr-modal" role="dialog" aria-labelledby="fr-theme-modal-title">
      <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
              <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
                  <div class="fr-modal__body">
                      <div class="fr-modal__header">
                          <button class="fr-link--close fr-link" aria-controls="fr-theme-modal">Fermer</button>
                      </div>
                      <div class="fr-modal__content">
                          <h1 id="fr-theme-modal-title" class="fr-modal__title">
                              Paramètres d’affichage
                          </h1>
                          <div id="fr-display" class="fr-form-group fr-display">
                              <div class="fr-form-group">
                                  <fieldset class="fr-fieldset">
                                      <legend class="fr-fieldset__legend fr-text--regular" id='-legend'>
                                          Choisissez un thème pour personnaliser l’apparence du site.
                                      </legend>
                                      <div class="fr-fieldset__content">
                                          <div class="fr-radio-group fr-radio-rich">
                                              <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                                              <label class="fr-label" for="fr-radios-theme-light">Thème clair
                                              </label>
                                              <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                  <!-- <img src="./dist/artwork/light.svg" alt="" /> -->
                                                  <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                                              </div>
                                          </div>
                                          <div class="fr-radio-group fr-radio-rich">
                                              <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                                              <label class="fr-label" for="fr-radios-theme-dark">Thème sombre
                                              </label>
                                              <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                  <!-- <img src="./dist/artwork/dark.svg" alt="" /> -->
                                                  <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                                              </div>
                                          </div>
                                          <div class="fr-radio-group fr-radio-rich">
                                              <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                                              <label class="fr-label" for="fr-radios-theme-system">Système
                                                  <span class="fr-hint-text">Utilise les paramètres système.</span>
                                              </label>
                                              <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                  <!-- <img src="./dist/artwork/system.svg" alt="" /> -->
                                                  <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                                              </div>
                                          </div>
                                      </div>
                                  </fieldset>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </dialog>
</footer>

</template>

<script>

  export default {
    name: 'Footer'
  }

</script>


<static-query>

  query {
    allJob (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
        }
      }
    }
  }

</static-query>
