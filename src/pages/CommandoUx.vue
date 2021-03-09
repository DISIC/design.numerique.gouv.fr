<template>
  <Layout class="commando-ux-page">

    <!-- <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Commando UX</span>
        </li>
      </ol>
    </nav> -->

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><CommandoUX class="h1__icon" focusable="false" aria-hidden="true"/>Commando UX</h1>

      <p class="cover__subtitle">
        15 designers et développeurs interviennent pour améliorer l'expérience de 10 des 250&nbsp;services publics numériques les plus utilisés par les Français.
      </p>

      <CommandouxIllustration class="cover__illustration" focusable="false" aria-hidden="true"/>

      </div>
    </div>

    <div class="content">

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le programme
        </h2>
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
          En relevant l'un des défis, chaque designer et développeur aura l'occasion d'intégrer l'équipe responsable d'une des 250 démarches de l’<a href="https://observatoire.numerique.gouv.fr" title="Observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank">Observatoire de la qualité des démarches en ligne</a>. L'immersion revêt un double objectif : livrer une solution viable et comportant des améliorations tangibles pour les usagers, tout en diffusant des pratiques innovantes au sein des services concernés.
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
        <ul class="challenge">
          <li class="challenge__item" v-for="{ node } in $page.allChallenge.edges" :key="node.id">
            <g-image class="challenge__illustration" :src="node.illustration" alt=""/>
            <h3><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            <p class="challenge__description">{{ node.description }}</p>
            <p class="challenge__department"><font-awesome class="challenge__icon" :icon="['fas', 'building']"/> {{ node.department }}</p>
            <!-- <p v-if="node.profil1" class="challenge__profil">{{ node.profil1 }}</p>
            <p v-if="node.profil2" class="challenge__profil">{{ node.profil2 }}</p> -->
            <!-- <p class="challenge__place"><font-awesome class="challenge__icon" :icon="['fas', 'map-marker-alt']"/> {{ node.place }}</p> -->
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
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Informations pratiques
        </h2>
        <p><strong>Dates des défis :</strong> Du 7 septembre 2020 au 31 mars 2021</p>
        <!-- <p><strong>Type de contrat :</strong> CDD à temps plein</p>
        <p><strong>Rémunération :</strong> 3 000€ ou 3 500€ net par mois, selon le niveau d'expérience</p>
        <p><strong>Conditions :</strong></p>
        <ul>
          <li>Être une personne physique (et non morale)</li>
          <li>Ne pas être fonctionnaire ou assimilié en poste lors de la prise de poste</li>
          <li>Ne pas être scolarisé dans l'un des deux premiers cycles universitaires lors de la prise de poste</li>
        </ul> -->
        <p><strong>Accompagnement :</strong> Par l'équipe <g-link to="/equipe/">Design des services numériques</g-link> de la direction interministérielle du numérique (DINUM) tout au long du projet, avec l'appui d'une chercheuse UX et de deux designers produit.</p>
        <p><strong>Contact :</strong> Vous avez des questions ? Écrivez-nous à <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a></p>
        <ul class="team">
          <li>
            <g-image src="~/assets/images/team-photos/faustine-demiselle.jpg"
                     quality="100" height="120" width="120"
                     alt="Faustine Demiselle"/>
            <p><strong>Faustine Demiselle</strong></p>
            <p lang="en">Designer</p>
            <p>Commando UX</p>
          </li>
          <li>
            <g-image src="~/assets/images/team-photos/ugo-dessertine.jpg"
                     quality="100" height="120" width="120"
                     alt="Ugo Dessertine"/>
            <p><strong>Ugo Dessertine</strong></p>
            <p lang="en">Lead Designer</p>
            <p>Commando UX</p>
          </li>
          <li>
            <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                     quality="100" height="120" width="120"
                     alt="Georges Bayard"/>
            <p><strong>Georges Bayard</strong></p>
            <p>Chargé de mission</p>
            <p>Observatoire</p>
          </li>
        </ul>
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
          Étude et sélection des défis : nous sélectionnons les 5 à 10 projets les plus impactants.
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
    allPeople (sortBy: "lastName", order: ASC, filter: {group: {eq: "commando"}}) {
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

  import CommandoUX from "~/assets/images/services.svg"
  import CommandouxIllustration from "~/assets/images/commandouxIllustration.svg"

  export default {
    components: {
      CommandoUX,
      CommandouxIllustration
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
        content: "Commando UX - DesignGouv"
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
