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
          <g-link to="/accessibilite-numerique/vous-etes/">Vous êtes</g-link>
        </li>
        <li>
          <span aria-current="page">décideur ou décideuse</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
        <h1>Vous êtes <span class="text-highlight">décideur ou décideuse</span></h1>
        <p class="cover__subtitle">Cette fiche est destiné à toute personne confrontée aux enjeux relatifs à l’accessibilité numérique, notamment l’obligation de rendre les sites et applications web conformes au RGAA, et amenée à mettre en place une politique d’accessibilité numérique dans son organisation.</p>

      </div>  
    </div>
    <div class="content">
      <h2>Prendre consience</h2>
      <h3>Du handicap</h3>
      <p>15 à 20% de la population est en situation de handicap, vous êtes à peu près sûr que certains de « vos » utilisateurs peuvent rencontrer des difficultés.</p>
      <h3>De la législation</h3>
      <p>La loi de 2005 pour l'égalité des droits et des chances, la loi pour une république numérique de 2016, le référentiel général d’amélioration de l’accessibilité (RGAA) : les dispositifs règlementaires sont applicables à tous.</p>

      <h2>Désigner un ou une référente accessibilité</h2>
      <p>La direction doit nommer un membre de l’encadrement de l’organisme en tant que « référent accessibilité ». Cette personne doit avoir la responsabilité et l’autorité en particulier pour :</p>
      <ul>
        <li>assurer que les processus nécessaires à la prise en compte de l’accessibilité sont établis, mis en œuvre et entretenus ;</li>
        <li>rendre compte à la direction du niveau d’accessibilité et de tout besoin d’amélioration ;</li>
        <li>assurer que la sensibilisation aux exigences d’accessibilité dans tout l’organisme est encouragée ;</li>
        <li>être le point d’entrée unique sur les sujets d’accessibilité numérique.</li>
      </ul>

      <h2>Décider et exiger la conformité</h2>
      <h3>Former</h3>
      <p><strong>Toutes</strong> les personnes doivent être sensibilisées.</p>
      <p>Les designers, développeurs et développeuses<strong></strong> doivent être formées.</p>
      <p>Vous pouvez même former un expert RGAA pour internaliser les tâches d’audit et d’acompagnement.</p>
      <h3>Organiser</h3>
      <p>S’assurer que chaque étape du projet, chaque process, chaque interventions prenne en compte l’accessibilité.</p>

      <h2>Se faire accompagner</h2>
      <p>La présence d’un expert en accessibilité numérique dans une équipe est précieuse : pour sensibiliser et former les équipes, optimiser les process, faire des revues de code, etc.</p>

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
    title: "Vous êtes décideur ou décideuse",
    meta: [{
      name: 'description',
      content: "Cette fiche est destiné à toute personne confrontée aux enjeux relatifs à l’accessibilité numérique, notamment l’obligation de rendre les sites et applications web conformes au RGAA, et amenée à mettre en place une politique d’accessibilité numérique dans son organisation."
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
