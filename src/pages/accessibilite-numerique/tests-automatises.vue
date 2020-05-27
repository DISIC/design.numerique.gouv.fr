<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Accessibilité numérique</h1>

      </div>
    </div>

    <div class="content text-content">

      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol>
          <li>
            <g-link to="/">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/">Accessibilité numérique</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/tests-automatises" aria-current="page">Les tests automatisés</g-link>
          </li>
        </ol>
      </nav>


      <section>

        <h2>Les tests automatisés</h2>
        <p>
          Tout au long du developpement, testez régulièrement l’accessibilité de votre service. Plusieurs outils peuvent vous y aider :</br>
          <a href="https://accessibilityinsights.io/" target="_blank" class="buttonLight">
             Extension Chrome et Microsoft analyse accessibilité&nbsp;<span class='arrow'>→</span>
          </a></br>
          <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" target="_blank" class="buttonLight">
             Extension Firefox analyse des structures HTML5&nbsp;<span class='arrow'>→</span>
          </a></br>
          <a href="https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/" target="_blank" class="buttonLight">
            Extension Firefox controleur de contraste (WCAG 2.1)&nbsp;<span class='arrow'>→</span>
          </a></br>
          <a href="https://github.com/Tanaguru/webextension" target="_blank" class="buttonLight">
            Extension Firefox test accessibilité (RGAA 4)&nbsp;<span class='arrow'>→</span>
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
