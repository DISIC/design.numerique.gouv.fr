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
      <p class="cover__subtitle">Le diagnostic flash est destiné à tout personne souhaitant avoir un premier aperçu, même très partiel, sur la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne d’une administration publique, sans avoir d’expertise particulière et en n’y consacrant que peu de temps. Il permet également de s’approprier progressivement les différentes problématiques avec des exemples concrets.</p>
    </div>
  </div>

  <div class="content">
    <p>Le diagnostic flash est construit sur un ensemble de critères, qui sont autant de bonnes pratiques, de critères d’accessibilité et d’obligations pour les sites publics. Ils ont deux caractéristiques :</p>
    <ol>
    <li>ils sont importants</li>
    <li>ils peuvent être contrôlés par n’importe qui</li>
    </ol> 
    <p>Par conséquent, il ne s’agit que des symptômes les plus visibles qui, s’ils sont présents, permettent de s’interroger sur des problèmes plus profonds. Ainsi, si ce diagnostic ne permet de connaître ni la qualité ni l’accessibilité d’un site dans son ensemble, il constitue une première approche sur la maturité de l’équipe et sur les premières actions à engager : sensibilisation, formation, accompagnement, organisation, victoires rapides pour améliorer le site... </p>
    <p>C’est un constat partagé sur lequel construire une <strong>démarche d’amélioration</strong>.</p>
    <div class="rf-accordion rf-callout">      
      <button class="rf-accordion__title rf-accordion__btn" aria-expanded="false" aria-controls="rf-accordion-0">
        <h2>Comment ça marche ?</h2>
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
          <p>Il saisit son appréciation dans le tableur dédié [à produire] et obtient le résultat du diagnostic.</p>
          <p><em>Nota bene</em> : le diagnostic flash nécessite l’installation de deux extensions de navigateur - très utiles de manière générale 🙂 :</p>
          <ul>
            <li>HeadingsMap (symbolisé par le pictogramme <h/>)</li>
            <li>Contrast Checker (symbolisée par une roue multicolore)</li>
          </ul>
        </div>
      </div>
    </div>
<div class="quick-test">
<section v-for="cat in $page.allDiagFlashCat.edges"  >
    <h2> {{ cat.node.title }}</h2>
    <ul class="rf-accordions-group">
      <li  class="rf-accordion" v-for="step in $page.allDiagFlashCriterion.edges" >  
        
        <h3 class="rf-accordion__title">
          <button class="rf-accordion__btn" aria-expanded="false" :aria-controls="step.node.id">
            {{ step.node.id }}. {{ step.node.title }} 
          </button>
        </h3>
        <div class="rf-collapse" :id="step.node.id">       
          <div class="rf-accordion__inner">
            <p style="text-align: right;" ><span style="padding:0.2em; color: white; background-color: hotpink;">{{ step.node.cat }}</span></p>
            <div v-html="step.node.content" />
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
      name: 'description',
      content: "Le diagnostic flash est destiné à tout personne souhaitant avoir un premier aperçu sur la qualité, l’accessibilité et le design d’un site."
    }],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page .rf-callout {
    padding: 0 1rem;
    .rf-accordion__btn{
      width: 95%;
    }
  }

      .rf-accordion__inner{
        background-color:var(--g200);
        padding:1rem 2rem;
      }

</style>
