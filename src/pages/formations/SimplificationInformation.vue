<template>
<Layout hideNewsletter>

  <nav aria-label="Breadcrumb" class="fr-breadcrumb">
    <ol class="fr-breadcrumb__list">
      <li>
        <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
      </li>
      <li>
        <g-link to="/formations/" class="fr-breadcrumb__link">Formations</g-link>
      </li>
      <li>
        <span aria-current="page">Formation Simplification de l'information aux usagers</span>
      </li>
    </ol>
  </nav>

  <div class="cover">
      <div class="cover__container">
        <!-- <div class="cover__subhead"><Formations class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Formations</div> -->
        <h1>Formation Simplification de l'information aux usagers</h1>
        <p class="cover__subtitle">
          Pourquoi et comment employer un langage simple et clair pour nos services publics, en explorant les subtilités du fonctionnement de notre cerveau.
        </p>
      </div>
  </div>

  <div class="content fr-container">
    <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-8">
          <h2>Jeudi 17 février de 10h à 12h</h2>
          <p>En <a href="https://www.youtube.com/c/DesignGouv" target="_blank" title="visio sur notre chaîne YouTube - Nouvelle fenêtre"><strong>visio</strong> sur notre chaîne YouTube</a>.</p>

          <h3>Objectifs</h3>
          <ul>
            <li>Proposer une information adaptée aux usagers</li>
            <li>Prendre en compte la façon dont l’information est traitée</li>
            <li>Connaître les principes de simplification</li>
            <li>Appliquer une méthodologie de simplification centrée usager</li>
          </ul>

          <h3>Public concerné</h3>
          <p>Agents de la fonction publique ou prestataires impliqués dans la conception des services numériques publics.</p>

          <h3>Programme</h3>
          <ol>
            <li>Enjeux de simplification de l’information</li>
            <li>Comment le cerveau traite l’information</li>
            <li>Principes de conception d’une information adaptée</li>
            <li>Méthodologie de simplification centrée usager</li>
            <li>Conclusion</li>
          </ol>
          <p>C’est important, c’est gratuit, c’est ludique, c’est opérationnel et, franchement, c’est bien fait donc : venez !</p>
          <p>N'oubliez pas, nous proposons quatre autres formations à (re)visionner : <g-link to="/formations/design/">design</g-link>, <g-link to="/formations/accessibilite/">accessibilité</g-link> et <g-link to="/formations/recherche-utilisateur/">recherche utilisateur</g-link> et <g-link to="/formations/ecoconception/">écoconception</g-link>.</p>

          <h2>Inscription</h2>
          <p>Pour que nous puissions vous communiquer d'éventuelles précisions et que nous sachions qui se trouvera de l'autre côté de l'écran, vous pouvez nous envoyer ce formulaire.</p>
           <p class="fr-text--xs">Tous les champs du formulaire sont obligatoires.</p>
          <form class="form" v-on:submit.prevent="addParticipant">
              <div class="fr-input-group">
                  <label class="fr-label" for="email">Votre adresse e-mail<span class="fr-hint-text">L’adresse e-mail doit être au format prenom@mail.fr</span></label>
                  <input class="fr-input" type="email" id="email" v-model="form.email" required>
              </div>
              <div class="fr-input-group">
                  <label class="fr-label" for="organisme">Votre organisme</label>
                  <input class="fr-input" type="text" id="organisme" v-model="form.organisme" required>
              </div>

              <p class="rgpd">
                Les données recueillies sur ce formulaire sont traitées par les équipes de la DINUM. Elles nous permettent de vous informer via e-mail des nouvelles liées à cet événement.
              </p>

              <p class="rgpd rgpd--small">
                Conformément à la règlementation, vous disposez d’un droit d’opposition et d’un droit à la limitation du traitement de données vous concernant, ainsi que d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données. Vous pouvez exercer vos droits en nous écrivant à contact@design.numerique.gouv.fr.
              </p>

              <button class="button button--strong" id="submit" type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>

</Layout>
</template>


<script>
  import Formations from "~/assets/images/formations.svg"
  export default {
    components: {
      Formations,
    },
    metaInfo: {
      title: "Formation Simplification de l'information aux usagers",
      meta: [{
        name: "description",
        content: "Pourquoi et comment employer un langage simple et clair pour nos services publics, en explorant les subtilités du fonctionnement de notre cerveau."
      },
      {
        property: "og:title",
        content: "Formation Simplification de l'information aux usagers - DesignGouv"
      },
      {
        property: "og:description",
        content: "Pourquoi et comment employer un langage simple et clair pour nos services publics, en explorant les subtilités du fonctionnement de notre cerveau."
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
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
        content: "Formation Simplification de l'information aux usagers - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Pourquoi et comment employer un langage simple et clair pour nos services publics, en explorant les subtilités du fonctionnement de notre cerveau."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    },
    data () {
      return {
        form: {
          email: '',
          organisme: '',
          session: [
          "recWbUK6bIoRhCHcb"
        ],
        }
      }
    },
    methods: {
      addParticipant() {
        document.getElementById('submit').disabled = true;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY}).base(process.env.GRIDSOME_AIRTABLE_COURSE_BASE);
        base('Inscriptions').create([
        {
          "fields": {
            "E-mail": this.form.email,
            "Organisme": this.form.organisme,
            "Session": this.form.session,
          }
        },
      ], function(err, records) {
        if (err) {
          window.location.href = "/formulaire/erreur/";
          console.error(err);
          return;
        } else {
          window.location.href = "/formulaire/succes/";
        }
      });
    }
  },
}
</script>
