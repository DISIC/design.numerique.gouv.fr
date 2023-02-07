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
              <span aria-current="page">{{ $page.mission.title }}</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">{{ $page.mission.title }}</h1>
        <p class="fr-text--lead">Cette mission est menée dans le cadre de notre accompagnement <g-link to="/commando-ux/">Commando UX</g-link>.</p>
      </div>
    </div>

    <div class="dg-content dg-content--xs fr-px-2w">
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'route']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Statut :</p>
        <p v-if="$page.mission.status == 'futur'" class="fr-badge fr-badge--pink-macaron">À venir</p>
        <p v-else-if="$page.mission.status == 'present'" class="fr-badge fr-badge--green-tilleul-verveine">En cours</p>
        <p v-else-if="$page.mission.status == 'past'" class="fr-badge fr-badge--grey">Terminée</p>
      </div>
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'desktop']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Démarche :</p>
        <ul class="detail__data detail__data--procedures">
          <li v-for="procedure in $page.mission.procedures">
            <span v-if="procedure.url"><a :href="procedure.url" :title="procedure.name + ' - Nouvelle fenêtre'" target="_blank">{{ procedure.name }}</a></span>
            <span v-else>{{ procedure.name }}</span>
          </li>
        </ul>
      </div>
      <div v-if="$page.mission.budget" class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'euro-sign']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Budget :</p>
        <p class="detail__data">{{ $page.mission.budget }} €</p>
      </div>
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'user-friends']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Impact :</p>
        <p class="detail__data">{{ $page.mission.impact }}</p>
      </div>
      <div v-if="$page.mission.goals.length" class="detail detail--goals fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'tasks']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w fr-mb-2w">Résultats attendus :</p>
        <ol class="detail__data detail__data--goals fr-ml-2w fr-ml-md-6w fr-mb-1v">
          <li v-for="goal in $page.mission.goals" class="goal fr-mb-1v">
            <span v-if="goal.done"  class="goal__status goal__status--ok fr-mr-1w"><font-awesome :icon="['fas', 'check']" width="16" height="16" title="Atteint :" /></span>
            <span v-else class="goal__status fr-mr-1w"><font-awesome :icon="['fas', 'check']" width="16" height="16" title="Pas encore atteint :" /></span>
            <span class="goal__name">{{ goal.name }}</span>
          </li>
        </ol>
      </div>
      <div class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['far', 'calendar-alt']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Date de début :</p>
        <p class="detail__data">{{ $page.mission.startDate }}</p>
      </div>
      <div v-if="$page.mission.endDate" class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['far', 'calendar-check']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Date de fin :</p>
        <p class="detail__data">{{ $page.mission.endDate }}</p>
      </div>
      <div v-if="$page.mission.jobs.length" class="detail fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'map-marker-alt']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w">Lieu :</p>
        <p class="detail__data">
          <span v-if="$page.mission.direction">{{ $page.mission.department }} — {{ $page.mission.direction }} — {{ $page.mission.place }}</span>
          <span v-else>{{ $page.mission.department }} — {{ $page.mission.place }}</span>
        </p>
      </div>
      <div v-if="$page.mission.team.length" class="detail detail--team fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'user-astronaut']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w fr-mb-2w">Commando déployé :</p>
        <ul class="detail__data detail__data--team fr-ml-2w fr-ml-md-6w fr-mb-1v">
          <li v-for="member in $page.mission.team" :key="member.id" class="team-member fr-mb-1v">
            <g-image :src="member.photo" class="team-member__photo fr-mr-1w" alt="" />
            <p class="team-member__description">{{ member.firstName }} {{ member.lastName }} - {{ member.job_title }}</p>
          </li>
        </ul>
      </div>
      <div v-if="$page.mission.jobs.length" class="detail detail--job fr-mb-1w">
        <span class="dg-picto dg-picto--sm fr-mr-1w"><font-awesome :icon="['fas', 'user-plus']" height="16px" aria-hidden="true"/></span>
        <p class="detail__name fr-mr-1w fr-mb-2w">Postes à pourvoir :</p>
        <ul class="detail__data detail__data--job fr-ml-2w fr-ml-md-6w fr-mb-1v">
          <li v-for="job in $page.mission.jobs" :key="job.id" class="team-member fr-mb-1v">
            <span class="dg-picto dg-picto--xs dg-picto--pink dg-text-bold fr-mr-1w">{{ job.count }}</span>
            <g-link to="/commando-ux/partager-interet/" class="job__title">
              {{ job.title }}
            </g-link>
          </li>
        </ul>
      </div>

      <div class=" dg-content dg-content--xs fr-mt-6w" v-html="$page.mission.content" />

    </div>

  </Layout>
</template>


<page-query>
  query Mission ($id: ID!) {
    mission: mission (id: $id) {
      title
      status
      procedures {
        name
        url
      }
      budget
      impact
      startDate (format: "D MMMM YYYY", locale : "fr")
      endDate (format: "D MMMM YYYY", locale : "fr")
      department
      direction
      place
      jobs {
        title
        count
      }
      team {
        id
        firstName
        lastName
        photo (width: 52, height: 52, quality: 100)
        job_title
        ghostName
        ghostPhoto (width: 52, height: 52, quality: 100)
      }
      goals {
        name
        done
      }
      content
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.mission.title,
        meta: [
          {
            name: "description",
            content: "Une équipe d'experts du Commando UX est mobilisée sur cette mission"
          },
          {
            property: 'og:title',
            content: this.$page.mission.title + " - DesignGouv"
          },
          {
            property: 'og:description',
            content: "Une équipe d'experts du Commando UX est mobilisée sur cette mission"
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
            content: this.$page.mission.title + " - DesignGouv"
          },
          {
            name: "twitter:description",
            content: "Une équipe d'experts du Commando UX est mobilisée sur cette mission"
          },
          {
            name: "twitter:image",
            content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
          },
        ]
      };
    }
  };
</script>


<style lang="scss" scoped>

  .detail {
    display: flex;
    align-items: baseline;

    &--team, &--job, &--goals {
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

      &--procedures {
        padding: 0;

        li {
          list-style: none;
        }
      }

      &--team, &--job {
        flex-basis: 100%;

        .team-member, .job {
          display: flex;
          align-items: center;

          &__photo {
            border-radius: 50%;
            width: 1.75rem;
            height: 1.75rem;
          }

          &__description, &__title {
              font-weight: normal;
              margin: 0;
          }
        }
      }

      &--goals {

        .goal {
          display: flex;
          align-items: center;

          &__status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--border-action-low-pink-macaron);
            height: 1.75rem;
            width: 1.75rem;
            font-size: 0.875rem;
            border-radius: 50%;
            color: var(--background-default-grey);
            flex-shrink: 0;

            &--ok {
              color: var(--text-label-pink-macaron);
              border-color: var(--background-contrast-pink-macaron);
              background-color: var(--background-contrast-pink-macaron);
            }
          }
        }
      }
    }
  }
</style>
