<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-4w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/formations/" class="fr-breadcrumb__link">Formations</g-link>
            </li>
            <li>
              <span aria-current="page">{{ $page.formation.nom }}</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Nos formations en {{ $page.formation.nom }}</h1>
        <p class="fr-text--lead">{{ $page.formation.description }}</p>
      </div>
    </div>

    <ul class="dg-content fr-px-2w fr-py-2w">
      <li v-for="cours in $page.formation.cours" class="fr-card fr-card--horizontal fr-enlarge-link fr-mb-2w">
        <div class="fr-card__body">
          <h3 class="fr-card__title">
            <g-link :to="'/formations/' + $page.formation.slug + '/' + cours.slug + '/'" class="fr-tile__link">{{ cours.nom }}</g-link>
          </h3>
          <p class="fr-card__desc">{{ cours.descriptionCourte }}</p>
          <p v-if="futurCours.filter(element => element == cours.id).length > 0" class="dg-flex-start fr-badge fr-badge--sm fr-badge--new">Inscriptions ouvertes</p>
          <p v-else-if="cours.replay" class="dg-flex-start fr-badge fr-badge--sm">Replay disponible</p>
          <p class="fr-card__detail">{{ cours.type == 'Amphi' ? 'Webinaire' : 'Atelier' }}</p>
        </div>
        <div class="fr-card__img">
         <g-image :src="cours.image[0].url" class="fr-responsive-img" alt=""/>
        </div>
      </li>
    </ul>

  </Layout>
</template>


<page-query>
  query Formation ($id: ID!) {
    formation: formation(id: $id) {
      id
      slug
      nom
      description
      cours {
        id
        slug
        nom
        type
        replay
        descriptionCourte
        image {
          url
        }
        sessions {
          id
          date
        }
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: "Formations en " + this.$page.formation.nom,
        meta: [
          {
            name: "description",
            content: this.$page.formation.description
          },
          {
            property: 'og:title',
            content: "Formations en " + this.$page.formation.nom + " - DesignGouv"
          },
          {
            property: 'og:description',
            content: this.$page.formation.description
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
            content: "Formations en " + this.$page.formation.nom + " - DesignGouv"
          },
          {
            name: "twitter:description",
            content: this.$page.formation.description
          },
          {
            name: "twitter:image",
            content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
          },
        ]
      };
    },
    computed: {
      futurCours: function () {
        var futurList = [];
        this.$page.formation.cours.forEach(cours => {
          var futur = cours.sessions.sort((a, b) => a.date > b.date).filter(session => new Date(session.date) > Date.now());
          futur.length > 0 ? futurList.push(cours.id) : null;
        });
        return futurList;
      },
    },
  };
</script>


<style lang="scss">

  .fr-card--horizontal .fr-card__img {

    @media (min-width: 48em) {
      max-width: 24%;
    }
  }

</style>
