<template>
  <Layout class="mission-page" hideNewsletter showServices>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/" class="fr-breadcrumb__link">Commando UX</g-link>
        </li>
        <li>
          <span aria-current="page">{{ $page.mission.title }}</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><CommandoUX class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Commando UX</div>
        <h1>{{ $page.mission.title }}</h1>
      </div>
    </div>

    <div class="content">

      <section class="mission">
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'route']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Statut de l’intervention :</p>
          <p v-if="$page.mission.status == 'futur'" class="mission-detail__status mission-detail__status--futur">À venir</p>
          <p v-else-if="$page.mission.status == 'present'" class="mission-detail__status mission-detail__status--present">En cours</p>
          <p v-else-if="$page.mission.status == 'past'" class="mission-detail__status mission-detail__status--past">Terminée</p>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'desktop']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Démarche :</p>
          <ul class="mission-detail__content mission-detail__content--procedures">
            <li v-for="procedure in $page.mission.procedures">
              <span v-if="procedure.url"><a :href="procedure.url" :title="procedure.name + ' - Nouvelle fenêtre'" target="_blank">{{ procedure.name }}</a></span>
              <span v-else>{{ procedure.name }}</span>
            </li>
          </ul>
        </div>
        <div v-if="$page.mission.budget" class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'euro-sign']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Budget :</p>
          <p class="mission-detail__content">{{ $page.mission.budget }} €</p>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'user-friends']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Impact :</p>
          <p class="mission-detail__content">{{ $page.mission.impact }}</p>
        </div>
        <div v-if="$page.mission.goals.length" class="mission-detail mission-detail--goals">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'tasks']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Résultats attendus :</p>
          <ol class="mission-detail__content mission-detail__content--goals">
            <li v-for="goal in $page.mission.goals" class="goal">
              <font-awesome v-if="goal.done" class="goal__status goal__status--ok" :icon="['fas', 'check']" width="16" height="16" title="Atteint :" />
              <font-awesome v-else="goal.done" class="goal__status" :icon="['fas', 'check']" width="16" height="16" title="Pas encore atteint :" />
              <span class="goal__name">{{ goal.name }}</span>
            </li>
          </ol>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['far', 'calendar-alt']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Date de début :</p>
          <p class="mission-detail__content">{{ $page.mission.startDate }}</p>
        </div>
        <div v-if="$page.mission.endDate" class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['far', 'calendar-check']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Date de fin :</p>
          <p class="mission-detail__content">{{ $page.mission.endDate }}</p>
        </div>
        <div v-if="$page.mission.jobs.length" class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'map-marker-alt']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Lieu :</p>
          <p class="mission-detail__content">
            <span v-if="$page.mission.direction">{{ $page.mission.department }} — {{ $page.mission.direction }} — {{ $page.mission.place }}</span>
            <span v-else>{{ $page.mission.department }} — {{ $page.mission.place }}</span>
          </p>
        </div>
        <div v-if="$page.mission.team.length" class="mission-detail mission-detail--team">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'user-astronaut']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Commando déployé :</p>
          <ul v-if="$page.mission.startDate == '7 septembre 2020'" class="mission-detail__content mission-detail__content--team">
            <li v-for="member in $page.mission.team" :key="member.id" class="team-member">
              <g-image :src="member.photo" class="team-member__photo" alt="" />
              <p class="team-member__description">{{ member.firstName }} {{ member.lastName }} - {{ member.job_title }}</p>
            </li>
          </ul>
          <ul v-else class="mission-detail__content mission-detail__content--team">
            <li v-for="member in $page.mission.team" :key="member.id" class="team-member">
              <g-image :src="member.ghostPhoto" class="team-member__photo" alt="" />
              <p class="team-member__description">{{ member.ghostName }}</p>
            </li>
          </ul>
        </div>
        <div v-if="$page.mission.jobs.length" class="mission-detail mission-detail--job">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'user-plus']" height="16px" aria-hidden="true"/></span>
          <p class="mission-detail__name">Postes à pourvoir :</p>
          <ul class="mission-detail__content mission-detail__content--job">
            <li v-for="job in $page.mission.jobs" :key="job.id" class="team-member">
              <span class="job__count">{{ job.count }}</span>
              <g-link to="/commando-ux/partager-interet/" class="job__title">
                {{ job.title }}
              </g-link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div v-html="$page.mission.content" />
      </section>

    </div>
  </Layout>
</template>


<script>

  import CommandoUX from "~/assets/images/accompagnement.svg";

  export default {
    components: {
      CommandoUX,
    },
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
