<template>

<!-- pied de page avec logo opérateur -->
<footer class="fr-footer" role="contentinfo" id="footer" tabindex="-1">
    <div class="fr-container">
        <div class="footer fr-footer__body fr-footer__body--operator">
            <div class="fr-footer__brand">
                <p class="fr-logo">
                    république
                    <br>française
                </p>
                <g-link class="fr-footer__brand-link" to="/">
                  <img svg-inline src="../assets/images/logoBasline.svg" class="fr-responsive-img" aria-label="Accueil - DesignGouv, par le pôle design des services numériques"/>
                </g-link>
            </div>
            <div class="fr-footer__content ">
              <p class="fr-footer__content-desc">DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</br>Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">code source</a> est disponible en licence libre.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" target="_blank" title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link"  target="_blank" title="gouvernement.fr - nouvelle fenêtre" href="https://gouvernement.fr">gouvernement.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link"  target="_blank" title="service-public.fr - nouvelle fenêtre" href="https://service-public.fr">service-public.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link"  target="_blank" title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
       <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <!-- <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/contact/">Contact</g-link>
                </li> -->
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
                <!-- <li class="fr-footer__bottom-item">
                  <button class="fr-footer__bottom-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
                </li> -->
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>

</template>

<script>

  export default {
    name: 'Footer'
  }

</script>
