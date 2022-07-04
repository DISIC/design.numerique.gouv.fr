<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/recrutement/" class="fr-breadcrumb__link">Recrutement</g-link>
          </li>
          <li>
            <span aria-current="page">{{ $page.poste.intitule }}</span>
          </li>
        </ol>
      </nav>

      <h1 v-html="$page.poste.intitule" />

      <h2>Informations générales</h2>
      <ul>
        <li><strong>Contrat : </strong><span v-html="$page.poste.contrat" /></li>
        <li><strong>Durée : </strong><span v-html="$page.poste.duree" /></li>
        <li><strong>Début : </strong><span v-html="$page.poste.debut" /></li>
        <li><strong>Localisation : </strong><span v-html="$page.poste.localisation" /></li>
      </ul>

      <h2>Qui sommes-nous ?</h2>

      <h3 v-html="$page.poste.direction" />
      <p v-html="$page.poste.descriptionDirection" />

      <h3 v-html="$page.poste.equipe" />
      <p v-html="$page.poste.descriptionEquipe" />

      <div v-html="$page.poste.content.content" />

      <p>Cette offre a été publiée le <span v-html="$page.poste.publication" />.</p>

    </div>
  </Layout>
</template>


<page-query>
  query Poste ($id: ID!) {
    poste: poste (id: $id) {
      intitule
      contrat
      duree
      debut
      localisation
      equipe
      descriptionEquipe
      direction
      descriptionDirection
      publication
      content {
        content
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.poste.intitule + " - " + this.$page.poste.contrat + " - " + this.$page.poste.duree,
        meta: [{
          name: "description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          property: "og:title",
          content: this.$page.poste.intitule + " - " + this.$page.poste.contrat + " - " + this.$page.poste.duree
        },
        {
          property: "og:description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          property: "og:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipe.png"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@Design_Gouv"
        },
        {
          name: "twitter:title",
          content: this.$page.poste.intitule + " - " + this.$page.poste.contrat + " - " + this.$page.poste.duree
        },
        {
          name: "twitter:description",
          content: "Rejoignez notre équipe et participez à l'amélioration des services publics numériques !"
        },
        {
          name: "twitter:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipe.png"
        }],
      }
    },
  }
</script>
