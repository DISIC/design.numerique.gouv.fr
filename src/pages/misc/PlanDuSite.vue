<template>
  <Layout class="sitemap-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Plan du site</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Plan du site</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Design numérique</h2>
          <p>Bientôt disponible.</p>
          <h2><a href="/commando-ux/">Commando UX</a></h2>
          <h2><a href="/accessibilite-numerique/">Accessibilité</a></h2>
          <ul>
          <li><a href="/accessibilite-numerique/cadre-legal/">Obligations légales et sanctions</a></li>
          <li><a href="/accessibilite-numerique/RGAA/">Le Référentiel général d'amélioration de l'accessibilité</a></li>
          <li><a href="/accessibilite-numerique/schema-pluriannuel/">Schéma pluriannuel de mise en accessibilité</a></li>
          <li><a href="/accessibilite-numerique/declaration-accessibilite/">Déclaration d'accessibilité</a></li>
          <li><a href="/accessibilite-numerique/accord-cadre-dae/">Accord-cadre interministériel</a></li>
          </ul>
          <h2><a href="/accompagnement/">Accompagnement</a></h2>
          <h2><a href="/outils/">Outils</a></h2>
          <ul>
          <li><a href="/accessibilite-numerique/jeu-de-oaa/">Organiser l’amélioration de l‘accessibilité</a></li>
          <li><a href="/outils/checklist-dev/">La checklist des développeurs et développeuses</a></li>
          <li><a href="/outils/memo-dev/">Le mémo développement</a></li>
          <li><a href="/outils/diagnostic-flash/">Le diagnostic flash</a></li>
          <li><a href="/outils/audit-rapide/">L‘audit rapide RGAA</a></li>
          </ul>
          <h2><a href="/formations/">Formations</a></h2>
          <h2>Et </h2>
          <ul>
            <li><a href="/equipe/">Notre équipe</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/recrutement/">Recrutement</a></li>
            <li><a href="/misc/accessibilite/">Accessibilité</a></li>
            <li><a href="/misc/donnees-personnelles/">Données personnelles</a></li>
            <li><a href="/misc/mentions-legales/">Mentions légales</a></li>
          </ul>
        </section>

    </div>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Plan du site",
      meta: [{
        name: "robots",
        content: "index"
      }],
    }
  }

</script>


<style lang="scss">

  .sitemap-page {


  }

</style>
