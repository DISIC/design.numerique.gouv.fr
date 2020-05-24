<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Accessibilité numérique</h1>

      <p class="subtitle">L'accessibilité numérique consiste à rendre les services en ligne accessibles aux personnes en situation de handicap.</p>

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
          <AccessibilityIllustration class="illustration" aria-hidden="true"/>
        </div>
      </section>

      <p>Todo :</p>
      <ul>
        <li>Why should i care about accessiblity ?</li>
      </ul>

      <section>
        <h3>Comprendre le cadre légal</h3>
        <div class="grid-menu">
          <!-- <g-link to="/accessibilite-numerique/" class="inactive">
            <span>En bref (5 minutes chrono)</span>
          </g-link> -->
          <g-link to="/accessibilite-numerique/cadre-legal/">
            <font-awesome :icon="['fas', 'balance-scale']"/>
            <span>Obligations légales et sanctions</span>
          </g-link>
          <g-link to="/accessibilite-numerique/RGAA/">
            <font-awesome :icon="['fas', 'clipboard-list']"/>
            <span>Le RGAA</span>
          </g-link>
          <g-link to="/accessibilite-numerique/schema-pluriannuel">
            <font-awesome :icon="['far', 'file-alt']"/>
            <span>Schéma pluriannuel <small>de mise en accessibilité</small></span>
          </g-link>
          <g-link to="/accessibilite-numerique/declaration-accessibilite">
            <font-awesome :icon="['far', 'file-alt']"/>
            <span>Déclaration d'accessibilité</span>
          </g-link>

        </div>
      </section>

      <section>
        <h3>Passer à l'action</h3>
        <p>Pour atteindre un taux d'accessibilité à 100 %, rien de plus simple. 😉 Il faudra former vos équipes, intégrer l'accessibilité dès la phase de design, ainsi que lors du développement et des tests automatisés et d'usabilité. Et surtout une volonté forte de rendre vos services accessibles à tous les usagers.</p>
        <p>Quelques outils et marchés s'offrent à vous :</p>
        <div class="grid-menu">
          <g-link to="/">
            <font-awesome :icon="['fas', 'award']"/>
            <span>Je lance un audit d'accessibilité</span>
          </g-link>
          <g-link to="/">
            <font-awesome :icon="['fas', 'graduation-cap']"/>
            <span>Je forme mes équipes</span>
          </g-link>
          <g-link to="/">
            <font-awesome :icon="['fas', 'vials']"/>
            <span>Je teste avec de vrais utilisateurs</span>
          </g-link>
          <g-link to="/">
            <font-awesome :icon="['fas', 'vials']"/>
            <span>Et plus...</span>
          </g-link>

          <!-- <g-link to="/accessibilite-numerique/tests-automatises">
            <span>Les tests automatisés</span>
          </g-link> -->
        </div>
      </section>

      <!-- <h2>
        Guides selon votre fonction dans l'organisation
      </h2>
      <p>À venir</p> -->
    </div>

  </Layout>
</template>

<script>

import AccessibilityIllustration from "~/assets/images/illustration_accessibility.svg";


export default {
  components: {
    AccessibilityIllustration,
  },
  metaInfo: {
    title: "Accessibilité numérique - DesignGouv",
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
      content: "https://designgouv.fr/designGouv.png"
    }],
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/_vars.scss";

  h1 {
    box-shadow:
      inset 0 -0.3em white;
    display: inline;
    transition: .1s all;
  }

  .cover {
    background-color: $light-gray;
  }

  .content {
    table {
      margin-top: 40px;
    }

    .grid-menu {
      margin-bottom: 0;
      margin-top: 0;
      list-style-type: none;
      padding-left: 0;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: wrap;

      a {
        margin-right: 16px;
        width: 20%;
        border-radius: 5px;
        border: 1px solid $blue-light;
        text-align: center;
        padding: 16px 8px;
        margin-bottom: 16px;
        display: flex;
        justify-content: top;
        align-items: center;
        flex-direction: column;

        svg {
          font-size: 2.5em;
          margin-bottom: 10px;
        }

        &:hover {
          text-decoration: none;
          border-color: $blue;
        }

        &.inactive {
          background: $lighter-gray;
          color: $mid-gray;
          border-color: $light-gray-hover;

          &:hover {
            border-color: $light-gray-hover;
          }
        }
      }
    }

    .intro {
      display: flex;

      > div {
        width: 70%;
        margin-right: 40px;
      }

      > div + div {
        width: 30%;
        margin-top: 10px;
        margin-right: 0;
      }

      svg {
        width: 100%;
        height: auto;
        overflow: visible;
        margin-top: 20px;
      }
    }

    td {
      vertical-align: top;
      font-weight: 700;
      padding-bottom: 32px;

      li {
        font-weight: normal;
      }
    }

    .bullet {
      display: inline-block;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      color: $blue;
      border: 2px solid $blue;
      text-align: center;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      padding: 8px;
      margin-right: 8px;
      font-weight: 900;
    }

    .comment {
      display: inline-block;
      font-weight: normal;
      margin-top: 10px;
    }

    .button {
      text-decoration: none;
      border: 2px solid $blue;
      background-color: white;
      border-radius: 32px;
      padding: 8px 24px;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }

      &:hover {
        background: $blue;
        color: white;
      }
    }

    .buttonLight {
      text-decoration: none;
      background-color: white;
      font-weight: bold;
      display: inline-block;
      margin: 12px 0 0 0;

      &:hover {
        .arrow {
          padding: 0 0 0 10px;
        }
      }
    }
  }

</style>
