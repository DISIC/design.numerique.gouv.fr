<template>
  <Layout class="saison-1-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/" class="fr-breadcrumb__link">Commando UX</g-link>
        </li>
        <li>
          <span aria-current="page">Saison 1</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <div class="cover__subhead"><CommandoUX class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Commando UX</div>
      <h1 class="text-highlight">Commando UX saison 1</h1>
      <p class="cover__subtitle">
        Afin d’accélérer les améliorations concrètes pour les usagers dans leurs démarches, la DINUM a lancé en septembre 2020 le Commando UX.
      </p>

      </div>
    </div>

    <div class="content">

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le programme
        </h2>
        <p>
          Cette première édition s’est appuyée sur le recrutement par la DINUM de 15 designers et développeurs, pour une période de 4 à 7 mois, placés au sein des ministères au plus près de 10 démarches du Top 250.
        </p>
        <p>
          L'objectif du Commando UX est ambitieux : améliorer les démarches les plus utilisées par les Français, et contribuer ainsi à les rendre plus simples, plus inclusives et plus désirables.
        </p>
        <div class="key-elements">
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'user-astronaut']"/>
            </div>
            <p>15 designers et développeurs</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'stopwatch']"/>
            </div>
            <p>À temps plein pendant 4 à 7 mois</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'flag']"/>
            </div>
            <p>Pour améliorer les démarches de l'État</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'star']"/>
            </div>
            <p>Et œuvrer pour l'interêt général</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Intervenir au cœur des administrations de l'État</h3>
        <p>
          En relevant l'un des défis, chaque designer et développeur aura l'occasion d'intégrer l'équipe responsable d'une des 250 démarches de l’<a href="https://observatoire.numerique.gouv.fr" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Observatoire de la qualité des démarches en ligne</a>. L'immersion revêt un double objectif : livrer une solution viable et comportant des améliorations tangibles pour les usagers, tout en diffusant des pratiques innovantes au sein des services concernés.
        </p>
        <p>
          Pour mener à bien leur mission, ils peuvent compter sur l’appui d’un référent au sein de l’administration d’accueil, d'une chercheuse UX et 2 designers produit de la DINUM.
        </p>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le commando
        </h2>
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
        <ul class="mission">
          <li class="mission__item" v-for="{ node } in firstSeason" :key="node.id">
            <h3><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            <p class="mission__description">{{ node.description }}</p>
            <p class="mission__department"><font-awesome class="mission__icon" :icon="['fas', 'building']"/> {{ node.department }}</p>
          </li>
        </ul>
      </section>

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Simplicité, inclusivité et désirabilité
        </h2>
        <p>
          Pour chaque défi, l'objectif est de transformer rapidement le service public numérique concerné pour le rendre plus <strong>fluide</strong>, <strong>efficace</strong> et <strong>compréhensible</strong>. Et qu'il apporte même du <strong>plaisir</strong> aux usagers.
        </p>
        <p>
          Les qualités qu'apporteront les membres du Commando UX sont les suivantes :
        </p>
        <ul>
          <li>Pour les designers : sens de l’esthétique, expérience et connaissances des technologies numériques</li>
          <li>Pour les développeurs : expertise des technologies et des langages utilisés</li>
          <li>Empathie, capacité à s'adapter, niveau d’exigence élevé et rapidité d’exécution</li>
          <li>Enfin, engouement pour l’intérêt général</li>
        </ul>
      </section>

      <section class="quote">
        <blockquote>
          <p>Il ne suffit pas de concevoir des [services] fonctionnels, compréhensibles et utilisables, nous devons également créer des [services] qui procurent de la joie et de l'excitation, du plaisir, du désir et, effectivement de la beauté dans la vie des gens.</p>
          <footer><span lang="en">Don Norman</span>, psychologue cognitiviste américain, professeur émérite en sciences cognitives de l'université de Californie à San Diego</footer>
        </blockquote>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Les dates clés du programme
        </h2>
        <p>
          <strong>8 juin – 19 juin 2020</strong><br>
          Appel à défis : administrations, soumettez votre projet de l'Observatoire.
        </p>
        <p>
          <strong>22 juin – 26 juin 2020</strong><br>
          Étude et sélection des défis : nous sélectionnons les 10 projets les plus impactants.
        </p>
        <p>
          <strong>29 juin – 19 juillet 2020</strong><br>
          Appel à candidatures : vous êtes designer ou développeur et ce programme vous séduit ? Candidatez !
        </p>
        <p>
          <strong>20 juillet – 31 juillet 2020</strong><br>
          Recrutement Commando UX : entretiens individuels avec les designers et développeurs.
        </p>
        <p>
          <strong>7 septembre – 31 mars 2021</strong><br>
          Commando UX en action : designers et développeurs intègrent les administrations pour relever leur défi.
        </p>
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
          description
          slug
          department
          startDate
        }
      }
    }
    allPeople (sortBy: "lastName", order: ASC, filter: {group: {contains: "commando-1"}}) {
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
    computed: {
      firstSeason: function () {
        return this.$page.allMission.edges.filter(mission => mission.node.startDate ? (new Date(mission.node.startDate)).getTime() == (new Date('2020-09-07')).getTime() : false)
      },
    },
    metaInfo: {
      title: "Commando UX saison 1",
      meta: [{
        name: 'description',
        content: "Améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
      },
      {
        property: 'og:title',
        content: "Commando UX saison 1 - DesignGouv"
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
        content: "Commando UX saison 1 - DesignGouv"
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

  .saison-1-page {

    .mission {
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

        &:before {
          content: none;
        }

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

    .key-elements {
      margin: 48px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 32px 0;
      }

      .element {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 160px;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0px 4px 16px 4px;
        }

        img {
          background-color: lighten($gray, 10%);
          border-radius: 100%;
          padding: 12px;
        }

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          width: 88px;
          height: 88px;
          background-color: lighten($gray, 10%);

          svg {
            font-size: 40px;
            color: $blue;
          }
        }

        p {
          font-size: 0.875em;
          color: $blue;
          margin: 0;
          font-weight: 500;
          border-radius: 8px;
          padding: 4px 8px;
        }
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

        &:before {
          content: none;
        }

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
  }

</style>
