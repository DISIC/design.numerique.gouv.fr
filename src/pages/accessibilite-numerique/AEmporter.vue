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
            <span aria-current="page">À emporter</span>
          </li>
        </ol>
      </nav>

      <h1>À emporter</h1>

      <h2>Afficher</h2>
      <ol>
        <li>Publier en ligne une <g-link to="/accessibilite-numerique/declaration-accessibilite">déclaration d’accessibilité</g-link> indiquant en détail l’état d’accessibilité du site ou service.</li>
        <li>Dès la page d’accueil et sur toutes les pages, afficher une des trois mentions suivantes :
          <ul>
            <li>Accessibilité : totalement conforme</li>
            <li>Accessibilité : partiellement conforme</li>
            <li>Accessibilité : non conforme</li>
          </ul>
        </li>
        <li>Cette mention peut être un lien vers la déclaration d’accessibilité de votre site ou démarche en ligne.</li>
      </ol>

      <h2>S’organiser</h2>
      <p>Le <g-link to="/accessibilite-numerique/jeu-de-oaa">jeu de l'organisation de l’amélioration de l’accessibilité (OAA)</g-link> vous guide dans la mise en accessibilité de votre service numérique.</p>

      <h2>Se faire aider</h2>
      <p>Si votre démarche fait partie de l’<a href="https://observatoire.numerique.gouv.fr/" title="observatoire de la qualité des démarches en ligne - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">observatoire de la qualité des démarches en ligne</a>, vous pouvez consulter <g-link to="/accompagnement/">nos offres d’accompagnment</g-link>.</p>
      <p>Vous pouvez également bénéficier de <a href="http://www.fiphfp.fr/Le-FIPHFP/Domaines-d-intervention/Accessibilite" title="financement - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">financement</a> de la part du <abbr title="Fonds pour l'Insertion des Personnes Handicapées dans la Fonction publique">FIPHFP</abbr> pour la <strong>formation</strong> de vos agents ou la <strong>mise en accessibilité</strong> de vos interfaces.</p>
      <p>Si vous n’avez pas les ressources nécessaires en interne pour le faire, faites appel à un <g-link to="/accessibilite-numerique/prestations-accessibilite-numerique">prestataire</g-link> pour de l’<strong>accompagnement</strong>, de la <strong>formation</strong>, des <strong>audits</strong> RGAA, des tests avec des utilisateurs en situation de handicap, la constitution d’un schéma pluriannuel de mise en accessiblité, etc.</p>

    </div>
  </Layout>
</template>


<script>
  export default {
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
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
