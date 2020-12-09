<template>
  <nav class="rf-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
    <ul class="rf-nav__list">
      <li class="rf-nav__item">
        <a class="rf-link" href="/">Accueil</a>
      </li>
      <!-- <li class="rf-nav__item">
        <a class="rf-link" href="/design/">Design</a>
      </li> -->
      <li class="rf-nav__item">
        <a class="rf-link" href="/accessibilite-numerique/">Accessibilité</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/accompagnement/">Accompagnement</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/outils/">Outils</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/formations/">Formations</a>
      </li>
      <!-- <li class="rf-nav__item">
        <a class="rf-link" href="/blog/">Blog</a>
      </li> -->
    </ul>
  </nav>
</template>

<script>

  export default {
    name: 'Navigation',
    mounted () {

      //Highlight active link in menu and set aria-current
      var currentUrl = this.$route.path;
      var activeClass = 'active';
      var navLinks = document.querySelectorAll('.rf-nav a'); //all links inside the nav

      for (var i = 0, l = navLinks.length; i < l; i++) {
        const link = navLinks[i];
        const url = link.getAttribute('href');
        const span = document.createElement('span');
        if (url == "/") {
          if (currentUrl == url) {
            span.innerHTML = link.innerHTML;
            span.classList.add('rf-link');
            span.classList.add(activeClass);
            link.parentNode.setAttribute("aria-current", "page");
            link.parentNode.replaceChild(span, link);
          }
        }
        else if (currentUrl == url) {
          span.innerHTML = link.innerHTML;
          span.classList.add('rf-link');
          span.classList.add(activeClass);
          link.parentNode.setAttribute("aria-current", "page");
          link.parentNode.replaceChild(span, link);
        }
        else if (currentUrl.includes(url)) {
          span.innerHTML = link.innerHTML;
          span.classList.add('rf-link');
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

  .rf-nav {
    box-shadow: none !important;
    padding: 0 16px !important;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 0px !important;
    }

    ul {
      max-width: 1080px;
      margin: 0 auto !important;

      .rf-link {
        margin: 0 20px;
        padding: 18px 4px;
        font-size: 1rem;
        font-weight: normal;
        width: auto;
        -webkit-font-smoothing: subpixel-antialiased !important;
        -moz-osx-font-smoothing: unset !important;
        --color-hover: none !important;
        --color-active: none !important;

        &.active {
          color: $blue;
          box-shadow: inset 0 -2px $blue;
        }

        &:hover {
          color: $blue;

          &:after {
            display: none;
          }
        }
      }
    }
  }

</style>
