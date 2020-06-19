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
          <g-link to="/accessibilite-numerique/cadre-legal" aria-current="page">Obligations légales et sanctions</g-link>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumbb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" aria-hidden="true"/>Accessibilité</div>
       <h1>Obligations légales et sanctions</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          Introduction
        </h2>

        <p>
          Les obligations d’accessibilité des sites publics aux personnes en situation de handicap ont été introduites par l’article 47 de la loi du 11 février 2005. Ces obligations ont été précisées par le décret du 14 mai 2009 prévoyant un délai de 2 ans pour les services de l’État et de 3 ans pour les collectivités territoriales.
        </p>
        <p>
          <strong>Depuis 2012, tous les sites publics qu’ils appartiennent aux services de l’État ou aux collectivités territoriales sont soumis à l’obligation d’accessibilité.</strong>
        </p>

      </section>

      <section>

        <h2>
          Vos obligations
        </h2>

        <p>
          L’obligation d’accessibilité s’étend aux sites intranet, extranet, ainsi qu’aux applications mobiles, progiciels et mobiliers urbains numériques (ex : les distributeurs de titres de transport).
        </p>
        <h3>Pour chaque site ou service vous devrez :</h3>
        <ul>
          <li>Publier en ligne une <strong><g-link to="/accessibilite-numerique/declaration-accessibilite">déclaration d’accessibilité</g-link></strong> indiquant en détail l’état d’accessibilité du site ou service</li>
          <li>Afficher dès la page d’accueil <strong>l’état d’accessibilité</strong> du site ou service. Il vous faudra pour cela connaître son taux d'accessibilité (<a href="https://www.monparcourshandicap.gouv.fr/" target="_blank">exemple</a>). Si le taux :
            <ul>
              <li>est égal à 100% (bravo !), vous afficherez « Accessibilité : totalement conforme »</li>
              <li>est supérieur à 50%, vous afficherez « Accessibilité : partiellement conforme »</li>
              <li>est inférieur à 50%, vous afficherez « Accessibilité : non conforme »</li>
            </ul>
          Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité.
          </li>
        </ul>
        <p>
          Les usagers doivent pouvoir faire part de leurs difficultés, et saisir le Défenseur des droits en cas de non-réponse du responsable du site.
        </p>


        <h3>Pour votre entité vous devrez :</h3>
        <p>
          Produire et publier un <strong><g-link to="/accessibilite-numerique/schema-pluriannuel">schéma pluriannuel de mise en accessibilité</g-link></strong> sur 3 ans, décliné en plan annuel détaillant les actions prévues pour évoluer vers une accessibilité complète.
        </p>

        <p>Consulter le <a href="https://beta.legifrance.gouv.fr/jorf/id/JORFTEXT000038811937" target="_blank">décret n° 2019-768 du 24 juillet 2019</a> relatif à l'accessibilité aux personnes handicapées des services de communication au public en ligne.</p>
      </section>

      <section>
        <h2>Calendrier des obligations</h2>

        <ul>
          <li><strong>23 septembre 2019</strong> : tous les sites du secteur public créés après le 23 septembre 2018 (date d’entrée en vigueur de la directive européenne) doivent être accessibles</li>
          <li><strong>23 septembre 2020</strong> : les sites du secteur public créés avant le 23 septembre 2018 doivent être accessibles</li>
          <li><strong>23 juin 2021</strong> : toutes les applications mobiles, les progiciels et les mobiliers urbains numériques doivent être accessibles</li>
        </ul>

      </section>

      <section>
        <h2>Sanctions administratives</h2>
        <p>
          Le manquement à ces obligations déclaratives peut entraîner une sanction financière prononcée par le ministre chargé des personnes handicapées d’un montant de 20 000 euros par service en ligne.
        </p>

        <p>
          La Direction générale de la cohésion sociale est chargée de vérifier le respect des obligations et de proposer les sanctions à prononcer Ministre chargé des affaires sociales.
        </p>
      </section>

      <section>
        <h2>
          Transposition de la directive européenne
        </h2>

        <p>
          La norme européenne pour l'accès aux produits et services TIC (<a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf">EN-301549</a>) a été mise à jour en 2018 pour inclure les nouveaux critères internationaux sur l'accessibilité (<a href="https://www.w3.org/TR/WCAG21/" target="_blank">WCAG 2.1</a>), à travers la directive européenne 2016/2102 relative à l'accessibilité des sites internet et des applications mobiles des organismes du secteur public.
        </p>

        <p>La transposition de cette directive (2016/2102) européenne a été achevée par :</p>
        <ol>
          <li>La modification de l’article 47 de la loi du 11 février 2005 par l’article 80 de la loi n° 2018-771</li>
          <li>La publication du décret n° 2019-768 du 24 juillet 2019 relatif à l'accessibilité des services de communication au public en ligne aux personnes handicapées</li>
          <li>La publication de l’arrêté du 20 septembre 2019 mettant en vigueur et approuvant la version 4.0 du Référentiel général de l’amélioration de l’accessibilité (RGAA).</li>
        </ol>

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
