<template>
  <Layout >

    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Recrutement</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/recrutement-picto.svg" aria-hidden="true">Recrutement</h1>
        <p v-if="$page.allPoste.edges.length == 0" class="fr-text--lead">Aucun poste ouvert pour le moment.</p>
        <p v-else-if="$page.allPoste.edges.length <= 1" class="fr-text--lead">Nombre de poste ouvert actuellement : <strong>{{ $page.allPoste.edges.length }}</strong></p>
        <p v-else class="fr-text--lead">Nombre de postes ouverts actuellement : <strong>{{ $page.allPoste.edges.length }}</strong></p>
      </div>
    </section>

    <section v-if="$page.allPoste" class="dg-content fr-px-2w">

      <div class="fr-grid-row fr-grid-row--gutters fr-mb-6w">
        <div class="fr-col-md-6 fr-col-12"  v-for="{ node } in $page.allPoste.edges" :key="node.id">
          <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
            <div class="fr-tile__body">
              <h2 class="fr-tile__title">
                <g-link  :to="'/recrutement/' + node.slug + '/'" class="fr-tile__link">{{ node.titre }}</g-link>
              </h2>
              <p class="fr-tile__desc">{{ node.type }}</p>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <h2 class="fr-h6">Vous êtes disponibles pour des missions au sein de l'administration ?</h2>
      <p>Nous pouvons vous aider à intervenir au profit des administrations, dans le cadre de l’amélioration de la qualité de leurs démarches en ligne.</p>
      <g-link to="/recrutement/partager-interet/" class="fr-btn">Partager votre intérêt</g-link>

    </section>

  </Layout>
</template>

<page-query>
  query {
    allPoste (filter: { publier: { eq: 1 }}) {
      edges {
        node {
        	id
          titre
          slug
          publication
          publier
        }
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: "Recrutement",
      meta: [{
        name: "description",
        content: "Améliorons ensemble la qualité des services publics numériques."
      },
      {
        property: "og:title",
        content: "Recrutement - DesignGouv"
      },
      {
        property: "og:description",
        content: "Améliorons ensemble la qualité des services publics numériques."
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
        content: "Recrutement - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Nous améliorons les services publics numériques. Rejoingnez-nous !"
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/rejoindre-equipe.png"
      }],
    }
  }
</script>
