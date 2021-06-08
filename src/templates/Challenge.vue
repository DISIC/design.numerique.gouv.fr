<template>
  <Layout class="mission-page" hideNewsletter showServices>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/">Commando UX</g-link>
        </li>
        <li>
          <span aria-current="page">{{ $page.challenge.title }}</span>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
      <div class="cover__container">
        <div class="cover__subhead"><CommandoUX class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Commando UX</div>
        <h1>{{ $page.challenge.title }}</h1>
      </div>
    </div>

    <div class="content">

      <section class="mission">
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'route']" height="16px"/></span>
          <p class="mission-detail__name">Statut de l'intervention :</p>
          <p v-if="$page.challenge.status == 'futur'" class="mission-detail__status mission-detail__status--futur">À venir</p>
          <p v-else-if="$page.challenge.status == 'present'" class="mission-detail__status mission-detail__status--present">En cours</p>
          <p v-else-if="$page.challenge.status == 'past'" class="mission-detail__status mission-detail__status--past">Terminée</p>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'desktop']" height="16px"/></span>
          <p class="mission-detail__name">Démarche :</p>
          <ul class="mission-detail__content mission-detail__content--procedures">
            <li v-for="procedure in $page.challenge.procedures">
              <span v-if="procedure.url"><a :href="procedure.url" :title="procedure.name + ' - Nouvelle fenêtre'" target="_blank">{{ procedure.name }}</a></span>
              <span v-else>{{ procedure.name }}</span>
            </li>
          </ul>
        </div>
        <!-- <div class="mission-detail">
          <font-awesome :icon="['fas', 'university']" height="16px" class="mission-detail__icon"/>
          <p class="mission-detail__name">Administration :</p>
          <p class="mission-detail__content">{{ $page.challenge.department }} - {{ $page.challenge.direction }}</p>
        </div> -->
        <div v-if="$page.challenge.budget" class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'euro-sign']" height="16px"/></span>
          <p class="mission-detail__name">Budget :</p>
          <p class="mission-detail__content">{{ $page.challenge.budget }} €</p>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'user-friends']" height="16px"/></span>
          <p class="mission-detail__name">Usage :</p>
          <p class="mission-detail__content">{{ $page.challenge.volumetry }} démarches effectuées par an</p>
        </div>
        <div class="mission-detail">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'calendar-check']" height="16px"/></span>
          <p class="mission-detail__name">Date de début :</p>
          <p class="mission-detail__content">{{ $page.challenge.startDate }}</p>
        </div>
        <div class="mission-detail mission-detail--team">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'user-astronaut']" height="16px"/></span>
          <p class="mission-detail__name">Commando :</p>
          <ul class="mission-detail__content mission-detail__content--team">
            <li v-for="member in $page.challenge.team" :key="member.id" class="team-member">
              <g-image :src="member.photo" class="team-member__photo" alt="" />
              <p class="team-member__description"><g-link :to="'/equipe/' + member.id">{{ member.firstName }} {{ member.lastName }}</g-link> — {{ member.job_title }}</p>
            </li>
          </ul>
        </div>
        <div v-if="$page.challenge.goals.length" class="mission-detail mission-detail--goals">
          <span class="mission-detail__icon"><font-awesome :icon="['fas', 'tasks']" height="16px"/></span>
          <p class="mission-detail__name">Impacts :</p>
          <ol class="mission-detail__content mission-detail__content--goals">
            <li v-for="goal in $page.challenge.goals" class="goal">
              <font-awesome v-if="goal.done" class="goal__status goal__status--ok" :icon="['fas', 'check']" width="16" height="16" title="Fait :" />
              <font-awesome v-else="goal.done" class="goal__status" :icon="['fas', 'check']" width="16" height="16" title="À faire :" />
              <span class="goal__name">{{ goal.name }}</span>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div v-html="$page.challenge.content" />
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
        title: this.$page.challenge.title,
        meta: [
          {
            name: "description",
            content: "Une équipe d'expert·e·s du Commando UX est mobilisée sur cette mission"
          },
          {
            property: 'og:title',
            content: this.$page.challenge.title + " - DesignGouv"
          },
          {
            property: 'og:description',
            content: "Une équipe d'expert·e·s du Commando UX est mobilisée sur cette mission"
          },
            {
            property: 'og:image',
            content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
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
            content: this.$page.challenge.title + " - DesignGouv"
          },
          {
            name: "twitter:description",
            content: "Une équipe d'expert·e·s du Commando UX est mobilisée sur cette mission"
          },
          {
            name: "twitter:image",
            content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
          },
        ]
      };
    }
  };

</script>


<page-query>

  query Challenge ($id: ID!) {
    challenge: challenge (id: $id) {
      department
      direction
      content
      title
      status
      budget
      procedures {
        name
        url
      }
      goals {
        name
        done
      }
      volumetry
      startDate (format: "D MMMM YYYY", locale : "fr")
      team {
        id
        firstName
        lastName
        photo (width: 64, height: 64, quality: 100)
        path
        job_title
      }
    }
  }

</page-query>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .mission-page {

    .cover {
      margin-bottom: 4rem;

      h1 {
        font-size: 2.5rem;
      }

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 3rem;

        h1 {
          font-size: 2rem;
        }
      }
    }

    .content {

      max-width: 36rem;
      margin: 0 auto;

      h2 {
        margin-top: 3rem;
      }

      h3 {
        margin-top: 2rem;
      }

      .mission {
        margin-bottom: 4rem;

        .mission-detail {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 0.5rem;

          @media only screen and (max-width: $mobile-max-width) {
            flex-wrap: wrap;
          }

          &--team, &--goals {
            flex-wrap: wrap;
          }

          &__icon {
            background-color: $light-gray;
            border-radius: 50%;
            padding: 0.25rem;
            margin: 0 0.5rem 0 0;
            width: 1.5rem;
            height: 1.5rem;
            color: $red;
            text-align: center;
          }

          &__name {
            flex-shrink: 0;
            margin: 0.25rem 0.5rem 0 0;
            font-weight: bold;
          }

          &__content {
            margin: 0.25rem 0 0 0;

            &--procedures {
              padding: 0;

              @media only screen and (max-width: $mobile-max-width) {
                margin: 0 0 0 2.5rem;
              }

              li {
                list-style: none;
              }
            }

            &--team {
              margin: 0.5rem 0 0 2.5rem;
              padding: 0;
              flex-basis: 100%;

              @media only screen and (max-width: $mobile-max-width) {
                margin-top: 0.25rem;
              }

              .team-member {
                display: flex;
                list-style: none;
                margin: 0 0 0.5rem 0;

                &__photo {
                  border-radius: 50%;
                  width: 1.625rem;
                  height: 1.625rem;
                  margin-right: 0.75rem;
                }

                &__description {
                    font-weight: normal;
                    margin: 0.075rem 0 0 0;
                }
              }
            }

            &--goals {
              margin: 0.75rem 0 0 2.5rem;
              padding: 0;
              flex-basis: 100%;

              li {
                list-style: none;
              }

              .goal {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;

                &__status {
                  margin-right: 0.75rem;
                  font-size: 1rem;
                  border: 2px solid $gray;
                  height: 0.675rem;
                  width: 0.675rem;
                  padding: 0.25rem;
                  border-radius: 50%;
                  color: white;

                  &--ok {
                    color: $blue;
                    border-color: $blue;
                  }
                }

                &__name {
                  font-weight: normal;
                }
              }
            }
          }

          &__status {
            text-align: center;
            width: 4.5rem;
            border: solid 2px $gray;
            border-radius: 0.25rem;
            background-color: $gray;
            margin: 0;
            font-size: 0.875rem;
            font-weight: 500;
            padding: 0.125rem 0.75rem;

            &--futur {
              border-color: $gray;
              color: $black;
              background-color: white;
            }

            &--past {
              border-color: $light-gray;
              color: $black;
              background-color: $light-gray;
            }

            &--present {
              border-color: $blue;
              background-color: white;
              color: $blue;
            }
          }
        }
      }

      .steps {
        margin-left: 56px;
        padding-left: 32px;
        border-left: 4px dotted $blue;

        @media only screen and (max-width: $mobile-max-width) {
          margin-left: 8px;
          padding-left: 21px;
        }

        h3 {
          &:before {
            background-image: url(/assets/images/step.svg);
            background-size: 32px 32px;
            display: inline;
            position: absolute;
            margin-left: -50px;
            margin-top: -5px;
            width: 32px;
            height: 32px;
            content:"";

            @media only screen and (max-width: $mobile-max-width) {
              margin-left: -39px;
              margin-top: -5px;
            }
          }

          &:last-of-type {
            &:before {
              background-image: url(/assets/images/stepLong.svg);
              background-size: 32px 108px;
              width: 32px;
              height: 108px;
              margin-top: -15px;
            }
          }
        }
      }
    }
  }

</style>
