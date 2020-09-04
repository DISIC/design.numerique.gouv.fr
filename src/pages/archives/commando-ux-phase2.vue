<template>
  <Layout>

    <div class="cover">
     <div class="cover__container">

      <h1 class="highlight"><CommandoUX class="h1__icon" aria-hidden="true"/>Commando UX</h1>

      <p class="cover__subtitle">
        Designers et développeurs : venez relever le défi et améliorer l'expérience d'un des 250&nbsp;services publics numériques les plus utilisés par les Français !
      </p>

      <CommandouxIllustration class="cover__illustration" aria-hidden="true"/>

      </div>
    </div>

    <div class="content medium">

      <section class="subsection">

        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Appel à candidatures
        </h2>
        <p>
          Vous êtes designer produit ou développeur ? Vous souhaitez œuvrer pour l'intérêt général ? Vous êtes disponible pendant 4 mois à partir de septembre 2020 ? Le programme Commando UX vous propose 10 défis à relever au sein des administrations de l'État !
        </p>
        <div class="key-elements">
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'user-astronaut']"/>
            </div>
            <p>Designers et développeurs</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'stopwatch']"/>
            </div>
            <p>À temps plein pendant 4 mois</p>
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

        <div class="cta">
          <a href="https://www.demarches-simplifiees.fr/commencer/appel-a-candidatures-commando-ux" target="_blank" class="button">Déposez votre candidature !</a>
          <p>Jusqu'au dimanche 19 juillet 2020 à 23h59</p>
        </div>
      </section>

      <section class="subsection">
        <h3>Prenez part à l'amélioration concrète du quotidien des Français</h3>
        <p>
          L'objectif du Commando UX est ambitieux : améliorer les démarches les plus utilisées par les Français, et contribuer ainsi à les rendre plus simples, plus inclusives et plus désirables. Nous avons sélectionné 10 défis à relever à partir de septembre 2020. Votre mission sera d'apporter votre expertise pour aboutir, en 4 mois, à l'amélioration concrète de la démarche.
        </p>
      </section>

      <section>
        <h3>4 mois au cœur des administrations de l'État</h3>
        <p>
          En relevant l'un des défis, vous aurez l'occasion d'intégrer l'équipe responsable d'une des démarches administratives en ligne les plus utilisées par les Français. L'immersion revêt un double objectif : livrer une solution viable et comportant des améliorations tangibles pour les usagers, tout en diffusant des pratiques innovantes au sein des services concernés.
        </p>
        <p>
          Pour mener à bien votre mission, vous pourrez compter sur l’appui d’un référent au sein de l’administration d’accueil, et d'une chercheuse UX et 2 designers produit de la DINUM.
        </p>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Les 10 défis
        </h2>
        <ul class="challenge">
          <li class="challenge__item" v-for="{ node } in $page.allChallenge.edges" :key="node.id">
            <g-image class="challenge__illustration" :src="node.illustration"/>
            <h3><g-link :to="'/commando-ux/' + node.slug">{{ node.title }}</g-link></h3>
            <p class="challenge__description">{{ node.description }}</p>
            <p v-if="node.profil1" class="challenge__profil">{{ node.profil1 }}</p>
            <p v-if="node.profil2" class="challenge__profil">{{ node.profil2 }}</p>
            <p class="challenge__department"><font-awesome class="challenge__icon" :icon="['fas', 'building']"/> {{ node.department }}</p>
            <p class="challenge__place"><font-awesome class="challenge__icon" :icon="['fas', 'map-marker-alt']"/> {{ node.place }}</p>
          </li>
        </ul>
      </section>

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Simplicité, inclusivité et désirabilité
        </h2>
        <p>
          Pour chaque défi, votre objectif sera de transformer rapidement le service public numérique concerné pour le rendre plus <strong>fluide</strong>, <strong>efficace</strong> et <strong>compréhensible</strong>. Et qu'il apporte même du <strong>plaisir</strong> aux usagers.
        </p>
        <p>
          Pour l'ensemble des missions, nous attendons les qualités suivantes :
        </p>
        <ul>
          <li>Pour les designers : votre sens de l’esthétique, votre expérience (UX/UI/développement) et vos connaissances des technologies numériques</li>
          <li>Pour les développeurs : votre expertise des technologies et des langages utilisés</li>
          <li>Votre empathie, votre capacité à vous adapter, votre niveau d’exigence et votre rapidité d’exécution</li>
          <li>Enfin, votre engouement pour l’intérêt général</li>
        </ul>
      </section>

      <section class="quote">
        <blockquote>Il ne suffit pas de concevoir des [services] fonctionnels, compréhensibles et utilisables, nous devons également créer des [services] qui procurent de la joie et de l'excitation, du plaisir, du désir et, effectivement de la beauté dans la vie des gens.</blockquote>
        <cite>— Don Norman, psychologue cognitiviste américain, professeur émérite en sciences cognitives de l'université de Californie à San Diego</cite>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Informations pratiques
        </h2>
        <p><strong>Dates de la mission :</strong> du 7 septembre 2020 au 31 décembre 2020</p>
        <p><strong>Type de contrat :</strong> CDD à temps plein</p>
        <p><strong>Rémunération :</strong> 3 000€ ou 3 500€ net par mois, selon votre niveau d'expérience</p>
        <p><strong>Lieu de travail :</strong> Voir le détail dans chaque défi (options de télétravail à discuter)</p>
        <p><strong>Conditions :</strong></p>
        <ul>
          <li>Être une personne physique (et non morale)</li>
          <li>Ne pas être fonctionnaire ou assimilié en poste lors de la prise de poste</li>
          <li>Ne pas être scolarisé dans l'un des deux premiers cycles universitaires lors de la prise de poste</li>
        </ul>
        <p><strong>Accompagnement :</strong> L'équipe <g-link to="/equipe/">Design des services numériques</g-link> de la direction interministérielle du numérique (DINUM) vous accompagnera tout au long du projet grâce à une équipe dédiée : 1 chercheuse UX et 2 designers produit.</p>
        <p><strong>Contact :</strong> Vous avez des questions ? Écrivez-nous à <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a></p>
        <ul class="team">
          <li>
            <g-image src="~/assets/images/team-photos/faustine-demiselle.jpg"
                     quality="100" height="120" width="120"
                     alt="Photo Ugo Dessertine"/>
            <p><strong>Faustine Demiselle</strong></p>
            <p>Designer</p>
            <p>Commando UX</p>
          </li>
          <li>
            <g-image src="~/assets/images/team-photos/ugo-dessertine.jpg"
                     quality="100" height="120" width="120"
                     alt="Photo Ugo Dessertine"/>
            <p><strong>Ugo Dessertine</strong></p>
            <p>Lead Designer</p>
            <p>Commando UX</p>
          </li>
          <li>
            <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                     quality="100" height="120" width="120"
                     alt="Photo Georges Bayard"/>
            <p><strong>Georges Bayard</strong></p>
            <p>Chargé de mission</p>
            <p>Observatoire</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Les dates clés du programme
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
          <strong>7 septembre – 31 décembre 2020</strong><br>
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
    meta: [{
      name: "robots",
      content: "noindex"
    }],
  }

</script>


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .content {

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
        margin: 24px 4px;

        @media only screen and (max-width: $mobile-max-width) {
          width: 100%;
          margin: 16px 0px;
        }

        h3 {
          font-weight: 800;
          font-size: 1.5em;
          margin: 4px 0 8px 0;
          color: $blue;

          @media only screen and (max-width: $mobile-max-width) {
            font-size: 1.125em;
            margin: 4px 0 px 0;
          }

          a {
            border: none;
          }
        }

        img {
          max-width: 100px;

          @media only screen and (max-width: $mobile-max-width) {
            max-width: 80px;
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
        //font-size: 0.825em;
        margin: 4px 0 0 0;
      }

      &__icon {
        text-align: left;
        display: inline-block;
        width: 24px;
      }
    }

    .button {
      text-decoration: none;
      border-color: $blue;
      background-color: $blue;
      color: white;
      border-radius: 32px;
      padding: 8px 24px;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 0.875em;
      }

      &:hover {
        background: $red;
        border-color: $red;
      }
    }

    a {
      svg {
        padding-right: 12px;
        transition: .1s all;
      }

      &:hover {
        svg {
          padding-left: 8px;
          padding-right: 4px;
        }
      }
    }

    .subsection {
      margin-bottom: 40px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 24px;
      }
    }

    .key-elements {
      margin: 48px 0 32px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 32px 0 24px 0;
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
          background-color: lighten($gray-hover, 10%);
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
          background-color: lighten($gray-hover, 10%);

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
        color: $mid-gray;
      }

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 32px;
      }
    }

    .quote {
      blockquote {
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

      cite {
        color: $black;
        text-align: left;
        font-style: normal;
      }
    }

    .team {
      padding: 0;
      margin: 8px auto 0;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      li {
        list-style: none;
        text-align: center;
        width: 160px;
        margin-top: 32px;

        img {
          border-radius: 50em;
        }

        p {
            margin: 0;
        }
      }
    }
  }

</style>
