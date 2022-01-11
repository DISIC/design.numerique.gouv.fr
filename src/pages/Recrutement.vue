<template>
  <Layout>
    <div class="dg-content fr-px-2w">

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

      <h1>Recrutement</h1>
      <p>Nombre de postes ouverts : <strong>{{ $page.allJob.edges.length }}</strong></p>
      <!-- <p class="cover__subtitle" >Rejoignez le pôle design des services numériques pour améliorer ensemble la qualité des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.</p>
      <p>Nous sommes rattachés à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</p> -->

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

    </div>
  </Layout>
</template>

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
        content: "https://design.numerique.gouv.fr/assets/images/rejoindre-equipe.png"
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
        content: "https://design.numerique.gouv.fr/assets/images/rejoindre-equipe.png"
      }],
    }
  }

</script>
