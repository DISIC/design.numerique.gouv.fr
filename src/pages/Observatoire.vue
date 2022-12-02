<template>
  <Layout>
    <div class="dg-content fr-px-2w ">
      <div class="dg-cover dg-cover--linear">
        <div class="dg-cover__container fr-mb-1w">
          <h1 class=" fr-my-4w">Le nouvel observatoire de la qualité des démarches en ligne</h1>
          <p class="fr-text--lead">Construire ensemble l’observatoire de demain !</p>
           <h2>Programme</h2>
          <p class="fr-text--lead">lundi 5 décembre 2022 de 9h00 à 17h00</p>
        </div>
      </div>
      <div class=" fr-mt-6w">
        <section>
          <h3>Accueil avec petit déjeuner</h3>
          <div class="meta">
            <p class="when">9h00 – 9h30</p>
            <p class="where">1er étage</p>
          </div>
        </section>
        <section>
          <h3>Introduction de la journée</h3>
          <div class="meta">
            <p class="when">9h30 – 10h30</p>
            <p class="where"><span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage</p>
          </div>
        </section>
        <section>
          <h3><span class="atelier">Atelier</span><br><em>L’ambition de l’Observatoire</em></h3>
          <div class="meta">
            <p class="when">10h45 – 12h15</p>
            <p class="where">
              <span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage<br>
              <span class="fr-badge fr-badge--blue-ecume">Bleu</span> Salle 3.3 - 3ème étage<br>
              <span class="fr-badge fr-badge--yellow-tournesol">Orange</span> Salle 2.4 - 2ème étage<br>
              <span class="fr-badge fr-badge--pink-macaron">Rose</span> Salle 2.3 - 2ème étage<br>
            </p>
          </div>
        </section>
        <section>
          <h3><span class="atelier">Atelier</span><br><em>Critères de suivi de l’Observatoire</em></h3>
          <div class="meta">
            <p class="when">12h25 – 13h15</p>
            <p class="where">
              <span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage<br>
              <span class="fr-badge fr-badge--blue-ecume">Bleu</span> Salle 3.3 - 3ème étage<br>
             <span class="fr-badge fr-badge--yellow-tournesol">Orange</span> Salle 2.4 - 2ème étage<br>
              <span class="fr-badge fr-badge--pink-macaron">Rose</span> Salle 2.3 - 2ème étage<br>
            </p>
          </div>
        </section>
        <section>
          <h3>Déjeuner tous ensemble</h3>
          <div class="meta">
            <p class="when">13h30 – 14h30</p>           
            <p class="where">1er étage</p>
          </div>
        </section>
        <section>
          <h3><span class="atelier">Atelier</span><br><em>Critères d’entrée ou de sortie de l’Observatoire</em></h3>
          <div class="meta">
            <p class="when">14h30 – 15h30</p>
            <p class="where">
              <span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage<br>
              <span class="fr-badge fr-badge--blue-ecume">Bleu</span> Salle 3.3 - 3ème étage<br>
              <span class="fr-badge fr-badge--yellow-tournesol">Orange</span> Salle 2.4 - 2ème étage<br>
              <span class="fr-badge fr-badge--pink-macaron">Rose</span> Salle 2.3 - 2ème étage<br>
            </p>
          </div>
        </section>
        <section>
          <h3><span class="atelier">Atelier</span><br><em>Comment vous simplifier la vie ?</em></h3>
          <div class="meta">
            <p class="when">15h40 – 16h35</p>
            <p class="where">
              <span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage<br>
              <span class="fr-badge fr-badge--blue-ecume">Bleu</span> Salle 3.3 - 3ème étage<br>
              <span class="fr-badge fr-badge--yellow-tournesol">Orange</span> Salle 2.4 - 2ème étage<br>
              <span class="fr-badge fr-badge--pink-macaron">Rose</span> Salle 2.3 - 2ème étage<br>
            </p>
          </div>
        </section>
        <section>
          <h3>Conclusion</h3>
          <div class="meta">
            <p class="when">16h40 – 17h00 </p>
            <p class="where"><span class="fr-badge fr-badge--green-emeraude">Vert</span> Salle plénière - 3ème étage</p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Construire ensemble l’observatoire de demain",
    meta: [
      {
        name: 'robots',
        content: "noindex, nofollow"
      },
      {
        name: "description",
        content:
          "Programme du lundi 5 décembre 2022 de 9h00 à 17h00",
      },
      {
        property: "og:title",
        content: "Construire ensemble l’observatoire de demain",
      },
      {
        property: "og:description",
        content:
          "Programme du lundi 5 décembre 2022 de 9h00 à 17h00.",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv",
      },
      {
        name: "twitter:title",
        content: "Construire ensemble l’observatoire de demain",
      },
      {
        name: "twitter:description",
        content:
          "Programme du lundi 5 décembre 2022 de 9h00 à 17h00.",
      },
    ],
  },
  
};
</script>

<style lang="scss" scoped>

  section {
    border-bottom: 1px solid var(--pink-macaron-975-75);
    margin-bottom: 2em;
  }
@media screen and (min-width: 992px) {
  section {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: start;
  div.meta {
      width: 18em;
    .when {
      font-weight: bold;
    }
    }
    h3 {
      font-weight: 400;
      max-width: 18em;
      margin-left: 1rem;
      em {
        font-weight: bold;
      }
    }
  }
}
</style>
