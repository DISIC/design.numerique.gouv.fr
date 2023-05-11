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
                <a aria-current="page" class="fr-breadcrumb__link">{{ $page.poste.intitule }}</a>
              </li>
            </ol>
          </nav>
          <p v-if="Date.now() - new Date($page.poste.publication) < 1209600000" class="fr-badge fr-badge--new fr-mb-2w">Nouveau</p>
          <h1 class="dg-cover__title" v-html="$page.poste.intitule" />
          <p class="fr-text--lead" v-html="$page.poste.descriptionCourte" />
          <ul class="dg-list-no-decoration fr-mb-2w">
            <li class="dg-inline-block fr-mb-1w fr-mr-4w fr-text--sm"><strong>Contrat : </strong><span v-html="$page.poste.contrat" class="fr-badge fr-badge--pink-macaron fr-badge--sm" /></li>
            <li class="dg-inline-block fr-mb-1w fr-mr-4w fr-text--sm"><strong>Durée : </strong><span v-html="$page.poste.duree" class="fr-badge fr-badge--pink-macaron fr-badge--sm" /></li>
            <li class="dg-inline-block fr-mb-1w fr-mr-4w fr-text--sm"><strong>Début : </strong><span v-html="(new Date($page.poste.debut) - Date.now()) < 0 ? 'Dès que possible' : (new Date($page.poste.debut)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" class="fr-badge fr-badge--pink-macaron fr-badge--sm" /></li>
            <li><strong>Localisation : </strong><strong v-html="$page.poste.localisation" class="fr-badge fr-badge--pink-macaron fr-badge--sm" /></li>
          </ul>
        </div>
      </div>

      <div class="dg-content dg-content--xs">

        <h2>Le contexte</h2>

        <h3 class="fr-h6" v-html="$page.poste.direction" />
        <p v-html="$page.poste.descriptionDirection" />

        <div v-if="$page.poste.descriptionEquipe">
          <h3 class="fr-h6" v-html="$page.poste.equipe" />
          <p v-html="$page.poste.descriptionEquipe" />
        </div>

        <div class="dg-contains-list fr-mt-6w" v-html="$page.poste.content.content" />

        <h2 class="fr-mt-6w">Vous avez une question ?</h2>
        <p>Vous pouvez nous contacter à l'adresse suivante : <strong>{{$page.poste.contact}}</strong></p></p>

        <h2 class="fr-mt-6w">Pour candidater</h2>
        <p v-if="this.$page.poste.destination == 'DSN'" >Pour postuler à cette offre, envoyez-nous votre CV et une lettre de motivation à l'adresse <strong>candidatures-dinum@pm.gouv.fr</strong>.</p>
        <g-link v-else :to="{ path: '/recrutement/partager-interet/', query: { poste: $page.poste.id }}" class="fr-btn fr-btn--icon-right fr-icon-arrow-right-line">Postuler</g-link>

        <p class="fr-mt-8w">
          <hr>
          <!-- <div class="dg-flex dg-flex--space-between dg-flex--wrap"> -->
            <!-- <div class="fr-mb-n1w fr-mr-1w">
              <p v-if="$page.poste.tags.length == 1" class="dg-inline-block fr-mb-1w fr-mr-1w fr-text--sm">Cathégorie :</p>
              <p v-else-if="$page.poste.tags.length > 1" class="dg-inline-block fr-mb-1w fr-mr-1w fr-text--sm">Cathégories :</p>
              <div class="dg-inline-block">
                <ul class="fr-tags-group">
                  <li v-for="tag in $page.poste.tags"><g-link :to="{ path: '/recrutement/', query: { tag: tag }}" class="fr-tag fr-tag--sm">{{ tag }}</g-link></li>
                  <li v-for="tag in $page.poste.tags" class="fr-tag fr-tag--sm">{{ tag }}</li>
                </ul>
              </div>
            </div> -->
            <p class="fr-text--sm fr-mb-2w">Date de publication : <span class="fr-text--bold" v-html="(new Date($page.poste.publication)).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })" /></p>
            <p v-if="$page.poste.lien" class="fr-text--sm"><g-link :to="$page.poste.lien">Lien vers l'annonce sur Place de l'emploi public</g-link></p>
          <!-- </div> -->
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
      destination
      lien
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
          content: this.$page.poste.descriptionCourte
        },
        {
          property: "og:title",
          content: this.$page.poste.intitule + " - " + this.$page.poste.contrat + " - " + this.$page.poste.duree
        },
        {
          property: "og:description",
          content: this.$page.poste.descriptionCourte
        },
        {
          property: "og:image",
          content: this.$page.poste.destination == "DSN" ? "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipe.png" : "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
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
          content: this.$page.poste.descriptionCourte
        },
        {
          name: "twitter:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipe.png"
        }],
      }
    },
  }
</script>
