<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Jeu de l'oie</span>
        </li>
      </ol>
    </nav>

   <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Jeu de l'oie</h1>

      </div>
    </div>

    <div class="content">

      <section class="">
        <div v-for="{ node } in $page.allGooseStep.edges" :key="node.id">
          <h2>{{ node.title }}</h2>
          <p>{{ node.duration }}</p>

          <div v-for="{ node } in $page.allGooseCard.edges.filter(edge => edge.node.step.id === node.id)" :key="node.id">
            <!-- <g-image :src="node.illustration" focusable="false" aria-hidden="true"/> -->
            <h3>{{ node.title }}</h3>
            <div v-html="node.content" />
          </div>

        </div>
      </section>

    </div>

  </Layout>
</template>


<script>

  import Accessibilite from "~/assets/images/accessibilite.svg"

  export default {
    components: {
      Accessibilite,
    },
    metaInfo: {
      title: "Jeu de l'oie - DesignGouv",
      meta: [{
        name: 'description',
        content: ""
      },
      {
        property: 'og:title',
        content: ""
      },
      {
        property: 'og:description',
        content: ""
      },
      {
        property: 'og:image',
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>


<page-query>

  query {
    allGooseStep (sortBy: "id", order: ASC) {
      edges {
        node {
          id
          title
          duration
        }
      }
    },
    allGooseCard (sortBy: "id", order: ASC) {
      edges {
        node {
          title
          content
          top250
          step {
            id
          }
        }
      }
    }
  }

</page-query>


<style lang="scss">

</style>
