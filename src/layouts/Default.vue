<template>
  <div>

    <SkipLink/>

    <div v-show="$i18n.locale == 'en-gb' " class="if-english">
      <g-link to="/en/about" lang="en">
        Don't speak french? Take a quick tour of what we do
      </g-link>
    </div>

    <Header />

    <main class="layout" id="main" role="main" tabindex="-1">
			<div class="dg-cover-container fr-container">
        <slot/>
        <Offer v-if="showServices"/>
      </div>
    </main>

    <NewsletterReseauxSociaux />

    <Footer />

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Header from "~/components/Header.vue"
  import NewsletterReseauxSociaux from "~/components/NewsletterReseauxSociaux.vue"
  import Offer from "~/components/alerts/Offer.vue"
  import Footer from "~/components/Footer.vue"
  import SkipLink from "~/components/SkipLink.vue"

  export default {
    components: {
      Header,
      NewsletterReseauxSociaux,
      Offer,
      Footer,
      SkipLink,
    },
    props: {
      showServices: {
        default: false,
        type: Boolean
      },
    },
    mounted () {
      let src = "/assets/dsfr/dsfr.module.min.js";
      let dsfr = document.createElement('script');
      dsfr.type = "module";
      dsfr.src = src;
      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }
      document.body.appendChild(dsfr);
    }
  }
</script>
