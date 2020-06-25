<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/">Commando UX</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/cadre-legal" aria-current="page">Obligations légales et sanctions</g-link>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">
       <p class="cover__subhead"><Services class="cover__subhead-icon" aria-hidden="true"/>Commando UX</p>
       <h1 class="highlight">{{ $page.challenge.name }}</h1>
     </div>
   </div>

   <div class="content">
      <div v-html="$page.challenge.content" />
   </div>

  </Layout>
</template>

<script>

import Services from "~/assets/images/services.svg"

export default {
  components: {
    Services,
  },
  metaInfo () {
    return {
      title: this.$page.challenge.name,
      meta: [
        {
          name: 'description',
          content: this.$page.challenge.name
        }
      ]
    }
  }
}
</script>

<page-query>
query Challenge ($id: ID!) {
  challenge: challenge (id: $id) {
    name
    department
    direction
    content
  }
}
</page-query>

<style lang="scss">
</style>
