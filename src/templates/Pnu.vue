<template>
  <Layout class="roles-cles-page">
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/pnu/" class="fr-breadcrumb__link">Portail numérique unique</g-link>
          </li>
          <li aria-current="page" class="fr-breadcrumb__link" v-html="$page.pnu.title" />
        </ol>
      </nav>

      <h1 class="text-highlight" v-html="$page.pnu.title" />

      <div v-html="$page.pnu.content" />

    </div>
  </Layout>
</template>


<page-query>
  query Pnu ($id: ID!) {
    pnu: pnu (id: $id) {
      title
      description
      content
    }
  }
</page-query>


<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.pnu.title + " - Portail numérique unique - DesignGouv",
        meta: [{
          name: "description",
          content: this.$page.pnu.description
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        },      {
          property: "og:title",
          content: this.$page.pnu.title + " - Portail numérique unique - DesignGouv"
        },
        {
          property: "og:description",
          content: this.$page.pnu.description
        }],
      }
    }
  }
</script>
