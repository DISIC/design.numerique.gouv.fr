<template>
  <div>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  Les ateliers de <br><span>DesignGouv</span>
                </p>
              </div>
              <div class="fr-header__navbar">
                <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__operator">
              Déclaration de bicyclette
            </div>
          </div>

        </div>
      </div>
    </div>

  <div class="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
    <div class="fr-container">
      <button class="fr-link--close fr-link" aria-controls="modal-833">Fermer</button>
      <div class="fr-header__menu-links"></div>
      <nav class="fr-nav" id="navigation-832" role="navigation" aria-label="Menu principal">
        <ul id="nav" class="fr-nav__list">
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/atelier-a11y/">Accueil</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/atelier-a11y/declarer-ma-bicyclette/">Déclarer ma bicyclette</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/atelier-a11y/aide/">Aide</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/atelier-a11y/liste-42-criteres/">Liste des 42 critères</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>


  </header>
    <main id="main" role="main">
      <div class="fr-container fr-container--fluid">
        <slot/>
      </div>
    </main>
<footer class="fr-footer" role="contentinfo" id="footer">
    <div class="fr-container">
        <div class="footer fr-footer__body fr-footer__body--operator">
            <div class="fr-footer__brand">
                <p class="fr-logo">
                    Les ateliers de <br>DesignGouv
                </p>
            </div>
            <div class="fr-footer__content ">
              <p class="fr-footer__content-desc">DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</br>Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">code source</a> est disponible en licence libre.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" target="_blank" href="https://gouvernement.fr">gouvernement.fr</a>
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
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>  </div>
</template>

<style>
p.fr-logo span {
  text-transform: capitalize;
}
</style>

<script>

  export default {
    name: 'Header',
    mounted () {
      let src = "/assets/js/dsfr.module.min.js";
      let dsfr = document.createElement('script');
      dsfr.type = "module";
      dsfr.src = src;
      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }
      document.body.appendChild(dsfr);

     var currentUrl = this.$route.path;
      var activeClass = 'active';
      var navLinks = document.querySelectorAll('.fr-nav a'); //all links inside the nav
      for (var i = 0, l = navLinks.length; i < l; i++) {
        const link = navLinks[i];
        const url = link.getAttribute('href');
        if (url == "/") {
          if (currentUrl == url) {
            link.setAttribute("aria-current", "page");
          }
        }
        else if (currentUrl == url) {
          link.setAttribute("aria-current", "page");
        }
      }

    }
  }
</script>

