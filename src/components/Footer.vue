<template>
  <footer role="contentinfo" >

      <img src="/assets/images/logoRF.svg" width="120" class="header__logo-rf" alt="République Française. Liberté Égalité Fraternité."/>

      <div class="footer__content">

        <div class="footer__description">

          <g-link to="/" >
            <img src="/assets/images/logoDG.svg"  width="260"  class="header__logo-dg" alt="DesignGouv - Retour à l'accueil"/>
          </g-link>
          <p>
            DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank">direction interministérielle du numérique</a>.</br>
            Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank">code source</a> est disponible en licence libre.
          </p>
        </div>

        <div class="footer__websites">
          <div>
            <p>DesignGouv</p>
            <ul>
              <!--li><g-link to="/equipe/">Notre équipe</g-link></li-->
              <li><a href="https://twitter.com/design_gouv" title="Twitter - Nouvelle fenêtre" target="_blank">
                Twitter <font-awesome  width="0" :icon="['fab', 'twitter']"/>
                </a></li>
              <li><a href="mailto:contact@design.numerique.gouv.fr" title="Contact - Nouvelle fenêtre" target="_blank">
                  Contact <font-awesome width="0" :icon="['fas', 'paper-plane']" transform="shrink-2"/>
                  </a></li>
              <!--li><g-link to="/recrutement/">Recrutement</g-link></li-->
              <li><g-link to="/misc/accessibilite/">Accessibilité : partiellement conforme</g-link></li>
              <li><g-link to="/misc/donnees-personnelles/">Données personnelles</g-link></li>
              <li><g-link to="/misc/mentions-legales/">Mentions légales</g-link></li>
              <li><g-link to="/misc/plan-du-site/">Plan du site</g-link></li>
            </ul>
          </div>
          <div>
            <p>Services</p>
            <ul>
              <li><a href="https://observatoire.numerique.gouv.fr" title="L'observatoire du numérique - Nouvelle fenêtre" target="_blank">L'observatoire du numérique</a></li>
              <li><a href="https://demarches-simplifiees.fr" title="Démarches simplifiées - Nouvelle fenêtre" target="_blank">Démarches simplifiées</a></li>
            </ul>
          </div>
          <div>
            <p>Autres univers</p>
            <ul>
              <li><a href="https://franceconnect.gouv.fr" title="FranceConnect - Nouvelle fenêtre" target="_blank">FranceConnect</a></li>
              <li><a href="https://etalab.gouv.fr" title="etalab.gouv.fr - Nouvelle fenêtre" target="_blank">etalab.gouv.fr</a></li>
              <li><a href="https://beta.gouv.fr" title="beta.gouv.fr - Nouvelle fenêtre" target="_blank">beta.gouv.fr</a></li>
              <li><a href="https://data.gouv.fr" title="data.gouv.fr - Nouvelle fenêtre" target="_blank">data.gouv.fr</a></li>
              <li><a href="https://api.gouv.fr" title="api.gouv.fr - Nouvelle fenêtre" target="_blank">api.gouv.fr</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__sites-publics">
           <ul>
            <li><a href="https://elysee.fr" title="Élysée.fr - Nouvelle fenêtre" target="_blank">Élysée.fr</a></li>
            <li><a href="https://gouvernement.fr" title="gouvernement.fr - Nouvelle fenêtre" target="_blank">gouvernement.fr</a></li>
            <li><a href="https://www.service-public.fr" title="service-public.fr - Nouvelle fenêtre" target="_blank">service-public.fr</a></li>
            <li><a href="https://legifrance.gouv.fr" title="légifrance.gouv.fr - Nouvelle fenêtre" target="_blank">légifrance.gouv.fr</a></li>
          </ul>
        </div>
      </div>

    </footer>

</template>

<script>

  export default {
    name: 'Footer'
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  footer {
    padding: 20px 20px 24px 20px;
    margin-top: 120px;
    border-top: 6px solid $gray;
    color: $black;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    a {
      border-bottom: none !important;
    }

    @media only screen and (max-width: $mobile-max-width) {
      padding: 20px 12px 24px 12px;
      margin-top: 64px;
      display: inline-block;
    }

    .footer__logo-rf {
      width: 121px;
      margin: 20px;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0 0 20px 0;
      }
    }

    .footer__logo-dg {
      width: 260px;
      max-width: 80%;
    }

    .footer__content {
      margin: 18px 40px 0px 40px;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0;
      }
    }

    .footer__description {
      margin-top: 16px;
      max-width: 640px;
    }

    .footer__websites {
      margin: 16px 0 8px 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div {
        margin-right: 48px;
      }

      ul {
        padding: 0;

        li {
          list-style-type: none;
        }
      }
    }

    .footer__sites-publics {
      margin-top: 24px;

      a {
        font-size: 0.875rem;
      }

      ul {
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          list-style-type: none;
          margin-right: 16px;
          display: inline-flex;
        }
      }
    }
  }

</style>
