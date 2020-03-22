<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Accessibilité numérique</h1>

      <p class="subtitle">
        L’accessibilité numérique permet à tous les usagers un égal accès à leurs droits, aux services publics et aux prestations qu’ils fournissent.
      </p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          Présentation
        </h2>

        <p>
          Si le numérique écarte les obstacles dus à l’éloignement et permet des services plus rapides et riches, il ne peut laisser de côté notamment les personnes en situation de handicap soit 12 millions de personnes en France.
        </p>
        <p>
          Les obligations d’accessibilité des sites publics aux personnes en situation de handicap ont été introduites par l’article 47 de la loi du 11 février 2005. Ces obligations ont été précisées par le décret du 14 mai 2009 prévoyant un délai de 2 ans pour les services de l’État et de 3 ans pour les collectivités territoriales. <strong>Depuis 2012, tous les sites publics qu’ils appartiennent aux services de l’État ou aux collectivités territoriales sont soumis à l’obligation d’accessibilité.</strong>
        </p>


      </section>

      <section>

        <h2>
          Comment s'y prendre&nbsp;?
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
                <li>Pour chaque service, produire une déclaration d’accessibilité (<a href="https://www.numerique.gouv.fr/uploads/rgaa/rgaa4-2019-exemple-declaration.pdf" title="Exemple de déclaration d'accessibilité" target="_blank">exemple</a>)</li>
                <li>Pour chaque service, indiquer son niveau d'accessibilité dès la page d'accueil</li>
                <li>Pour votre entité, produire un schéma pluriannuel de mise en accessibilité (<a href="https://www.iledefrance.fr/sites/default/files/medias/2019/07/20190708_schema-pluriannuel-access_public.pdf" target="_blank" title="Exemple de schéma pluriannuel">exemple</a>)</li>
              </ul>
            </td>
          </tr>
        </table>

      </section>

    </div>

  </Layout>
</template>

<script>

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
