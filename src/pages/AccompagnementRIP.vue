<template>
  <Layout>

    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Nos offres d'accompagnement</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/accompagnement-picto.svg" aria-hidden="true">Nos offres d'accompagnement</h1>
        <p class="fr-text--lead">Vous avez des besoins en design&nbsp;? Vous vous posez des questions sur les sujets d'accessibilité&nbsp;? Vous souhaitez obtenir des retours, demander des conseils pour le développement ou l'amélioration de votre service&nbsp;? Nous vous aidons&nbsp;!</p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <section>
        <h2>Le Commando UX</h2>
        <p>Faites intervenir nos experts pour améliorer la qualité de vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>
        <h3>Qui</h3>
        <p>Les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>.</p>
        <h3>Comment</h3>
        <p>Rendez-vous sur <g-link to="/commando-ux/">notre page dédiée au Commando UX</g-link>.</p>
      </section>
<!--       <section >
        <h2>Notre guichet France Relance</h2>
        <p>Obtenez un financement ou des ressources pour concrétiser un projet d'améliorer de la qualité de vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>
        <h3>Qui</h3>
        <p>Les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>.</p>
        <h3>Comment</h3>
        <p>Retrouvez toutes les informations sur <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" rel="noreferrer noopener" title="la page de notre guichet France Relance - Nouvelle fenêtre">la page de notre guichet France Relance</a>.</p>
      </section>
 -->      <section>
        <h2>L'Observatoire</h2>
        <p>Suivez la qualité de vos démarches en ligne et récoltez les avis de vos usagers grâce au <a href="https://observatoire.numerique.gouv.fr/Aide/Donner%20son%20avis" target="_blank" rel="noreferrer noopener" title="bouton Je donne mon avis - Nouvelle fenêtre">bouton <i>Je donne mon avis</i></a>.</p>
        <h3>Qui</h3>
        <p>Tous les services publics numériques, avec un focus particulier sur les 250 démarches les plus utilisées.</p>
        <h3>Comment</h3>
        <p>En vous rendant sur <a href="https://observatoire.numerique.gouv.fr/observatoire/" title="le site de l'Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">le site de l'Observatoire de la qualité des démarches en ligne</a>.</p>
      </section>
    </section>

  </Layout>
</template>

<script>

  export default {
    metaInfo: {
      title: "Nos offres d'accompagnement",
      meta: [{
        name: 'description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:title',
        content: "Nos offres d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv"
      },
      {
        name: "twitter:title",
        content: "Nos offres d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }

</script>
