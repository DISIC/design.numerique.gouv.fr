<template>
  <Layout class="roles-cles-page">


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

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">
       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Vous êtes</div>
       <h1 class="text-highlight" v-html="$page.role.title" />
      </div>
    </div>
    <div class="content">
      <div v-html="$page.role.content" />
    </div>
    <div class="rf-callout rf-mt-8w" v-if="$page.role.focus.length > 0">
      <p class="rf-callout__text" v-html="$page.role.focus" />
    </div>
  </Layout>
</template>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
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
