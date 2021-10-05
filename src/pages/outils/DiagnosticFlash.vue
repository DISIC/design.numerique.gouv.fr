<template>
  <Layout class="outils-page">

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

  <div class="cover web-only">
    <div class="cover__container">
      <h1 class="text-highlight"></h1>
      <p class="cover__subtitle">Le diagnostic flash permet d’estimer de manière partielle la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne d’une administration publique, sans avoir d’expertise particulière et en n’y consacrant que peu de temps.</p>
    </div>
  </div>

  <div class="content">
    <section class="fr-mb-8w">
    <h2>Comment l’utiliser ?</h2>
    <p>Le <strong>diagnostic flash</strong> se fait sur une ou plusieurs pages en une à deux heures. Deux solutions sont proposées :</p>
    <ul>
      <li>Imprimer cette page qui devient une check-list et tient sur une feuille A4 recto verso.</li>
      <li>Saisir le résultat dans <a href="/assets/doc/diagnostic-flash.ods" title="le tableur (format ods - 43Ko) - À télécharger" target="_blank" download rel="noreferrer noopener">le tableur (ods - 43Ko)</a> qui délivre une note.</li>
    </ul>
    </section>
    <div class="quick-test">
      <section :class="'cat'+cat.node.id" v-for="cat in $page.allDiagFlashCat.edges"  >
          <h2> {{ cat.node.title }}</h2>
          <ul class="fr-accordions-group">
            <li  class="fr-accordion" v-for="(criterion, index) in $page.allDiagFlashCriterion.edges.filter(edge => edge.node.cat.id === cat.node.id)">
              <h3 class="fr-accordion__title"><span class="numero">{{ criterion.node.id }}</span>
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
  <div class="content web-only">
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
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page {

    .guide {
      margin-bottom: 4rem !important;
      padding: 1rem 3rem;
      
      &-title {
        margin: 0;
      }
    }

    .fr-accordion__btn {
      padding: .75rem 0 .75rem 3rem;
      box-sizing: border-box;

      &:hover {
        background-image: none !important;
      }
    }

    .fr-accordion__inner {
      background-color:var(--g200);
      padding: 1rem 2rem;
    }

    span.numero {
      padding:0.25rem;
      background-color: $light;
      position: absolute;
      width: 1.6em;
      text-align: center;
      box-sizing: content-box;
    }

    @media print {
      .fr-collapse, .guide {
        display: none;
      }
      .fr-accordion .fr-accordion__btn {

        &::before {
          visibility: hidden;
        } 
        &::after { 
          display: inline-table;
          content: "";
          width: 14pt;
          height: 14pt;
          margin-right: 8pt;
          border: 1pt solid #004774;
          vertical-align: middle;
        }
      }
    }
  }

</style>
