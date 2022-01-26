<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
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
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/accompagnement-picto.svg" aria-hidden="true">Commando UX</h1>
        <p class="fr-text--lead">Des experts mobilisés pour améliorer l’expérience des 250&nbsp;services publics numériques les plus utilisés par les Françaises et Français.</p>
      </div>
    </div>

    <div class="dg-content fr-px-2w">

      <section>
        <div>
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

        <div class="fr-grid-row fr-grid-row--gutters fr-my-4w">
          <div class="fr-col-sm-6 fr-mb-2w">
            <div class="dg-text-with-picto fr-mb-2w">
              <span class="dg-picto fr-mr-2w">
                <font-awesome :icon="['fas', 'university']" height="16px" aria-hidden="true" />
              </span>
              <h3 class="fr-h4">Administrations de l’État</h3>
            </div>
            <p class="fr-mb-2w">
              Vous êtes en charge de l’une des démarches recensées dans l’Observatoire et vous souhaitez accueillir un Commando UX.
            </p>
            <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" title="Candidater - Nouvelle fenêtre" class="fr-btn fr-fi-arrow-right-line fr-btn--icon-right fr-btn--secondary">
              Candidater
            </a>
          </div>

          <div class="fr-col-sm-6">
            <div class="dg-text-with-picto fr-mb-2w">
              <span class="dg-picto fr-mr-2w">
                <font-awesome :icon="['fas', 'user-astronaut']" height="16px" aria-hidden="true" />
              </span>
              <h3 class="fr-h4">Experts du numérique</h3>
            </div>
            <p class="fr-mb-2w">
              Vous êtes spécialisé en design UI, design UX, accessibilité, recherche utilisateur, rédaction UX et vous souhaitez vous impliquer.
            </p>
            <g-link to="/commando-ux/partager-interet/" class="fr-btn fr-fi-arrow-right-line fr-btn--icon-right fr-btn--secondary">
              Partager votre intérêt
            </g-link>
          </div>
        </div>
      </section>

      <section class="fr-mb-6w">
        <h2>Le commando saison&nbsp;2</h2>
        <p class="section__subtitle">
          Ce Commando fonctionnant en continu, nous avons déjà des équipes en place sur différents projets et démarches depuis mai 2021 :
        </p>
        <ul class="team">
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--sm fr-mr-3v"><font-awesome :icon="['fas', 'comments']" height="16px" aria-hidden="true"/></span>
            <h3 class="fr-h6">Des chargées de recherche utilisateur</h3>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--sm fr-mr-3v"><font-awesome :icon="['fas', 'project-diagram']" height="16px" aria-hidden="true"/></span>
            <h3 class="fr-h6">Des expertes et experts produits</h3>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--sm fr-mr-3v"><font-awesome :icon="['fas', 'pencil-ruler']" height="16px" aria-hidden="true"/></span>
            <h3 class="fr-h6">Des designers UX/UI</h3>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--sm fr-mr-3v"><font-awesome :icon="['fas', 'code']" height="16px" aria-hidden="true"/></span>
            <h3 class="fr-h6">Des développeuses et développeurs accessibilité</h3>
          </li>
        </ul>
      </section>

      <section>
        <h2>Les interventions</h2>

        <p class="section__subtitle">
          L’icône <span class="mission__team-member mission__team-member--open"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span> indique les interventions pour lesquelles nous recherchons des experts.
        </p>

        <ul class="missions">

          <li v-for="{ node } in futurMissions" :key="node.id" class="mission fr-px-md-2w fr-pt-1w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1v">
                <li v-if="node.jobs.length" ><span class="mission__team-member mission__team-member--open fr-ml-3v"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member fr-ml-3v" :src="member.photo" :alt="member.firstName+' '+member.lastName" /></li>
              </ul>
              <p class="fr-badge fr-badge--pink-macaron fr-ml-md-2w">À venir</p>
            </div>
          </li>

          <li v-for="{ node } in presentMissions" :key="node.id" class="mission fr-px-md-2w fr-pt-2w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1w">
                <li v-if="node.jobs.length" ><span class="mission__team-member mission__team-member--open fr-ml-3v"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member fr-ml-3v" :src="member.photo" :alt="member.firstName+' '+member.lastName" /></li>
              </ul>
              <p class="fr-badge fr-badge--green-tilleul-verveine fr-ml-md-2w">En cours</p>
            </div>
          </li>

          <li v-for="{ node } in pastMissions" :key="node.id" class="mission fr-px-md-2w fr-pt-2w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1w">
                <li v-if="node.jobs.length" ><span class="mission__team-member mission__team-member--open fr-ml-3v"><font-awesome :icon="['fas', 'user-plus']" height="16px" title="Des postes sont ouverts pour cette mission"/></span></li>
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member fr-ml-3v" :src="member.photo" :alt="member.firstName+' '+member.lastName" /></li>
              </ul>
              <p class="fr-badge fr-badge--grey fr-ml-md-2w">Terminée</p>
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
  export default {
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

<style lang="scss" scoped>

  .missions {
    padding: 0;
  }

  .mission {
    text-align: left;
    width: 100%;
    position: relative;
    display: flex;
    border: 1px solid white;
    border-top: 1px solid var(--border-default-grey);
    align-items: center;
    justify-content: space-between;
    min-height: 3rem;
    margin-top: -1px;

    @media only screen and (max-width: $md-point) {
      flex-wrap: wrap;
    }

    &:hover {
      @media only screen and (min-width: $md-point + 1) {
        background-color: var(--background-alt-green-tilleul-verveine);
        border: 1px solid var(--border-default-green-tilleul-verveine);
        border-top: 1px solid var(--border-default-green-tilleul-verveine);
        z-index: 1;
      }
    }

    &__left {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media only screen and (max-width: $md-point) {
        width: 100%;
      }
    }

    &__right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;

      @media only screen and (max-width: $md-point) {
        width: 100%;
        margin-top: 0.25rem;
        margin-bottom: 0.75rem;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
    }

    &__name {
      font-size: 1rem;
      margin-bottom: 0;
      line-height: 1.5;

      a {
        box-shadow: none;
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

    &__team {
      display: flex;
      margin: 0;

      li {
        list-style: none;

        &:before {
          content: none;
        }
      }
    }

    &__team-member {
      border-radius: 50%;
      width: 1.875rem;
      height: 1.875rem;
      margin-top: -0.25rem;
      margin-bottom: -0.391rem;

      @media only screen and (max-width: $md-point) {
        margin-top: 0.25rem;
      }

      &--open {
        display: inline-block;
        text-align: center;
        color: var(--text-label-pink-macaron);
        background-color: var(--background-contrast-pink-macaron);;
        padding: 0.2rem 0.6rem 0.8rem 0.4rem;
        font-size: 1rem;
        flex-shrink: 0;
      }
    }
  }
</style>
