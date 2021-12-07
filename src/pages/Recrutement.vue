<template>
  <Layout class="jobs-page">
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
    <div class="cover">
      <div class="cover__container">
        <h1 class="text-highlight">Recrutement</h1>
<!--
        <p class="cover__jobs">Nombre de postes ouverts : <span>{{ $page.allJob.edges.length }}</span></p>
        <p class="cover__subtitle" >Nous n’avons pas d’offre pour le moment.</p>
 -->
<!--
        <p class="cover__subtitle" >Rejoignez le pôle design des services numériques pour améliorer ensemble la qualité des services publics numériques. Faites connaissance avec <g-link to="/equipe/">notre équipe</g-link>.</p>
        <p>Nous sommes rattachés à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</p>
-->
      </div>
    </div>

      <div class="content">
           <h2>Les offres</h2>
          <ul class="jobs">
            <li v-for="{ node } in $page.allJob.edges" :key="node.id">
              <g-link :to="node.path" class="button">
                <h3>{{ node.title }}</h3>
                <p>{{ node.type }}</p>
              </g-link>
            </li>
          </ul>
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
