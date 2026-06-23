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
            <a class="fr-breadcrumb__link" aria-current="page"
              >Bonnes pratiques pour les formulaires</a
            >
          </li>
        </ol>
      </nav>

      <div class="fr-notice fr-notice--info fr-mt-2w fr-mb-4w">
        <div class="fr-container">
          <div class="fr-notice__body">
            <p>
              <span class="fr-notice__title"
                >Page en cours de construction<br
              /></span>
            </p>
          </div>
        </div>
      </div>

      <h1>Bonnes pratiques pour les formulaires</h1>
      <p class="fr-text--lead">
        Pour être accessible et inclusif au plus grand nombre, un bon formulaire
        doit respecter un ensemble de bonnes pratiques : 
      </p>

      <ul
        class="fr-grid-row fr-grid-row--gutters dg-list-no-decoration fr-mb-4w"
      >
        <li
          :class="'fr-col-md-4 fr-col-12 cat' + cat.node.id"
          v-for="cat in $page.allFormsCat.edges"
        >
          <div class="fr-card fr-enlarge-link fr-card--sm">
            <div class="fr-card__body">
              <div class="fr-card__content">
                <p class="fr-card__title fr-h6">
                  <a :href="'#cat' + cat.node.id" class="dg-link--no-icon">{{
                    cat.node.title
                  }}</a>
                </p>
                <p class="fr-card__desc" v-html="cat.node.content" />
                <!-- <div class="fr-card__end">
                  <ul v-if="cat.node.tags" class="fr-badges-group">
                    <li>
                      <p class="fr-badge fr-badge--sm fr-badge--pink-macaron">
                        {{ cat.node.tags }}
                      </p>
                    </li>
                  </ul>
                </div> -->
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- Lien tout déplier / tout replier ? -->

      <section
        :class="'cat' + cat.node.id"
        :id="'cat' + cat.node.id"
        v-for="cat in $page.allFormsCat.edges"
      >
        <h2 class="fr-my-6w">
          <span class="dg-flex dg-flex--align-center">
            <span
              class="fr-mt-0 fr-mr-2w dg-picto dg-picto--sm"
              aria-hidden="true"
            >
              {{ cat.node.emoji }}
            </span>
            {{ cat.node.title }}
          </span>
        </h2>

        <ul class="fr-accordions-group">
          <li
            class="fr-accordion"
            v-for="(
              criterion, index
            ) in $page.allFormsBestPractice.edges.filter(
              (edge) => edge.node.cat.id === cat.node.id,
            )"
          >
            <h3 class="fr-accordion__title">
              <button
                class="fr-accordion__btn"
                aria-expanded="false"
                :aria-controls="criterion.node.id"
              >
                <span>{{ criterion.node.title }}</span>
              </button>
            </h3>
            <div class="fr-collapse" :id="criterion.node.id">
              <div class="fr-accordion__inner">
                <div v-html="criterion.node.content" />
              </div>
            </div>
          </li>
        </ul>

        <div class="fr-grid-row fr-grid-row--right fr-my-2w">
          <a
            href="#main"
            target="_self"
            class="fr-link fr-icon-arrow-up-fill fr-link--icon-left"
            >Haut de page</a
          >
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allFormsCat (filter: { tags: { containsAny: ["general"] } }, sort: [ { by: "id", order: ASC }]) {
      edges {
        node {
          id
          title
          content
          emoji
          tags
        }
      }
    },
    allFormsBestPractice(sort: [ { by: "id", order: ASC }]) {
      edges {
        node {
          id
          title
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
    title: "Bonnes pratiques pour les formulaires",
    meta: [
      {
        name: "description",
        content: "TODO Desc",
      },
      {
        property: "og:title",
        content: "Bonnes pratiques pour les formulaires - DesignGouv",
      },
      {
        property: "og:description",
        content: "TODO Desc",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>
