<template>
  <Layout class="commando-ux-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><CommandoUX class="h1__icon" focusable="false" aria-hidden="true"/>Commando UX</h1>

      <p class="cover__subtitle">
        Une équipe d’experts mobilisés pour améliorer l’expérience des 250&nbsp;services publics numériques les plus utilisés par les Françaises et Français.
      </p>

      </div>
    </div>

    <div class="content">

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Des experts au sein des administrations
        </h2>
        <p>
          Après le succès de la <g-link to="/commando-ux/saison-1/">saison 1 du Commando UX</g-link>, nous réitérons l’aventure : déployer des experts du numérique au sein des administrations pour rendre <strong>plus accessibles et plus compréhensibles</strong> les <a href="https://observatoire.numerique.gouv.fr" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">250 démarches administratives</a> les plus utilisées par les Français.
        </p>
        <p>
          L’immersion de chaque Commando revêt un double bénéfice : livrer des améliorations concrètes tout en diffusant des pratiques innovantes au sein des administrations d’accueil.
        </p>
      </section>

      <section class="items">

          <div class="item item--left">
            <div class="item__content">
              <font-awesome :icon="['fas', 'university']" class="item__icon" width="16" height="16" aria-hidden="true" />
              <h3>Administrations de l’État</h3>
              <p>
                Vous êtes en charge de l’une des démarches recensées dans l’Observatoire et vous souhaitez accueillir un Commando UX.
              </p>
            </div>

            <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" title="Candidatez - Nouvelle fenêtre" class="item__link button button--highlight">
              Candidatez<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </a>
          </div>

          <div class="item item--right">
            <div class="item__content">
              <font-awesome :icon="['fas', 'user-astronaut']" class="item__icon" width="16" height="16" aria-hidden="true" />
              <h3>Experts expérience utilisateur</h3>
              <p>
                Vous êtes spécialisé en produit, design (UI/UX), dev front, accessibilité, recherche utilisateur, rédaction UX et vous souhaitez vous impliquer.
              </p>
            </div>

            <a href="https://airtable.com/shrJCzhOxWgwXZTZ4" target="_blank" title="Partagez votre intérêt - Nouvelle fenêtre" class="item__link button button--highlight">
              Partagez votre intérêt<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </a>
          </div>

      </section>


      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le commando saison 2
        </h2>
        <p>
          Ce nouveau Commando UX fonctionne en continu. Nous avons déjà des experts en place sur différents projets et démarches depuis mai 2021.
        </p>
        <ul class="team">
          <li v-for="{ node } in $page.allPeople.edges" :key="node.id" class="team-member">
            <g-image class="team-member__photo" :src="node.photo" alt="" />
            <div class="team-member__description">
              <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
              <p>{{ node.job_title }}</p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Les interventions
        </h2>
        <ul class="challenges">

          <li v-for="{ node } in futurChallenges" :key="node.id" class="challenge">
            <div class="challenge__left">
              <!-- <font-awesome  class="challenge__illustration" :icon="node.illustration" width="16" height="16" aria-hidden="true" /> -->
              <h3 class="challenge__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="challenge__right">
              <ul class="challenge__team">
                <li v-for="member in node.team" :key="member.id" ><g-image class="challenge__team-member" :src="member.photo" alt="" /></li>
              </ul>
              <p class="challenge__status challenge__status--futur">À venir</p>
            </div>
          </li>

          <li v-for="{ node } in presentChallenges" :key="node.id" class="challenge">
            <div class="challenge__left">
              <!-- <font-awesome  class="challenge__illustration" :icon="node.illustration" width="16" height="16" aria-hidden="true" /> -->
              <h3 class="challenge__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="challenge__right">
              <ul class="challenge__team">
                <li v-for="member in node.team" :key="member.id" ><g-image class="challenge__team-member" :src="member.photo" alt="" /></li>
              </ul>
              <p class="challenge__status challenge__status--present">En cours</p>
            </div>
          </li>

          <li v-for="{ node } in pastChallenges" :key="node.id" class="challenge">
            <div class="challenge__left">
              <!-- <font-awesome  class="challenge__illustration" :icon="node.illustration" width="16" height="16" aria-hidden="true" /> -->
              <h3 class="challenge__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="challenge__right">
              <ul class="challenge__team">
                <li v-for="member in node.team" :key="member.id" ><g-image class="challenge__team-member" :src="member.photo" alt="" /></li>
              </ul>
              <p class="challenge__status challenge__status--past">Terminée</p>
            </div>
          </li>

        </ul>
      </section>

    </div>

  </Layout>
</template>

<page-query>

  query {
    allChallenge (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
          title
          slug
          illustration
          status
          team {
            id
            firstName
            lastName
            photo (width: 64, height: 64, quality: 100)
          }
        }
      }
    }
    allPeople (sortBy: "lastName", order: ASC, filter: {group: {contains: "commando"}}) {
      edges {
        node {
        	id
          firstName
          lastName
          job_title
          photo (width: 64, height: 64, quality: 100)
          path
        }
      }
    }
  }

</page-query>


<script>

  import CommandoUX from "~/assets/images/accompagnement.svg"

  export default {
    components: {
      CommandoUX,
    },
    computed: {
      pastChallenges: function () {
        return this.$page.allChallenge.edges.filter(challenge => challenge.node.status == 'past')
      },
      presentChallenges: function () {
        return this.$page.allChallenge.edges.filter(challenge => challenge.node.status == 'present')
      },
      futurChallenges: function () {
        return this.$page.allChallenge.edges.filter(challenge => challenge.node.status == 'futur')
      },
    },
    metaInfo: {
      title: "Commando UX",
      meta: [{
        name: 'description',
        content: "Une équipe d’expert·e·s mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
      },
      {
        property: 'og:title',
        content: "Commando UX - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Une équipe d’expert·e·s mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
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
        content: "Commando UX - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Une équipe d’expert·e·s mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
      },
    ],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .commando-ux-page {

    .challenges {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      .challenge {
        list-style: none;
        text-align: left;
        width: 100%;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem 1rem;
        position: relative;
        display: flex;
        border: 2px solid white;
        border-bottom: 2px solid $gray;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: $mobile-max-width) {
          flex-wrap: wrap;
          padding: 0.5rem 0;
        }

        &:hover {
          @media only screen and (min-width: $mobile-max-width + 1) {
            border: 2px solid $gray;
            border-radius: 0.5rem;
            border-color: $blue;
            box-shadow: 5px 5px 0px $light;
          }
        }

        &__left {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          @media only screen and (max-width: $mobile-max-width) {
            width: 100%;
          }
        }

        &__right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: row;

          @media only screen and (max-width: $mobile-max-width) {
            width: 100%;
            margin-top: 0.75rem;
            justify-content: space-between;
            flex-direction: row-reverse;
          }
        }

        &__name {
          font-weight: normal;
          font-size: 1rem;
          margin: 0 1rem 0 0;

          a {
            border: none !important;
            color: $black !important;
          }

          a::after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &__illustration {
          width: 1rem;
          height: 1rem;
          color: $red;
        }

        &__team {
          display: flex;

          li {
            list-style: none;
          }
        }

        &__team-member {
          list-style: none;
          border-radius: 50%;
          width: 1.875rem;
          height: 1.875rem;
          margin: 0 0.25rem -0.5rem 0.25rem;
        }

        &__status {
          text-align: center;
          width: 4.5rem;
          border: solid 2px $gray;
          border-radius: 0.25rem;
          background-color: $gray;
          margin: 0 0 0 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.125rem 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0;
          }

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

      &__profil {
        display: inline-block;
        padding: 4px 12px;
        margin: 0px 12px 12px 0;
        border-radius: 16px;
        font-size: 0.825em;
        font-weight: bold;
        background-color: $gray;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0px 8px 8px 0;
        }
      }

      &__description {
        margin: 4px 0 16px 0;
      }

      &__department, &__place {
        font-size: 0.825em;
        font-weight: bold;
      }

      &__icon {
        display: inline-block;
        margin-right: 4px;
      }
    }

    .subsection {
      margin-bottom: 40px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 24px;
      }
    }

    .cta {
      text-align: center;
      margin-bottom: 64px;

      > p {
        margin: 0;
        display: block;
        font-size: 0.9em;
        color: $dark-gray;
      }

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 32px;
      }
    }

    .quote {
      blockquote p {
        font-family: "Marianne";
        font-weight: 100;
        font-size: 1.5rem;
        max-width: 600px;
        line-height: 1.4;
        position: relative;
        margin: 0;
        padding: .5rem 0;
        color: $blue;

        &:before {
          font-family: "Marianne";
          font-weight: 500;
          position: absolute;
          color: $red;
          font-size: 8rem;
          width: 4rem;
          height: 4rem;
          content: '«';
          left: -5rem;
          top: -4rem;
        }
      }

      footer {
        display: block;
        margin: 0;
        padding: 0;
        border: none;
        color: $black;
        text-align: left;
        font-style: normal;
      }
    }

    .team {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      &-member {
        list-style: none;
        width: 48%;
        margin: 0.75rem 0.25rem;
        display: flex;
        justify-content: flex-start;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin: 0.75rem 0;
        }

        &__photo {
          margin: 0 1rem 0 0;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
        }

        &__description {
          text-align: left;

          h3 {
            margin: 0;

            a {
              color: $black !important;
              border: none !important;

              &:hover {
                color: $red !important;
              }

              &::after {
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }
            }
          }

          p {
              margin: 0;
          }
        }
      }
    }

    .items {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        align-items: start;
        margin: 0 0 4rem 0;
      }

      .item {
        position: relative;
        flex-basis: 48%;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          flex-grow: 1;
        }

        &--left {
          margin-right: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0 0 3rem 0;
          }
        }

        &--right {
          margin-left: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0;
          }
        }

        &__link {
          margin-top: 0.5rem;

          &::after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &__icon {
          display: inline-block;
          background: $light-gray;
          color: $blue;
          border-radius: 50%;
          padding: 10px;
          transition: .2s all;
          height: 1.5rem;
          width: 1.5rem;
          margin-bottom: -0.8rem;
          margin-right: 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            margin-bottom: -6px;
          }
        }

        h3 {
          display: inline-block;
          padding: 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

      }
    }

  }

</style>
