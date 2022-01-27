<template>
  <Layout class="roles-cles-page">


    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/pnu/" class="fr-breadcrumb__link">Portail numérique unique</g-link>
        </li>
        <li aria-current="page" v-html="$page.pnu.title" />
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">
       <h1 class="text-highlight" v-html="$page.pnu.title" />
      </div>
    </div>
    <div class="content">
      <div v-html="$page.pnu.content" />
    </div>
  </Layout>
</template>

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

<page-query>
query Pnu ($id: ID!) {
  pnu: pnu (id: $id) {
    title
    description
    content
  }
}
</page-query>
