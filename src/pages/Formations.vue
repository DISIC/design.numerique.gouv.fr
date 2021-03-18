<template>
  <Layout class="formations-page">

     <!-- <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Les formations</span>
        </li>
      </ol>
    </nav> -->

    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight"><Formations class="h1__icon" focusable="false" aria-hidden="true"/>Formations</h1>

      <p class="cover__subtitle">De nombreuses formations sont disponibles, certaines accessibles
        gratuitement, pour vous former personnellement ou en équipe sur les divers
        sujets liés au design, à la qualité des services numériques et à l’accessibilité.</p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Initiations
        </h2>
        <p>Initiez-vous facilement et gratuitement. C'est une bonne manière de découvrir rapidement un nouveau domaine&nbsp;!</p>

        <h3>Design</h3>
        <ul>
          <li><a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" title="Initiez-vous au Design - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Initiez-vous au Design</a>, 6 heures, gratuit.</li>
          <li><a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" title="UX design : découvrez les fondamentaux - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>UX design&nbsp;: découvrez les fondamentaux</a>, 8 heures, gratuit.</li>
        </ul>

        <h3>Accessibilité</h3>
        <ul>
          <li><a href="https://www.fun-mooc.fr/courses/course-v1:inria+41012+archive_ouvert/courseware/3d7180f8d1974e7a8b8650dd9c05c238/2a97190d9d474426972507e9f151a213/" title="L'accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>L'accessibilité numérique</a>. Ce <abbr title="Massive Open Online Course" lang="en">MOOC</abbr> est un cours généraliste d’introduction à l’accessibilité numérique. Il est accessible en mode « Archivé ouvert » : il n'y a donc pas de forum sur ce cours, pas d'animation ni de suivi de l’équipe pédagogique, et aucune attestation de suivi ou de certificat ne sera délivrée. .</a></li>
          <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.</li>
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
        <p>Avec les formations certifiantes, vous pouvez acquérir rapidement des
          compétences sur les sujets qui vous intéressent.</p>

        <h3>Qualité</h3>
        <ul>
          <li><a href="https://www.opquast.com/formation/" title="Maîtrise de la qualité en projet web - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2" height="16px"/>Maîtrise de la qualité en projet web</a>, 14 heures, 250€ HT.</li>
        </ul>

      </section>

      <section>

        <h2>
          <Formations class="h2__icon" focusable="false" aria-hidden="true"/>Diplômes
        </h2>
        <p>Les formations diplômantes vous permettent de devenir expert ou de vous diriger vers un nouveau métier.</p>

        <h3>Bientôt disponible</h3>

      </section>

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
      title: "Les formations au design numérique et à l'accessibilté numérique",
      meta: [{
        name: 'description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:title',
        content: "Les formations au design numérique et à l'accessibilté - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les formations liées au design, à la qualité des services numériques et à l’accessibilité."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .formations-page {

    li {
      list-style-type: none;
    }

    a {

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

</style>
