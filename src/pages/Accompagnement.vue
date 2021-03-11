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

      <h1 class="text-highlight"><Accompagnement class="h1__icon" focusable="false" aria-hidden="true"/>Accompagnement</h1>

      <p class="cover__subtitle">Vous avez des besoins en design&nbsp;? Vous vous posez des
        questions sur les sujets d'accessibilité&nbsp;? Vous souhaitez obtenir des retours,
        demander des conseils pour le développement ou l'amélioration de votre service&nbsp;?
        Nous vous aidons&nbsp;!</p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <font-awesome :icon="['fas', 'user-astronaut']" focusable="false" class="h2__icon" aria-hidden="true" transform="shrink-6" height="16px" width="16px"/>Le Commando UX
        </h2>
        <p>Faites intervenir une équipe d'experts pour améliorer la qualité de vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <h3>Qui</h3>
        <p>Les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank">Observatoire de la qualité des démarches en ligne</a>. Votre démarche n'en fait pas partie ? Rencontrez-nous lors de nos Bureaux ouverts !</p>

        <h3>Comment</h3>
        <p>En nous contactant via e-mail <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a>.</p>

      </section>

      <section>

        <h2>
          <FranceRelance focusable="false" class="h2__icon" aria-hidden="true" height="16" width="16"/> Notre guichet FranceRelance
        </h2>
        <p>Faites intervenir une équipe d'experts pour vous aider à améliorer vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <h3>Qui</h3>
        <p>En priorité, les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank">Observatoire de la qualité des démarches en ligne</a>. Votre démarche n'en fait pas partie ? Rencontrez-nous lors de nos Bureaux ouverts !</p>

        <h3>Quand</h3>
        <p>Nous conviendrons ensemble d'un premier rendez-vous pour discuter plus en détails de votre démarche et vous présenter un premier diagnostique rapide.</p>

        <h3>Comment</h3>
        <p>En nous contactant via e-mail <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a>.</p>

      </section>

      <section>

        <h2>
          <Accompagnement class="h2__icon" focusable="false" aria-hidden="true"/>Accessible par Design
        </h2>

        <h3>Je veux rendre accessible mes sites et démarches en ligne</h3>
        <p>Voici <a href="https://www.notion.so/designgouv/Je-veux-rendre-accessible-mes-interfaces-num-riques-ce1966fa48d940aca486e8bac02454bd" target="_blank">différentes idées et solutions pour vous accompagner</a> dans le grand chantier de mise en œuvre de l'accessibilité.</p>
        <p>Pour vous guider, vous pouvez utiliser le <a href="/accessibilite-numerique/jeu-de-oaa/">jeu de l’organisation de l’amélioration de l‘accessibilité</a>.</p>
      </section>

      <section>

        <h2>
          <Accompagnement class="h2__icon" focusable="false" aria-hidden="true"/>Le commando UX
        </h2>
        <p>Faites intervenir notre équipe pour vous aider à améliorer vos démarches en ligne (Expérience utilisateur, Accessibilité, Design, FranceConnect, Dites-le nous une fois).</p>

        <h3>Qui</h3>
        <p>En priorité, les démarches qui apparaissent dans le Top 250 de l'<a href="https://observatoire.numerique.gouv.fr/observatoire/" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank">Observatoire de la qualité des démarches en ligne</a>. Votre démarche n'en fait pas partie ? Rencontrez-nous lors de nos Bureaux ouverts !</p>

        <h3>Quand</h3>
        <p>Nous conviendrons ensemble d'un premier rendez-vous pour discuter plus en détails de votre démarche et vous présenter un premier diagnostique rapide.</p>

        <h3>Comment</h3>
        <p>En nous contactant via e-mail <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a>.</p>

      </section>

    </div>

  </Layout>
</template>

<script>

  import Accompagnement from "~/assets/images/accompagnement.svg"
  import FranceRelance from "~/assets/images/franceRelance.svg"

  export default {
    components: {
      Accompagnement,
      FranceRelance
    },
    metaInfo: {
      title: "Nos services pour améliorer vos démarches en ligne",
      meta: [{
        name: 'description',
        content: "Découvrez les services que nous proposons pour accompagner l'amélioration des démarches en lignes."
      },
      {
        property: 'og:title',
        content: "Nos services pour améliorer vos démarches en ligne - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les services que nous proposons pour accompagner l'amélioration des démarches en lignes."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .services-page {

    h2 {
      margin-bottom: 1rem;
    }

    .h2__icon {
      height: 42px;
      width: 42px;
      background-color: $light-gray;
      border-radius: 50%;
      color: $red;
    }

    h3 {
      margin-bottom: 0rem;
    }

    p {
      margin: 0.5rem 0;
    }

  }

</style>
