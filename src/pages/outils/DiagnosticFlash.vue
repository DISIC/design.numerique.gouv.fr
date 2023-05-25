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
            <span aria-current="page">Diagnostic flash</span>
          </li>
        </ol>
      </nav>

      <h1>Diagnostic flash</h1>
      <p class="fr-text--lead">Le diagnostic flash permet d’estimer de manière partielle l’accessibilité et la qualité d’un site ou d’un service en ligne, sans avoir d’expertise particulière et en n’y consacrant que peu de temps.</p>
      <p>Ces tests sont très simples à réaliser et peuvent être intégrés à toutes les phases de tests, de recettes ou de validation fonctionnelle et technique.</p>


      <div class="quick-test">
        <section :class="'cat'+cat.node.id" v-for="cat in $page.allDiagFlashCat.edges"  >
            <h2 class="fr-my-6w"> {{ cat.node.title }}</h2>
            <ul class="fr-accordions-group">
              <li  class="fr-accordion" v-for="(criterion, index) in $page.allDiagFlashCriterion.edges.filter(edge => edge.node.cat.id === cat.node.id)">
                <h3 class="fr-accordion__title"><!--span class="numero">{{ criterion.node.id }}</span-->
                  <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="criterion.node.id">
                     {{ criterion.node.title }}  <span v-if="criterion.node.tag" class="fr-mr-1w fr-badge fr-badge--green-bourgeon"> {{ criterion.node.tag }}</span> 
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

      <div class="fr-mt-8w">
        <p><em>Nota bene</em> : le diagnostic flash nécessite l’installation de deux extensions de navigateur - très utiles de manière générale 🙂 :</p>
        <ul>
          <li>HeadingsMap (symbolisée par le pictogramme <strong>[h/]</strong>)
            <ul>
              <li><a href="https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi" target="_blank" title="Extension pour Chrome - nouvelle fenêtre">Extension pour Chrome</a></li>
              <li><a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" target="_blank" title="Extension pour Firefox - nouvelle fenêtre">Extension pour Firefox</a></li>
              <li><a href="https://microsoftedge.microsoft.com/addons/detail/headingsmap/bokekiiaddinealohkmhjcgfanndmcgo"  target="_blank" title="Extension pour Edge - nouvelle fenêtre">Extension pour Edge</a></li>
            </ul>
          </li>
          <li>Contrast Checker (symbolisée par une roue multicolore)
            <ul>
              <li><a href="https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf" target="_blank" title="Extension pour Chrome - nouvelle fenêtre">Extension pour Chrome</a></li>
              <li><a href="https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/" target="_blank" title="Extension pour Firefox - nouvelle fenêtre">Extension pour Firefox</a></li>
              <li><a href="https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp"  target="_blank" title="Extension pour Edge - nouvelle fenêtre">Extension pour Edge</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </Layout>
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
    title: "Diagnostic flash",
    meta: [{
      name: "description",
      content: "Le diagnostic flash est destiné à toute personne souhaitant avoir un premier aperçu sur la qualité, l’accessibilité et le design d’un site."
    },
    {
      property: 'og:title',
      content: "Diagnostic flash - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Le diagnostic flash est destiné à toute personne souhaitant avoir un premier aperçu sur la qualité, l’accessibilité et le design d’un site."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>
