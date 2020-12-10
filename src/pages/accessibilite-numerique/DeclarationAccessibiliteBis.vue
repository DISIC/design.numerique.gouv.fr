<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibility</g-link>
        </li>
        <li>
          <span aria-current="page">The Declaration of Accessibility</span>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>The Declaration of Accessibility</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <p>The Declaration of Accessibility includes:</p>
        <ul>
          <li>A statement of conformity:
            <ol>
              <li>Full compliance: if all the control criteria of the GAAR are met</li>
              <li>Partial compliance: if at least 50% of the GAAR control criteria are met</li>
              <li>Non-compliance: if there are no valid audit results available to measure compliance with the criteria or if less than 50% of the GAAR control criteria are met</li>
            </ol>
          </li>
          <li>A report of non-accessible content, distinguished according to whether it is non-compliance with the RGAA, exempted content or content subject to derogation for disproportionate burden. In the latter case, derogations must be explained and justified. The report shall be accompanied, where appropriate, by a presentation of the accessible alternatives provided for</li>
          <li>Assistance and contact facilities: an accessible mechanism (e-mail address or form) to enable any person to report any lack of accessibility to the relevant body and a disabled person to request the corresponding information or an accessible alternative solution.</li>
          <li>Mention of the possibility for the person concerned to refer the matter to the Defender of Rights, in case of absence of response or solution, once the steps have been taken through the above-mentioned mechanism</li>
        </ul>
        <p>Here is an <a href="https://www.numerique.gouv.fr/uploads/rgaa/rgaa4-2019-exemple-declaration.pdf" title="Example of an accessibility statement - pdf file - new window" target="_blank">example of an accessibility statement</a>. It will soon be published in HTML format on this site.</p>

      </section>

    </div>

  </Layout>
</template>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
  metaInfo: {
    title: "Déclaration d‘accessibilité - DesignGouv",
    meta: [{
      name: 'description',
      content: "La déclaration d’accessibilité est le résultat d’une évaluation effective de la conformité du service de communication au public en ligne à la norme de référence."
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

<style lang="scss">

  .content {

    ul, li, ol {
      list-style: inherit;
      margin-left: 16px;
     }
  }

</style>
