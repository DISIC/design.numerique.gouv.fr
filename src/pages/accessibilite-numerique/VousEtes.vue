<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Vous êtes</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>

        <h1>Vous avez un <span class="text-highlight">rôle à jouer</span></h1>
      </div>  
    </div>

    <div class="content">

      <p>Que vous soyez <g-link to="/accessibilite-numerique/vous-etes/manager/">décideur ou décideuse</g-link>, <g-link to="/designer/">designer</g-link>, <g-link to="/developper/">développeur ou développeuses</g-link>, <g-link to="/po/">responsable de projet ou de produit</g-link>, vous avez un rôle à jouer dans la mise au conformité RGAA de votre projet web.</p>
      <p>Ces fiches ont pour but de vous accompagner au mieux </p>
    </div>

  </Layout>
</template>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
  metaInfo: {
    title: "RGAA à emporter",
    meta: [{
      name: 'description',
      content: "Afficher la conformité RGAA, s’organiser et se faire aider pour améliorer l’accessibilité."
    },
    {
      property: 'og:title',
      content: "RGAA à emporter - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Afficher la conformité RGAA, s’organiser et se faire aider pour améliorer l’accessibilité."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>

<style lang="scss">

</style>
