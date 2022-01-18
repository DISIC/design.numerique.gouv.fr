<template>
  <Layout>

    <div class="cover">
     <div class="cover__container">

       <h1 class="text-highlight">Erreurs corrigées !</h1>

      </div>

      <p class="cover__subtitle">
        Cette page est la version corrigée de la page <a href="../mauvais-exemple/">Trouve les erreurs</a>.
      </p>

    </div>

    <div class="content">
      <section class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12">
        <h2>Tout savoir sur la bicyclette</h2>
        <p>Une bicyclette, ou un vélo (abréviation du mot vélocipède), est un véhicule terrestre à propulsion humaine entrant dans la catégorie des cycles et composé de deux roues alignées, qui lui donnent son nom. La force motrice est fournie par son conducteur (appelé « cycliste »), en position le plus souvent assise, par l’intermédiaire de deux pédales entraînant la roue arrière par une chaîne à rouleaux.</p>
        <p>La roue avant est directrice et assure l’équilibre. Son orientation est commandée par un guidon. Le cycliste a souvent les deux mains en contact avec le guidon afin de contrôler la trajectoire, le freinage ainsi que le passage des vitesses.</p>
        <p>La <a href="https://fr.wikipedia.org/wiki/Bicyclette" target="blank" title="bicyclette - nouvelle fenêtre">bicyclette</a> est l’un des principaux moyens de transport dans de nombreuses parties du monde. Son efficacité énergétique est particulièrement élevée. Sa pratique, le cyclisme, constitue à la fois un usage quotidien de transport, un loisir populaire et un sport.</p>
        </div>
      </section>
      <img src="/assets/images/bike.png" style="width:100%" class="" alt=""  />

      <section class="fr-accordion">
          <div class="fr-accordion__title fr-content-media__transcription">
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-bike">Voir la description de l’image</button>
          </div>  
          <div class="fr-collapse" id="accordion-bike">
              <h3>L’anatomie d’une bicyclette</h3>
              <p>Voici la liste des principaux composants d’une bicyclette :</p>
              <ul>
                <li>jantes</li>
                <li>rayons</li>
                <li>moyeux</li>
                <li>attaches rapides</li>
                <li>cocottes de frein</li>
                <li>cables de frein</li>
                <li>potence</li>
                <li>cintre</li>
                <li>bouchons de cintre</li>
                <li>ruban de cintre</li>
                <li>fourche</li>
                <li>cadre</li>
                <li>selle</li>
                <li>tige de selle</li>
                <li>étriers de frein</li>
                <li>cables de frein</li>
                <li>dérailleur avant</li>
                <li>...</li>
              </ul>  
          </div>
      </section>      
      <section class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12">
          <h2>Tout savoir sur le RGAA</h2>
          <div class="fr-content-media__img">
            <img src="/assets/images/seguRgaaNuit.jpg" class="fr-responsive-img" alt="" style="width:100%" />
          </div>
        <p>Si vraiment l’accessibilité numérique vous intéresse, vous pouvez tout à fait <a download href="https://www.numerique.gouv.fr/uploads/rgaa/RGAA-v4.1.pdf">télécharger le rgaa (pdf, 3Mo)</a> ou <a target="_blank" href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/" title="le consulter en ligne - nouvelle fenêtre">le consulter en ligne</a>.</p>
        </div>
      </section>
      <section class="fr-grid-row fr-grid-row--center">
        <h2>Mieux se connaître</h2>
        <div class="fr-col-md-8 fr-col-sm-12">
          <form action="#" method="post" rel="noreferrer noopener">
            <fieldset><legend><h3>Inscrivez-vous à notre lettre d’information</h3></legend>
            

            <div class="form-group fr-mt-4w">
              <label class="fr-label" for="mail">Votre adresse électronique (obligatoire)</label>
              <input class="fr-input" type="text" id="mail" name="text-input-text" required >
            </div>

            <div class="form-group fr-mt-4w">
              <label class="fr-label" for="pseudo">Votre pseudo</label>
              <input class="fr-input" type="text" id="pseudo" name="text-input-text" >
            </div>

            <div class="form-group fr-mt-4w">
              <label class="fr-label" for="like">Vous aimez ...
               <span class="fr-hint-text">Pour recevoir des contenus qui vous correspondent ;)</span></label>
                <select name="" class="fr-input"  id="like">
                  <option value="1">les fruits et les légumes</option>
                  <option value="2">les ballades à bicyclette</option>
                  <option value="3">les voyages à vélo</option>
                  <option value="4">faire la sieste</option>
                  <option value="5">rien de tout ça</option>
                </select>
            </div>


            <div class="form-group fr-mt-4w">
              <input class="fr-btn" type="submit" id="pseudo" name="valider" value="S’inscrire" />
            </div>

            <p class="rgpd rgpd--small">
              Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à l’adresse électronique suivante : contact@design.numerique.gouv.fr.
            </p>
            </fieldset>
          </form>
        </div>
      </section>  

    </div>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Page de bons exemples",
      description: "Cette page web ne contient pas d’erreur d’accessibilité.",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    }
  }

</script>

<style lang="scss">
  @import "src/assets/scss/_vars.scss";
  
  section.fixed-width {
    width: 36em;  
    text-align: justify;
    margin: auto;

    a.lien {
      border-bottom: none;
      text-decoration: none;
    }
  }
    h3 {
    color: black;
  }
  .jaune {
    background-color: yellow;
  }
  .indicates-required {
    text-align: right;
  }
</style>

