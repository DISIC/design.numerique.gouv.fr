<template>
  <Layout class="outils-page">

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li>
        <g-link to="/">Accueil</g-link>
      </li>
      <li>
        <g-link to="/outils/">Outils</g-link>
      </li>
      <li>
        <span aria-current="page">Diagnostic flash</span>
      </li>
    </ol>
  </nav>

  <div class="cover">
    <div class="cover__container">
      <h1 class="text-highlight">Diagnostic flash</h1>
      <p class="cover__subtitle">Le diagnostic flash permet d’estimer de manière partielle la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne d’une administration publique, sans avoir d’expertise particulière et en n’y consacrant que peu de temps.</p>

    </div>
  </div>

  <div class="content">
    <div class="rf-accordion rf-callout guide">
      <button class="rf-accordion__title rf-accordion__btn rf-accordion__btn--icon-right" aria-expanded="false" aria-controls="rf-accordion-0">
        <h2 class="guide-title">Comment l’utiliser ?</h2>
      </button>
      <div class="rf-collapse" id="rf-accordion-0">
        <div class="rf-accordion__inner">
          <p>Le diagnostic se fait sur un échantillon de pages incluant au minimum :</p>
          <ul>
          <li>la page d’accueil</li>
          <li>une page de formulaire si elle existe</li>
          <li>une page avec des fichiers en téléchargement si elle existe</li>
          <li>une page de contenu, la plus riche possible (préférer la présence d’images, d’infographies, de vidéos, de titres et sous-titres plutôt qu’une page de texte seul)</li>
          </ul>
          <p>Pour chaque critère et sur la base de son échantillon, le testeur décide si :</p>
          <ul>
          <li> 🤩 Le critère est parfaitement rempli;</li>
          <li> 😐 Le critère n’est pas totalement rempli, mais dans l’ensemble il est plutôt respecté même s’il reste quelques aspects à corriger;</li>
          <li> 🙁 Le critère n’est pas rempli et si, ça et là, des choses conviennent, c’est un peu par hasard;</li>
          <li> ✖ Le site ou la démarche n’est pas concerné par le critère.</li>
          </ul>
          
          <p>Le résultat peut être saisi dans <a href="/assets/doc/diagnostic-flash.ods" title="le tableur dédié (format ods - 43Ko) - nouvelle fenêtre" target="_blank"  rel="noreferrer noopener">le tableur (ods - 43Ko)</a> qui délivre une note.</p>

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
    </div>
    <div class="quick-test">
      <section v-for="cat in $page.allDiagFlashCat.edges"  >
          <h2> {{ cat.node.title }}</h2>
          <ul class="rf-accordions-group">
            <li  class="rf-accordion" v-for="(criterion, index) in $page.allDiagFlashCriterion.edges.filter(edge => edge.node.cat.id === cat.node.id)">
              <h3 class="rf-accordion__title"><span class="numero">{{ criterion.node.id }}</span>
                <button class=" rf-accordion__btn" aria-expanded="false" :aria-controls="criterion.node.id">
                   {{ criterion.node.title }}
                </button>
              </h3>
              <div class="rf-collapse" :id="criterion.node.id">
                <div class="rf-accordion__inner">
                  <div v-html="criterion.node.content" />
                </div>
              </div>
            </li>
          </ul>
      </section>
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
      content: "Le diagnostic flash est destiné à tout personne souhaitant avoir un premier aperçu sur la qualité, l’accessibilité et le design d’un site."
    }
    ],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page{

    .guide {
      padding: 1rem 2rem !important;
      margin-bottom: 4rem !important;

      &-title {
        margin: 0;
      }
    }

    .rf-accordion__inner {
      background-color:var(--g200);
      padding: 1rem 2rem;
    }
    .rf-accordion .rf-accordion__btn {
      padding: 0.75rem 0 0.75rem 3rem
    }
    span.numero {
      padding:0.25rem;
      background-color: $light;
      position: absolute;
      width: 1.6em;
      text-align: center;
    }

    @media print {
      .rf-collapse, .guide {
        display: none;
      }
      .rf-accordion .rf-accordion__btn {

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
