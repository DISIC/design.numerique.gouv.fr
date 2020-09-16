<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <span aria-current="page">Déclaration d'accessibilité</span>
        </li>
      </ol>
    </nav>
    
    <div class="cover">
     <div class="cover__container">

      <h1>Accessibilité numérique</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>Les tests automatisés</h2>
        <p>
          Tout au long du developpement, testez régulièrement l’accessibilité de votre service. Plusieurs outils peuvent vous y aider :</br>
          <a href="https://accessibilityinsights.io/" target="_blank" class="button button--light">
             Extension Chrome et Microsoft analyse accessibilité<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </a></br>
          <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" target="_blank" class="button button--light">
             Extension Firefox analyse des structures HTML5<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </a></br>
          <a href="https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/" target="_blank" class="button button--light">
            Extension Firefox controleur de contraste (WCAG 2.1)<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </a></br>
          <a href="https://github.com/Tanaguru/webextension" target="_blank" class="button button--light">
            Extension Firefox test accessibilité (RGAA 4)<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </a>
          <span class="comment">
            Ces extensions analysent la page affichée et permettent facilement de savoir que corriger.
          </span>
        </p>
      </section>

    </div>

  </Layout>
</template>

<script>

export default {
  components: {
  },
  metaInfo: {
    title: "Accessibilité numérique - DesignGouv",
    meta: [{
      name: 'description',
      content: "Découvrez les outils pour améliorer vous-même la qualité de vos démarches."
    },
    {
      property: 'og:title',
      content: "Les outils pour le design numérique et l'accessibilité - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Découvrez les outils pour améliorer vous-même la qualité de vos démarches."
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
  @import "src/assets/scss/_accessibility.scss";
</style>
