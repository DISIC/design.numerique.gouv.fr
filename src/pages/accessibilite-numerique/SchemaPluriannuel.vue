<template>
  <Layout>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Schéma pluriannuel</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Schéma pluriannuel de mise en accessibilité</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          Contenu du schéma
        </h2>

        <p>
          En application du III de l’article 47 précité, le schéma pluriannuel, d’une durée maximum de trois ans, présente la politique de l’entité concernée en matière d’accessibilité numérique.
        </p>
        <p>A ce titre, il contient des informations sur :</p>
        <ul>
          <li>la prise en compte de l’accessibilité numérique dans la stratégie numérique de l’entité et dans sa politique en faveur de l’intégration des personnes en situation de handicap</li>
          <li>la position fonctionnelle et les missions du référent accessibilité numérique de l’entité</li>
          <li>les ressources humaines et financières affectées à l’accessibilité numérique</li>
          <li>la prise en compte des compétences ou connaissances requises dans les fiches de poste et dans les processus de recrutement</li>
          <li>les actions de formation et de sensibilisation des agents</li>
          <li>la mise en œuvre des ressources et expertises externes auxquelles il est, le cas échéant, fait appel, des moyens techniques et de l’outillage pour gérer et tester l’accessibilité numérique</li>
          <li>l’organisation interne pour mettre en œuvre les obligations d’accessibilité des services de communication au public en ligne, y compris les modalités de contrôle des services numériques et d’organisation pour le traitement des demandes des usagers</li>
          <li>l’intégration de l’accessibilité numérique dans les clauses contractuelles (appels d’offres et devis), des critères de notation et de sélection des prestataires et les procédures de recette et, le cas échéant, dans les conventions établies avec leurs opérateurs, délégataires ou partenaires</li>
        </ul>
        <p>Il présente également les travaux de mise en conformité des services de communication au public en ligne de l’entité, notamment :</p>
        <ul>
          <li>la prise en compte de l’accessibilité numérique dans les nouveaux projets</li>
          <li>la prise en compte des personnes en situation de handicap dans les tests utilisateurs</li>
          <li>les évaluations (ou audits) de conformité prévus pour l’ensemble des services de communication</li>
          <li>les mesures correctives qui seront prises pour traiter les contenus non accessibles, y compris un calendrier de mise en œuvre de ces mesures, tenant compte du caractère prioritaire des contenus les plus consultés et des services les plus utilisés</li>
          <li>les mesures d’accessibilité non obligatoires, notamment l’accès aux contenus audios et vidéos en langue des signes, la traduction de certains contenus en langage simplifié et tout autre mesure permettant de prendre en compte des critères de niveau triple AAA, des normes internationales, listés en annexe de la norme de référence</li>
          <li>le bilan des plans d’actions annuels</li>
        </ul>
        <p>Ces travaux de mise en conformité et les actions en faveur de l’accessibilité numérique sont planifiés annuellement dans des plans d’actions.</p>

        <h2>Publication du schéma</h2>
        <p>Le schéma pluriannuel et le plan d’action de l’année en cours sont accessibles en ligne sur le site de l’entité. Des liens vers ces documents figurent au sein de la déclaration d’accessibilité des services de communication au public en ligne dépendant de l’entité. Ils sont publiés dans un format accessible.</p>
        <p>Voici un <a href="https://www.numerique.gouv.fr/accessibilite/" target="_blank" title="exemple de schéma et plans pluriannuels - nouvelle fenêtre">exemple de schéma et plans pluriannuels</a> de mise en accessibilité.</p>

      </section>

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
    title: "Schéma pluriannuel de mise en accessibilité",
    meta: [{
      name: 'description',
      content: "Le schéma pluriannuel, d’une durée maximum de trois ans, présente la politique de l’entité concernée en matière d’accessibilité numérique."
    },
    {
      property: 'og:title',
      content: "Le Schéma pluriannuel de mise en accessibilité - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Le schéma pluriannuel, d’une durée maximum de trois ans, présente la politique de l’entité concernée en matière d’accessibilité numérique."
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
