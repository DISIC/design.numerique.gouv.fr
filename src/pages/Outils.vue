<template>
  <Layout class="outils-page">

     <!-- <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Outils</span>
        </li>
      </ol>
    </nav> -->

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Outils class="h1__icon" focusable="false" aria-hidden="true"/>Outils</h1>

      <p class="cover__subtitle">De nombreuses outils sont déjà disponibles, certains en cours de développement, d'autres à imaginer... <br>Des outils pour améliorer l'accessibilité par le design.</p>

      <OutilsIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

    <div class="content">

      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Tech</h2>
        <ul>
          <li>La <a href="checklist-dev">checklist dev</a> regroupe les tests et vérifications rapides à faire soi-même avant de livrer son travail.</li>
          <li>Le <a href="memo-dev">Mémo dev</a> regroupe sur une seule et même page les points d'attention et les liens vers les ressources adéquates.</li>
        </ul>
      </section>

      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Méthode</h2>
        <ul>
          <li>Le <a href="/accessibilite-numerique/jeu-de-oaa/">jeu de l'organisation de l’amélioration de l’accessibilité (OAA)</a> vous guide dans la mise en accessibilité de votre service numérique.</li>
          <li>Le <a href="diagnostic-flash">diagnostic flash</a> permet d’estimer de manière partielle la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne, sans avoir d’expertise particulière et en n’y consacrant que peu de temps.</li>
          <li>Les nombreux <a href="https://github.com/DISIC?q=guide+RGAA" target="_blank">Guides méthodologiques RGAA </a> : Plus de 40 ressources et outils autour du référentiel général d'accessibilité pour les administrations (RGAA 3) ont été réalisés par la direction interministérielle du numérique (DINUM) avec le soutien du fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP).</li>
          <li>L‘<a href="audit-rapide">audit rapide</a> permet à moindre coût d‘apprécier l‘accessibilité d‘un site et la maturité d‘une équipe</li>
          <li>La <a href="https://pidila.gitlab.io/checklist-pidila/" target="_blank">Checklist Pidila</a> regroupe les critères des différents référentiels et bonnes pratiques du web.</li>
        </ul>
      </section>
      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Obligations légales</h2>
        <ul>
          <li>Un <a href="/outils/exemple/">exemple de déclaration d’accessibilité</a> prêt à remplir.</li>
          <li>Le <a href="https://betagouv.github.io/a11y-generateur-declaration/" title="Générateur de déclaration d’accessibilité - Nouvelle fenêtre" target="_blank">générateur de déclaration d’accessibilité</a> produit par <a target="_blank" title="BetaGouv - nouvelle fenêtre" href="https://beta.gouv.fr">BetaGouv</a>.</li>
        </ul>
      </section>
      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Prochainement</h2>
        <ul>
          <li>Le Design system de l‘État est un ensemble de composants accessibles et réutilisables, guidé par des standards et une gouvernance, pouvant être assemblés pour construire plusieurs sites internet.</li>
        </ul>
      </section>

      <p>Vous pouvez proposer de nouveaux outils, méthodes ou autres bonnes idées, <a target="_blank" title="Créer une demande sur le dépôt de notre site - nouevlle fenêtre" href="https://github.com/DISIC/design.numerique.gouv.fr/issues">en créant une <em>issue</em> sur le dépôt de notre site</a>.</p>

    </div>

  </Layout>
</template>


<script>

  import Outils from "~/assets/images/outils.svg"
  import OutilsIllustration from "~/assets/images/outilsIllustration.svg"

  export default {
    components: {
      Outils,
      OutilsIllustration
    },
    metaInfo: {
      title: "Les outils de design de l'accessibilité",
      meta: [{
        name: 'description',
        content: "Découvrez les outils pour designer et développer des services numériques accessibles et conformes au RGAA."
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
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .outils-page {

    .content {

      .rf-accordion {
        margin-bottom: 0;
        list-style-type: none;
        border-bottom: none;
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
  }

</style>
