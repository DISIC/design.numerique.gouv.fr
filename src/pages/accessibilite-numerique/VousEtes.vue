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
          <span aria-current="page">Vous êtes</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>

        <h1>Vous avez un <span class="text-highlight">rôle à jouer</span></h1>
         <p class="cover__subtitle">Quel que soit votre rôle dans l’organisation, vous pouvez mettre en place des actions pour prendre en compte l’accessibilité dans vos projets numériques.</p>

      </div>  
    </div>

    <div class="content">


<div class="rf-grid-row rf-grid-row--gutters">
    <div class="rf-col-4">
        <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
            <div class="rf-tile__body">
                <h4 class="rf-tile__title">
                    <a class="rf-tile__link" href="manager/">Décideur et décideuse</a>
                </h4>
                <p class="rf-tile__desc">Vous décidez que l’<strong>accessibilité est essentielle</strong>.</p>
            </div>
        </div>
    </div>
    <div class="rf-col-4">
        <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
            <div class="rf-tile__body">
                <h4 class="rf-tile__title">
                    <a class="rf-tile__link" href="designer/">Designer</a>
                </h4>
                <p class="rf-tile__desc">Vous concevez un parcours ou une interface en prenant en compte <strong>tous les usagers</strong>.</p>
            </div>
        </div>
    </div>
    <div class="rf-col-4">
        <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
            <div class="rf-tile__body">
                <h4 class="rf-tile__title">
                    <a class="rf-tile__link" href>Développeur et développeuse</a>
                </h4>
                <p class="rf-tile__desc">Vous utilisez ou développez des composants d’interfaces <strong>accessibles et conformes</strong> au RGAA.</p>
            </div>
        </div>
    </div>
    <div class="rf-col-4">
        <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
            <div class="rf-tile__body">
                <h4 class="rf-tile__title">
                    <a class="rf-tile__link" href>Chef et cheffe de produit, de projet</a>
                </h4>
                <p class="rf-tile__desc">Vous assurez la bonne prise en compte <strong>à chaque étape</strong> de l’accessibilité.</p>
            </div>
        </div>
    </div>
    <div class="rf-col-4">
        <div class="rf-tile rf-enlarge-link rf-tile--horizontal">
            <div class="rf-tile__body">
                <h4 class="rf-tile__title">
                    <a class="rf-tile__link" href>Référent et référente accessibilité numérique</a>
                </h4>
                <p class="rf-tile__desc">Vous mettez en place des les <strong>actions</strong> nécessaires au suivi du <strong>schéma pluriannuel</strong>.</p>
            </div>
        </div>
    </div>
</div>

      <p>Que vous soyez <g-link to="/accessibilite-numerique/vous-etes/manager/">décideur ou décideuse</g-link>, <g-link to="/designer/">designer</g-link>, <g-link to="/developper/">développeur ou développeuses</g-link>, <g-link to="/po/">responsable de projet ou de produit</g-link>, vous avez un rôle à jouer dans la mise au conformité RGAA de votre projet web.</p>
      <p>Ces fiches ont pour but de vous accompagner au mieux </p>
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
    title: "Vous avez un rôle à jouer.",
    meta: [{
      name: 'description',
      content: "Quel que soit votre rôle dans l’organisation, vous pouvez mettre en place des actions pour prendre en compte l’accessibilité dans vos projets numériques."
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
h4.rf-tile__title { margin:0 auto;}
</style>
