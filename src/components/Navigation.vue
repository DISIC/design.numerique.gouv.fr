<template>
  <nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <div class="fr-container">
      <ul id="nav" class="fr-nav__list">
        <li class="fr-nav__item">
          <a class="fr-nav__link" href="/">Accueil</a>
        </li>
        <!-- <li class="fr-nav__item">
          <a class="fr-nav__link" href="/design/">Design</a>
        </li> -->
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
          <a class="fr-nav__link" href="/recrutement/">Recrutement <span class="open-jobs">{{ $static.allJob.edges.length }}</span></a>
        </li>
      </ul>
    </div>
  </nav>
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
        const span = document.createElement('span');
        if (url == "/") {
          if (currentUrl == url) {
            span.innerHTML = link.innerHTML;
            span.classList.add('fr-nav__link');
            span.classList.add(activeClass);
            link.parentNode.setAttribute("aria-current", "page");
            link.parentNode.replaceChild(span, link);
          }
        }
        else if (currentUrl == url) {
          span.innerHTML = link.innerHTML;
          span.classList.add('fr-nav__link');
          span.classList.add(activeClass);
          link.parentNode.setAttribute("aria-current", "page");
          link.parentNode.replaceChild(span, link);
        }
        else if (currentUrl.includes(url)) {
          span.innerHTML = link.innerHTML;
          span.classList.add('fr-nav__link');
          span.classList.add(activeClass);
          link.parentNode.setAttribute("aria-current", "true");
          link.parentNode.replaceChild(span, link);
        }
      }
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .fr-nav {
    box-shadow: none !important;
    padding: 0 1rem !important;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 0px !important;
    }

    .open-jobs {
      font-size: 0.8rem;
      font-weight: bold;
      color: $red;
      background-color: $light-gray;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      margin-left: 0.375rem;
    }

    ul {
      // max-width: 1080px;
      // margin: 0 auto !important;

      .fr-nav__link {
        margin: 0 1.25rem;
        padding: 0.75rem 0.25rem;
        font-size: 1rem;
        font-weight: normal;
        border-radius: initial;
        width: auto;
        color: black;
        -webkit-font-smoothing: subpixel-antialiased !important;
        -moz-osx-font-smoothing: unset !important;
        --color-hover: none !important;
        --color-active: none !important;
        line-height: 2em;

        &.active {
          color: $blue;
          border-bottom: solid 2px $blue;
        }

        &:hover {
          color: $blue;

          .open-jobs {
            color: $blue;
          }

          &:after {
            display: none;
          }
        }
      }
    }
  }

</style>
