<template>
  <Layout>

    <div class="cover coverWithBreadcrumb">
     <div class="coverContainer">

        <div class="subtitle">Accessibilité numérique</div>
        <h1>Le Référentiel général d'amélioration de l'accessibilité (RGAA)</h1>

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
          <g-link to="/accessibilite-numerique/RGAA" aria-current="page">Le RGAA</g-link>
        </li>
      </ol>
    </nav>

    <div class="content text-content">

      <section>

        <h2>À quoi ça sert ?</h2>
        <p>
          Le RGAA harmonise les normes internationales de l'accessibilité numériques connues sous l’appellation de <a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG</a>. <strong>En France, le taux d'accessibilité d'un site est calculé en auditant ce site contre les critères du RGAA.</strong>
        </p>
        <p>
          La méthode technique du RGAA permet de vérifier qu’une page web, tout contenu HTML, est conforme aux 50 critères de succès des niveaux A et AA de la norme internationale WCAG 2.1 qui ont été retenus dans la norme européenne de référence pour établir le niveau d’exigence légale en matière d’accessibilité numérique.
        </p>
        <p>
          La méthode technique du RGAA propose un cadre opérationnel de vérification de la conformité aux exigences d'accessibilité. Elle comporte 106 critères de contrôle RGAA incluant une moyenne de 2,5 tests par critères. Certains tests font référence à des techniques d'implémentation (HTML, CSS, JavaScript...) pour vérifier que le critère est respecté afin de réduire la marge d’interprétation quant au respect des normes d’accessibilité.
        </p>

        <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/" target="_blank" class="button">
          Consulter le RGAA
        </a>
      </section>
      <section>
        <h2>La 4ème version du RGAA</h2>
        <p>
          La 4e version du RGAA ne reprend que la partie obligatoire des normes harmonisées correspondant au niveaux A et AA de WCAG. Les recommandations relevant du niveau AAA de WCAG seront reprises dans un document à caractère non réglementaire (publication courant 2020).
        </p>
        <p>
          Le RGAA 4 fait disparaître aussi la distinction entre niveau A et AA qui n’est plus justifiée puisque toutes ces règles sont obligatoires. Il y ajoute des critères de test permettant de vérifier leur bonne application.
        </p>
      </section>

      <section>
        <h2>Si le RGAA n'était plus mis à jour</h2>
        <p>
          En cas d'absence de mise à jour du référentiel sous 3 ans pour prendre en compte de nouveaux standards ou spécifications techniques, il est possible de créer ses propres tests en complément de ceux existant. Certains tests, concernant notamment les composants d’interface développés en JavaScript, requièrent de vérifier la restitution des contenus avec des technologies d’assistance associées à des navigateurs et des systèmes d’exploitation.
        </p>
      </section>

      <section>
        <h2>Application mobiles, progiciels et mobilier urbain numérique</h2>
        <p>
          La méthode technique du RGAA 4.0 ne couvre pas les applications mobiles natives, les progiciels et le mobilier urbain numérique pour lesquels il sera nécessaire de vérifier directement la mise en œuvre de la norme de référence EN 301-549 V2.1.2.
        </p>
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
