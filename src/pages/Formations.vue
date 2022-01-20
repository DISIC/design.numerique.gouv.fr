<template>
  <Layout class="formations-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Formations</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Formations class="h1__icon" focusable="false" aria-hidden="true"/>Formations</h1>

      <p class="cover__subtitle">Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites.</p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Nos formations
        </h2>
        <p>Pour se poser les bonnes questions aux bons moments, pour prendre les bonnes décisions avec les bonnes méthodes et les bons outils, pour travailler avec les bons interlocuteurs, nous vous proposons quatre formations gratuites indispensables&nbsp;:</p>

        <h3>Accessibilité</h3>
        <ul>
          <li><g-link to="/formations/accessibilite/"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px" aria-hidden="true" />Formation initiale à l’accessibilité numérique</g-link>, 2 heures, gratuit, niveau débutant.</li>
        </ul>

        <h3>Design</h3>
        <ul>
          <li><g-link to="/formations/design/"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px" aria-hidden="true"/>Formation initiale au design numérique</g-link>, 2 heures, gratuit, niveau débutant.</li>
        </ul>

        <h3>Recherche utilisateur</h3>
        <ul>
          <li><g-link to="/formations/recherche-utilisateur/"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px" aria-hidden="true"/>Formation initiale à la recherche utilisateur</g-link>, 2 heures, gratuit, niveau débutant.</li>
        </ul>
        <h3>Écoconception</h3>
        <ul>
          <li><g-link to="/formations/ecoconception/"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px" aria-hidden="true"/>Formation initiale à l’écoconception</g-link>, 2 heures, gratuit, niveau débutant.</li>
        </ul>
        <h3>Simplification de l'information</h3>
        <ul>
          <li><g-link to="/formations/redaction-ux/"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px" aria-hidden="true"/>Formation initiale à la simplification de l'information</g-link>, 2 heures, gratuit, niveau débutant.</li>
        </ul>
      </section>


      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Autres initiations
        </h2>

        <h3>Accessibilité</h3>
        <ul>
          <li><a href="https://www.fun-mooc.fr/en/cours/accessibilite-numerique/" title="L’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>L’accessibilité numérique</a>. Ce <abbr title="Massive Open Online Course" lang="en">MOOC</abbr> est un cours généraliste d’introduction à l’accessibilité numérique. Il est disponible en mode « Archivé ouvert » et nécessite une inscription.</a></li>
          <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.</li>
        </ul>

        <h3>Design</h3>
        <ul>
          <li><a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" title="Initiez-vous au Design - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Initiez-vous au Design</a>, 6 heures, gratuit.</li>
          <li><a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" title="UX design : découvrez les fondamentaux - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>UX design&nbsp;: découvrez les fondamentaux</a>, 8 heures, gratuit.</li>
        </ul>

        <h3>Numérique responsable</h3>
        <ul>
          <li><a href="https://www.academie-nr.org/sensibilisation/" title="Sensibilisation au numérique responsable - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Sensibilisation au numérique responsable</a>, 30 minutes, gratuit.</li>
          <li><a href="https://www.academie-nr.org/" title="MOOC numérique responsable - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>MOOC Numérique Responsable</a>, 4h30, gratuit.<br>14 modules pour progresser et saisir l’ensemble des enjeux environnementaux, éthique et d’inclusion.</li>
        </ul>
      </section>

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Certifications
        </h2>
        <h3>Accessibilité</h3>
        <ul>
        <li><a href="https://formations.access42.net/?p=877" title="Développer des sites web accessibles - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Développer des sites web accessibles</a>, 9 heures, payant.</li>
        </ul>

        <h3>Qualité</h3>
        <ul>
          <li><a href="https://www.opquast.com/certification/" title="Maîtrise de la qualité en projet web - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Maîtrise de la qualité en projet web</a>, 14 heures, payant.</li>
        </ul>
        <p>Si votre organisme propose une formation certifiante et souhaite être référencé sur notre site, vous pouvez <a href="https://github.com/DISIC/design.numerique.gouv.fr/pulls" title="proposer une PR - nouvelle fenêtre"  target="_blank" rel="noreferrer noopener">proposer une <abbr lang="en" title="pull request">PR</abbr></a> ou nous contacter en utilisant l’adresse électronique contact@design.numerique.gouv.fr.</p>

      </section>

      <!--section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Diplômes
        </h2>
        <p>Les formations diplômantes vous permettent de devenir expert ou de vous diriger vers un nouveau métier.</p>

        <h3>Bientôt disponible</h3>

      </section-->

    </div>

  </Layout>
</template>


<script>

  import Formations from "~/assets/images/formations.svg"

  export default {
    components: {
      Formations,
    },
    metaInfo: {
      title: "Les formations",
      meta: [{
        name: 'description',
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        property: 'og:title',
        content: "Les formations - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv"
      },
      {
        name: "twitter:title",
        content: "Les formations - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .formations-page {

    .content {

      ul {
        margin-bottom: 1rem;
        margin-top: -0.5rem;
      }

      li {
        list-style-type: none;

        &:before {
          content: none;
        }
      }

      a {
        box-sizing: initial;

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

    }
  }

</style>
