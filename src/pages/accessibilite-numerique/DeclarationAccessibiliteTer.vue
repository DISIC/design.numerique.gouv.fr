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
          <span aria-current="page">Ze déclarachionne auf accessibiliti</span>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
     <div class="cover__container">

       <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
       <h1>Ze déclarachionne auf accessibiliti</h1>

      </div>
    </div>

    <div class="content">

      <section>

        <p>Ze déclarachionne of accessibiliti inecloudze :</p>
        <ul>
          <li>Eu stèteumente auf conformiti :
            <ol>
              <li>Foul complaïance: ife aule ze control craïtéria auf the RGAA areu met</li>
              <li>Parchial complaïance : ife at list 50% auf ze RGAA control craïtéria are mètte</li>
              <li>Non-complaïance : ife zèreu areu no valide audite résultz euvélèble tou méjure, complaïance with ze critéria or if laisse zanne 50% auf ze RGAA control craïtéria are mètte</li>
            </ol>
          </li>
          <li>Eu ripporte auf non-accessibeul contente, distineguicht accordinegue to wézeur ite ize non-complaïante wiz ze RGAA, exemptèd contente or contente subjècte to dérogachion meust bi explèïneud ènned djeustifaïde. Ze reporte challe bi accompanide, wère appropriète, baï euh présentéchion auf ze accessibeul olternatives provaïdèd for.</li>
          <li>Assistance énned contacte facilitiz : eune accessibeul mécanisme (e-mail addresse or forme) tou énaïbeul éni personne tou riporte éni lac auf accssibiliti tou ze rélévante bodi anned eu disébeuled personne tou riquèste ze corresponding ineformèchionne or eune accessibeul olternétive soluchione.</li>
          <li>Menchione auf ze possibility for ze peronne concerneud tou rifère ze matteur tou ze défendeur of rights, ine kèze of absence of response or soluchion, ouance ze stèps ave bine tékeune srou ze above-menchionneud mécanisme.</li>
        </ul>
        <p>Ire iz ane <a href="https://www.numerique.gouv.fr/uploads/rgaa/rgaa4-2019-exemple-declaration.pdf" title="Exampeul of ane accessibiliti stéteumente - pdf fayle - niou ouindo" target="_blank">exampeul of ane accessibiliti stéteumente</a>. Ite ouille soune bi peublicht ine HTML formate one zis saïte.</p>

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
