<template>
  <Layout>

    <div class="coverLight">
     <div class="coverContainer covid-cover">

       <strong>Covid-19</strong>
       <h1>Les opportunités d'entraide</h1>

      </div>
    </div>

    <div class="content">

      <!-- <section class="entete">
        <p>Retrouvez toutes les réponses officielles sur le Coronavirus sur : <a href="https://gouvernement.fr/info-coronavirus">gouvernement.fr/info-coronavirus</a>.</p>
        <p>A compter du 17 mars 2020, des mesures ont été prises pour réduire les contacts et déplacements au strict minimum sur l’ensemble du territoire, pour quinze jours minimum. Des dérogations sur attestation sont possibles. Si vous n’avez <strong>pas d’imprimante</strong>, vous pouvez les recopier sur une feuille de papier. Une <a href="https://media.interieur.gouv.fr/deplacement-covid-19/" target="_blank">version numérique de l'attestation de déplacement dérogatoire</a> est maintenant disponible.</p>
      </section> -->

      <!-- <section id="attestations">
        <h2>Attestation de déplacement dérogatoire</h2>

        <a href="https://media.interieur.gouv.fr/deplacement-covid-19/" title="En numérique, à remplir"  target="_blank">
          <div class="file">
            <p class="description">En numérique, à remplir</p>
            <p class="download">
              <span class="link">Accéder <font-awesome :icon="['fas', 'arrow-right']"/></span>
              <font-awesome :icon="['fas', 'mobile-alt']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/pdf/attestation-deplacement-fr.pdf" download="attestation-deplacement-fr.pdf" title="Télécharger au format PDF">
          <div class="file">
            <p class="description">Format PDF</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-pdf']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/txt/attestation-deplacement-fr.txt" download="attestation-deplacement-fr.txt" title="Télécharger au format TXT">
          <div class="file">
            <p class="description">Format TXT</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-alt']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/docx/attestation-deplacement-fr.docx" download="attestation-deplacement-fr.docx" title="Télécharger au format Word">
          <div class="file">
            <p class="description">Format Word</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-word']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/docx/attestation-deplacement-en.docx" download="attestation-deplacement-en.docx" title="Download the Word file">
          <div class="file">
            <p class="description">WORD file in english</p>
            <p class="download">
              <span class="link">Download <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-word']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/pdf/attestation-deplacement-falc.pdf" download="attestation-deplacement-fr.pdf" title="Télécharger en FALC (facile à lire et à comprendre)">
          <div class="file">
            <p class="description">En FALC (facile à lire)</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-image']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>
      </section>

      <section>
        <h2>Justificatif de déplacement professionnel</h2>

        <g-link to="/covid-19/justificatif-deplacement-professionnel-fr/" title="Afficher sur le web pour recopier">
          <div class="file">
            <p class="description">Sur le web, à recopier</p>
            <p class="download">
              <span class="link">Afficher <font-awesome :icon="['fas', 'arrow-right']"/></span>
              <font-awesome :icon="['far', 'edit']" size="2x" transform="shrink-5" alt="Icon"/>
            </p>
          </div>
        </g-link>

        <a href="/covid-19/pdf/justificatif-deplacement-professionnel-fr.pdf" download="justificatif-deplacement-professionnel-fr.pdf" title="Télécharger au format PDF">
          <div class="file">
            <p class="description">Format PDF</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-pdf']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/txt/justificatif-deplacement-professionnel-fr.txt" download="justificatif-deplacement-professionnel-fr.txt" title="Télécharger au format TXT">
          <div class="file">
            <p class="description">Format TXT</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-alt']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/docx/justificatif-deplacement-professionnel-fr.docx" download="justificatif-deplacement-professionnel-fr.docx" title="Télécharger au format Word">
          <div class="file">
            <p class="description">Format Word</p>
            <p class="download">
              <span class="link">Télécharger <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-word']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

        <a href="/covid-19/docx/justificatif-deplacement-professionnel-en.docx" download="justificatif-deplacement-professionnel-en.docx" title="Download the Word file">
          <div class="file">
            <p class="description">WORD file in english</p>
            <p class="download">
              <span class="link">Download <font-awesome :icon="['fas', 'arrow-down']"/></span>
              <font-awesome :icon="['far', 'file-word']" size="2x" transform="shrink-3" alt="Icon"/>
            </p>
          </div>
        </a>

      </section> -->

      <section id="initiatives">
        <!-- <h2>Me porter volontaire</h2> -->

        <div class="website">
          <p class="logo"><g-image alt="Logo Réserve civique" src="~/assets/images/websites/rc.png"/></p>
          <p class="name">Réserve civique</p>
          <p class="tags"><span class="tag">Site public</span><span class="tag">Généraliste</span></p>
          <p class="description">Met en relation des volontaires avec les structures publiques ou associatives qui ont besoin de renforts.</p>
          <a href="https://jeveuxaider.gouv.fr" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo Solidaires handicaps" src="~/assets/images/websites/sh.png"/></p>
          <p class="name">Solidaires handicaps</p>
          <p class="tags"><span class="tag">Site public</span><span class="tag">Handicap</span></p>
          <p class="description">Met en relation associations et bénévoles pour venir en aide aux personnes en situation de handicap.</p>
          <a href="https://solidaires-handicaps.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <!--Supprimé car hors périmètre : aucun moyen de se porter volontaire -->
        <!-- <div class="website">
          <p class="logo"><g-image alt="Logo Arrêtons les violences" src="~/assets/images/websites/alv.svg"/></p>
          <p class="name">Arrêtons les violences</p>
          <p class="tags"><span class="tag">Site public</span><span class="tag">Violence</span></p>
          <p class="description">Aide et accompagne les personnes victimes de violence sexuelles, conjugales ou autres.</p>
          <a href="https://arretonslesviolences.gouv.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div> -->

        <div class="website">
          <p class="logo"><g-image alt="Logo Solidarité numérique" src="~/assets/images/websites/sn.svg"/></p>
          <p class="name">Solidarité numérique</p>
          <p class="tags"><span class="tag">Soutenu par le gouvernement</span><span class="tag">Numérique</span></p>
          <p class="description">Produit des ressources pour accompagner les usagers à la réalisation des démarches en ligne essentielles, et offre une assistance téléphonique.</p>
          <a href="http://solidarite-numerique.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo Airbnb" src="~/assets/images/websites/airbnb.svg"/></p>
          <p class="name">Appart solidaire - Airbnb</p>
          <p class="tags"><span class="tag">Soutenu par le gouvernement</span><span class="tag">Logement</span></p>
          <p class="description">Propose aux propriétaires de mettre leur logement inoccupé à disposition des soignants.</p>
          <a href="https://www.airbnb.fr/d/solidarite-medicale" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo Continuité pédagogique" src="~/assets/images/websites/fee.jpeg"/></p>
          <p class="name">Faire École Ensemble</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Numérique et enseignement</span></p>
          <p class="description">Soutenir les communautés éducatives pendant la période de confinement et de réouverture progressive des écoles et des établissements scolaires.</p>
          <a href="https://wiki.faire-ecole.org/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo Réussite virale" src="~/assets/images/websites/rv.png"/></p>
          <p class="name">Réussite virale</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Enseignement</span></p>
          <p class="description">Met en relation des volontaires avec des jeunes ayant besoin de soutien pour réussir leurs études.</p>
          <a href="https://reussitevirale.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo En première ligne" src="~/assets/images/websites/epl.svg"/></p>
          <p class="name">En première ligne</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Généraliste</span></p>
          <p class="description">Met en relation les personnes travaillant activement pendant l'épidémie et les personnes souhaitant les aider.</p>
          <a href="https://enpremiereligne.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <div class="website">
          <p class="logo"><g-image alt="Logo Ulule" src="~/assets/images/websites/ulule.svg"/></p>
          <p class="name">Solidarité coronavirus - Ulule</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Dons</span></p>
          <p class="description">Hébèrge de nombreuses initiatives lancées dans le cadre de l'épidémie du coronavirus et ayant besoin de dons.</p>
          <a href="https://fr.ulule.com/channels/solidarite-coronavirus/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <!-- Supprimé car site web plus disponible -->
        <!-- <div class="website">
          <p class="logo"><g-image alt="Logo Open Covid" src="~/assets/images/websites/opencovid.png"/></p>
          <p class="name">Data Against COVID-19 / FR</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Data</span></p>
          <p class="description">Une organisation informelle issue de la société civile avec des développeurs, des data scientist, des ingénieurs, des chefs de projets et talents de tous corps de métiers qui s'organisent ensemble pour fournir des données consolidées sur l'épidémie de covid 19 et proposer des outils de visualisation.</p>
          <a href="https://opencovid19.fr/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div> -->

        <div class="website">
          <p class="logo"><font-awesome :icon="['fas', 'newspaper']" size="2x" /></p>
          <p class="name">Développeurs / datascientistes - Comment aider ?</p>
          <p class="tags"><span class="tag">Initiative citoyenne</span><span class="tag">Code</span></p>
          <p class="description">Bastien Guerry a listé dans un article les initiatives adressées aux développeurs et datascientistes.</p>
          <a href="https://bzg.fr/covid19-developpeurs-datascientistes-comment-aider/" target="_blank">Accéder au site <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-2"/></a>
        </div>

        <p><i>Vous souhaitez ajouter une initiative ? <a href="mailto:contact@design.numerique.gouv.fr" target="_blank">Contactez-nous</a> ou contribuez sur notre <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">github</a> !</i></p>

      </section>

    </div>

  </Layout>
</template>

<script>
export default {
  components: {
  },
  metaInfo: {
    title: "Covid-19 : les attestations de sortie et les initiatives d'entraide - DesignGouv",
    meta: [{
      name: 'description',
      content: "Retrouvez ici les attestations de sortie et les initiatives d'entraide mises en place pour faire face à l'épidemie de covid-19."
    },
    {
      property: 'og:title',
      content: "Covid-19 : les attestations de sortie et les initiatives d'entraide - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Retrouvez ici les attestations de sortie et les initiatives d'entraide mises en place pour faire face à l'épidemie de covid-19."
    },
    {
      property: 'og:image',
      content: "https://designgouv.fr/attestation.png"
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
      content: "Covid-19 : les attestations de sortie et les initiatives d'entraide - DesignGouv"
    },
    {
      name: "twitter:description",
      content: "Retrouvez ici les attestations de sortie et les initiatives d'entraide mises en place pour faire face à l'épidemie de covid-19."
    },
    {
      name: "twitter:image",
      content: "https://designgouv.fr/attestation.png"
    },],
  }
}
</script>

<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  button {
    background-color: white;
    color: $blue;
    margin: 0 8px;

    &:hover, &:focus {
      border-color: $blue;

      a {
        text-decoration: none;
      }
    }
  }

  .entete {
    margin-bottom: 64px;
  }

  .file {
    display: inline-block;
    padding: 16px;
    margin: 20px 20px 0 0;
    border: 2px solid $light-gray;
    background-color: $light-gray;
    border-radius: 16px;
    width: 192px;

    p {
      margin: 0;
    }

    @media only screen and (max-width: $mobileMaxWidth) {
      margin: 12px 12px 0 0;
      width: 80%;
    }

    &:hover, &:focus {
      border: 2px solid $blue;
    }

    .description {
      font-weight: bold;
      color: $dark;
      margin-bottom: 8px;
    }

    .download {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .link {
        text-align: left;
        font-size: 0.875em;
        color: $blue;

        svg {
          padding-left: 4px;
        }
      }
    }
  }

  .website {
    display: inline-block;
    vertical-align: top;
    margin: 40px 32px 40px 0;
    width: 348px;

    @media only screen and (max-width: $mobileMaxWidth) {
      width: 92%;
      margin: 32px 32px 32px 0;
    }

    p {
      margin: 0 0 12px 0;
    }

    .logo {
      height: 32px;
      display: flex;
      align-items: flex-end;

      img {
        width: auto;
        height: auto;
        max-height: 32px;
        max-width: 33%;
      }
    }

    .name {
      font-weight: bold;
      font-size: 1.375em;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    .tags {
      .tag {
        display: inline-block;
        font-size: 0.75em;
        font-weight: bold;
        background-color: $light-gray;
        border-radius: 16px;
        padding: 4px 12px;
        margin-top: 4px;
        margin-right: 8px;
      }
    }

    a {
      font-weight: bold;

      svg {
        padding-left: 4px;
        transition: .1s all;
      }

      &:hover {
        svg {
          padding-left: 12px;
        }
      }
    }
  }

</style>
