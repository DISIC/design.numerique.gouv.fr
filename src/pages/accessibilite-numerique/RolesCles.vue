<template>
  <Layout class="roles-cles-page">
    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/"  class="fr-breadcrumb__link">Accessibilité</g-link>
        </li>
        <li aria-current="page">Rôles clés</li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
        <h1>Les <span  class="text-highlight">rôles clés</span></h1>
        <p class="cover__subtitle">Les actions et les outils pour bien prendre en compte l’accessibilité dans vos projets numériques.</p>
      </div>
    </div>

    <div class="content">
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-col-sm-6 fr-col-lg-4" v-for="{ node } in $page.allRole.edges" :key="node.id">
            <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                <div class="fr-tile__body">
                    <h2 class="fr-tile__title">
                      <g-link  class="fr-tile__link" :to="node.path">
                        {{ node.title }}
                      </g-link>
                    </h2>
                    <p class="fr-tile__desc">{{ node.description }}</p>
                    <!-- p class="fr-tag">{{ node.cat }}</p -->
                </div>
            </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

  query {
    allRole (sortBy: "cat", order: DESC) {
      edges {
        node {
        	id
          title
          cat
          description
          path
        }
      }
    }
  }

</page-query>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
  metaInfo: {
      title: "Les rôles clés",
      meta: [{
        name: "description",
        content: "Découvrez votre rôle pour la mise en oeuvre de l’accessibilité numérique."
      },
      {
        property: "og:title",
        content: "Les rôles clés - DesignGouv"
      },
      {
        property: "og:description",
        content: "Découvrez votre rôle pour la mise en oeuvre de l’accessibilité numérique"
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
        content: "Les rôles clés - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez votre rôle pour la mise en oeuvre de l'accessibilité numérique."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>
