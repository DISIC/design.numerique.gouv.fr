<template>
  <Layout class="digital-accessibility-page">

    <!-- <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Accessibilité</span>
        </li>
      </ol>
    </nav> -->

    <div class="cover">
      <div class="cover__container">
        <h1 class="text-highlight"><Accessibilite class="h1__icon" focusable="false" aria-hidden="true"/>Accessibilité numérique</h1>
        <p class="cover__subtitle">L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en situation de handicap.</p>
      </div>
    </div>

    <div class="content">
      <p>En France, les produits et services numériques sont souvent conçus sans prendre le temps de comprendre l’audience qu’ils servent, notamment les personnes en situation de handicap soit 12 millions de personnes en France.</p>
      <p>Les services non accessibles sont le fruit de parcours trop complexes et de lignes de code qui ne suivent pas les bonnes pratiques de développement web. Il est essentiel que designers &amp; developers soient formés à ces enjeux.</p>
      <p><strong>Depuis 2012, tous les sites publics doivent être accessibles et conformes à l’ensemble des critères du <abbr title="référentiel général d’amélioration de l’accessibilité">RGAA</abbr>.</strong> Et ainsi permettre  à tous les usagers un égal accès à leurs droits.</p>
    </div>


      <section>
        <h2>Comprendre</h2>
        <div class="grid-menu">
          <g-link to="/accessibilite-numerique/cadre-legal/" class="button button--blue">
            <font-awesome :icon="['fas', 'balance-scale']" height="16px"/>
            <span>Obligations légales et sanctions</span>
          </g-link>
          <g-link to="/accessibilite-numerique/RGAA/" class="button">
            <font-awesome :icon="['fas', 'clipboard-list']" height="16px"/>
            <span>RGAA</span>
          </g-link>
          <g-link to="/accessibilite-numerique/schema-pluriannuel" class="button">
            <font-awesome :icon="['far', 'file-alt']" height="16px"/>
            <span>Schéma pluriannuel</span>
          </g-link>
          <g-link to="/accessibilite-numerique/declaration-accessibilite" class="button">
            <font-awesome :icon="['far', 'file-alt']" height="16px"/>
            <span>Déclaration d’accessibilité</span>
          </g-link>
        </div>
      </section>

      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-callout rf-col-lg-8 rf-mt-8w rf-mb-8w">
          <h4 class="rf-callout__title">A11É ?</h4>
          <p class="rf-callout__text"><strong>A11É</strong> est une abbréviation pour accessibilité où <em>11</em> représente le nombre de lettres entre le <em>a</em> et le <em>é</em> du mot accessibilité. <br>On retrouve également cette abbréviation sous sa version anglaise : <strong>A11Y</strong>.</p>
        </div>
      </div>
      
      <section>
        <h2>Passer à l’action</h2>
        <p>Pour atteindre un taux de conformité de 100 %, rien de plus simple : il faut former vos équipes, intégrer l’accessibilité dès la phase de design et tout au long de la vie du projet. Et surtout <strong>avoir une volonté forte de rendre vos services accessibles à tous les usagers</strong>, partagée à tous les niveaux de la hierarchie.</p>

        <h3>Je souhaite faire un état des lieux</h3>
        <p>Si vous n’avez pas les ressources nécessaires en interne pour le faire, faites appel à l’<g-link to="/accessibilite-numerique/accord-cadre-dae">accord-cadre interministériel <abbr title="direction des achats de l’État">DAE</abbr></g-link> et sollicitez un expert pour effectuer un <strong>diagnostic rapide</strong>, des <strong>audits</strong> complets ou un <strong>accompagnement</strong> de vos équipes.</p>
        
        <h3>Je souhaite établir une déclaration d’accessibilité</h3>
        <p>C’est très simple. Vous pouvez utiliser le <g-link to="/outils/exemple/">modèle de déclaration</g-link>.</p>

        <h3>Je souhaite former mes équipes</h3>
        <p>Vous pouvez utiliser l’<g-link to="/accessibilite-numerique/accord-cadre-dae">accord-cadre interministériel <abbr title="direction des achats de l’État">DAE</abbr></g-link> pour <strong>former et sensibiliser</strong> vos équipes.</p> 
        <p>Le lot 2 prévoit des prestations de sensibilisation et de formations spécifiques :</p>
        <ul>
          <li>conception et développement</li>
          <li>ergonome</li>
          <li>rédaction de contenus éditoriaux accessibles</li>
          <li>auditeur RGAA</li>
        </ul>

        <h3>Dans tous les cas, utilisez le <g-link to="/accessibilite-numerique/jeu-de-oaa">jeu de l’<abbr title="organisation de l’amélioration de l’accessiblité">oaa</abbr></g-link>.</h3>

        <p><strong>Sensibilisez</strong> et <strong>formez</strong> les décideurs et décideuses, <span lang="en">designers</span>, développeurs et développeuses, <span lang="en">product owner</span>, cheffes et chefs de projets sur le sujet de l’accessibilité numérique.</p>
        <p>Intégrez la conformité au RGAA dans vos process.</p>
        <p>À chaque deploiement de nouvelles fonctionnalités, assurez-vous que vous maintenez bien votre niveau d’accessibilité.</p>
      </section>



      <section>
        <h2>À emporter</h2>
        <p><g-link to="/accessibilite-numerique/a-emporter">Un mémo</g-link> pour savoir ce qu‘il faut faire, comment le faire et avec quels moyens.
        </p>
      </section>


  </Layout>
</template>


<script>

  import Accessibilite from "~/assets/images/accessibilite.svg"

  export default {
    components: {
      Accessibilite,
    },
    metaInfo: {
      title: "Accessibilité numérique",
      meta: [{
          name: 'description',
          content: "L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en situation de handicap."
        },
        {
          property: 'og:title',
          content: "Accessibilité numérique - DesignGouv"
        },
        {
          property: 'og:description',
          content: "L’accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en situation de handicap."
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

  .digital-accessibility-page {

    .grid-menu {
      margin-bottom: 0;
      margin-top: 32px;
      list-style-type: none;
      padding-left: 0;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: wrap;

      .button {
        margin-right: 14px;
        width: 20.5%;
        border-radius: 16px;
        border: 2px solid $blue;
        text-align: center;
        padding: 12px 8px 8px 8px;
        margin-bottom: 16px;
        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin-right: 0;
        }

        svg {
          font-size: 1.75em;
          margin-bottom: 8px;
        }
      }
    }
  }

</style>
