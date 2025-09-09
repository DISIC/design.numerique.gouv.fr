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









      <section :class="'cat'+cat.node.id" v-for="cat in $page.allQrCat.edges"  >
            <h2 class="fr-my-6w"> {{ cat.node.title }}</h2>
              <div  class="fr-accordion" v-for="(qr, index) in $page.allQr.edges.filter(edge => edge.node.cat.id === cat.node.id)">
                <h3 class="fr-accordion__title"><!--span class="numero">{{ criterion.node.id }}</span-->
                       <span>{{ qr.node.title }} </span> 
                 </h3>
              </div>
      </section>           

      

       




      </div>   

    </div>
  </Layout>
</template>


<page-query>
  query {
    allQrCat (sortBy: "id", order: ASC) {
      edges {
        node {
          id
          title
        }
      }
    },
    allQr (sort: [{ by: "order", order: ASC }, { by: "title", order: ASC }]) {
      edges {
        node {
          title
          order
          cat {
            id
          }
          tag
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
          content: "À DesignGouv, on a fait le point sur plusieurs questions qu’on nous pose régulièrement et qui nous semblent importantes, ainsi que sur les questions qu’on nous pose rarement alors qu’elles nous semblent importantes. On vous partage nos réponses"
        },
        {
          property: "og:title",
          content: "Questions - Réponses - DesignGouv"
        },
        {
          property: "og:description",
          content: "À DesignGouv, on a fait le point sur plusieurs questions qu’on nous pose régulièrement et qui nous semblent importantes, ainsi que sur les questions qu’on nous pose rarement alors qu’elles nous semblent importantes. On vous partage nos réponses"
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