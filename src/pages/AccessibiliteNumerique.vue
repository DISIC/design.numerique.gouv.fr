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

      <p class="cover__subtitle">L'accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en situation de handicap.</p>

      </div>

    </div>

    <div class="content">

      <section class="intro">
        <div>
          <p>
            En France, les produits et services numériques sont souvent conçus sans prendre le temps de comprendre l’audience qu’ils servent, notamment les personnes en situation de handicap soit 12 millions de personnes en France.
          </p>
          <p>
            Les services non accessibles sont le fruit de parcours trop complexes et de lignes de code qui ne suivent pas les bonnes pratiques de développement web. Il est essentiel que les designers et développeurs soient formés à ces enjeux.
          </p>
          <p>
            <strong>Depuis 2012, tous les sites publics doivent être accessibles, c'est à dire 100% conformes au RGAA.</strong> Et ainsi permettre  à tous les usagers un égal accès à leurs droits.
          </p>
        </div>
        <div>
          <AccessibiliteIllustration class="illustration" focusable="false" aria-hidden="true"/>
        </div>
      </section>

      <section>
        <h2>Comprendre le cadre légal</h2>
        <div class="grid-menu">
          <!-- <g-link to="/accessibilite-numerique/" class="inactive">
            <span>En bref (5 minutes chrono)</span>
          </g-link> -->
          <g-link to="/accessibilite-numerique/cadre-legal/" class="button">
            <font-awesome :icon="['fas', 'balance-scale']" height="16px"/>
            <span>Obligations légales et sanctions</span>
          </g-link>
          <g-link to="/accessibilite-numerique/RGAA/" class="button">
            <font-awesome :icon="['fas', 'clipboard-list']" height="16px"/>
            <span>Le RGAA</span>
          </g-link>
          <g-link to="/accessibilite-numerique/schema-pluriannuel" class="button">
            <font-awesome :icon="['far', 'file-alt']" height="16px"/>
            <span>Schéma pluriannuel <small>de mise en accessibilité</small></span>
          </g-link>
          <g-link to="/accessibilite-numerique/declaration-accessibilite" class="button">
            <font-awesome :icon="['far', 'file-alt']" height="16px"/>
            <span>Déclaration d'accessibilité</span>
          </g-link>

        </div>
      </section>

      <section>
        <h2>Passer à l'action</h2>
        <p>Pour atteindre un taux d'accessibilité à 100 %, rien de plus simple. Il faudra former vos équipes, intégrer l'accessibilité dès la phase de design et tout au long du développement. Et surtout <strong>avoir une volonté forte de rendre vos services accessibles à tous les usagers</strong>, partagée à tous les niveaux de la hierarchie.</p>
      </section>

      <section>
        <h3>Je souhaite faire un état des lieux de la conformité au RGAA sur un site, établir une déclaration d’accessibilité. Comment faire ?</h3>
        <p>Si vous n'avez pas les ressources nécessaires en interne pour le faire, faites appel à l'<g-link to="/accessibilite-numerique/accord-cadre-dae">accord-cadre interministériel DAE</g-link> pour de l'accompagnement et de la formation. Tous les sujets y sont couverts : audits RGAA, formations de vos équipes, tests avec des utilisateurs en situation de handicap, constitution d'un schéma pluriannuel de mise en accessiblité, etc.</p>
      </section>

      <section>
        <h3>J’ai un service en ligne déjà en place et qui n'est pas conforme au RGAA. Que faire ?</h3>
        <p><strong>Sensibilisez</strong> et <strong>formez</strong> vos designers et développeurs sur le sujet de l'accessibilité numérique, et étudiez à travers les resultats de votre audit les points à améliorer. À chaque deploiement de nouvelles fonctionnalités, assurez-vous que vous maintenez bien votre niveau d'accessibilité.</p>
      </section>

      <section>
        <h3>Est-ce qu'il existe des financements ?</h3>
        <p>Oui. Des <a title="financements par le FIPHFP - Nouvelle fenêtre" target="_blank" href="http://www.fiphfp.fr/Le-FIPHFP/Domaines-d-intervention/Accessibilite">financements</a> pour la mise en accessibilité de vos interfaces sont possibles via le <abbr title="Fonds pour l'Insertion des Personnes Handicapées dans la Fonction publique">FIPHFP</abbr>.</p>
      </section>

    </div>

  </Layout>
</template>


<script>

  import Accessibilite from "~/assets/images/accessibilite.svg"
  import AccessibiliteIllustration from "~/assets/images/accessibiliteIllustration.svg";

  export default {
    components: {
      Accessibilite,
      AccessibiliteIllustration,
    },
    metaInfo: {
      title: "Accessibilité numérique",
      meta: [{
          name: 'description',
          content: "Découvrez les outils pour améliorer vous-même la qualité de vos démarches."
        },
        {
          property: 'og:title',
          content: "Les outils pour le design numérique et l'accessibilité - DesignGouv"
        },
        {
          property: 'og:description',
          content: "Découvrez les outils pour améliorer vous-même la qualité de vos démarches."
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

    .intro {
      display: flex;

      > div {
        width: 70%;
        margin-right: 40px;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin-right: 0;
        }
      }

      > div + div {
        width: 30%;
        margin-top: 10px;
        margin-right: 0;

        @media only screen and (max-width: $mobile-max-width) {
          display: none;
        }
      }

      svg {
        width: 100%;
        height: auto;
        overflow: visible;
        margin-top: 20px;
      }
    }

    .comment {
      display: inline-block;
      font-weight: normal;
      margin-top: 10px;
    }
  }

</style>
