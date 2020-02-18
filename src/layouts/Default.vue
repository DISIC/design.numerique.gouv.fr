<template>
  <div>
    <header class="header">
      <div>
        <g-link to="/">
          <g-image class="marianne" src="~/assets/images/marianne.svg" alt="DesignGouv - Retour à l'accueil"/>
        </g-link>
        <strong class="website">
          <g-link class="title" to="/">design.numerique.gouv.<span>fr</span></g-link>
        </strong>
      </div>
      <nav class="nav">
        <a href="http://eepurl.com/gLJCsb" target="_blank" class="community">Rejoindre la communauté</a>
        <Menu />
        <!-- <g-link class="nav__link" to="/recrutement">Recrutement</g-link> -->
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
      <div class="layout">

        <p class="small"><strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a> (DINUM).<br>
        Accessibilité : en cours d'évaluation au 15 jan 2020<br>
        Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">code source</a> est disponible en licence libre.</p>

        <div class="public">
          <span>LES SITES PUBLICS :</span>
          <a href="https://elysee.fr" target="_blank">Elysee.fr</a>
          <a href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
          <a href="https://www.service-public.fr" target="_blank">service-public.fr</a>
          <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
          <a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu,
  }
}
</script>

<style lang="scss" scoped>

  @import "src/assets/scss/_vars.scss";

  .marianne {
    width: 80px;
  }

  .website {
    @media only screen and (max-width: 740px) {
      display: none;
    }
  }

  .community {
    background-color: #FFFFFF;
    padding: 8px 22px;
    border: solid 1px $emerald;
    border-radius: 24px;
    text-decoration: none;
    color: $emerald;
    margin-right: 16px;

    &:hover, &:focus {
      background-color: $emerald;
      color: white;
    }

    @media only screen and (max-width: $mobileMaxWidth) {
      display: none;
    }
  }

</style>
