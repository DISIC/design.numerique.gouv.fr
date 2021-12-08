<template>
  <Layout>

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

    <div class="content">
      <h1>Commando UX</h1>
      <p>Des experts mobilisés pour améliorer l’expérience des 250&nbsp;services publics numériques les plus utilisés par les Françaises et Français.</p>

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
        <h2>Le commando saison 2</h2>
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
        <h2>Les interventions</h2>
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
