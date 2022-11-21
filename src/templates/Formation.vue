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
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/formation-picto.svg" aria-hidden="true">Nos formations en {{ $page.formation.nom }}</h1>
        <p class="fr-text--lead">{{ $page.formation.description }}</p>
      </div>
    </div>

    <ul class="dg-content fr-px-2w fr-py-2w">
      <li v-for="cours in sortedCours" :key="cours.id" class="fr-card fr-card--horizontal-tier fr-enlarge-link fr-mb-2w">
        <div class="fr-card__header">
            <div class="fr-card__img">
            <g-image :src="'/assets/images/formation/' + cours.slug + '.png'" class="fr-responsive-img" alt=""/>
            </div>
        </div>
        <div class="fr-card__body">
          <div class="fr-card__content">
            <h2 class="fr-card__title">
              <g-link :to="'/formations/' + $page.formation.slug + '/' + cours.slug + '/'" class="fr-tile__link">{{ cours.nom }}</g-link>
            </h2>
            <p class="fr-card__desc">{{ cours.descriptionCourte }}</p>
            <div class="fr-card__end">
              <p v-show="futurCours.filter(element => element == cours.id).length > 0" class="dg-flex-start fr-badge fr-badge--sm fr-badge--new">Inscriptions ouvertes</p>
              <p v-show="futurCours.filter(element => element == cours.id).length == 0 && cours.replay" class="dg-flex-start fr-badge fr-badge--sm">Replay disponible</p>
            </div>
            <div class="fr-card__start">
              <p class="fr-card__detail">{{ cours.type }}</p>
            </div>
          </div>
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
        rang
        publier
        descriptionCourte
        image {
          url
        }
        sessions {
          id
          date
          ouverte
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
      sortedCours: function () {
        return this.$page.formation.cours.filter(cours => cours.publier).sort((a, b) => (a.rang - b.rang));
      },
      futurCours: function () {
        var futurList = [];
        this.$page.formation.cours.forEach(cours => {
          var futur = cours.sessions.filter(session => session.ouverte && new Date(session.date) > Date.now());
          futur.length > 0 ? futurList.push(cours.id) : null;
        });
        return futurList;
      },
    },
  };
</script>
