<template>

<!-- pied de page avec logo opérateur -->
<footer class="fr-footer" role="contentinfo" id="footer">
    <div class="fr-container">
        <div class="footer fr-footer__body fr-footer__body--operator">
            <div class="fr-footer__brand fr-enlarge-link">
                <p class="fr-logo" title="république française">
                    république
                    <br>française
                </p>
                <g-link to="/" class="fr-footer__brand-link footer__logo" title="DesignGouv - Retour à l’accueil">
                  <p class="footer__dg-title text-highlight">DesignGouv</p>
                  <p class="footer__dg-tagline">Par le pôle Design des services numériques</p>
                </g-link>
            </div>
            <div class="fr-footer__content ">
              <p class="fr-footer__content-desc">DesignGouv est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</br>Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">code source</a> est disponible en licence libre.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://gouvernement.fr">gouvernement.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://service-public.fr">service-public.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a class="fr-footer__content-link" href="https://data.gouv.fr">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
       <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/contact/">Contact</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/equipe/">Notre équipe</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/plan-du-site/">Plan du site</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/accessibilite/">Accessibilité : totalement conforme</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link" to="/misc/mentions-legales/">Mentions légales</g-link>
                </li>
                <li class="fr-footer__bottom-item">
                  <g-link class="fr-footer__bottom-link"  to="/misc/donnees-personnelles/">Données personnelles et cookies</g-link>
                </li>
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


<static-query>

  query {
    allJob (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
        }
      }
    }
  }

</static-query>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .fr-footer {

    border-color: $blue !important;

    ul > li {
      padding: 0;

      &:before {
        content:none;
      }
    }

    .footer {

      .fr-footer__brand-link, .fr-footer__content-link {
        border-bottom: none !important;
      }

      .footer__dg-title {
        margin: 0;
        font-size: 2rem;
        font-weight: 800;
        color: $blue;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 1.5rem;
          margin-top: 16px;
        }
      }

      .footer__dg-tagline {
        margin-left: 0.125rem;
        margin-top: 0.5rem;
        font-weight: bold;
        color: var(--g700);
        font-size: 0.875rem;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      }
    }
  }

</style>
