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
            <a class="fr-breadcrumb__link" aria-current="page">Obligations légales et sanctions</a>
          </li>
        </ol>
      </nav>

      <h1>Obligations légales et sanctions</h1>

      <section>

        <h2>
          Introduction
        </h2>

        <p>
          Les obligations d’accessibilité des sites publics aux personnes en situation de handicap ont été introduites par l’<strong>article 47 de la loi du 11 février 2005</strong>. Ces obligations ont été précisées par le décret du 14 mai 2009 prévoyant un délai de 2 ans pour les services de l’État et de 3 ans pour les collectivités territoriales.
        </p>
        <p>
          Depuis 2012, <strong>tous les sites publics</strong> qu’ils appartiennent aux services de l’État ou aux collectivités territoriales <strong>sont soumis à l’obligation d’accessibilité</strong>.
        </p>
        <p>
          De plus, depuis le 23 septembre 2019, les sites publics doivent <strong>publier une déclaration d’accessibilité</strong> et <strong>afficher leur conformité</strong> dès la page d’accueil.
        </p>

      </section>

      <section>

        <h2>
          Vos obligations
        </h2>

        <p>
          L’obligation d’accessibilité s’étend aux sites intranet, extranet, ainsi qu’aux applications mobiles, progiciels et mobiliers urbains numériques (ex : les distributeurs de titres de transport).
        </p>
        <h3>Pour chaque site ou service, vous devez :</h3>
        <ul>
          <li>Publier en ligne une <strong><g-link to="/accessibilite-numerique/declaration-accessibilite">déclaration d’accessibilité</g-link></strong> indiquant l’état d’accessibilité du site ou service.</li>
          <li>Afficher sur toutes les pages <strong>le taux de conformité au RGAA</strong> du site ou service :
            <ul>
              <li>« <strong>Accessibilité : totalement conforme</strong> » si le taux est égal à 100% (bravo !)</li>
              <li>« <strong>Accessibilité : partiellement conforme</strong> » si le taux est supérieur à 50%</li>
              <li>« <strong>Accessibilité : non conforme</strong> » si le taux est inférieur à 50% ou inconnu</li>
            </ul>
          Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité.
          </li>
          <li>
            Permettre aux usagers de faire part de leurs difficultés, et de saisir le Défenseur des droits en cas de non-réponse du responsable du site.
          </li>
        </ul>


        <h3>Pour votre entité vous devez :</h3>
        <p>
          Produire et publier un <strong><g-link to="/accessibilite-numerique/schema-pluriannuel">schéma pluriannuel de mise en accessibilité</g-link></strong> sur 3 ans, décliné en plan annuel détaillant les actions prévues pour évoluer vers une accessibilité complète.
        </p>

        <p>Consulter le <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038811937" title="décret n° 2019-768 du 24 juillet 2019 - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">décret n° 2019-768 du 24 juillet 2019</a> relatif à l'accessibilité aux personnes handicapées des services de communication au public en ligne.</p>
      </section>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Obligations légales et sanctions",
      meta: [{
        name: 'description',
        content: "Les obligations d’accessibilité des sites publics aux personnes en situation de handicap ont été introduites par l’article 47 de la loi du 11 février 2005."
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
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
