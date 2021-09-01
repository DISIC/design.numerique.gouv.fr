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
      <p class="cover__subtitle">De nombreux outils sont déjà disponibles, certains en cours de développement, d’autres à imaginer… <br>Des outils pour améliorer l’accessibilité par le design.</p>

      </div>
    </div>

    <div class="content">

      <section>
        <h2 id="tech"><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Tech</h2>
        <ul>
          <li>la <a href="checklist-dev">checklist dev</a> regroupe les tests et vérifications rapides à faire soi-même avant de livrer son travail ;</li>
          <li>le <a href="memo-dev">mémo dev</a> regroupe sur une seule et même page les points d’attention pour <strong>les développeurs et les développeuses front</strong> ainsi que les liens vers les ressources adéquates ;</li>
          <li>le <a href="memo-design">mémo design</a> regroupe sur une seule et même page les points d’attention pour <strong>les designers</strong> ainsi que les liens vers les ressources adéquates.</li>
        </ul>
      </section>

      <section>
        <h2 id="methode"><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Méthode</h2>
        <ul>
          <li>le <a href="/accessibilite-numerique/jeu-de-oaa/">jeu de l’organisation de l’amélioration de l’accessibilité (OAA)</a> vous guide dans la mise en accessibilité de votre service numérique ;</li>
          <li>les <a href="/accessibilite-numerique/roles-cles/">fiches métiers</a> décrivent votre rôle, vos actions et vos outils ;</li>
          <li>le <a href="diagnostic-flash">diagnostic flash</a> permet d’estimer de manière partielle la qualité, l’accessibilité et le design d’un site ou d’une démarche en ligne, sans avoir d’expertise particulière et en n’y consacrant que peu de temps ;</li>
          <li>les nombreux <a href="https://github.com/DISIC?q=guide+RGAA" target="_blank" rel="noreferrer noopener">Guides méthodologiques RGAA </a> : Plus de 40 ressources et outils autour du référentiel général d’accessibilité pour les administrations (RGAA 3) ont été réalisés par la direction interministérielle du numérique (DINUM) avec le soutien du fonds pour l’insertion des personnes handicapées dans la fonction publique (FIPHFP) ;</li>
          <li>l‘<a href="audit-rapide">audit rapide</a> permet à moindre coût d‘apprécier l‘accessibilité d‘un site et la maturité d‘une équipe ;</li>
          <li>la <a href="https://pidila.gitlab.io/checklist-pidila/" target="_blank" rel="noreferrer noopener">Checklist Pidila</a> regroupe les critères des différents référentiels et bonnes pratiques du web.</li>
        </ul>
      </section>
      <section>
        <h2 id="declaration"><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Obligations légales</h2>
        <ul>
          <li>un <a href="/outils/exemple/">exemple de déclaration d’accessibilité</a> prêt à remplir ;</li>
          <li>le <a href="https://betagouv.github.io/a11y-generateur-declaration/" title="Générateur de déclaration d’accessibilité - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">générateur de déclaration d’accessibilité</a> produit par <a target="_blank" title="BetaGouv - nouvelle fenêtre" href="https://beta.gouv.fr">BetaGouv</a>.</li>
        </ul>
      </section>
      <section>
        <h2 id="tests"><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Tests usagers en situation de handicap</h2>
        <h3>Mode d’utilisation du groupe d’utilisateurs handicapés</h3>
        <p>La DINUM a créé un groupe d’utilisateurs handicapés pour tester l’accessibilité des sites et applications mobiles publics. Il inclut actuellement une trentaine d’utilisateurs, majoritairement handicapés visuels : non-voyants et mal voyants, une dizaine de personnes handicapées cognitives et quelques personnes handicapées mobiles. Mais il a vocation à accueillir un plus grand nombre d’internautes handicapés appartenant à toutes les catégories de personnes handicapées. Ces utilisateurs ne sont pas des experts en accessibilité, mais ont pour point commun d’avoir l’habitude de naviguer sur internet et de posséder à titre professionnel ou personnel les matériels et logiciels nécessaires à cette fin. Les tests ainsi effectués ne remplacent ni ceux réalisés à l’aide des logiciels de test, ni ceux réalisés par des professionnels experts en accessibilité. Ils  peuvent avoir, néanmoins, une grande utilité pour montrer le degré d’efficacité des publics concernés sur les sites et applications testés, d’une façon concrète, sans nécessairement se référer au taux de conformité à déterminer aux normes en vigueur.</p>
        <p>La demande de test doit être adressée par mail à <strong>jamshid.kohandel@modernisation.gouv.fr</strong>.</p> 
      </section>
      <section>
        <h2 id="dsfr"><Outils class="h2__icon" focusable="false" aria-hidden="true"/>Le système de design de l’État</h2>
        <p>Le <a href="https://systeme-de-design.gouv.fr/" title="système de design de l‘État - nouvelle fenêtre" target="_blank">système de design de l’État</a> assure une cohérence graphique et une meilleure expérience utilisateur sur les sites et applications web de l’État.</p>
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
