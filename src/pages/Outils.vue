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

      <p class="cover__subtitle">Une sélection d’outils faits maison pour vous accompagner dans l’amélioration de l’accessibilité et du design de vos sites et applications web.</p>

      </div>
    </div>

    <div class="content">

      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Tech</h2>
        <ul>
          <li>La <a href="checklist-dev">Checklist dev</a> regroupe les tests et vérifications rapides à faire soi-même avant de livrer son travail.</li>
          <li>Le <a href="memo-dev">Mémo dev</a> regroupe sur une seule et même page les points d’attention et les liens vers les ressources adéquates.</li>
        </ul>
      </section>

      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Méthode</h2>
        <ul>
          <li>Le <a href="/accessibilite-numerique/jeu-de-oaa/">Jeu de l’organisation de l’amélioration de l’accessibilité (OAA)</a> vous guide dans la mise en accessibilité de votre service numérique.</li>
          <li>Le <a href="diagnostic-flash">Diagnostic flash</a> permet d’estimer de manière partielle la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne, sans avoir d’expertise particulière et en n’y consacrant que peu de temps.</li>
          <li>Les nombreux <a href="https://github.com/DISIC?q=guide+RGAA" target="_blank" rel="noreferrer noopener">Guides méthodologiques RGAA </a> : Plus de 40 ressources et outils autour du référentiel général d’accessibilité pour les administrations (RGAA 3) ont été réalisés par la direction interministérielle du numérique (DINUM) avec le soutien du fonds pour l’insertion des personnes handicapées dans la fonction publique (FIPHFP).</li>
          <li>L’<a href="audit-rapide">Audit rapide</a> permet à moindre coût d’apprécier l’accessibilité d’un site et la maturité d’une équipe</li>
          <li>La <a href="https://pidila.gitlab.io/checklist-pidila/" target="_blank" rel="noreferrer noopener">Checklist Pidila</a> regroupe les critères des différents référentiels et bonnes pratiques du web.</li>
        </ul>
      </section>
      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Obligations légales</h2>
        <ul>
          <li>Un <a href="/outils/exemple-declaration-accessibilite/">Exemple de déclaration d’accessibilité</a> prêt à remplir.</li>
          <li>Le <a href="https://betagouv.github.io/a11y-generateur-declaration/" title="Générateur de déclaration d’accessibilité - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Générateur de déclaration d’accessibilité</a> produit par <a target="_blank" title="BetaGouv - nouvelle fenêtre" href="https://beta.gouv.fr">BetaGouv</a>.</li>
        </ul>
      </section>
      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Tests usagers en situation de handicap</h2>
        <p>Pour tester les sites et applications web publics, la DINUM a rassemblé un groupe d’utilisateurs handicapés, notamment non-voyants et mal-voyants, handicapés cognitifs et handicapés moteurs.</p>
        <p>Ces utilisateurs ne sont pas des experts en accessibilité mais ont pour point commun d’avoir l’habitude de naviguer sur internet et de posséder à titre professionnel ou personnel les matériels et logiciels nécessaires.</p>
        <p>Ces tests ne remplacent pas ceux effectués par des experts en accessibilité : ils ne permettent pas de garantir la conformité avec le RGAA. En revanche, ils sont extrêmement utiles pour trouver, corriger et illustrer concrètement les éventuels problèmes d’accessibilité et de design ; ils permettent aussi de comprendre quels impacts réels, concrets, ont sur les usagers le non-respect des exigences légales.</p>
        <p>Les demandes de tests doivent être adressées par mail à <strong>jamshid.kohandel@modernisation.gouv.fr</strong>.</p>
      </section>
      <section>
        <h2><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Le système de design de l’État</h2>
        <p>Le <a href="https://systeme-de-design.gouv.fr/" title="Système de design de l‘État - nouvelle fenêtre" target="_blank">Système de design de l’État</a> assure une cohérence graphique et une meilleure expérience utilisateur sur les sites et applications web de l’État.</p>
        <p>Il propose :</p>
        <ul>
          <li>les éléments de base : couleurs, typographies, grilles et icônes ;</li>
          <li>une librairie de composants disponible au format Sketch et Figma ;</li>
          <li>un ensemble de composants HTML/CSS <strong>conformes au <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr></strong> ;</li>
          <li>une communauté active de designers et de développeurs.</li>
        </ul>
      </section>

  
      <p>Vous pouvez proposer de nouveaux outils, méthodes ou autres bonnes idées, <a target="_blank" title="Créer une demande sur le dépôt de notre site - nouvelle fenêtre" href="https://github.com/DISIC/design.numerique.gouv.fr/issues">en créant une <em>issue</em> sur le dépôt de notre site</a>.</p>
    </div>

  </Layout>
</template>


<script>

  import Outils from "~/assets/images/outils.svg"

  export default {
    components: {
      Outils,
    },
    metaInfo: {
      title: "Les outils de design de l’accessibilité",
      meta: [{
        name: 'description',
        content: "Découvrez les outils pour designer et développer des services numériques accessibles et conformes au RGAA."
      },
      {
        property: 'og:title',
        content: "Les outils de design de l’accessibilité - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les outils pour designer et développer des services numériques accessibles et conformes au RGAA."
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
