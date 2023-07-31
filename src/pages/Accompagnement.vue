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
              <a aria-current="page" class="fr-breadcrumb__link">Nos offres d'accompagnement</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/accompagnement-picto.svg" aria-hidden="true">Accompagnement</h1>
        <p class="fr-text--lead">Vous souhaitez rendre votre site accessible, faire des tests avec des usagers ou avoir une vraie approche design pour votre service, mais vous ne savez pas comment faire ? Nous sommes là pour vous aider !</p>
      </div>
    </div>

    <div class="dg-content dg-content--sm fr-px-2w">

      <div class="fr-mb-6w">
        <h2>
          Nos expertes à votre disposition
        </h2>
        <p>
          DesignGouv met à disposition des experts du numérique auprès des administrations pour rendre <strong>plus accessibles</strong>, <strong>plus compréhensibles</strong> et <strong>plus performantes</strong> les <a href="https://observatoire.numerique.gouv.fr/observatoire/">250 démarches administratives</a> les plus utilisées par les Français.
        </p>
        <p class="fr-mb-2w">
          Nos expertes sont spécialisées en :
        </p>
        <ul class="team fr-mb-4w">
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--xs fr-mr-3v"><font-awesome :icon="['fas', 'comments']" width="12px" height="12px" aria-hidden="true"/></span>
            <strong>Entretiens et tests utilisateurs</strong>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--xs fr-mr-3v"><font-awesome :icon="['fas', 'pencil-ruler']" width="12px" height="12px" aria-hidden="true"/></span>
            <strong>Design UX / Design UI</strong>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--xs fr-mr-3v"><font-awesome :icon="['fas', 'project-diagram']" width="12px" height="12px" aria-hidden="true"/></span>
            <strong>Pilotage de produits et services numériques</strong>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <span class="dg-picto dg-picto--xs fr-mr-3v"><font-awesome :icon="['fas', 'code']" width="12px" height="12px" aria-hidden="true"/></span>
            <strong>Accessibilité numérique</strong>
          </li>
        </ul>
        <p>Nos objectifs sont simples : vous aidez à apporter des améliorations concrètes tout en diffusant des bonnes pratiques au sein de votre administration.</p>
      </div>

      <div class="fr-mb-6w">
        <h2>Comment être accompagné ?</h2>
        <p>Si vous êtes une administration d’État en charge de l’une des démarches recensées dans l’Observatoire, rien de plus simple :</p>
        <ol class="fr-mb-2w">
          <li class="dg-text-with-picto fr-mb-1w">
            <strong class="dg-picto dg-picto--xs fr-mr-3v">1</strong>
            <strong>Envoyez-nous une demande avec vos besoins</strong>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <strong class="dg-picto dg-picto--xs fr-mr-3v">2</strong>
            <strong>Nous construisons ensemble un accompagnement sur-mesure</strong>
          </li>
          <li class="dg-text-with-picto fr-mb-1w">
            <strong class="dg-picto dg-picto--xs fr-mr-3v">3</strong>
            <strong>Nous mettons à votre disposition la ou les expertes</strong>
          </li>
        </ol>
        <p>Chaque accompagnement est sur-mesure pour s’adapter à vos besoins, votre équipe, vos délais et vos objectifs. Et en plus, tout ça gratuitement 🙂.</p>
        <g-link to="/accompagnement/obtenir-un-accompagnement/" class="fr-btn fr-fi-arrow-right-line fr-btn--icon-right fr-mb-2w">
          Obtenir un accompagnement
        </g-link>
      </div>

      <div>
        <h2>Nos accompagnements</h2>

        <ul class="missions">

          <li v-for="{ node } in presentAccompagnements" :key="node.id" class="mission fr-px-md-2w fr-pt-1w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/accompagnement/' + $slugify(node.name)">{{ node.name }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1v">
                <li v-for="expert in node.experts" :key="expert.id" ><g-image class="mission__team-member fr-ml-3v" :src="findPhoto(expert.slug).photo" :alt="expert.name" /></li>
              </ul>
              <p class="fr-badge fr-badge--sm fr-badge--info fr-badge--no-icon fr-ml-md-2w">En cours</p>
            </div>
          </li>

          <li v-for="{ node } in pastAccompagnements" :key="node.id" class="mission fr-px-md-2w fr-pt-1w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/accompagnement/' + $slugify(node.name)">{{ node.name }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1v">
                <li v-for="expert in node.experts" :key="expert.id" ><g-image class="mission__team-member fr-ml-3v" :src="findPhoto(expert.slug).photo" :alt="expert.name" /></li>
              </ul>
              <p class="fr-badge fr-badge--sm fr-badge--success fr-badge--no-icon fr-ml-md-2w">Terminé</p>
            </div>
          </li>

          <li v-for="{ node } in $page.missions.edges" :key="node.id" class="mission fr-px-md-2w fr-pt-2w fr-py-md-2v">
            <div class="mission__left">
              <h3 class="mission__name"><g-link :to="'/accompagnement/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            </div>
            <div class="mission__right">
              <ul class="mission__team fr-pt-md-1w">
                <li v-for="member in node.team" :key="member.id" ><g-image class="mission__team-member fr-ml-3v" :src="member.photo" :alt="member.firstName+' '+member.lastName" /></li>
              </ul>
              <p class="fr-badge fr-badge--sm fr-badge--success fr-badge--no-icon fr-ml-md-2w">Terminé</p>
            </div>
          </li>

        </ul>
      </div>

    </div>

  </Layout>
</template>

<page-query>

  query {
    missions: allMission (sortBy: "title", order: ASC) {
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
            photo (width: 64, height: 64, quality: 50)
            ghostPhoto (width: 64, height: 64, quality: 50)
          }
          jobs {
            count
          }
        }
      }
    }
    accompagnements: allAccompagnement (sortBy: "date", order: ASC) {
      edges {
        node {
          id
          name
          experts {
            id
            name
            slug
          }
          date
          status
        }
      }
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
    computed: {
      pastAccompagnements: function () {
        return this.$page.accompagnements.edges.filter(accompagnement => this.$slugify(accompagnement.node.status[0]) == 'termine')
      },
      presentAccompagnements: function () {
        return this.$page.accompagnements.edges.filter(accompagnement => this.$slugify(accompagnement.node.status[0]) == 'en-cours')
      },
    },
    methods: {
      findPhoto(id) {
        return this.$page.people.edges.filter(person => person.node.id == id)[0].node;
      }
    },
    metaInfo: {
      title: "Accompagnement",
      meta: [{
        name: 'description',
        content: "Vous souhaitez rendre votre site accessible, faire des tests avec des usagers ou avoir une vraie approche design pour votre service mais vous ne savez pas comment faire ? Nous sommes là pour vous aider !"
      },
      {
        property: 'og:title',
        content: "Accompagnement - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Vous souhaitez rendre votre site accessible, faire des tests avec des usagers ou avoir une vraie approche design pour votre service mais vous ne savez pas comment faire ? Nous sommes là pour vous aider !"
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
        content: "Accompagnement - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Vous souhaitez rendre votre site accessible, faire des tests avec des usagers ou avoir une vraie approche design pour votre service mais vous ne savez pas comment faire ? Nous sommes là pour vous aider !"
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
    border: 1px solid var(--background-default-grey);
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
      font-size: 0.9375rem;
      font-weight: normal;
      margin-bottom: 0;
      line-height: 1.5;

      a {
        background-image: none;
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
      width: 1.625rem;
      height: 1.625rem;
      margin-top: -0.25rem;
      margin-bottom: -0.325rem;

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
