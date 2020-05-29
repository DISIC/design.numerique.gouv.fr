<template>
  <Layout>

    <div class="cover">
     <div class="container">

      <h1 class="highlight"><CommandoUX class="icon" aria-hidden="true"/>Commando UX</h1>

      <p class="subtitle">
        Designers et développeurs auront 4 mois pour améliorer l'expérience des 250&nbsp;services numériques les plus utilisés par les Français.
      </p>

      </div>
    </div>

    <div class="content medium">

      <section class="subsection">

        <h2>
          <CommandoUX class="icon" aria-hidden="true"/>Appel à défis
        </h2>
        <p>
          Le 8 juin 2020, nous lançons un nouveau programme. Un appel à défis qui s’adresse exclusivement aux agents publics porteurs d'une des <a href="https://observatoire.numerique.gouv.fr" target="_blank">250 démarches de l’Observatoire</a>.
        </p>
      </section>
      <section class="subsection">
        <h3>Vous travaillez sur un projet de l'Observatoire ?</h3>
        <p>
          Vous avez jusqu'au 19 juin 2020 pour nous soumettre le projet de l'Observatoire sur lequel vous travaillez et pour lequel vous souhaitez drastiquement améliorer l'expérience pour les usagers.
        </p>
      </section>
      <section class="subsection">
        <h3>À la clé pour vous</h3>
        <p>
          Au terme des 2 semaines d'appel à défis, nous selectionnerons les 5 à 10 projets les plus impactants pour les usagers. Nous recruterons des designers et développeurs qui auront 4 mois, de septembre à décembre, pour améliorer concrètement la qualité de l'expérience perçue sur votre service numérique.
        </p>
        <p>
          En fonction des défis, nous recruterons des designers, avec un appui potentiel de développeurs si vos équipes en manquent. Les développeurs devront connaitre les technologies et langages utilisés sur vos services numériques. Dans tous les cas, la possibilité pour les designers de voir leurs préconisations mises en œuvre par des développeurs est une condition indispensable.
        </p>
      </section>

      <section>
        <h3>Combien ça coûte ?</h3>
        <p>
          Rien pour vous. La Direction interministérielle du numérique (DINUM) prendra en charge à 100% le coût des profils recrutés.
        </p>
      </section>

      <section class="subsection">
        <h2>
          <CommandoUX class="icon" aria-hidden="true"/>Ce qu'on cherche dans vos défis
        </h2>
      </section>
      <section class="subsection">
        <h3>Améliorer la satisfaction à l’usage des services</h3>
        <ul>
          <li>Une meilleure analyse et compréhensions des besoins des usagers sur chacun de ces services, en exploitant les données sur l’avis des usagers qui sont disponibles et/ou en en collectant de nouvelles</li>
          <li>Parcours simplifiés et agréables (notion de plaisir et de lisibilité à l’utilisation) pour les usagers avec une approche « mobile first » qui démontre un accès sur mobile exemplaire</li>
          <li>Mise en place du bouton « Je donne mon avis » ainsi que les moyens d’étudier en continu les retours usagers</li>
          <li>Mise en accessibilité des démarches (prise en compte handicap)</li>
        </ul>
      </section>
      <section>
        <h3>Accélérer la numérisation des services</h3>
        <ul>
          <li>Accompagnement complet en proposant une démarche pour la dématérialisation d’un service</li>
          <li>Meilleure utilisation des APIs et du principe du Dites-le-nous une fois (DLNUF).</li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="icon" aria-hidden="true"/>Critères de selection
        </h2>
        <ul>
          <li>Objectifs et indicateurs de réussite clairement énoncés : cibles, complexités levées, délais de mise en œuvre, nombre d'usagers impactés</li>
          <li>Qualité de l’équipe d’agents publics impliquée dans le projet : temps consacré au défi, motivation et sponsorship hiérarchique</li>
        </ul>
      </section>

      <section>
        <h2>
          <CommandoUX class="icon" aria-hidden="true"/>Dates clé
        </h2>
        <h3>8 – 19 juin 2020 (2 semaines)</h3>
        <p>Appel à défis : vous soumettez votre projet</p>
        <h3>22 – 26 juin 2020 (1 semaine)</h3>
        <p>Étude et sélection des défis : nous selectionnons les 5 à 10 projets les plus impactants</p>
        <h3>29 juin – 17 juillet 2020 (3 semaines)</h3>
        <p>Appel à candidatures : vous êtes designer ou développeur et ce programme vous séduit ? Candidatez !</p>
        <h3>20 juillet 2020 – 31 juillet 2020 (2 semaines)</h3>
        <p>Recrutement des lauréats (designers et développeurs)</p>
      </section>

    </div>

  </Layout>
</template>


<script>

  import CommandoUX from "~/assets/images/services.svg"

  export default {
    components: {
      CommandoUX,
    },
    metaInfo: {
      title: "Appel à défi : Commando UX - DesignGouv",
      meta: [{
        name: 'description',
        content: "Designers et développeurs auront 4 mois pour améliorer l'expérience des 250 services numériques les plus utilisés par les Français."
      },
      {
        property: 'og:title',
        content: "Appel à défi : Commando UX - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Appel à défi : Commando UX - DesignGouv"
      },
      {
        property: 'og:image',
        content: "https://designgouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .content {

    a {
      font-weight: bold;

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
  }

</style>
