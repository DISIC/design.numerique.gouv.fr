<template>
  <Layout class="services-page">

    <!-- <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Nos services</span>
        </li>
      </ol>
    </nav> -->

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Accompagnement class="h1__icon" focusable="false" aria-hidden="true"/>Nos dispositifs d'accompagnement</h1>

      <p class="cover__subtitle">Vous avez des besoins en design&nbsp;? Vous vous posez des
        questions sur les sujets d'accessibilité&nbsp;? Vous souhaitez obtenir des retours,
        demander des conseils pour le développement ou l'amélioration de votre service&nbsp;?
        Nous vous aidons&nbsp;!</p>

      </div>
    </div>

    <div class="content">

      <section class="action">

        <div class="action__title">
          <font-awesome :icon="['fas', 'user-astronaut']" focusable="false" class="action__icon" aria-hidden="true" transform="shrink-6" height="16px" width="16px"/>
          <h2><g-link to="/commando-ux/">Le Commando UX</g-link></h2>
        </div>

        <p>Faites intervenir nos experts pour améliorer la qualité de vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <h3>Qui</h3>
        <p>Les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>.</p>

        <h3>Comment</h3>
        <p>Rendez-vous sur <g-link to="/commando-ux/">notre page dédiée au Commando UX</g-link>.</p>

      </section>

      <section class="action">

        <div class="action__title">
          <FranceRelance focusable="false" class="action__icon" aria-hidden="true" height="16" width="16"/>
          <h2><a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Le guichet France Relance - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Notre guichet France Relance</a></h2>
        </div>

        <p>Obtenez un financement ou des ressources pour concrétiser un projet d'améliorer de la qualité de vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <h3>Qui</h3>
        <p>Les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>.</p>

        <h3>Comment</h3>
        <p>Retrouvez toutes les informations sur <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" rel="noreferrer noopener" title="la page de notre guichet France Relance - Nouvelle fenêtre">la page de notre guichet France Relance</a>.</p>

      </section>

      <section class="action">

        <div class="action__title">
          <Observatoire focusable="false" class="action__icon" aria-hidden="true" height="16px" width="16px"/>
          <h2><a href="https://observatoire.numerique.gouv.fr/" title="L’observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L'Observatoire</a></h2>
        </div>

        <p>Suivez la qualité de vos démarches en ligne et récoltez les avis de vos usagers grâce au <a href="https://observatoire.numerique.gouv.fr/Aide/Donner%20son%20avis" target="_blank" rel="noreferrer noopener" title="bouton Je donne mon avis - Nouvelle fenêtre">bouton <i>Je donne mon avis</i></a>.</p>

        <h3>Qui</h3>
        <p>Tous les services publics numériques, avec un focus particulier sur les 250 démarches les plus utilisées.</p>

        <h3>Comment</h3>
        <p>En vous rendant sur <a href="https://observatoire.numerique.gouv.fr/observatoire/" title="le site de l'Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">le site de l'Observatoire de la qualité des démarches en ligne</a>.</p>

      </section>

    </div>

  </Layout>
</template>

<script>

  import Accompagnement from "~/assets/images/accompagnement.svg"
  import FranceRelance from "~/assets/images/franceRelance.svg"
  import Observatoire from "~/assets/images/observatoire.svg"

  export default {
    components: {
      Accompagnement,
      FranceRelance,
      Observatoire
    },
    metaInfo: {
      title: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques",
      meta: [{
        name: 'description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:title',
        content: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
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
        content: "Nos dispositifs d'accompagnement pour l'amélioration des services publics numériques - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Découvrez les accompagnements que nous proposons pour améliorer la qualité des démarches en ligne."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .services-page {

    .content {

      .action {
        &__title {
          margin-bottom: 1rem;
          display: flex;

          @media only screen and (max-width: $mobile-max-width) {
            display: flex;
          }

          h2 {
            display: inline;
            padding: 0.25rem 0;
            margin: 0;

            @media only screen and (max-width: $mobile-max-width) {
              display: inline;
            }
          }

          a {
            border-bottom: none !important;
          }
        }

        &__icon {
          display: inline-block;
          height: 2.75rem;
          width: 2.75rem;
          margin-right: 1rem;
          color: $red;
          background-color: $light-gray;
          border-radius: 50%;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            height: 2.25rem;
            width: 2.25rem;
          }
        }

        h3 {
          margin-bottom: 0rem;
        }

        p {
          margin: 0.5rem 0;
        }
      }
    }
  }

</style>
