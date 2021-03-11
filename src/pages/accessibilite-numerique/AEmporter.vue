<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">À emporter</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>

        <h1 class="text-highlight">À emporter</h1>
      </div>  
    </div>

    <div class="content">
      <h2>Afficher</h2>
      <ol>
      <li>Publier en ligne une <g-link to="/accessibilite-numerique/declaration-accessibilite">déclaration d’accessibilité</g-link> indiquant en détail l’état d’accessibilité du site ou service.</li>
      <li>Dès la page d’accueil et sur toutes les pages, afficher une des trois mentions suivantes :
      <ul>
        <li>Accessibilité : totalement conforme</li>
        <li>Accessibilité : partiellement conforme</li>
        <li>Accessibilité : non conforme</li>
      </ul></li>    
      <li>Cette mention peut être un lien vers la déclaration d’accessibilité de votre site ou démarche en ligne.</li>
      </ol>

      <h2>S’organiser</h2>
      <p>Le <g-link to="/accessibilite-numerique/jeu-de-oaa">jeu de l'organisation de l’amélioration de l’accessibilité (OAA)</g-link> vous guide dans la mise en accessibilité de votre service numérique.</p>

      <h2>Se faire aider</h2>
      <p>Le <g-link to="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="guichet France Relance - nouvelle fenêtre">guichet France Relance</g-link> vous permet de financer l’amélioration de la qualité de vos démarches.</p>       
      <p>Vous pouvez également bénéficier de <a href="http://www.fiphfp.fr/Le-FIPHFP/Domaines-d-intervention/Accessibilite" title="financement - nouvelle fenêtre" target="_blank">financement</a> de la part du <abbr title="Fonds pour l'Insertion des Personnes Handicapées dans la Fonction publique">FIPHFP</abbr> pour la <strong>formation</strong> de vos agents ou la <strong>mise en accessibilité</strong> de vos interfaces.</p>
      <p>Si vous n’avez pas les ressources nécessaires en interne pour le faire, faites appel à l’<g-link to="/accessibilite-numerique/accord-cadre-dae">accord-cadre interministériel DAE</g-link> pour de l’<strong>accompagnement</strong> et de la <strong>formation</strong>. Tous les sujets y sont couverts : audits RGAA, formations de vos équipes, tests avec des utilisateurs en situation de handicap, constitution d’un schéma pluriannuel de mise en accessiblité, etc.</p>
    </div>

  </Layout>
</template>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
  metaInfo: {
    title: "RGAA à emporter",
    meta: [{
      name: 'description',
      content: "Afficher la conformité RGAA, s’organiser et se faire aider pour améliorer l’accessibilité."
    },
    {
      property: 'og:title',
      content: "RGAA à emporter - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Afficher la conformité RGAA, s’organiser et se faire aider pour améliorer l’accessibilité."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>

<style lang="scss">

</style>
