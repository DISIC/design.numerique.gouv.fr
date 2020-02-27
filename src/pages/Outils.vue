<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Les Outils</h1>

      <p class="subtitle">
        De nombreux outils peuvent vous aider à améliorer vous-même la qualité de
        vos démarches. Bonnes pratiques, expérience utilisateur, accessibilité&nbsp;:
        nous les avons réunis pour vous.
      </p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <g-image class="icon" width="24" alt="Tool icon" src="~/assets/images/tools.svg"/>
          <span class="highlight">Les 10 principes d'une démarche exemplaire</span>
        </h2>

        <p>
          Qu’est-ce qu’une démarche en ligne de qualité&nbsp;? Quelles sont les attentes
          de l’usager&nbsp;? Quels objectifs viser pour aller plus loin&nbsp;? Nous avons identifié, avec les administrations,
          dix principes traçant la voie pour des services publics numériques encore
          plus efficaces et proches des besoins des citoyens.
        </p>

        <p>
          <a href="https://www.numerique.gouv.fr/publications/dix-principes/" target="_blank" class="button">
            Voir les 10 principes <span class='arrow'>→</span>
          </a>
        </p>

      </section>

      <section>

        <h2>
          <g-image class="icon" width="24" alt="Tool icon" src="~/assets/images/tools.svg"/>
          <span class="highlight">Accessibilité : comment s'y prendre&nbsp;?</span>
        </h2>

        <p>
          Les services publics ont l’obligation légale d’être accessibles de façon équivalente
          à tout citoyen, qu’il soit ou non en situation de handicap. Un service
          numérique accessible sera plus facile à utiliser pour tous les usagers.
        </p>
        <p>
          Si vous ne savez pas par où commencer, laissez-vous guider&nbsp;:
        </p>

        <table>
          <tr>
            <td><span class="bullet">1</span></td>
            <td>
              Prenez en compte les règles d’accessibilité référencées dans le RGAA, dès le début du projet.</br>
              <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite" target="_blank" class="buttonLight">
                Voir les règles d'accessibilité du RGAA 4&nbsp;<span class='arrow'>→</span>
              </a>
            </td>
          </tr>
          <tr>
            <td><span class="bullet">2</span></td>
            <td>
              Si besoin, formez les développeurs‧es et designers</br>
              <g-link to="/formations" class="buttonLight">
                Voir les formations&nbsp;<span class='arrow'>→</span>
              </g-link>
            </td>
          </tr>
          <tr>
            <td><span class="bullet">3</span></td>
            <td>
              Tout au long du developpement, testez régulièrement l’accessibilité de votre service. Plusieurs outils peuvent vous y aider :</br>
              <!-- <a href="https://github.com/DISIC/assistant-rgaa" target="_blank" class="buttonLight">
                L'assistant RGAA&nbsp;<span class='arrow'>→</span>
              </a></br> -->
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
            </td>
          </tr>
          <tr>
            <td><span class="bullet">4</span></td>
            <td>Testez vos services avec des vrais usagers en situations de handicap variées. Nous sommes là pour faciliter.</br>
              <a href="mailto:contact@design.numerique.gouv.fr" target="_blank" class="buttonLight">
                Contacter via e-mail&nbsp;<span class='arrow'>→</span>
              </a>
            </td>
          </tr>
          <tr>
            <td><span class="bullet">5</span></td>
            <td>Enfin, pour répondre aux nouvelles obligations du <a href="https://beta.legifrance.gouv.fr/jorf/id/JORFTEXT000038811937" target="_blank">décret n° 2019-768</a> relatif à l'accessibilité aux personnes handicapées des services en ligne, vous devrez :
              <ul>
                <li>Pour chaque service, produire une déclaration d’accessibilité</li>
                <li>Pour chaque service, indiquer son niveau d'accessibilité dès la page d'accueil</li>
                <li>Pour votre entité, produire un schéma pluriannuel</li>
              </ul>
            </td>
          </tr>
        </table>

      </section>

    </div>

    <div class="card" style="--color: #168376; --colorLight: #3CDDCA;">
      <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

      <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="title">Rejoignez la communauté&nbsp;!</a></p>

      <p class="description">DesignGouv, c’est aussi une communauté qui réunit celles et ceux qui s’engagent pour promouvoir et faire vivre la culture design au sein des administrations. Nous organisons régulièrement des événements, des rencontres et des discussions. Rejoignez-nous&nbsp;!</p>

      <a href="http://eepurl.com/gLJCsb" target="_blank" class="button">Je m'inscris à la newsletter</a>

      <p>Sur Twitter : <a href="https://twitter.com/designgouv" title="Twitter" target="_blank">@DesignGouv</a></p>
    </div>

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
  },
  metaInfo: {
    title: "Les outils pour le design numérique et l'accessibilité - DesignGouv",
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
      inset 0 -0.05em $green-light,
      inset 0 -0.3em white;
    display: inline;
    transition: .1s all;

    &:hover {
      box-shadow:
        inset 0 -0.05em $green-light,
        inset 0 -1.4em white;
    }
  }

  .highlight {
    box-shadow:
      inset 0 -1.2em $green-light;
  }

  .cover {
    background-color: $green-light;
  }

  .content {

    a {
      color: $green;
    }

    strong {
      color: $green;
    }

    table {
      margin-top: 40px;
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
      color: $green;
      border: 2px solid $green;
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
      border: 2px solid $green;
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
        background: $green;
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
