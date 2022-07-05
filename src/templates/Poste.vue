<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <div class="dg-cover dg-cover--linear fr-mb-4w">
        <div class="dg-cover__container fr-mb-1w">
          <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
            <ol class="fr-breadcrumb__list">
              <li>
                <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
              </li>
              <li>
                <g-link to="/recrutement/" class="fr-breadcrumb__link">Recrutement</g-link>
              </li>
              <li>
                <span aria-current="page">{{ $page.poste.intitule }} - {{ $page.poste.equipe }}</span>
              </li>
            </ol>
          </nav>
          <p v-if="Date.now() - new Date($page.poste.publication) < 1209600000" class="fr-badge fr-badge--new fr-mb-2w fr-mt-1v">Nouveau</p>
          <h1 class="dg-cover__title" v-html="$page.poste.intitule" />
          <p class="fr-text--lead" v-html="$page.poste.descriptionCourte" />
          <div class="dg-inline-block">
            <p class="dg-text-bold dg-inline-block fr-text--sm fr-mb-1w  fr-mr-1w">Contrat :</p>
            <g-link :to="{ path: '/recrutement/', query: { type: $page.poste.contrat }}" class="fr-tag fr-mr-4w">{{ $page.poste.contrat }}</g-link>
          </div>
          <div class="dg-inline-block fr-mb-1w ">
            <p v-if="$page.poste.tags.length == 1" class="dg-text-bold dg-inline-block fr-text--sm fr-mb-1w fr-mr-1w">Cathégorie :</p>
            <p v-else-if="$page.poste.tags.length > 1" class="dg-text-bold dg-inline-block fr-text--sm fr-mb-1w fr-mr-1w">Cathégories :</p>
            <div class="dg-inline-block">
              <ul class="dg-inline-flex fr-tags-group">
                <li v-for="tag in $page.poste.tags"><g-link :to="{ path: '/recrutement/', query: { tag: tag }}" class="fr-tag ">{{ tag }}</g-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="dg-content dg-content--xs fr-px-2w">

        <h2 class="fr-mt-6w">Informations générales</h2>
        <ul class="dg-list-no-decoration">
          <li class="fr-mb-1v"><strong>Durée de la mission : </strong><span v-html="$page.poste.duree" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
          <li class="fr-mb-1v"><strong>Date de début : </strong><span v-html="(new Date($page.poste.debut)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
          <li class="fr-mb-1v"><strong>Type de contrat : </strong><span v-html="$page.poste.contrat" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
          <li><strong>Localisation : </strong><span v-html="$page.poste.localisation" /></li>
        </ul>

        <h2 class="fr-mt-6w">Le contexte</h2>

        <h3 v-if="" v-html="$page.poste.direction" class="fr-h6" />
        <p v-html="$page.poste.descriptionDirection" />

        <h3 v-html="$page.poste.equipe" class="fr-h6" />
        <p v-html="$page.poste.descriptionEquipe" />

        <div v-html="$page.poste.content.content" />

        <div class="fr-callout fr-callout--pink-macaron fr-mt-6w fr-pl-3w fr-py-2w">
          <p class="fr-callout__text fr-text--md">
            Cette offre a été publiée le <b><span v-html="(new Date($page.poste.publication)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" /></b>.
          </p>
        </div>

      </div>

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
      descriptionCourte
      tags
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
