<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Bien comprendre</a>
          </li>
        </ol>
      </nav>

<h1>Bien comprendre l’accessibilité numérique</h1>

<div class="fr-grid-row fr-mb-1w fr-grid-row--gutters">
  <div class="fr-col fr-col-md-6">
    <div class="fr-card fr-enlarge-link">
      <div class="fr-card__body">
        <div class="fr-card__content">
           <h2>Apprendre</h2>
           <p class="fr-card__desc fr-text--lg">Découvrir <g-link to="/formations/accessibilite/introduction-accessibilite-numerique/" ><strong>les bases</strong></g-link> de l’accessibilité numérique.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="fr-col fr-col-md-6">
    <div class="fr-card fr-enlarge-link">
      <div class="fr-card__body">
        <div class="fr-card__content">
           <h2>S’organiser</h2>
           <p class="fr-card__desc fr-text--lg">Se poser <strong>les bonnes questions au bon moment</strong> dans la mise en accessibilité de votre service numérique grâce au <g-link to="/accessibilite-numerique/jeu-de-oaa/">jeu de l’OAA</g-link></p>
        </div>
      </div>
    </div>
  </div>

  <div class="fr-col fr-col-md-6">
    <div class="fr-card fr-enlarge-link">
      <div class="fr-card__body">
        <div class="fr-card__content">
           <h2>Évaluer</h2>
           <p class="fr-card__desc fr-text--lg">Estimer la qualité, l’accessibilité et le design de votre site en peu de temps avec le <g-link to="/outils/diagnostic-flash/"><strong>diagnostic flash</strong></g-link></p>
        </div>
      </div>
    </div>
  </div>

  <div class="fr-col fr-col-md-6">
    <div class="fr-card fr-enlarge-link">
      <div class="fr-card__body">
        <div class="fr-card__content">
           <h2>Avoir la réf’</h2>
           <p class="fr-card__desc fr-text--lg">Les <strong>règles</strong> de mise en &oelig;uvre et la <strong>méthode</strong> de vérification sont définies dans le <g-link to="/accessibilite-numerique/RGAA/">référentiel général d’amélioration de l’accessibilité</g-link>.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Bien comprendre l’accessibilité numérique",
      meta: [{
        name: 'description',
        content: "Apprendre, s’organiser, évaluer et comprendre."
      },
      {
        name: 'robots',
        content: "noindex, nofollow"
      },
      {
        property: 'og:title',
        content: "Bien comprendre l’accessibilité numérique - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Apprendre, s’organiser, évaluer et comprendre."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
