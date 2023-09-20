<template>
  <Layout showServices>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/accompagnement/" class="fr-breadcrumb__link">Accompagnement</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">{{ $page.accompagnement.name }}</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">{{ $page.accompagnement.name }}</h1>
        <p class="fr-text--lead">{{ $page.accompagnement.description }}</p>
      </div>
    </div>

    <div class="dg-content dg-content--xs fr-px-2w">
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'route']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Statut :</p>
        <p v-if="$slugify($page.accompagnement.status[0]) == 'termine'" class="fr-badge fr-badge--success fr-badge--no-icon">Terminé</p>
        <p v-else class="fr-badge fr-badge--info fr-badge--no-icon">En cours</p>
      </div>
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'user-friends']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Volumétrie :</p>
        <p class="detail__data">{{ $page.accompagnement.volumetry }} usagers par an</p>
      </div>
      <div v-if="$page.accompagnement.impact" class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'tasks']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Impacts :</p>
        <p class="detail__data">{{ $page.accompagnement.impact }}</p>
      </div>
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['far', 'calendar-alt']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Année :</p>
        <p class="detail__data">{{ new Date($page.accompagnement.date).getFullYear() }}</p>
      </div>
      <div v-if="$page.accompagnement.experts.length" class="detail detail--team fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'user-astronaut']" height="16px" aria-hidden="true"/></span>
        <p v-if="$page.accompagnement.experts.length < 2" class="detail__name fr-mr-1w fr-mb-2w">Expert déployé :</p>
        <p v-else class="detail__name fr-mr-1w fr-mb-2w">Experts déployés :</p>
        <ul class="detail__data detail__data--team fr-ml-2w fr-ml-md-6w fr-mb-1v">
          <li v-for="expert in $page.accompagnement.experts" :key="expert" class="team-member fr-mb-1v">
            <g-image :src="findPhoto(expert).photo" class="team-member__photo fr-mr-1w" alt="" />
            <p class="team-member__description">{{ expert }}</p>
          </li>
        </ul>
      </div>

      <div class=" dg-content dg-content--xs fr-mt-6w" v-html="$page.accompagnement.content.content" />

    </div>

  </Layout>
</template>


<page-query>
  query ($id: ID!) {
    accompagnement: accompagnement (id: $id) {
      id
      name
      mission
      volumetry
      experts
      date
      status
      impact
      content {content}
    }
    people: allPeople (sortBy: "lastName", order: ASC) {
      edges {
        node {
          id
          firstName
          lastName
          job_title
          photo (width: 96, height: 96, quality: 100)
        }
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.accompagnement.name,
        meta: [
          {
            name: "description",
            content: this.$page.accompagnement.mission
          },
          {
            property: 'og:title',
            content: this.$page.accompagnement.name + " - DesignGouv"
          },
          {
            property: 'og:description',
            content: this.$page.accompagnement.mission
          },
            {
            property: 'og:image',
            content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
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
            content: this.$page.accompagnement.name + " - DesignGouv"
          },
          {
            name: "twitter:description",
            content: this.$page.accompagnement.mission
          },
          {
            name: "twitter:image",
            content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
          },
        ]
      };
    },
    methods: {
      findPhoto(name) {
        return this.$page.people.edges.filter(person => person.node.id == this.$slugify(name))[0].node;
      }
    }
  };
</script>


<style lang="scss" scoped>

  .detail {
    display: flex;
    align-items: baseline;

    &--team {
      flex-wrap: wrap;
    }

    &__name {
      flex-shrink: 0;
      margin: 0;
      font-weight: bold;
    }

    &__data {
      margin: 0;
      padding: 0;

      li {
        &:before {
          content: none;
        }
      }

      &--team {
        flex-basis: 100%;

        .team-member {
          display: flex;
          align-items: center;

          &__photo {
            border-radius: 50%;
            width: 1.75rem;
            height: 1.75rem;
          }

          &__description {
              font-weight: normal;
              margin: 0;
          }
        }
      }
    }
  }
</style>
