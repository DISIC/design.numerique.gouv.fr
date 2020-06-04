<template>
  <Layout>

    <div class="cover">
     <div class="container">

       <p class="subhead">Notre équipe</p>
       <h1>Le pôle design des services numériques</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Notre mission</h2>
          <p>
            Le numérique est la promesse notamment d’un accès à une multitude d’informations et de services pour tous, et partout. Néanmoins, en France notamment, les produits et services numériques sont souvent conçus sans prendre le temps de comprendre l’audience qu’ils servent. C’est le cas pour de nombreux services publics numériques.
          </p>
          <p>
            En partenariat avec les administrations porteuses des principales démarches en ligne, nous accompagnons l'amélioration de l’expérience des démarches en ligne pour tous les usagers. Nous souhaitons des services numériques qui fonctionnent et paraissent simples, réactifs, attentifs, ludiques, bienveillants et humains.
          </p>
          <p>
            Le pôle design des services numériques est rattaché à la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a>.
          </p>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <h3>Georges Bayard</h3>
              <p>Chargé de mission</p>
              <p><a href="https://observatoire.numerique.gouv.fr">Observatoire</a></p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Maxime Beaugrand"/>
              <h3>Maxime Beaugrand</h3>
              <p>Designer</p>
              <p><a href="https://franceconnect.gouv.fr/" target="_blank">FranceConnect</a></p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/marine-boudeau.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Marine Boudeau"/>
              <h3>Marine Boudeau</h3>
              <p>Cheffe du pôle</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/anthony-brunelli.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Anthony Brunelli"/>
              <h3>Anthony Brunelli</h3>
              <p>Chargé de mission</p>
              <p><a href="https://observatoire.numerique.gouv.fr">Observatoire</a></p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/boutie-camara.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Boutié Camara"/>
              <h3>Boutié Camara</h3>
              <p>Apprentie</p>
              <p><a href="https://observatoire.numerique.gouv.fr">Observatoire</a></p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Antoine Cao"/>
              <h3>Antoine Cao</h3>
              <p>Chargé de mission</p>
              <p>Accessibilité</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/ugo-dessertine.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Ugo Dessertine"/>
              <h3>Ugo Dessertine</h3>
              <p>Lead Designer</p>
              <p>Commando UX</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Jamshid Kohandel"/>
              <h3>Jamshid Kohandel</h3>
              <p>Chargé de mission</p>
              <p>Accessibilité</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Vincent Mazalaigue"/>
              <h3>Vincent Mazalaigue</h3>
              <p>Chargé de mission</p>
              <p><a href="https://observatoire.numerique.gouv.fr">Dites-le nous une fois</a></p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Philippe Vrignaud"/>
              <h3>Philippe Vrignaud</h3>
              <p>Chargé de mission</p>
              <p><a href="https://www.demarches-simplifiees.fr/" target="_blank">Démarches Simplifiées</a> et Compte Citoyen</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/photo-manquante.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Hatice Yigit"/>
              <h3>Hatice Yigit</h3>
              <p>Stagiaire</p>
              <p>Observatoire et Ateliers d'écoute</p>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Équipe",
    meta: [{
      name: "robots",
      content: "noindex"
    }],
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/_vars.scss";

  .team {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    h3 {
      margin-bottom: 4px;
    }

    > li {
      list-style: none;
      text-align: center;
      width: 30%;
      margin: 24px 4px;

      @media only screen and (max-width: $mobileMaxWidth) {
        width: 46%;
      }

      img {
        border-radius: 50em;
      }

      p {
          margin: 0;
      }
    }
  }

</style>
