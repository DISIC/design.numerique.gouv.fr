<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <div class="dg-cover dg-cover--linear fr-mb-4w">
        <div class="dg-cover__container dg-cover__container fr-mb-1w">
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
          <p v-if="Date.now() - new Date($page.poste.publication) < 1209600000" class="fr-badge fr-badge--new fr-mb-2w">Nouveau</p>
          <h1 class="dg-cover__title" v-html="$page.poste.intitule" />
          <p class="fr-text--lead" v-html="$page.poste.descriptionCourte" />
          <div class="dg-inline-block fr-mb-0 fr-mb-md-n1w fr-mr-4w">
            <p class="dg-text-bold dg-inline-block fr-mr-1w">Contrat :</p>
            <g-link :to="{ path: '/recrutement/', query: { contrat: $page.poste.contrat }}" class="fr-tag">{{ $page.poste.contrat }}</g-link>
          </div>
          <div class="dg-inline-block fr-mb-0 fr-mb-md-n1w">
            <p v-if="$page.poste.tags.length == 1" class="dg-text-bold dg-inline-block fr-mb-1w fr-mr-1w">Cathégorie :</p>
            <p v-else-if="$page.poste.tags.length > 1" class="dg-text-bold dg-inline-block fr-mb-1w fr-mr-1w">Cathégories :</p>
            <div class="dg-inline-block">
              <ul class="dg-inline-flex fr-tags-group">
                <li v-for="tag in $page.poste.tags"><g-link :to="{ path: '/recrutement/', query: { tag: tag }}" class="fr-tag ">{{ tag }}</g-link></li>
              </ul>
            </div>
          </div>
          <ul class="dg-list-no-decoration">
            <li class="dg-inline-block fr-mb-5v fr-mr-4w"><strong>Durée de la mission : </strong><span v-html="$page.poste.duree" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
            <li class="dg-inline-block fr-mb-5v fr-mb-1v"><strong>Date de début : </strong><span v-html="(new Date($page.poste.debut) - Date.now()) < 0 ? 'Dès que possible' : (new Date($page.poste.debut)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
            <li><strong>Localisation : </strong><span v-html="$page.poste.localisation" class="fr-badge fr-badge--green-tilleul-verveine fr-badge--sm" /></li>
          </ul>
        </div>
      </div>

      <div class="dg-content dg-content--xs">

        <h2>Le contexte</h2>

        <h3 v-if="" v-html="$page.poste.direction" />
        <p v-html="$page.poste.descriptionDirection" />

        <h3 v-html="$page.poste.equipe" />
        <p v-html="$page.poste.descriptionEquipe" />

        <div v-html="$page.poste.content.content" />

        <h2>Vous avez une question ?</h2>
        <p>Vous pouvez nous contacter à l'adresse suivante : <strong>{{$page.poste.contact}}</strong></p></p>

        <h2>Pour candidater</h2>
        <g-link :to="{ path: '/recrutement/partager-interet/', query: { poste: $page.poste.id, intitule: $page.poste.intitule }}" class="fr-btn">Partager votre intérêt</g-link>

        <p class="fr-mt-6w">
          <hr>
          <small>Cette offre a été publiée le <b><span v-html="(new Date($page.poste.publication)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" /></b>.</small>
        </p>

      </div>

    </div>
  </Layout>
</template>


<page-query>
  query Poste ($id: ID!) {
    poste: poste (id: $id) {
      id
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
      contact
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

<style lang="scss" scoped>

  h2 {
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

</style>
