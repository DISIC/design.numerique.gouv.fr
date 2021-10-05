<template>
  <Layout class="newsletter-page" hideNewsletter>

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

    <div class="cover">
     <div class="cover__container">

       <h1 lang="en" class="text-highlight">Newsletter</h1>

      </div>

      <p class="cover__subtitle">
        DesignGouv, c’est aussi des événements et des rencontres pour faire vivre la culture design au sein des administrations.
      </p>

      <p class="cover__subtitle cover__subtitle--small">
        Et parfois des offres d’emploi ou propositions de collaboration. C’est pourquoi nous vous proposons de partager vos compétences.
      </p>

    </div>

    <div class="content">

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


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .newsletter-page {

    .content {

      max-width: 480px;
      margin:auto;

      .rgpd {

        margin-top: 0px;

        &--small {
          color: $dark-gray;
          font-size: 12px;
          margin-bottom: 32px;
        }
      }

      .form {
        margin: 8px 0 32px 0;
      }

      form {
        display: block;
        position: relative;
        text-align: left;
      }
      .button {
        border: 0.125rem solid #0E37DD;
      }
      input:not(.button) {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        border: 2px solid $black;
        border-radius: 0;
        width: 96%;
        padding: 8px;
        font-size: 14px;

        &[type=checkbox] {
          flex-basis: 8px;
          height: 8px;
          width: 8px;
          border: 2px solid $black;
          position: relative;
          opacity: inherit;

          &:checked {
            background: $black;

            &::after {
              content: "✓";
              color: white;
              font-weight: bold;
              display: block;
              font-size: 14px;
              position: absolute;
              top: 3px;
              left: 5.5px;
            }
          }
        }
      }

      label {
        display: inline-block;
        margin: -8px 0 4px 0;
        padding: 0;
vertical-align: super;
        &::before, &::after {
          display: none;
        }
      }

      select {
        border: none;
        box-shadow: none;
        background-color: transparent;
        background-image: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        position: relative;
        padding: 8px;
        font-size: 14px;

        &:hover {
          cursor: pointer;
        }
      }
      fieldset {
        border: none;
        legend {
          font-weight: bold;
        }
      }
      .form-group-select {
        padding: 0;
        margin: 0;
        position: relative;
        border: 2px solid $black;
        width: 100%;
        overflow: hidden;

        &:after {
          z-index: -1;
          content: "▼";
          color: $black;
          font-weight: bold;
          font-size: 14px;
          position: absolute;
          top: 8px;
          right: 8px;
        }
      }

      ul {
        margin: 0;
        padding: 4px 0;
        list-style: none;
      }

      li {
        margin-bottom: 4px;

        &:hover {
          cursor: pointer;
        }

        label {
          margin-left: 4px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .form-group {
        width: 98%;
        padding-bottom: 16px;

        &__checkboxes {
          margin-top: 8px;

          li {
            &:before {
              content: none;
            }
          }
        }
      }

      .button {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
      }

      .indicates-required {text-align:right; font-size:11px; margin-right:4%;}
      .asterisk {color: $red; font-size:150%; font-weight:normal; position:relative; top:5px;}
      .clear {clear:both;}

      // div#mce-responses {float:left; top:-1.4em; padding:0em .5em 0em .5em; overflow:hidden; width:90%; margin: 0 5%; clear: both;}
      // div.response {margin:1em 0; padding:1em .5em .5em 0; font-weight:bold; float:left; top:-1.5em; z-index:1; width:80%;}
      // #mce-error-response {display:none;}
      // #mce-success-response {color:#529214; display:none;}
      // label.error {display:block; float:none; width:auto; margin-left:1.05em; text-align:left; padding:.5em 0;}

      // #mc-embedded-subscribe-form div.mce_inline_error {display:inline-block; margin:2px 0 1em 0; padding:5px 10px; background-color:rgba(255,255,255,0.85); -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; font-size:14px; font-weight:normal; z-index:1; color:#e85c41;}
      // #mc-embedded-subscribe-form input.mce_inline_error {border:2px solid #e85c41;}

    }
  }

</style>
