<template>
  <Layout class="commando-ux-page">

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><CommandoUX class="h1__icon" focusable="false" aria-hidden="true"/>Commando UX</h1>

      <p class="cover__subtitle">
        Une équipe d'expert·e·s mobilisée pour améliorer l'expérience des 250&nbsp;services publics numériques les plus utilisés par les Françaises et Français.
      </p>

      </div>
    </div>

    <div class="content">

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>C'est reparti !
        </h2>
        <p>
          Après le succès de la <g-link to="/commando-ux/saison-1/">saison 1 du Commando UX</g-link>, nous réitérons l'aventure : déployer des expert·e·s du numériques au sein des administrations pour rendre <strong>plus accessibles et plus compréhensibles</strong> les <a href="https://observatoire.numerique.gouv.fr" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">250 démarches administratives</a> les plus utilisées par les Français.
        </p>
        <p>
          L'immersion de chaque Commando revêt un double bénéfice : livrer des améliorations concrètes tout en diffusant des pratiques innovantes au sein des administrations d'accueil.
        </p>
      </section>

      <section class="items">

          <div class="item item--left">
            <div class="item__content">
              <font-awesome :icon="['fas', 'university']" class="item__icon"/>
              <h3>Administrations de l'État</h3>
              <p>
                Vous êtes en charge de l'une des démarches recensées dans l'Observatoire et vous souhaitez accueillir un Commando UX.
              </p>
            </div>

            <g-link to="/accessibilite-numerique/" class="item__link button button--highlight">
              Candidatez<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

          <div class="item item--right">
            <div class="item__content">
              <font-awesome :icon="['fas', 'user-astronaut']" class="item__icon"/>
              <h3>Expert·e·s du numérique</h3>
              <p>
                Vous êtes chef·fe de produit agile, designer, développeur·euse, chercheur·euse utilisateur, rédacteur·rice UX et vous souhaitez vous impliquer.
              </p>
            </div>

            <g-link to="/accessibilite-numerique/" class="item__link button button--highlight">
              Partagez votre intérêt<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section>


      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le commando
        </h2>
        <p>
          Ce Commando fonctionnant en continu, nous avons déjà des équipes en place sur différents projets et démarches depuis mai 2021.
        </p>
        <ul class="team">
          <li v-for="{ node } in $page.allPeople.edges" :key="node.id">
            <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
            <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
            <p>{{ node.job_title }}</p>
            <p v-if="node.sub_team_link">
              <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
            </p>
            <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Les 10 défis
        </h2>
        <ul class="challenge">
          <li class="challenge__item" v-for="{ node } in $page.allChallenge.edges" :key="node.id">
            <g-image class="challenge__illustration" :src="node.illustration" alt=""/>
            <h3><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            <p class="challenge__description">{{ node.description }}</p>
            <p class="challenge__department"><font-awesome class="challenge__icon" :icon="['fas', 'building']"/> {{ node.department }}</p>
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
          description
          slug
          illustration
          department
          place
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
          sub_team
          sub_team_link
          twitter
          photo (width: 150, height: 150, quality: 100)
          path
          content
          group
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
    metaInfo: {
      title: "Commando UX",
      meta: [{
        name: 'description',
        content: "Améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
      },
      {
        property: 'og:title',
        content: "Commando UX - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
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
        content: "Améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
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

    .challenge {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      &__item {
        list-style: none;
        text-align: left;
        width: 46%;
        margin: 0px 4px 48px 4px;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin: 0px 0px 32px 0px;
        }

        a::after {
          position: absolute;
          content: "";
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        h3 {
          font-weight: 800;
          font-size: 1.5em;
          margin: 12px 0 8px 0;
          color: $blue;

          @media only screen and (max-width: $mobile-max-width) {
            font-size: 1.125em;
            margin: 8px 0 4px 0;
          }

          a {
            border: none !important;
          }
        }

        img {
          max-width: 80px;
          height: 80px;

          @media only screen and (max-width: $mobile-max-width) {
            max-width: 64px;
            height: 64px;
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

      li {
        list-style: none;
        text-align: center;
        width: 30%;
        margin: 24px 4px;

        @media only screen and (max-width: $mobile-max-width) {
          width: 46%;
        }

        img {
          margin: 0 auto;
          border-radius: 50em;
          max-width: 150px;
        }

        h3 {
          margin: 4px 0;

          a {
            color: $black !important;
            border: none !important;

            &:hover {
              color: $blue;
            }
          }
        }

        p {
            margin: 0;
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
