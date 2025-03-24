<template>
  <Layout>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/design-numerique/" class="fr-breadcrumb__link">Design</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Étapes clées</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Les étapes clées de la conception</h1>
        <p class="fr-text--lead">Prendre en compte les utilisateurs et
          utilisatrices d'un service numérique au cours de sa conception
          nécéssite de faire appel aux <strong>bonnes expertises</strong> pour mettre en œuvre
          les <strong>bonnes méthodes</strong> aux <strong>bons moments</strong>. Suivez le guide !</p>
      </div>
    </section>

    <section class="dg-content">

      <div class="fr-notice fr-notice--info fr-mb-4w">
          <div class="fr-container">
              <div class="fr-notice__body">
                  <p>
                      <span class="fr-notice__title">Nos recommandations illustrent l'ensemble des étapes indispensables. </span>
                      <span class="fr-notice__desc">Chaque projet étant spécifique, il sera nécéssaire d'adapter ce cadre à votre contexte. <strong>N'improvisez pas</strong>, faîtes appel aux experts de ces métiers !</span>
                  </p>
                  <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" id="button-1299" class="fr-btn--close fr-btn">Masquer le message</button>
              </div>
          </div>
      </div>

      <div>
        <p class="fr-mb-0"><strong>Légende des expertises mobilisées :</strong></p>
        <ul class="dg-list-no-decoration">
          <li><span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron">design</span> : designer, designer UX/UI ou designer produit</li>
          <li><span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron">recherche utilisateur</span> : chargé de recherche utilisateur</li>
          <li><span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron">contenu</span> : designer de contenu</li>
          <li><span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron">seo</span> : chargé de référencement naturel</li>
          <li><span class="fr-ml-4w fr-badge fr-badge--sm fr-badge--pink-macaron">données</span> : chargé d'analyse des données d'utilisation</li>
        </ul>
      </div>

      <div class="fr-grid-row fr-grid-row--center fr-mt-4w">
        <ol class="fr-accordions-group">

          <il class="fr-col-12" v-for="{ node } in $page.allEtapes.edges" :key="node.id">
            <section class="fr-accordion">
              <h2 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" :aria-controls="node.id">
                <span class="dg-text-with-picto">
                  <strong class="dg-picto dg-picto--xs fr-mr-3v">{{ node.order }}</strong>
                  {{ node.title }}
                  <span v-for=" c in node.cat" :key="c.id" class="fr-ml-1w fr-badge fr-badge--sm fr-badge--pink-macaron">{{c}}</span>
                  </span>
                </button>
              </h2>
              <div class="fr-collapse dg-content dg-content--sm" :id="node.id">
                <div class="fr-callout">
                    <p class="fr-callout__text">{{ node.description }}</p>
                </div>
                <div v-html="node.content"></div>
              </div>
            </section>
          </il>

        </ol>
      </div>

    </section>

  </Layout>
</template>


<page-query>
  query {
    allEtapes (sort: { by: "order", order: ASC }) {
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
        title: "Étapes clées",
        meta: [{
          name: "description",
          content: "Les étapes clées de la conception d'un services numérique"
        },
        {
          property: "og:title",
          content: "Étapes clées - DesignGouv"
        },
        {
          property: "og:description",
          content: "Les étapes clées de la conception d'un services numérique"
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
