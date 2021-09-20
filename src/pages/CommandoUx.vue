<template>
  <Layout class="commando-ux-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Commando UX</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><CommandoUX class="h1__icon" focusable="false" aria-hidden="true"/>Commando UX</h1>

      <p class="cover__subtitle">
        Des experts mobilisés pour améliorer l’expérience des 250&nbsp;services publics numériques les plus utilisés par les Françaises et Français.
      </p>

      </div>
    </div>

    <div class="content">

      <section class="description">

        <div class="description__content">
          <h2>
            Des experts au sein des administrations
          </h2>
          <p>
            Après le succès de la <g-link to="/commando-ux/saison-1/">saison 1 du Commando UX</g-link>, nous réitérons l’aventure : déployer des experts du numérique au sein des administrations pour rendre <strong>plus accessibles, plus compréhensibles, et plus performantes</strong> les <a href="https://observatoire.numerique.gouv.fr" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">250 démarches administratives</a> les plus utilisées par les Français.
          </p>
          <p>
            L’immersion de chaque Commando revêt un double bénéfice : livrer des améliorations concrètes tout en diffusant des pratiques innovantes au sein des administrations d’accueil.
          </p>
        </div>

        <div class="description__actions">
            <div class="item item--left">
              <div class="item__content">
                <font-awesome :icon="['fas', 'university']" class="item__icon" width="16" height="16" aria-hidden="true" />
                <h3>Administrations de l’État</h3>
                <p>
                  Vous êtes en charge de l’une des démarches recensées dans l’Observatoire et vous souhaitez accueillir un Commando UX.
                </p>
              </div>

              <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" title="Candidater - Nouvelle fenêtre" class="item__link button button--highlight">
                Candidater<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
              </a>
            </div>

            <div class="item item--right">
              <div class="item__content">
                <font-awesome :icon="['fas', 'user-astronaut']" class="item__icon" width="16" height="16" aria-hidden="true" />
                <h3>Experts «&nbsp;expérience utilisateur&nbsp;»</h3>
                <p>
                  Vous êtes spécialisé en design UI, design UX, accessibilité, recherche utilisateur, rédaction UX et vous souhaitez vous impliquer.
                </p>
              </div>

              <g-link to="/commando-ux/partager-interet/" class="item__link button button--highlight">
                Partager votre intérêt<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
              </g-link>
            </div>
        </div>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le commando saison 2
        </h2>
        <p class="section__subtitle">
          Ce Commando fonctionnant en continu, nous avons déjà des équipes en place sur différents projets et démarches depuis mai 2021 :
        </p>
        <ul class="team">
          <li class="team-member">
            <span class="team-member__photo"><font-awesome :icon="['fas', 'comments']" height="16px" aria-hidden="true"/></span>
            <h3 class="team-member__description">2 chargées de recherche utilisateur</h3>
          </li>
          <li class="team-member">
            <span class="team-member__photo"><font-awesome :icon="['fas', 'pencil-ruler']" height="16px" aria-hidden="true"/></span>
            <h3 class="team-member__description">2 designers UX/UI</h3>
          </li>
          <li class="team-member">
            <span class="team-member__photo"><font-awesome :icon="['fas', 'code']" height="16px" aria-hidden="true"/></span>
            <h3 class="team-member__description">1 développeuse accessibilité</h3>
          </li>
          <li class="team-member">
            <span class="team-member__photo"><font-awesome :icon="['fas', 'ellipsis-h']" height="16px" aria-hidden="true"/></span>
            <h3 class="team-member__description team-member__description--light">Et bientôt d'autres experts pour accompagner les administrations</h3>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Les interventions
        </h2>
        <p class="section__subtitle">
          L’icône <span class="open-jobs"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span> indique les interventions pour lesquelles nous recherchons des experts.
        </p>

        <ul class="missions">

          <li v-for="{ node } in futurMissions" :key="node.id" class="mission">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team">
                <li v-if="node.jobs.length" ><span class="open-jobs"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member" :src="member.ghostPhoto" :alt="member.ghostName" /></li>
              </ul>
              <p class="mission__status mission__status--futur">À venir</p>
            </div>
          </li>

          <li v-for="{ node } in presentMissions" :key="node.id" class="mission">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team">
                <li v-if="node.jobs.length" ><span class="open-jobs"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member" :src="member.ghostPhoto" :alt="member.ghostName" /></li>
              </ul>
              <p class="mission__status mission__status--present">En cours</p>
            </div>
          </li>

          <li v-for="{ node } in pastMissions" :key="node.id" class="mission">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team">
                <li v-if="node.jobs.length" ><span class="open-jobs"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member" :src="member.photo" :alt="member.firstName+' '+member.lastName" /></li>
              </ul>
              <p class="mission__status mission__status--past">Terminée</p>
            </div>
          </li>

        </ul>
      </section>

    </div>

  </Layout>
</template>

<page-query>

  query {
    allMission (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
          title
          slug
          status
          team {
            id
            firstName
            lastName
            ghostName
            photo (width: 64, height: 64, quality: 100)
            ghostPhoto (width: 64, height: 64, quality: 100)
          }
          jobs {
            count
          }
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
      pastMissions: function () {
        return this.$page.allMission.edges.filter(mission => mission.node.status == 'past')
      },
      presentMissions: function () {
        return this.$page.allMission.edges.filter(mission => mission.node.status == 'present')
      },
      futurMissions: function () {
        return this.$page.allMission.edges.filter(mission => mission.node.status == 'futur')
      },
    },
    metaInfo: {
      title: "Commando UX",
      meta: [{
        name: 'description',
        content: "Une équipe d’experts mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
      },
      {
        property: 'og:title',
        content: "Commando UX - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Une équipe d’experts mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
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
        content: "Commando UX - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Une équipe d’experts mobilisée pour améliorer l’expérience des 250 services publics numériques les plus utilisés par les Françaises et Français."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/CUX.png"
      },
    ],
    }
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .commando-ux-page {

    .description {

      &__content {
        background-color: $light-gray;
        padding: 2rem 2rem 1rem;
        border-left: 4px solid $blue;
        margin-bottom: 3rem;
      }

      &__actions {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 5rem;

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
            box-sizing: content-box;

            @media only screen and (max-width: $mobile-max-width) {
              display: inline;
              margin-bottom: -0.5rem;
              height: 1rem;
              width: 1rem;
              margin-right: 0.5rem;
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

    .open-jobs {
      display: inline-block;
      text-align: center;
      background-color: $light-gray;
      border-radius: 50%;
      padding: 0.2rem 0.6rem 0.8rem 0.4rem;
      font-size: 1rem;
      margin: 0 0.25rem 0 0;
      width: 0.9rem;
      height: 0.9rem;
      color: $red;
      flex-shrink: 0;
    }

    .missions {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      .mission {
        //list-style: none;
        text-align: left;
        width: 100%;
        margin: 0 0 0.5rem 0;
        padding: 0rem 1rem;
        position: relative;
        display: flex;
        border: 2px solid white;
        border-bottom: 2px solid $gray;
        align-items: center;
        justify-content: space-between;

        &:before {
          content: none;
        }

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

            &:before {
              content: none;
            }
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
      margin-top: -1rem;
      padding: 0 0 0 2rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        padding: 0;
      }

      &-member {
        list-style: none;
        width: 100%;
        margin: 0.25rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:before {
          content: "";
        }

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin: 0.25rem 0;
        }

        &__photo {
          background-color: $light-gray;
          border-radius: 50%;
          padding: 0.5rem 0.25rem 0rem 0.25rem;
          margin: 0 0.75rem 0 0;
          width: 2rem;
          height: 2rem;
          color: $red;
          text-align: center;
          flex-shrink: 0;

          @media only screen and (max-width: $mobile-max-width) {
            padding: 0.25rem;
            margin: 0 0.75rem 0 0;
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        &__description {
          text-align: left;
          margin: 0;
          font-size: 1rem;

          &--light {
            font-weight: normal;
          }
        }
      }
    }
  }

</style>
