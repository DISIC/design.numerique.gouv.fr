<template>
  <Layout>

    <div class="cover coverWithBreadcrumb">
     <div class="coverContainer">

       <div class="subtitle">Accessibilité numérique</div>
       <h1>Schéma pluriannuel de mise en accessibilité</h1>

      </div>
    </div>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité numérique</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/schema-pluriannuel" aria-current="page">Schéma pluriannuel de mise en accessibilité</g-link>
        </li>
      </ol>
    </nav>

    <div class="content text-content">

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
        <p>Voici un <a href="https://www.iledefrance.fr/sites/default/files/medias/2019/07/20190708_schema-pluriannuel-access_public.pdf">exemple de schéma pluriannuel</a> de mise en accessibilité. Celui produit pour la région Ile de France.</p>

      </section>

    </div>

  </Layout>
</template>

<script>

export default {
  components: {
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
      align-items: center;
      justify-content: center;

      a {
        margin-right: 16px;
        width: 32%;
        border-radius: 5px;
        border: 1px solid $blue-light;
        text-align: center;
        padding: 24px 16px;
        font-size: 1.5em;
        display: inline-block;
        width: 100%;
        height: 100%;

        &:hover {
          text-decoration: none;
          border-color: $blue;
        }
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
