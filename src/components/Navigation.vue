<template>
  <div class="fr-header__menu fr-modal" id="modal-833" aria-labelledby="fr-btn-menu-mobile">
    <div class="fr-container">
      <button class="fr-link--close fr-link" aria-controls="modal-833">Fermer</button>
      <div class="fr-header__menu-links"></div>
      <nav class="fr-nav" id="navigation-832" role="navigation" aria-label="Menu principal">
        <ul id="nav" class="fr-nav__list">
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/">Accueil</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/accessibilite-numerique/">Accessibilité</a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="/accompagnement/">Nos offres</a>
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
          <li class="fr-nav__item" v-if="$static.allJob.edges.length > 0">
            <a class="fr-nav__link" href="/recrutement/">Recrutement <span class="job">{{ $static.allJob.edges.length }}</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

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

<script>
  export default {
    name: 'Navigation',
    mounted () {
      //Highlight active link in menu and set aria-current
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
        else if (currentUrl.includes(url)) {
          link.setAttribute("aria-current", "true");
        }
      }
    }
  }
</script>

<style lang="scss">

    .job {
      font-size: 0.8rem;
      font-weight: bold;
      color: var(--border-default-purple-glycine);
      border:0.2em solid  var(--border-default-purple-glycine);
      border-radius: 50%;
      width: 1.75rem;
      height: 1.75rem;
      margin-left: 0.255rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

</style>
