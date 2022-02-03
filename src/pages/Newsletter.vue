<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <span aria-current="page">Newsletter</span>
          </li>
        </ol>
      </nav>

      <h1 lang="en">Newsletter</h1>
      <p class="fr-text--lead">DesignGouv, c’est aussi des événements et des rencontres pour faire vivre la culture design au sein des administrations.</p>
      <p>Et parfois des offres d’emploi ou propositions de collaboration. C’est pourquoi nous vous proposons de partager vos compétences.</p>

      <div class="dg-content dg-content--xs fr-mt-6w">
          <form action="https://gouv.us5.list-manage.com/subscribe/post?u=c921e95d674341b87fd4fb6e6&amp;id=bc185cd5f1" method="post" name="mc-embedded-subscribe-form" rel="noreferrer noopener">

            <div class="fr-form-group">
              <label class="fr-label" for="mce-EMAIL" aria-describedby="format">
                Votre adresse électronique (obligatoire)
              </label>
              <p class="fr-hint-text" id="format">Au format prenom@mail.fr</p>
              <input type="email" value="" name="EMAIL" class="fr-input" id="mce-EMAIL" required>
            </div>

            <div class="fr-form-group">
              <label class="fr-label" for="mce-group[21897]">Vous travaillez dans... </label>
              <select  class="fr-select" name="group[21897]" id="mce-group[21897]">
                <option value="" selected disabled hidden>Selectionnez une option</option>
                <option value="1">La fonction publique de l'État</option>
                <option value="2">La fonction publique des collectivités</option>
                <option value="4">Le privé</option>
                <option value="8">Je suis étudiant(e)</option>
                <option value="16">Autre</option>
              </select>
            </div>

            <div class="fr-form-group">
              <fieldset class="fr-fieldset">
                <legend class="fr-fieldset__legend fr-text--regular" id='checkboxes-legend'>
                    Votre expertise professionelle
                </legend>
                <div class="fr-fieldset__content">
                  <div class="fr-checkbox-group"><input type="checkbox" value="32" name="group[21901][32]" id="mce-group[21901]-21901-0"><label class="fr-label" for="mce-group[21901]-21901-0">Designer UX</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="512" name="group[21901][512]" id="mce-group[21901]-21901-1"><label class="fr-label" for="mce-group[21901]-21901-1">Designer UI</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="2048" name="group[21901][2048]" id="mce-group[21901]-21901-2"><label class="fr-label" for="mce-group[21901]-21901-2">Designer de services</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="64" name="group[21901][64]" id="mce-group[21901]-21901-3"><label class="fr-label" for="mce-group[21901]-21901-3">Chef / cheffe de produit (<span lang="en">product owner</span>)</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="262144" name="group[21901][262144]" id="mce-group[21901]-21901-4"><label class="fr-label" for="mce-group[21901]-21901-4">Chercheur / chercheuse utilisateur (<span lang="en">user researcher</span>)</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="1024" name="group[21901][1024]" id="mce-group[21901]-21901-5"><label class="fr-label" for="mce-group[21901]-21901-5" lang="en">Scrum master</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="128" name="group[21901][128]" id="mce-group[21901]-21901-6"><label class="fr-label" for="mce-group[21901]-21901-6">Développeur / développeuse <span lang="en">front-end</span></label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="4096" name="group[21901][4096]" id="mce-group[21901]-21901-7"><label class="fr-label" for="mce-group[21901]-21901-7">Développeur / développeuse <span lang="en">back-end</span></label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="8192" name="group[21901][8192]" id="mce-group[21901]-21901-8"><label class="fr-label" for="mce-group[21901]-21901-8">Développeur / développeuse accessibilité</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="16384" name="group[21901][16384]" id="mce-group[21901]-21901-9"><label class="fr-label" for="mce-group[21901]-21901-9">Spécialiste en sciences comportementales</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="32768" name="group[21901][32768]" id="mce-group[21901]-21901-10"><label class="fr-label" for="mce-group[21901]-21901-10">Rédacteur (<span lang="en">UX writer</span>)</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="65536" name="group[21901][65536]" id="mce-group[21901]-21901-11"><label class="fr-label" for="mce-group[21901]-21901-11">Juriste</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="131072" name="group[21901][131072]" id="mce-group[21901]-21901-12"><label class="fr-label" for="mce-group[21901]-21901-12" lang="en">Data scientist</label></div>
                  <div class="fr-checkbox-group"><input type="checkbox" value="256" name="group[21901][256]" id="mce-group[21901]-21901-13"><label class="fr-label" for="mce-group[21901]-21901-13">Autre</label></div>
                </div>
              </fieldset>
            </div>

            <!-- <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div> -->

            <p><small>Les données recueillies sur ce formulaire sont traitées par les équipes de la DINUM. Elles nous permettent de vous informer via e-mail des actualités de la communauté DesignGouv.</small></p>
            <p><small>Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à l’adresse électronique suivante : contact@design.numerique.gouv.fr.</small></p>

            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input title="les vrais gens savent" type="text" name="b_c921e95d674341b87fd4fb6e6_bc185cd5f1" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Je m'inscris à la newsletter" title="Je m'inscris à la newsletter" name="subscribe" id="mc-embedded-subscribe" class="fr-btn"></div>

          </form>
      </div>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Newsletter",
      description: "DesignGouv, c’est aussi des événements, des rencontres et des discussions pour faire vivre la culture design au sein des administrations. Rejoignez-nous !",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    }
  }
</script>
