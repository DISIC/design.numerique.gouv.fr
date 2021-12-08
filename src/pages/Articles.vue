<template>
  <Layout>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Articles</span>
        </li>
      </ol>
    </nav>
    <div class="content">
      <h1>Articles</h1>
      <section class="articles">
        <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
          <g-image :src="node.illustration" focusable="false" alt="" aria-hidden="true"/>
          <p class="articles__date">{{ node.publishedDate }}</p>
          <h2><g-link :to="node.path">{{ node.title }}</g-link></h2>
          <p>{{ node.description }}</p>
        </article>
      </section>
    </div>
  </Layout>
</template>

<page-query>

  query {
    allArticle (sortBy: "publishedDate", order: DESC) {
      edges {
        node {
        	id
          title
          publishedDate (format: "D MMMM YYYY", locale : "fr")
          illustration
          description
          path
        }
      }
    }
  }

</page-query>

<script>
  export default {
    metaInfo: {
      title: "Articles",
      meta: [{
        name: "description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
      },
      {
        property: "og:title",
        content: "Articles - DesignGouv"
      },
      {
        property: "og:description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
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
        content: "Articles - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez nos dernières publications sur le design et l'accessibilité numérique."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>