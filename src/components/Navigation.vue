<template>
  <div
    class="fr-header__menu fr-modal"
    id="modal-833"
    aria-labelledby="fr-btn-menu-mobile"
  >
    <div class="fr-container">
      <button class="fr-link--close fr-btn" aria-controls="modal-833">
        Fermer
      </button>
      <div class="fr-header__menu-links"></div>
      <nav
        class="fr-nav"
        id="navigation-832"
        role="navigation"
        aria-label="Menu principal"
      >
        <ul id="nav" class="fr-nav__list">
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/">Accueil</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/design-numerique/">Design</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/accessibilite-numerique/"
              >Accessibilité</a
            >
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/accompagnement/">Accompagnement</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/outils/">Outils</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/formations/">Formations</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/articles/">Articles</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/recrutement/">Recrutement</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  mounted() {
    //Highlight active link in menu and set aria-current
    var currentUrl = this.$route.path;
    var activeClass = "active";
    var navLinks = document.querySelectorAll(".fr-nav a"); //all links inside the nav
    for (var i = 0, l = navLinks.length; i < l; i++) {
      const link = navLinks[i];
      const url = link.getAttribute("href");
      if (url == "/") {
        if (currentUrl == url) {
          link.setAttribute("aria-current", "page");
        }
      } else if (currentUrl == url) {
        link.setAttribute("aria-current", "page");
      } else if (currentUrl.includes(url)) {
        link.setAttribute("aria-current", "true");
      }
    }
  },
};
</script>
