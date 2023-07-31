<template>
  <Exercise>
    <div class="dg-cover dg-cover--linear">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a aria-current="page" class="fr-breadcrumb__link">Atelier a11é</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Liste des critères</h1>
        <p class="fr-text--lead">
          Dans cet atelier, nous allons tester une liste réduite de critères.
        </p>
      </div>
    </div>

    <div class="dg-content fr-px-2w fr-mb-12w">
        <section :class="'cat'+cat.node.id" v-for="cat in $page.allDiagFlashCat.edges"  >
            <h2 v-if="cat.node.id <4" class="fr-my-6w"> {{ cat.node.title }}</h2>
            <ul class="fr-accordions-group">
              <li  v-if="criterion.node.tag == 'A11É'" class="fr-accordion" v-for="(criterion, index) in $page.allDiagFlashCriterion.edges.filter(edge => edge.node.cat.id === cat.node.id)">
                <h3 class="fr-accordion__title"><!--span class="numero">{{ criterion.node.id }}</span-->
                  <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="criterion.node.id">
                    {{ criterion.node.title }} 
                  </button>
                </h3>
                <div class="fr-collapse" :id="criterion.node.id">
                  <div class="fr-accordion__inner">
                    <div v-html="criterion.node.content" />
                  </div>
                </div>
              </li>
            </ul>
        </section>
    </div>
  </Exercise>
</template>


<page-query>
  query {
    allDiagFlashCat (sortBy: "id", order: ASC) {
      edges {
        node {
          id
          title
        }
      }
    },
    allDiagFlashCriterion(sort: [ { by: "id", order: ASC }]) {
      edges {
        node {
          id
          title
          tag
          content
          cat {
            id
          }
        }
      }
    }
  }
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Liste des critères',
    meta: [
      {
        name: 'description',
        content: 'Exercice d’audit et de mise en conformité RGAA',
      },
    ],
  },
};
</script>


