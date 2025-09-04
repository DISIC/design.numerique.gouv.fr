<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
          </li>
          <li>
            <a  class="fr-breadcrumb__link" aria-current="page">Questions - Réponses</a>
          </li>  
        </ol>
      </nav>

      <h1>Questions - Réponses</h1>
      <p class="fr-text--lead">À DesignGouv, on a fait le point sur plusieurs questions qu’on nous pose régulièrement et qui nous semblent importantes, ainsi que sur les questions qu’on nous pose rarement alors qu’elles nous semblent importantes. On vous partage nos réponses.</p>
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-accordions-group">
      
          <div class="fr-col-12" v-for="{ node } in $page.allQr.edges" :key="node.id">      
            <section class="fr-accordion">
              <h2 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" :aria-controls="node.id">
                <span class="dg-flex dg-flex--align-center">
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
    allQr (sort: [{ by: "order", order: ASC }, { by: "title", order: ASC }]) {
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
        title: "Questions - Réponses",
        meta: [{
          name: "description",
          content: ""
        },
        {
          property: "og:title",
          content: "Questions - Réponses - DesignGouv"
        },
        {
          property: "og:description",
          content: ""
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