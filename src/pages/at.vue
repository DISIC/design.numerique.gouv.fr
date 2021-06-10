<template>
<Layout>
<div class="rf-container">
    <div class="cover">
        <div class="cover__container">
        <h1>Je suis « <span class="text-highlight">digital expert</span> »</h1>
        <div class="rf-mt-8w rf-grid-row rf-grid-row--gutters rf-grid-row--center">
            <div class="rf-col-8">
                <form method="post">
                    <div class="rf-input-group">
                        <label class="rf-label" for="prenom">Votre prénom</label>
                        <input class="rf-input" required type="text" id="prenom" name="prNom">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="nom">Votre nom</label>
                        <input class="rf-input" required type="text" id="nom" name="nom">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="email">Votre adresse e-mail</label>
                        <input class="rf-input" required type="email" id="mail" name="email">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="tel">Votre téléphone</label>
                        <input class="rf-input" type="phone" id="tel" name="tLPhone">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="commune">Dans quelle commune habitez-vous ?</label>
                        <input class="rf-input" type="text" id="commune" name="commune">
                    </div>
                    <div class="rf-form-group">
                        <fieldset class="rf-fieldset">
                            <legend class="rf-fieldset__legend rf-text--regular" id='expertise-legend'>
                                Votre expertise
                            </legend>
                            <div class="rf-fieldset__content">
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-1" name="expertise">
                                    <label class="rf-label" for="expertise-1">Design UX</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-2" name="expertise">
                                    <label class="rf-label" for="expertise-2">Design UI</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-3" name="expertise">
                                    <label class="rf-label" for="expertise-3">Design de services</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-4" name="expertise">
                                    <label class="rf-label" for="expertise-4">Développement accessibilité</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-5" name="expertise">
                                    <label class="rf-label" for="expertise-5">Recherche usagers (« User researcher »)</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="expertise-6" name="expertise">
                                    <label class="rf-label" for="expertise-6">Sciences comportementales</label>
                                </div> 
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="checkboxes-7" name="expertise">
                                    <label class="rf-label" for="checkboxes-7">Rédaction UX ("UX writer")</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>    
                    <div class="rf-input-group">
                        <label class="rf-label" for="autres-competences">Vos autres compétences</label>
                        <input class="rf-input" type="text" id="vos-autres-competences" name="autresCompTences">
                    </div>
                    <div class="rf-form-group">
                        <fieldset class="rf-fieldset">
                            <legend class="rf-fieldset__legend rf-text--regular" id='radio-legend'>
                                Votre expérience professionnelle dans ces domaines d’expertise
                            </legend>
                            <div class="rf-fieldset__content">
                                <div class="rf-radio-group">
                                    <input type="radio" id="radio-1" name="expRience">
                                    <label class="rf-label" for="radio-1">Moins d’1 an</label>
                                </div>
                                <div class="rf-radio-group">
                                    <input type="radio" id="radio-2" name="expRience">
                                    <label class="rf-label" for="radio-2">de 1 à 3 ans</label>
                                </div>
                                <div class="rf-radio-group">
                                    <input type="radio" id="radio-3" name="expRience">
                                    <label class="rf-label" for="radio-3">de 3 à 5 ans</label>
                                </div>
                                <div class="rf-radio-group">
                                    <input type="radio" id="radio-4" name="expRience">
                                    <label class="rf-label" for="radio-2">de 5 à 10 ans</label>
                                </div>
                                <div class="rf-radio-group">
                                    <input type="radio" id="radio-5" name="expRience">
                                    <label class="rf-label" for="radio-3">Plus de 10 ans</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="profil">Les liens présentant votre profil </label>
                        <textarea class="rf-input" type="text" id="profil" name="profil"></textarea>
                    </div>
                    <div class="rf-form-group">
                        <fieldset class="rf-fieldset">
                            <legend class="rf-fieldset__legend rf-text--regular" id='duree-legend'>
                                La durée d’intervention que vous recherchez
                            </legend>
                            <div class="rf-fieldset__content">
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="duree-1" name="durE">
                                    <label class="rf-label" for="duree-1">Ponctuel</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="duree-2" name="durE">
                                    <label class="rf-label" for="duree-2">Moins de 3 mois</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="duree-3" name="durE">
                                    <label class="rf-label" for="duree-3">De 3 mois à 1 an</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="duree-4" name="durE">
                                    <label class="rf-label" for="duree-4">Plus d’1 an</label>
                                </div>
                                <div class="rf-checkbox-group">
                                    <input type="checkbox" id="duree-5" name="durE">
                                    <label class="rf-label" for="duree-5">Je ne sais pas</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="delai">Quel est le délai minimum pour vous prévenir avant le début d’une intervention ?</label>
                        <input class="rf-input" type="text" id="delai" name="dLai">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="cv">Votre CV</label>
                        <input class="rf-input" type="file" id="cv" name="cv">
                    </div>
                    <div class="rf-input-group">
                        <label class="rf-label" for="autresInfos">D’autres informations que vous souhaitez partager ?</label>
                        <textarea class="rf-input" type="text" id="autresInfos" name="plus"></textarea>
                    </div>
                    <button class="rf-btn button" type="button" @click="addCandidat">Partager votre intérêt</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>      
</div>
</Layout>
</template>


<script>
  export default {

    metaInfo: {
        title: "Air Table connection",

    },
    methods: {
      async addCandidat() {
        var Airtable = await require('airtable');
        var base = await new Airtable({apiKey: 'keyca8cOuOxzXHNcF'}).base('appylp1PkCFvXsCev');
        base('Candidats').create([
        {
          "fields": {
            "Email": "",
            "Prénom": "",
            "Nom": "",
            "Téléphone": "",
            "Commune": "",
            "Expertise": "",
            "Autres compétences": "",
            "Expérience": "5 à 10 ans",
            "Profil": "https://www.linkedin.com/in/mcdelataille/\n",
            "Durée": [
              "Ponctuel",
              "Moins de 3 mois"
            ],
            "CV": [
              {
                "url": "https://dl.airtable.com/.attachments/6df09bbd04757ca1b29c4951aebe5997/be0a0c5a/CV-MCdelaTaille.pdf"
              }
            ],
            "Plus": "Je suis intéressée pour des missions courtes jusqu'à 3 mois principalement sur de la co-conception, de l'intelligence collective ou de la recherche ut...",
            "Délai": "2 semaines"
          }
        },
       
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.lo  
          console.log(record.getId());
        });
      });
      }
    },

}
</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

</style>
