<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Plan du site</a>
          </li>
        </ol>
      </nav>

      <h1>Plan du site</h1>

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
        <li><a href="/accessibilite-numerique/prestations-accessibilite-numerique/">Faire appel à un prestataire</a></li>
        </ul>
        <h2><a href="/accompagnement/">Nos offres d’accompagnement</a></h2>
        <h2><a href="/outils/">Outils</a></h2>
        <ul>
        <li><a href="/outils/jeu-de-oaa/">Organiser l’amélioration de l‘accessibilité</a></li>
          <li><a href="/outils/roles-cles/">Les fiches métiers</a></li>
        <li><a href="/outils/diagnostic-flash/">Le diagnostic flash</a></li>
        <li><a href="/outils/checklist-dev/">La checklist des développeurs et développeuses</a></li>
        <li><a href="/outils/memo-dev/">Le mémo développement</a></li>
        <li><a href="/outils/audit-rapide/">L‘audit rapide RGAA</a></li>
        <li><a href="/outils/exemple-declaration-accessibilite/">Un exemple de déclaration d’accessibilité prêt à remplir</a></li>
        </ul>
        <h2><a href="/formations/">Formations</a></h2>
        <ul>
          <li><a href="/formations/simplification-information/">Formation Simplification de l'information aux usagers</a></li>
          <li><a href="/formations/accessibilite/">Formation à l’accessibilité</a></li>
          <li><a href="/formations/design/">Formation au design
</a></li>
          <li><a href="/formations/recherche-utilisateur/">Formation à la recherche utilisateur</a></li>
          <li><a href="/formations/ecoconception/">Formation à l’écoconception</a></li>
          </ul>
        <h2><a href="/articles/">Articles</a></h2>
        <h2>Autres pages</h2>
        <ul>
          <li><a href="/qui-sommes-nous/">Qui sommes-nous ?</a></li>
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
