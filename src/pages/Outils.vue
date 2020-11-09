<template>
  <Layout class="outils-page">

     <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Les outils</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <h1><Formations class="h1__icon" focusable="false" aria-hidden="true"/>Les <span  class="highlight">supers</span> outils</h1>

      <p class="cover__subtitle">De nombreuses outils sont déjà disponibles, certains en cours de développement, d'autres à imaginer... Des outils pour améliorer l'accessibilité par le design.</p>

      <outilsIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

    <div class="content">

      <section>
        <h2>Tech</h2>
        <ul>
          <li>Le <a href="" target="_blank">Design system de l'État</a> est un ensemble de composants réutilisables, guidé par des standards et une gouvernance, pouvant être assemblés pour construire plusieurs sites internet.</li>
          <li>La <a href="http://pidila.gitlab.io/developpement/shortlist.html" target="_blank">shortlist du développeur</a> regroupe les tests et vérifications rapides à faire soi-même avant de livrer son travail.</li>
          <li>Les <a href="" target="_blank">tests automatiques</a> a mettre en place dans l‘usine de développement.</li>
        </ul>

         <h2>Méthode</h2>
        <ul>
         
          <li>La <a href="" target="_blank">Checklist Pidila</a> regroupe les critères des différents référentiels et bonnes pratiques du web.</li>
          <li>L‘<a href="" target="_blank">évaluation rapide</a> : Avant de lancer un audit complet, il est intéressant qu'un chef de produit ou de projet puisse réaliser lui-même une évaluation rapide de la qualité au regard de la checklist Pidila d'un site ou d'une livraison de pages pour s'en faire une première idée.</li>
          <li>Les nombreux <a href="http://references.modernisation.gouv.fr/ressources#ancre2](http://references.modernisation.gouv.fr/ressources#ancre2" target="_blank">Guides méthodologiques RGAA </a> : Plus de 40 ressources et outils autour du référentiel général d'accessibilité pour les administrations (RGAA 3) ont été réalisés par la direction interministérielle du numérique (DINUM) avec le soutien du fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP).</li>
          <li>L‘audit rapide permet à moindre coût d‘apprécier l‘accessibilité d‘un site et la matûtoté d‘une équipe</li>
        </ul>  
 

      </section>


    </div>

  </Layout>
</template>


<script>

  import outilsIllustration from "~/assets/images/outilsIllustration.svg"

  export default {
    components: {
      Formations,
      outilsIllustration
    },
    metaInfo: {
      title: "Les outils de design de l'accessibilté - DesignGouv",
      meta: [{
        name: 'description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:title',
        content: "Les formations au design numérique et à l'accessibilté - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:image',
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page {

    li {
      list-style-type: none;
    }

    a {
      font-weight: bold;

      svg {
        padding-right: 12px;
        transition: .1s all;
      }

      &:hover {
        svg {
          padding-left: 8px;
          padding-right: 4px;
        }
      }
    }
  }

</style>
