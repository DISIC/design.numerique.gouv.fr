<template>
  <nav class="rf-nav" role="navigation" aria-label="Menu principal">
    <ul id="nav" class="rf-nav__list">
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
        <a class="rf-link" href="/dispositifs/">Dispositifs</a>
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
      <li class="rf-nav__item" v-if="$static.allJob.edges.length > 0">
        <a class="rf-link" href="/recrutement/">Recrutement <span class="open-jobs">{{ $static.allJob.edges.length }}</span></a>
      </li>
    </ul>
  </nav>
</template>


<static-query>

  query {
    allJob (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
          title
          type
          path
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
    padding: 0 1rem !important;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 0px !important;
    }

    .open-jobs {
      font-size: 0.8rem;
      font-weight: bold;
      color: $dark-red;
      border-radius: 50%;
      background-color: $lighter-gray;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      margin-left: 0.375rem;
      margin-top: 0.125rem;
    }

    ul {
      max-width: 1080px;
      margin: 0 auto !important;

      .rf-link {
        margin: 0 1.25rem;
        padding: 0.75rem 0.25rem;
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
