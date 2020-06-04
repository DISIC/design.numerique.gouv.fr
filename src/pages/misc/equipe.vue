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
            En partenariat avec les administrations porteuses des principales démarches en ligne, nous accompagnons l'amélioration de l’expérience des démarches en ligne pour tous les usagers. Nous souhaitons des services numériques qui fonctionnent et paraissent simples, réactifs, attentifs, ludiques, bienveillants et humains.
          </p>
          <p>
            Le pôle design des services numériques est rattachée à la <a href="https://numerique.gouv.fr" target="_blank">direction interministérielle du numérique</a>.
          </p>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Marine Boudeau</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Georges Bayard</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Antoine Cao</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Philippe Vrignaud</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Anthony Brunelli</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Jamshid Kohandel</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/ugo-dessertine.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Ugo Dessertine"/>
              <p><strong>Ugo Dessertine</strong></p>
              <p>Lead Designer</p>
              <p>Commando UX</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Maxime Beaugrand</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/georges-bayard.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Hatice Yigit</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
            <li>
              <g-image src="~/assets/images/team-photos/boutie-camara.jpg"
                       quality="100" height="150" width="150"
                       alt="Photo Georges Bayard"/>
              <p><strong>Boutié Camara</strong></p>
              <p>Chargé de mission</p>
              <p>Observatoire</p>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Accessibilité",
    meta: [{
      name: "robots",
      content: "noindex"
    }],
  }
}
</script>

<style scoped lang="scss">

  .team {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    > li {
      list-style: none;
      text-align: center;
      width: 160px;
      margin: 24px 4px;

      img {
        border-radius: 50em;
      }

      p {
          margin: 0;
      }
    }
  }

</style>
