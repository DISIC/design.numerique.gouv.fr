<template>
  <Layout>

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
        <p v-if="$page.allJob.edges.length <= 1" class="fr-text--lead">Nombre de poste ouvert actuellement : <strong>{{ $page.allJob.edges.length }}</strong></p>
        <p v-else class="fr-text--lead">Nombre de postes ouverts actuellement : <strong>{{ $page.allJob.edges.length }}</strong></p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-md-6 fr-col-12"  v-for="{ node } in $page.allJob.edges" :key="node.id">
          <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
            <div class="fr-tile__body">
              <h2 class="fr-tile__title">
                <g-link  :to="node.path" class="fr-tile__link">{{ node.title }}</g-link>
              </h2>
              <p class="fr-tile__desc">{{ node.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<!--
<page-query>
  query {
    allJob (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
          title
          path
          type
        }
      }
    }
  }
</page-query>
-->

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
