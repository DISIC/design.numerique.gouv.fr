<template>
  <Layout class="services-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Nos services</span>
        </li>
      </ol>
    </nav>
    
    <div class="cover">
     <div class="cover__container">

      <h1 class="highlight"><Services class="h1__icon" focusable="false" aria-hidden="true"/>Nos services</h1>

      <p class="cover__subtitle">Vous avez des besoins en design&nbsp;? Vous vous posez des
        questions sur les sujets d'accessibilité&nbsp;? Vous souhaitez obtenir des retours,
        demander des conseils pour le développement ou l'amélioration de votre service&nbsp;?
        Nous vous aidons&nbsp;!</p>

      <ServicesIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <Services class="h2__icon" focusable="false" aria-hidden="true"/>Les bureaux ouverts
        </h2>
        <p>Rencontrez librement un designer qui prendra du temps pour répondre à vos questions, vous informer, vous donner des retours.</p>

        <h3>Qui</h3>
        <p>Qui que vous soyez, du moment que vous êtes un acteur public et que vous menez un projet numérique.</p>

        <h3>Quand</h3>
        <p>Dès que vous en avez besoin, nous sommes disponibles librement chaque vendredi de 10h à 12h, dans nos bureaux 20 avenue de Ségur 75007 Paris.</p>

        <h3>Comment</h3>
        <p>Très simplement, en prenant <a href="https://calendly.com/designgouv" title="rendez-vous ici - Nouvelle fenêtre" target="_blank">rendez-vous ici.</a></p>

      </section>

      <section>

        <h2>
          <Services class="h2__icon" focusable="false" aria-hidden="true"/>Les revues de conception
        </h2>
        <p>Lors d'un atelier d'un demi-journée, présentez votre service à des membres de la communauté DesignGouv (designers, chefs de projet, etc.) qui vous aideront à mener à bien votre projet. Obtenez des avis, des conseils, des idées, des retours d'expérience.</p>

        <h3>Qui</h3>
        <p>Qui que vous soyez, du moment que vous êtes un acteur public et que vous menez un projet numérique.</p>

        <h3>Quand</h3>
        <p>Les revues de conception sont des événements que nous organisons une fois tous les deux mois. Nous annoncerons bientôt les dates des premiers événements !</p>

        <h3>Comment</h3>
        <p>Nous lancerons bientôt les inscriptions.</p>

      </section>

      <section>


        <h2>
          <Services class="h2__icon" focusable="false" aria-hidden="true"/>Le commando UX
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

  import Services from "~/assets/images/services.svg"
  import ServicesIllustration from "~/assets/images/servicesIllustration.svg"

  export default {
    components: {
      Services,
      ServicesIllustration,
    },
    metaInfo: {
      title: "Nos services pour améliorer vos démarches en ligne - DesignGouv",
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
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .services-page {

  }

</style>
