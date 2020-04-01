<template>
  <Layout>

    <div class="cover">
     <div class="coverContainer">

      <h1>Les formations</h1>

      <p class="subtitle">De nombreuses formations sont disponibles, certaines accessibles
        gratuitement, pour vous former personnellement ou en équipe sur les divers
        sujets liés au design, à la qualité des services numériques et à l’accessibilité.</p>

      </div>
    </div>

    <div class="content">

      <section>

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="">Initiations</span>
        </h2>
        <p>Initiez-vous facilement et gratuitement. C'est une bonne manière de découvrir rapidement un nouveau domaine&nbsp;!</p>

        <h3>Design</h3>
        <p>
          <a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" target="_blank" class="buttonLight"><span class='arrowLeft'>→</span>Initiez-vous au Design<span class="black">, 6 heures, gratuit.</span></a></br>
          <a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" target="_blank" class="buttonLight"><span class='arrowLeft'>→</span>UX design&nbsp;: découvrez les fondamentaux<span class="black">, 8 heures, gratuit.</span></a>
        </p>

        <h3>Accessibilité</h3>
        <p>
          <a href="https://www.fun-mooc.fr/courses/inria/41012/session01/about" target="_blank" class="buttonLight"><span class='arrowLeft'>→</span>L'accessibilité numérique<span class="black">, 15 heures, gratuit.</span></a></br>
          <a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" target="_blank" class="buttonLight"><span class='arrowLeft'>→</span>Mise en œuvre de l’accessibilité numérique<span class="black">, 14 heures, gratuit.</span></a>
        </p>

      </section>

      <section>

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="">Certifications</span>
        </h2>
        <p>Avec les formations certifiantes, vous pouvez acquérir rapidement des
          compétences sur les sujets qui vous intéressent.</p>

        <h3>Qualité</h3>
        <p>
          <a href="https://www.opquast.com/formation/" target="_blank" class="buttonLight"><span class='arrowLeft'>→</span>Maîtrise de la qualité en projet web<span class="black">, 14 heures, 250€ HT.</span></a></br>
        </p>

      </section>

      <section>

        <h2>
          <g-image class="icon" width="24" alt="Book icon" src="~/assets/images/courses.svg"/>
          <span class="">Diplômes</span>
        </h2>
        <p>Les formations diplômantes vous permettent de devenir expert ou de vous diriger vers un nouveau métier.</p>

        <h3>Bientôt disponible</h3>

      </section>

    </div>

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
  },
  metaInfo: {
    title: "Les formations au design numérique et à l'accessibilté - DesignGouv",
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
      content: "https://designgouv.fr/designGouv.png"
    }],
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/scss/_vars.scss";

  .content {

    strong {
      color: $blue;
    }

    .buttonLight {
      text-decoration: none;
      background-color: white;
      font-weight: bold;
      display: inline-block;
      margin: 0 0 16px 0;

      .black {
        color: $black;
        font-weight: normal;
      }

      &:hover {
        .arrow {
          padding: 0 0 0 10px;
        }

        .arrowLeft {
          padding: 0 4px 0 4px;
        }
      }
    }
  }

</style>
