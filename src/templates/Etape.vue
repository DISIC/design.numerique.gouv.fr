<template>
  <Layout class="roles-cles-page">
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/design-numerique/" class="fr-breadcrumb__link"
                >Design</g-link
              >
            </li>
            <li>
              <g-link
                to="/design-numerique/etapes-cles/"
                class="fr-breadcrumb__link"
                >Étapes clés</g-link
              >
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">{{
                $page.etape.title
              }}</a>
            </li>
          </ol>
        </nav>
        <div class="dg-cover__title fr-grid-row">
          <div class="fr-col">
            <h1>{{ $page.etape.title }}</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="dg-content fr-px-2w">
      <section>
        <div v-html="$page.etape.content" />
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query Etape ($id: ID!) {
    etape: etape (id: $id) {
        	title
          description
          cat
          content
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.etape.title,
      meta: [
        {
          name: "description",
          content: this.$page.etape.description,
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
        {
          property: "og:title",
          content: this.$page.etape.title + " - DesignGouv",
        },
        {
          property: "og:description",
          content: this.$page.etape.description,
        },
        {
          property: "og:image",
          content:
            "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
        },
      ],
    };
  },
};
</script>
