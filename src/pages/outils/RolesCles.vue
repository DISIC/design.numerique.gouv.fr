<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/outils/"  class="fr-breadcrumb__link">Outils</g-link>
          </li>
          <li>
            <a  class="fr-breadcrumb__link" aria-current="page">Rôles clés</a>
          </li>  
        </ol>
      </nav>

      <h1>Rôles clés</span></h1>
      <p class="fr-text--lead">Les actions et les outils pour bien prendre en compte l’accessibilité dans vos projets numériques.</p>
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-accordions-group">
      
          <div class="fr-col-12" v-for="{ node } in $page.allRole.edges" :key="node.id">      
            <section class="fr-accordion">
              <h2 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" :aria-controls="node.id">
                <span class="dg-flex dg-flex--align-center">
                  <span class="fr-mt-0 fr-mr-2w dg-picto dg-picto">
                    <img svg-inline src="../../assets/images/design-picto.svg" class="fr-responsive-img" aria-hidden="true">
                  </span>
                  {{ node.title }}
                    <span v-if="node.cat" class="fr-mx-2w fr-badge fr-badge--green-bourgeon">{{node.cat}}</span>
                  </span>                
                </button>
              </h2>
              <div class="fr-collapse" :id="node.id"  v-html="node.content">
              </div>
            </section>
          </div>
        </div>
      </div>   

    </div>
  </Layout>
</template>


<page-query>
  query {
    allRole (sort: [{ by: "cat", order: DESC }, { by: "title", order: ASC }]) {
      edges {
        node {
        	id
          title
          order
          description
          cat
          path
          content
        }
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
        title: "Rôles clés",
        meta: [{
          name: "description",
          content: "Découvrez votre rôle pour la mise en oeuvre de l’accessibilité numérique."
        },
        {
          property: "og:title",
          content: "Rôles clés - DesignGouv"
        },
        {
          property: "og:description",
          content: "Découvrez votre rôle pour la mise en oeuvre de l’accessibilité numérique"
        },
        {
          property: "og:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
        }],
      }
    }
</script>
<style scoped>
button.fr-accordion__btn svg { 
margin-right: 1em;
  }

</style>