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
          Vous êtes designer ou développeur ? Vous souhaitez œuvrer pour l'interêt général ? Vous êtes disponible pendant 4 mois à partir de septembre 2020 ? Le programme Commando UX vous proposer 8 défis d'interêt général à relever !
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
            <g-image src="~/assets/images/commandoux/top-250.svg"
                     quality="100" height="64" width="64" aria-hidden="true"/>
            <p>Pour améliorer les démarches de l'État</p>
          </div>
          <div class="element">
            <g-image src="~/assets/images/commandoux/100-percent.svg"
                     quality="100" height="64" width="64" aria-hidden="true"/>
            <p>En œuvrant pour l'interêt général</p>
          </div>
        </div>

        <div class="cta">
          <a href="https://www.demarches-simplifiees.fr/commencer/appel-a-defis-commando-ux" target="_blank" class="button">Déposez votre candidature !</a>
          <p>Jusqu'au vendredi 17 juillet 2020 à 23h59</p>
        </div>
      </section>

      <section class="subsection">
        <h3>Prenez part à l'amélioration concrète du quotidien des français</h3>
        <p>
          L'objectif du Commando UX est ambitieux : améliorer les démarches les plus utilisées par le français, et contribuer ainsi à les rendre plus simple, plus inclusive et plus désirables. Nous avons séléctionné 8 défis à relever à partir de septembre 2020. Votre mission sera d'apporter votre expértise pour aboutir, en 4 mois, à l'amélioration concrète de la démarche.
        </p>
      </section>

      <section>
        <h3>4 mois au cœur des administrations de l'état</h3>
        <p>
          En relevant l'un des défis, vous aurez l'occasion d'intégrer l'équipe en charge d'une des démarche administrative en ligne les plus utilisées par les français. L'immersion revêt un double objectif : livrer une solution viable et comportant des améliorations tangibles pour les usagers, tout en diffusant des pratiques innovantes au sein des services concernés.
        </p>
        <p>
          Pour mener à bien votre mission, vous pourrez compter sur l’appui d’un référent au sein de l’administration d’accueil, et de 2 design managers et 1 UX researcher de la DINUM.
        </p>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Les défis
        </h2>
        <ul class="challenge">
          <li v-for="{ node } in $page.allChallenge.edges" :key="node.id">
            <g-image :src="node.illustration" quality="100" height="150" width="150" />
            <h4>{{ node.name }}</h4>
            <p>{{ node.profils }}</p>
            <p>{{ node.department }}</p>
            <p>{{ node.place }}</p>
          </li>
        </ul>
      </section>

      <section class="subsection">
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Nos critères de sélection
        </h2>
        <ul>
          <li>Que vos objectifs et indicateurs de réussite soient clairement énoncés, notamment le nombre d'usagers qui seront impactés par ces améliorations</li>
          <li>Que vous soyez impliqué dans la réussite du projet : temps consacré au défi, motivation et sponsorship hiérarchique</li>
        </ul>
        <p>
          Nous vous demanderons quelques informations sur votre défi, la soumission sera rapide pour vous. La direction interministérielle du numérique (DINUM) vous accompagnera pour redéfinir le défi si besoin. Questions ? Écrivez-nous à <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a>.
        </p>
      </section>

      <section>
        <h3>4 mois au cœur des administrations de l'état</h3>
        <p>
          Nous recherchons 12 designers et développeurs. Les profils et les compétences attendues peuvent varier en fonctions des défis. vous trouverez tout les détails dans leur description.
        </p>
        <p>
          Pour l'emsemble des missions, nous attendons les qualités suivantes :
        </p>
      </section>

      <section class="quote">
        <blockquote>Il ne suffit pas de concevoir des [services] fonctionnels, compréhensibles et utilisables, nous devons également créer des [services] qui procurent de la joie et de l'excitation, du plaisir, du désir et, effectivement de la beauté dans la vie des gens.</blockquote>
        <cite>— Don Norman, psychologue cognitiviste américain, professeur émérite en sciences cognitives de l'université de Californie à San Diego</cite>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Simplicité, inclusivité et désirabilité
        </h2>
        <p>À travers ce programme, notre objectif est de mettre à votre disposition des experts qui s'attèleront à transformer rapidement vos services numériques pour les rendre plus <strong>fluides</strong>, <strong>efficaces</strong> et <strong>compréhensibles</strong>. Et qu'ils apportent même du <strong>plaisir</strong> aux usagers.</p>
        <p>Afin d'identifier les améliorations à apporter, le Commando UX évaluera la perception actuelle du service aux usagers, les contraintes techniques ainsi que les besoins métiers.</p>
        <p>Quelques exemples d'axes de travail que le Commando UX pourra entreprendre à vos côtés :</p>
        <ul>
          <li>Développer une meilleure analyse et compréhension des besoins des usagers sur votre service en exploitant vos données ou en en collectant de nouvelles (tests utilisateurs, analytics, etc)</li>
          <li>Concevoir un parcours simplifié et agréable avec une approche « mobile first » qui démontre un accès sur mobile exemplaire</li>
          <li>Exploiter les APIs de l'État pour réduire le nombre d'informations demandées aux usagers (principe du Dites-le-nous une fois)</li>
          <li>Mettre en accessibilité votre service pour les personnes en situation de handicap</li>
          <li>Clarifier et simplifier le langage pour que le service soit compréhensible pour tous</li>
          <li>Tout mettre en œuvre pour que tous les usagers, qu'ils soient en situation de handicap, ou simplement éloignés du numérique aient un égal accès à votre service</li>
          <li>Augmenter la désirabilité du service à travers le langage, le parcours et les visuels</li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Vous êtes designer ou développeur
        </h2>
        <p>Vous n'avez peur de rien ? Vous vous adaptez rapidemment ? Vous êtes exigeant et efficace ? Vous souhaitez travailler sur un projet d'intérêt général à fort impact ? Et vous êtes disponible de septembre à décembre 2020 ?</p>
        <p>
          <strong>RDV le lundi 29 juin 2020</strong> pour candidater sur le programme Commando UX. Si vous êtes retenu, vous intégrerez l'équipe Commando UX, serez déployé dans un des défis et aurez 4 mois pour améliorer l'expérience des usagers sur le service.
        </p>
        <p>
          Nous cherchons des experts extérieurs à la fonction publique, des designers (UX engineers, UX designers) et des développeurs qui s'intéressent aux besoins des usagers avant tout.
        </p>
        <p>
          L'équipe <g-link to="/equipe/">Design des services numériques</g-link> de la direction interministérielle du numérique (DINUM) vous accompagnera tout au long du projet. Questions ? Écrivez-nous à <a href="mailto:contact@design.numerique.gouv.fr">contact@design.numerique.gouv.fr</a>.
        </p>
        <ul class="team">
          <li>
            <g-image src="~/assets/images/team-photos/ugo-dessertine.jpg"
                     quality="100" height="150" width="150"
                     alt="Photo Ugo Dessertine"/>
            <p><strong>Ugo Dessertine</strong></p>
            <p>Lead Designer</p>
            <p>Commando UX</p>
          </li>
          <li>
            <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                     quality="100" height="150" width="150"
                     alt="Photo Georges Bayard"/>
            <p><strong>Georges Bayard</strong></p>
            <p>Chargé de mission</p>
            <p>Observatoire</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Dates clés du programme
        </h2>
        <p>
          <strong>8 juin – 19 juin 2020</strong><br>
          Appel à défis : administrations, <a href="https://www.demarches-simplifiees.fr/commencer/appel-a-defis-commando-ux" target="_blank">soumettez votre projet</a> de l'Observatoire.
        </p>
        <p>
          <strong>22 juin – 26 juin 2020</strong><br>
          Étude et sélection des défis : nous sélectionnons les 5 à 10 projets les plus impactants.
        </p>
        <p>
          <strong>29 juin – 17 juillet 2020</strong><br>
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
    allChallenge (sortBy: "name", order: ASC) {
      edges {
        node {
        	id
          name
          illustration
          department
          place
          profils
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
      title: "Appel à défis : Commando UX - DesignGouv",
      meta: [{
        name: 'description',
        content: "Designers et développeurs auront 4 mois pour améliorer l'expérience de 5 à 10 des 250 services publics numériques les plus utilisés par les Français."
      },
      {
        property: 'og:title',
        content: "Appel à défis : Commando UX - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Appel à défis : Commando UX - DesignGouv"
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
        content: "Appel à défis : Commando UX - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Designers et développeurs auront 4 mois pour améliorer l'expérience de 5 à 10 des 250 services publics numériques les plus utilisés par les Français."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
      },
    ],
    }
  }

</script>


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .challenge {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    h4 {
      margin: 4px 0;
    }

    > li {
      list-style: none;
      text-align: center;
      width: 30%;
      margin: 24px 4px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 46%;
      }

      img {
        border-radius: 50em;
        max-width: 150px;
      }

      p {
          margin: 0;
      }
    }
  }

  .content {

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
        text-align: left;
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
      margin: 40px auto 0;
      display: flex;
      justify-content: space-between;
      max-width: 450px;

      li {
        list-style: none;
        text-align: center;
        width: 200px;

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
