<template>
  <Layout hideNewsletter>

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

    <div class="content">
      <h1 lang="en">Newsletter</h1>
      <p class="fr-text--lead">DesignGouv, c’est aussi des événements et des rencontres pour faire vivre la culture design au sein des administrations.</p>
      <p>Et parfois des offres d’emploi ou propositions de collaboration. C’est pourquoi nous vous proposons de partager vos compétences.</p>

      <form action="https://gouv.us5.list-manage.com/subscribe/post?u=c921e95d674341b87fd4fb6e6&amp;id=bc185cd5f1" method="post" name="mc-embedded-subscribe-form" rel="noreferrer noopener">

        <div class="indicates-required"><span class="asterisk">*</span> champs obligatoires</div>

        <div class="form-group">
          <label for="mce-EMAIL" aria-describedby="format">
            Votre adresse électronique <span class="asterisk">*</span>
          </label>
          <p class="fr-hint-text" id="format">Au format prenom@mail.fr</p>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" required>
        </div>

        <div class="form-group">
          <label for="mce-group[21897]">Vous travaillez dans... </label>
          <div class="form-group-select">
            <select name="group[21897]" id="mce-group[21897]">
              <option >...</option>
              <option value="1">La fonction publique de l'État</option>
              <option value="2">La fonction publique des collectivités</option>
              <option value="4">Le privé</option>
              <option value="8">Je suis étudiant(e)</option>
              <option value="16">Autre</option>
            </select>
          </div>
        </div>

        <div class="form-group form-group__checkboxes">
          <fieldset>
          <legend>Votre expertise professionelle </legend>
          <ul>
            <li><input type="checkbox" value="32" name="group[21901][32]" id="mce-group[21901]-21901-0"><label for="mce-group[21901]-21901-0">Designer UX</label></li>
            <li><input type="checkbox" value="512" name="group[21901][512]" id="mce-group[21901]-21901-1"><label for="mce-group[21901]-21901-1">Designer UI</label></li>
            <li><input type="checkbox" value="2048" name="group[21901][2048]" id="mce-group[21901]-21901-2"><label for="mce-group[21901]-21901-2">Designer de services</label></li>
            <li><input type="checkbox" value="64" name="group[21901][64]" id="mce-group[21901]-21901-3"><label for="mce-group[21901]-21901-3">Chef / cheffe de produit (<span lang="en">product owner</span>)</label></li>
            <li><input type="checkbox" value="262144" name="group[21901][262144]" id="mce-group[21901]-21901-4"><label for="mce-group[21901]-21901-4">Chercheur / chercheuse utilisateur (<span lang="en">user researcher</span>)</label></li>
            <li><input type="checkbox" value="1024" name="group[21901][1024]" id="mce-group[21901]-21901-5"><label for="mce-group[21901]-21901-5" lang="en">Scrum master</label></li>
            <li><input type="checkbox" value="128" name="group[21901][128]" id="mce-group[21901]-21901-6"><label for="mce-group[21901]-21901-6">Développeur / développeuse <span lang="en">front-end</span></label></li>
            <li><input type="checkbox" value="4096" name="group[21901][4096]" id="mce-group[21901]-21901-7"><label for="mce-group[21901]-21901-7">Développeur / développeuse <span lang="en">back-end</span></label></li>
            <li><input type="checkbox" value="8192" name="group[21901][8192]" id="mce-group[21901]-21901-8"><label for="mce-group[21901]-21901-8">Développeur / développeuse accessibilité</label></li>
            <li><input type="checkbox" value="16384" name="group[21901][16384]" id="mce-group[21901]-21901-9"><label for="mce-group[21901]-21901-9">Spécialiste en sciences comportementales</label></li>
            <li><input type="checkbox" value="32768" name="group[21901][32768]" id="mce-group[21901]-21901-10"><label for="mce-group[21901]-21901-10">Rédacteur (<span lang="en">UX writer</span>)</label></li>
            <li><input type="checkbox" value="65536" name="group[21901][65536]" id="mce-group[21901]-21901-11"><label for="mce-group[21901]-21901-11">Juriste</label></li>
            <li><input type="checkbox" value="131072" name="group[21901][131072]" id="mce-group[21901]-21901-12"><label for="mce-group[21901]-21901-12" lang="en">Data scientist</label></li>
            <li><input type="checkbox" value="256" name="group[21901][256]" id="mce-group[21901]-21901-13"><label for="mce-group[21901]-21901-13">Autre</label></li>
          </ul>
          </fieldset>
        </div>

        <!-- <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div> -->

        <p class="rgpd">
          Les données recueillies sur ce formulaire sont traitées par les équipes de la DINUM. Elles nous permettent de vous informer via e-mail des actualités de la communauté DesignGouv.
        </p>

        <p class="rgpd rgpd--small">
          Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à l’adresse électronique suivante : contact@design.numerique.gouv.fr.
        </p>

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input title="les vrais gens savent" type="text" name="b_c921e95d674341b87fd4fb6e6_bc185cd5f1" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Je m'inscris à la newsletter" title="Je m'inscris à la newsletter" name="subscribe" id="mc-embedded-subscribe" class="button"></div>

      </form>

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
