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

  h1 {
    box-shadow:
      inset 0 -0.3em white;
    display: inline;
    transition: .1s all;
  }

  .cover {
    background-color: $light-gray;
  }

  .content {
    table {
      margin-top: 40px;
    }

    .grid-menu {
      margin-bottom: 0;
      margin-top: 0;
      list-style-type: none;
      padding-left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin-right: 16px;
        width: 32%;
        border-radius: 5px;
        border: 1px solid $blue-light;
        text-align: center;
        padding: 24px 16px;
        font-size: 1.5em;
        display: inline-block;
        width: 100%;
        height: 100%;

        &:hover {
          text-decoration: none;
          border-color: $blue;
        }
      }
    }

    td {
      vertical-align: top;
      font-weight: 700;
      padding-bottom: 32px;

      li {
        font-weight: normal;
      }
    }

    .bullet {
      display: inline-block;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      color: $blue;
      border: 2px solid $blue;
      text-align: center;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      padding: 8px;
      margin-right: 8px;
      font-weight: 900;
    }

    .comment {
      display: inline-block;
      font-weight: normal;
      margin-top: 10px;
    }

    .button {
      text-decoration: none;
      border: 2px solid $blue;
      background-color: white;
      border-radius: 32px;
      padding: 8px 24px;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }

      &:hover {
        background: $blue;
        color: white;
      }
    }

    .buttonLight {
      text-decoration: none;
      background-color: white;
      font-weight: bold;
      display: inline-block;
      margin: 12px 0 0 0;

      &:hover {
        .arrow {
          padding: 0 0 0 10px;
        }
      }
    }
  }

</style>
