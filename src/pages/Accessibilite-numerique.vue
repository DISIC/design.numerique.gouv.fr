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

      <!-- <p>Todo :</p>
      <ul>
        <li>Why should i care about accessiblity ?</li>
      </ul>
 -->
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
        <p>Pour atteindre un taux d'accessibilité à 100 %, rien de plus simple. Il faudra former vos équipes, intégrer l'accessibilité dès la phase de design, ainsi que lors du développement et des tests automatisés et d'usabilité. Et surtout avoir une volonté forte de rendre vos services accessibles à tous les usagers, à tous les niveaux de la hierarchie.</p>
        <p>Vous pouvez faire appel à l'<g-link to="/accessibilite-numerique/accord-cadre-dae">accord-cadre interministériel DAE</g-link> sur de l'accompagnement et de la formation si vous n'avez pas les ressources nécéssaire en interne (audits RGAA, formation, tests utilisateur, schéma pluriannuel, etc).</p>
        <p>Enfin, des financements pour la mise en accessibilité de vos interfaces sont possibles via le FIPHFP.</p>
        <!-- <p>Quelques outils et marchés s'offrent à vous :</p>
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
          </g-link> -->

          <!-- <g-link to="/accessibilite-numerique/tests-automatises">
            <span>Les tests automatisés</span>
          </g-link> -->
        <!-- </div> -->
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
  @import "src/assets/scss/_accessibility.scss";
</style>
