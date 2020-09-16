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
          <span aria-current="page">Le RGAA</span>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
        <h1>Le Référentiel général d'amélioration de l'accessibilité (RGAA)</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>À quoi ça sert ?</h2>
        <p>
          Le RGAA harmonise les normes internationales de l'accessibilité numériques connues sous l’appellation de <a href="https://www.w3.org/TR/WCAG21/" title="WCAG - Nouvelle fenêtre" target="_blank"><abbr lang="en" title="web content accessibilty guidelines">WCAG</abbr></a>. <strong>En France, le taux d'accessibilité d'un site est calculé en auditant ce site contre les critères du RGAA.</strong>
        </p>
        <p>
          La méthode technique du RGAA permet de vérifier qu’une page web, tout contenu HTML, est conforme aux 50 critères de succès des niveaux A et AA de la norme internationale WCAG 2.1 qui ont été retenus dans la norme européenne de référence pour établir le niveau d’exigence légale en matière d’accessibilité numérique.
        </p>
        <p>
          La méthode technique du RGAA propose un cadre opérationnel de vérification de la conformité aux exigences d'accessibilité. Elle comporte 106 critères de contrôle RGAA incluant une moyenne de 2,5 tests par critères. Certains tests font référence à des techniques d'implémentation (HTML, CSS, JavaScript...) pour vérifier que le critère est respecté afin de réduire la marge d’interprétation quant au respect des normes d’accessibilité.
        </p>

        <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#contenu" title="Consulter les critères du RGAA - Nouvelle fenêtre" target="_blank" class="button">
          Consulter les critères du RGAA
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
        <h3>Clarification sur les critères</h3>
        <ul>
          <li>Critère à succès (pour les WCAG), niveaux A et AA : 50 critères à succés</li>
          <li>Critère de contrôle (pour le RGAA) : 106 critères de contrôle dans le RGAA 4 (vs 133 dans le RGAA 3)</li>
          <li>Critère de test (pour le RGAA) : 256 critères de test dans le RGAA 4 (vs 334 dans le RGAA 3)</li>
        </ul>
        <p>Consulter la <a href="https://design.numerique.gouv.fr/assets/pdf/RGAA4_vs_WCAG2.1.pdf" target="_blank" title="correspondance des critères de contrôle du RGAA 4 vs critères à succès des WCAG 2.1 - Nouvelle fenêtre">correspondance des critères de contrôle du RGAA 4 vs critères à succès des WCAG 2.1</a>. </p>
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

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
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
  @import "src/assets/scss/_accessibility.scss";
</style>
