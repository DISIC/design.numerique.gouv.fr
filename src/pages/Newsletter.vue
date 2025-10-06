<template>
  <Layout>
    <div class="dg-content fr-px-2w">
      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Newsletter</a>
          </li>
        </ol>
      </nav>

      <h1 lang="en">Newsletter</h1>
      <p class="fr-text--lead">
        DesignGouv, c'est aussi des événements et des rencontres pour faire
        vivre la culture design au sein des administrations.
      </p>
      <p>
        Et parfois des offres d'emploi ou propositions de collaboration. C'est
        pourquoi nous vous proposons de partager vos compétences.
      </p>

      <div class="dg-content dg-content--xs fr-mt-6w">
        <form
          action="https://sibforms.com/serve/MUIFAIB5vtgiHecAcSy-dibeNcjH3CrhFBrTieylWyUXfu7xMMgaJprVy5cjLq1-SBFOl2jYEZ25_ke1Hzw0LHc2aBoQtFuCgGiKzTB73QhJRtt722LfPhXMY7PY-T60wV9eBmLttylfbhzx4WI5aWUWJQQ7ldjP3bn8kqc8ex6oP2LsIIrEw6ZJtRKDvjqmEVvWkCwvguQoP3I3"
          method="post"
          id="sib-form"
          data-type="subscription"
        >
          <div class="fr-form-group">
            <label class="fr-label" for="EMAIL" aria-describedby="format">
              Votre adresse électronique (obligatoire)
            </label>
            <p class="fr-hint-text" id="format">Au format prenom@mail.fr</p>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="fr-input"
              id="EMAIL"
              required
              autocomplete="email"
            />
          </div>

          <div class="fr-form-group">
            <label class="fr-label" for="ORGANISATION"
              >Vous travaillez dans...</label
            >
            <select
              class="fr-select"
              name="ORGANISATION"
              id="ORGANISATION"
              required
            >
              <option value="" selected disabled hidden>
                Selectionnez une option
              </option>
              <option value="La fonction publique de l'État">
                La fonction publique de l'État
              </option>
              <option value="La fonction publique des collectivités">
                La fonction publique des collectivités
              </option>
              <option value="Le privé">Le privé</option>
              <option value="Je suis étudiant(e)">Je suis étudiant(e)</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div class="fr-form-group">
            <fieldset class="fr-fieldset">
              <legend
                class="fr-fieldset__legend fr-text--regular"
                id="checkboxes-legend"
              >
                Votre expertise professionnelle
              </legend>
              <div class="fr-fieldset__content">
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Designer UX"
                    name="JOB_TITLE[]"
                    id="job-designer-ux"
                  /><label class="fr-label" for="job-designer-ux"
                    >Designer UX</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Designer UI"
                    name="JOB_TITLE[]"
                    id="job-designer-ui"
                  /><label class="fr-label" for="job-designer-ui"
                    >Designer UI</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Designer de services"
                    name="JOB_TITLE[]"
                    id="job-designer-services"
                  /><label class="fr-label" for="job-designer-services"
                    >Designer de services</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Product Owner"
                    name="JOB_TITLE[]"
                    id="job-po"
                  /><label class="fr-label" for="job-po"
                    >Chef / cheffe de produit (<span lang="en"
                      >product owner</span
                    >)</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="User Researcher"
                    name="JOB_TITLE[]"
                    id="job-researcher"
                  /><label class="fr-label" for="job-researcher"
                    >Chercheur / chercheuse utilisateur (<span lang="en"
                      >user researcher</span
                    >)</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Scrum Master"
                    name="JOB_TITLE[]"
                    id="job-scrum"
                  /><label class="fr-label" for="job-scrum" lang="en"
                    >Scrum master</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Développeur front-end"
                    name="JOB_TITLE[]"
                    id="job-frontend"
                  /><label class="fr-label" for="job-frontend"
                    >Développeur / développeuse
                    <span class="fr-pl-1v" lang="en">front-end</span></label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Développeur back-end"
                    name="JOB_TITLE[]"
                    id="job-backend"
                  /><label class="fr-label" for="job-backend"
                    >Développeur / développeuse
                    <span class="fr-pl-1v" lang="en">back-end</span></label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Développeur accessibilité"
                    name="JOB_TITLE[]"
                    id="job-a11y"
                  /><label class="fr-label" for="job-a11y"
                    >Développeur / développeuse accessibilité</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Spécialiste sciences comportementales"
                    name="JOB_TITLE[]"
                    id="job-behavioral"
                  /><label class="fr-label" for="job-behavioral"
                    >Spécialiste en sciences comportementales</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="UX Writer"
                    name="JOB_TITLE[]"
                    id="job-writer"
                  /><label class="fr-label" for="job-writer"
                    >Rédacteur (<span lang="en">UX writer</span>)</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Juriste"
                    name="JOB_TITLE[]"
                    id="job-juriste"
                  /><label class="fr-label" for="job-juriste">Juriste</label>
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Data Scientist"
                    name="JOB_TITLE[]"
                    id="job-data"
                  /><label class="fr-label" for="job-data" lang="en"
                    >Data scientist</label
                  >
                </div>
                <div class="fr-checkbox-group">
                  <input
                    type="checkbox"
                    value="Autre"
                    name="JOB_TITLE[]"
                    id="job-autre"
                  /><label class="fr-label" for="job-autre">Autre</label>
                </div>
              </div>
            </fieldset>
          </div>

          <p>
            <small
              >Les données recueillies sur ce formulaire sont traitées par les
              équipes de la DINUM. Elles nous permettent de vous informer via
              e-mail des actualités de la communauté DesignGouv.</small
            >
          </p>
          <p>
            <small
              >Conformément à la règlementation, vous disposez d'un droit
              d'opposition et d'un droit à la limitation du traitement de
              données vous concernant, ainsi que d'un droit d'accès, de
              rectification, de portabilité et d'effacement de vos données. Vous
              pouvez exercer vos droits en nous écrivant à l'adresse
              électronique suivante : contact@design.numerique.gouv.fr.</small
            >
          </p>

          <input
            type="text"
            name="email_address_check"
            value=""
            class="input--hidden"
          />
          <input type="hidden" name="locale" value="fr" />

          <div class="clear">
            <input
              type="submit"
              value="Je m'inscris à la newsletter"
              name="subscribe"
              id="sib-form-submit"
              class="fr-btn"
            />
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Newsletter",
    description:
      "DesignGouv, c'est aussi des événements, des rencontres et des discussions pour faire vivre la culture design au sein des administrations. Rejoignez-nous !",
    meta: [
      {
        name: "robots",
        content: "noindex",
      },
    ],
  },
};
</script>
