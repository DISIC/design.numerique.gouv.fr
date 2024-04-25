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
            <a class="fr-breadcrumb__link" aria-current="page">Diagnostic flash</a>
          </li>
        </ol>
      </nav>

      <h1>Diagnostic flash</h1>
      <p class="fr-text--lead">Le <strong>diagnostic flash</strong> permet d’estimer de manière <strong>rapide et partielle</strong> l’accessibilité et la qualité d’un site ou d’un service en ligne, sans avoir d’expertise particulière.</p>
      <div class="fr-callout fr-callout--purple-glycine fr-mt-4w">
        <p class="fr-callout__text">Il est inutile de faire un audit de conformité RGAA tant que tous ces critères ne sont pas respectés.</p></div>
      <p>Ces tests sont très simples à réaliser et peuvent être intégrés à toutes les phases de tests, de recettes ou de validations fonctionnelles et techniques.</p>

      <div class="quick-test">
        <section :class="'cat'+cat.node.id" v-for="cat in $page.allDiagFlashCat.edges"  >
            <h2 class="fr-my-6w"> {{ cat.node.title }}</h2>
            <ul class="fr-accordions-group">
              <li  class="fr-accordion" v-for="(criterion, index) in $page.allDiagFlashCriterion.edges.filter(edge => edge.node.cat.id === cat.node.id)">
                <h3 class="fr-accordion__title"><!--span class="numero">{{ criterion.node.id }}</span-->
                  <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="criterion.node.id">
                     <span>{{ criterion.node.title }} </span> 
                  </button>
                </h3>
                <div class="fr-collapse" :id="criterion.node.id">
                  <div class="fr-accordion__inner">
                    <div v-html="criterion.node.content" />
                    <div class="dg-criteres fr-my-2w" v-if="criterion.node.rgaaStr.length">
                      <h4><span v-if="criterion.node.rgaaStr.length == 1">Critère <abbr title="Référentiel général d’amélioration de l’accessibilité" >RGAA</abbr> concerné</span><span v-else-if="criterion.node.rgaa.length > 1">Critères <abbr title="Référentiel général d’amélioration de l’accessibilité" >RGAA</abbr> concernés</span></h4>
                      <ul>
                        <li class="fr-tag"  v-for="(critere, index) in criterion.node.rgaaStr">
                             <g-link target="_blank" rel="noopener, noreferrer" :title="'Critère ' + critere + ' - nouvelle fenêtre'"  :to="'https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests#' + critere">{{ critere }} <span class="sr-only">nouvelle fenêtre</span></g-link>
                        </li>
                      </ul>
                    </div>
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
          rgaa
          rgaaStr
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
      content: "Le diagnostic flash est destiné à toute personne souhaitant avoir un premier aperçu sur la qualité et l’accessibilité d’un site web."
    },
    {
      property: 'og:title',
      content: "Diagnostic flash - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Le diagnostic flash est destiné à toute personne souhaitant avoir un premier aperçu sur la qualité et l’accessibilité d’un site web."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>

<style lang="scss" scoped>
  .dg-criteres {
    ul {
      li {
        display: inline-flex;
        margin-right: 1em;
        margin-bottom: 1em;
        a {
        }
      }
    }
  }
</style>
