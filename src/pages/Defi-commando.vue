<template>
  <Layout>

    <div class="cover">
     <div class="cover__container">

       <CommandouxIllustration class="cover__illustration--small" aria-hidden="true"/>

      <h1>Défi Pôle emploi</h1>

      <p class="cover__subtitle">
        S'inscrire ou se réinscrire comme demendaur d'emploi à Pôle emploi
      </p>

      </div>
    </div>

    <div class="content medium">
        <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Éléments clé
        </h2>
        <p>
          <strong>Administration bénéficiant du défi </strong><br>
          Pôle Emploi
        </p>
        <p>
          <strong>Localisation du défi</strong><br>
          Paris
        </p>
        <p>
          <strong>Profils recherchés</strong><br>
          Un ou une designer et un développeur ou une développeuse
        </p>
        </section>

        <section>
            <h2>
                <CommandoUX class="h2__icon" aria-hidden="true"/>Contexte
            </h2>
            <p>
                Pôle emploi a testé ces approches créant ainsi beaucoup d'enthousiasme et d'attentes de nos usagers, de nos collaborateurs et de nos partenaires, encore récemment lors d'un Lab sur l'évolution de l'espace personnel du demandeur d'emploi avec des personnes de différentes situations de handicap cognitif et aussi à venir dans un test autour des entreprises handi-bienveillantes. 
            </p>
            <p>
                Pour cela, nous comptons sur vous pour nous rejoindre et compléter les différents talents déjà présents dans l'équipe projet et concevoir en 4 mois,un prototype de la nouvelle inscription en ligne à Pôle emploi depuis la phase d'idéation jusqu'au test du prototype avec les usagers . Venez relevez ce défi dans cette période délicate pour l'emploi.
            </p>
        </section>

        <section>
            <h2>
                <CommandoUX class="h2__icon" aria-hidden="true"/>Objectifs du défi
            </h2>
            <p>
                L'objectif est de démontrer qu'une démarche inclusive centrée utilisateurs couplée avec des leviers du marketing social permet :
            </p>
            <ul>
                <li>Améliorer l'expérience usager des publics les plus fragiles, les plus éloignés de l'emploi ou de l'usage du numérique&nbsp;</li>
                <li>Accroître la satisfaction de tous et d'offrir un service modulaire adapté à chacun, accessible au plus en difficulté, simple et performant pour tous.</li>
            </ul>
        </section>

        <section>
            <h2>
                <CommandoUX class="h2__icon" aria-hidden="true"/>État actuel de la démarche
            </h2>
            <p>
                Cette démarche permet à un demandeur d'emploi de s'incrire à pole emploi et de faire ça ça et ça.
            </p>
            <ul>
                <li><strong>Démarche dématérialisée : </strong>Oui</li>
                <li><strong>Catégorie de public concerné : </strong>Particuliers</li>
                <li><strong>Volumétrie de la démarche : </strong>6 497 000</li>
            </ul>

        </section>

        <section>
            <h2>
                <CommandoUX class="h2__icon" aria-hidden="true"/>Profils recherchés
            </h2>
            <section class="subsection">
            <h3>Un développeur ou une développeuse</h3>
                <p>
                    <strong>Missions</strong>
                    <br>Une gentille petite mission bien sympa.
                </p>

                <p>
                    <strong>Compétences</strong>
                    <ul>
                        <li>Compétence</li>
                        <li>Compétences</li>
                    </ul>
                </p>
            </section>


            <section class="subsection">
            <h3>Un ou une designer</h3>
                <p>
                    <strong>Missions</strong>
                    <br>Une autre gentille petite mission bien sympa.
                </p>

                <p>
                    <strong>Compétences</strong>
                    <ul>
                        <li>Compétence</li>
                        <li>Compétences</li>
                        <li>Compétences</li>
                    </ul>
                </p>
            </section>

            <div class="cta">
                <a href="https://www.demarches-simplifiees.fr/commencer/appel-a-defis-commando-ux" target="_blank" class="button">Canditater à ce défi</a>
                <p>Jusqu'au vendredi 19 juin 2020 à 23h59</p>
            </div>
        </section>

    </div>

  </Layout>
</template>


<script>

  import CommandoUX from "~/assets/images/services.svg"
  import CommandouxIllustration from "~/assets/images/commandouxIllustration.svg"

    export default {
    components: {
      CommandoUX,
      CommandouxIllustration
    },
    metaInfo: {
      title: "Défi pôle emploi - DesignGouv",
    }
  }

</script>

<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

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

    h3{
      color: $blue;
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

    .cta {

      text-align: center;

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
  }

</style>
