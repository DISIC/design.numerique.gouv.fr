<template>
  <Exercise>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <a href="../"  class="fr-breadcrumb__link">Accueil</a>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Aide</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Aide</h1>
        <p class="fr-text--lead">Les réponses à toutes vos questions devraient se trouver dans cette page. Dans le cas contraire, vous pouvez écrire au <a href="#support">support</a>.</p>
      </div>
    </section>
    <section class="fr-container fr-px-2w fr-mb-8w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-8">
          <h2 class="fr-my-4w">Pour comprendre la démarche</h2>
          <div class="fr-accordions-group">
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="comprendre-1">Pourquoi déclarer sa bicyclette ?</button>
              </h4>
              <div class="fr-collapse" id="comprendre-1"><p>
                - Parce que c’est une obligation légale depuis la loi sur la bonne mobilité du 01/04/2022 ;<br><br>

- Parce que plus l’État en sait sur votre pratique de la bicyclette, mieux c’est ;
<br><br>
- Pour optimiser la répartition de l’organisation de l’espace public ;
<br><br>
- À des fins statistiques plus ou moins pertinentes.</p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="comprendre-2">Est-ce obligatoire de déclarer sa bicyclette ?</button>
              </h4>
              <div class="fr-collapse" id="comprendre-2"><p>Oui.</p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="comprendre-3">Est-il obligatoire de la faire en ligne ?</button>
              </h4>
              <div class="fr-collapse" id="comprendre-3"><p>Non.<br/>Vous pouvez également vous rendre dans une maison France Service et remplir le <a href="/assets/doc/declaration-de-bicyclette.pdf" download>formulaire</a> papier en trois exemplaires : le bleu pour la maison France Service, le blanc pour vous et le rouge à déposer dans un commissariat de police.</p></div>
            </section>
          </div>


           <h2 class="fr-my-4w">Pour remplir le formulaire</h2>
          <div class="fr-accordions-group">
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-1">Je ne connais pas la marque de ma bicyclette</button>
              </h4>
              <div class="fr-collapse" id="remplir-1"><p>
                Elle doit être écrite en gros sur le tube diagonal de votre vélo et sur la facture.
              </p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-2">Je ne connais pas le nuancier RAL</button>
              </h4>
              <div class="fr-collapse" id="remplir-3"><p>
                Le nuancier RAL est disponible à l’adresse suivante https://www.couleursral.fr.<br/>
                Vous pouvez juste mettre le nom commun de la couleur (vert, rouge, jaune, etc.). <br/>
                <strong>En cas de perte ou de vol, cette information est vraiment importante.</strong>
              </p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-3">Je ne connais pas le surnom</button>
              </h4>
              <div class="fr-collapse" id="remplir-3"><p>
                Pas de problème !<br/>
                Ce champ n’est pas obligatoire.
              </p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-4">Je ne connais pas le type de mon vélo</button>
              </h4>
              <div class="fr-collapse" id="remplir-4"><p>Il existe de multiple de type de bicyclette :</p>
              <div class="fr-table fr-table--bordered fr-table--no-caption">
              <table summary="Quel type de bicyclette "><caption>Les différents type de bicyclette </caption>
                <thead><tr>
                  <th>Type de vélo</th>
                  <th>Usage</th>
                </tr></thead>
                <tbody>
                <tr>
                  <th scope="row">Route</th>
                  <td>Rouler (vite) sur du bel asphalte.</td>
                </tr>
                <tr>
                  <th scope="row">VTT</th>
                  <td>Rouler sur les sentiers plus ou moins escarpés.</td>
                </tr>
                <tr>
                  <th scope="row">VTC</th>
                  <td>Rouler en ville ou en promenade.</td>
                </tr>
              <tr>
                  <th scope="row">Fixie</th>
                  <td>Sans roue libre. Sensations fortes garanties.</td>
                </tr>
              <tr>
                  <th scope="row">Gravel</th>
                  <td>Le vélo passe vraiment partout.</td>
                </tr>
                <tr>
                  <th scope="row">Cargo</th>
                  <td>Transport de marchandise et/ou d’être humain.</td>
                </tr>
              <tr>
                  <th scope="row">Autre</th>
                  <td>Tout ce qui n’est pas cité précédement.</td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-5">Je ne veux pas mettre de photo de mon vélo</button>
              </h4>
              <div class="fr-collapse" id="remplir-5"><p>
                Pas de problème !<br/>
                Ce champ n’est pas obligatoire.
              </p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-6">Je ne sais pas ce qu’est un VAE</button>
              </h4>
              <div class="fr-collapse" id="remplir-6"><p>
                C’est un vélo à assistance électrique.
              </p></div>
            </section>
            <section class="fr-accordion">
              <h4 class="fr-accordion__title">
                <button class="fr-accordion__btn" aria-expanded="false" aria-controls="remplir-7">Pourquoi dire si j’ai vendu ma voiture ?</button>
              </h4>
              <div class="fr-collapse" id="remplir-7"><p>Si vous vendez votre voiture, l’achat de votre vélo peut être pris en charge à hauteur de 75% du prix d’achat avec un plafond à 1000 euros.
              </p></div>
            </section>
          </div>
          <h2 class="fr-my-4w" id="support">Vous n’avez pas trouvé la réponse à votre question</h2>
          <p>Écrivez-nous à l’adresse suivante : aide [à] declarer-sa-bicyclette [point] fr.</p>




        </div>
      </div>
    </section>
  </Exercise>
</template>

<script>
export default {
  metaInfo: {
    title: 'faq',
    meta: [
      {
        name: 'description',
        content: 'Exercice d’audit et de mise en conformité RGAA',
      },
    ],
   htmlAttrs: {
      lang: 'en',
    },
  },
};
</script>

