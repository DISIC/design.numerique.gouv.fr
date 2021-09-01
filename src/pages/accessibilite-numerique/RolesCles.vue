<template>
  <Layout class="roles-cles-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol>
          <li>
            <g-link to="/">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
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
      <div class="rf-grid-row rf-grid-row--gutters">
        <div class="rf-col-12 rf-col-sm-6 rf-col-lg-4" v-for="{ node } in $page.allRole.edges" :key="node.id">
            <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
                <div class="rf-tile__body">
                    <h2 class="rf-tile__title">
                      <g-link  class="rf-tile__link" :to="node.path">
                        {{ node.title }}
                      </g-link>
                    </h2>
                    <p class="rf-tile__desc">{{ node.description }}</p>
                    <!-- p class="rf-tag">{{ node.cat }}</p -->
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

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .roles-cles-page {
    h2 {
      &.rf-tile__title {
        margin:0 auto;
      }
      a {
        border-bottom: none !important;
      }
    }
  }
</style>
