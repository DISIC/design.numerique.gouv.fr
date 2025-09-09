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
    <div :class="'cat'+cat.node.id" v-for="cat in $page.allQrCat.edges"  >
      <h2 :id=cat.node.title class="fr-my-6w"> {{ cat.node.title }}</h2>
      <div class="fr-accordions-group" data-fr-group="true">
        <section  class="fr-accordion" v-for="(qr, index) in $page.allQr.edges.filter(edge => edge.node.cat.id === cat.node.id)">
          <h3 class="fr-accordion__title"><!--span class="numero">{{ criterion.node.id }}</span-->
            <button type="button" class="fr-accordion__btn" aria-expanded="false"  :aria-controls="qr.node.id">{{ qr.node.title }}  <span v-if="qr.node.tag" class="fr-mx-2w fr-badge fr-badge--green-bourgeon">{{qr.node.tag}}</span></button> 
          </h3>
          <div class="fr-collapse" :id="qr.node.id">
            <div class="fr-accordion__inner">
              <div v-html="qr.node.content" />
            </div>
          </div>  
        </section>       
      </div>
    </div>           
  </div>
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
          id
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