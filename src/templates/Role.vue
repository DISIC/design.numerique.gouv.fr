<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/roles-cles/" class="fr-breadcrumb__link">Rôles clés</g-link>
          </li>
          <li aria-current="page" v-html="$page.role.title" />
        </ol>
      </nav>

      <h1 v-html="$page.role.title" />

      <div v-html="$page.role.content" />

      <div class="fr-callout fr-mt-8w" v-if="$page.role.focus.length > 0">
        <p class="fr-callout__text" v-html="$page.role.focus" />
      </div>

    </div>
  </Layout>
</template>


<page-query>
query Role ($id: ID!) {
  role: role (id: $id) {
    title
    description
    focus
    content
  }
}
</page-query>


<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.role.title,
        meta: [{
          name: "description",
          content: this.$page.role.description
        },
        {
          property: "og:title",
          content: this.$page.role.title + " - DesignGouv"
        },
        {
          property: "og:description",
          content: this.$page.role.description
        }],
      }
    }
  }
</script>
