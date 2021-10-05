<template>
    <div class="fr-mt-8w fr-mt-md-12w fr-follow">
        <div class="fr-container">
            <div class="fr-grid-row">
                <div class="fr-col-12 fr-col-md-8">
                    <div class="fr-follow__newsletter">
                        <div>
                            <h2 class="fr-h5 fr-follow__title">Abonnez-vous à notre lettre d’information</h2>
                            <p class="fr-text--sm fr-follow__desc">DesignGouv, c’est aussi des événements, des rencontres et des discussions pour faire vivre la culture design au sein des administrations. Rejoignez-nous !</p>
                        </div>
                        <div>
                            <a class="button" href="/newsletter">
                                S’abonner
                            </a>
                        </div>
                    </div>
                </div>
                <div class="fr-col-12 fr-col-md-4">
                    <div class="fr-follow__social">
                        <h2 class="fr-h5 fr-mb-3v fr-mb-3v">Suivez-nous<br> sur les réseaux sociaux</h2>
                        <ul class="fr-links-group fr-links-group--lg">
                            <li>
                                <a class="fr-link--twitter fr-link" title="twitter - ouvre une nouvelle fenêtre" href="https://twitter.com/design_gouv/" target="_blank">twitter</a>
                            </li>
                            <li>
                                <a class="fr-link--instagram fr-link" title="instagram - ouvre une nouvelle fenêtre" href="https://www.instagram.com/design_gouv/" target="_blank">instagram</a>
                            </li>
                            <li>
                                <a class="fr-link--linkedin fr-link" title="linkedin - ouvre une nouvelle fenêtre" href="https://www.linkedin.com/company/designgouv" target="_blank">linkedin</a>
                            </li>
                            <li>
                                <a class="fr-link--youtube fr-link" title="youtube - ouvre une nouvelle fenêtre" href="https://www.youtube.com/channel/UCMH9lC8dSlRVRfb0LoKuJZw" target="_blank">youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NewsletterResauxSociaux'
  }
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .fr-follow {
    margin-top: 6rem !important;
    background-color: $light-gray !important;

    .fr-grid-row > :not(:first-child) {
      box-shadow: -1px 0 0 0 rgba($blue, 0.5);
    }

    .fr-link {
      color: $blue;
    }
  }

</style>
