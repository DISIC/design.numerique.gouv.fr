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
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Atelier a11é</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Aide</h1>
      </div>
    </section>

    <section class="fr-container fr-px-2w fr-mb-8w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-8">
          <h2>Choisir son vélo</h2>
        <div class="fr-table fr-table--bordered fr-table--no-caption">          
          <table summary="Quel type de vélo choisir ?"><caption>Comparatif de type de vélo</caption>
            <thead><tr>
              <th scope="col">Type de vélo</th>
              <th scope="col">Pour</th>
              <th scope="col">Contre</th>
              <th scope="col"><3</th>
            </tr></thead>
            <tbody>         
            <tr>
              <th scope="row">Route</th>
              <td>Efficace et léger</td>
              <td>Inutilisable ailleurs que sur la route</td>
              <td>-</td>
            </tr>            
            <tr>
              <th scope="row">VTT</th>
              <td>Léger et maniable</td>
              <td>Inefficace sur la route</td>
              <td>-</td>
            </tr>            
            <tr>
              <th scope="row">Gravel</th>
              <td>Efficace sur la route</td>
              <td>Efficace sur les chemins</td>
              <td>Liberté</td>
            </tr>          
            <tr>
              <th scope="row">Fixie</th>
              <td>Ultra léger</td>
              <td>Ratio unique</td>
              <td>Sensations fortes</td>
            </tr>          
            <tr>
              <th scope="row">Cargo</th>
              <td>Transport de marchandise ou d’être humain</td>
              <td>Lourd et encombrant</td>
              <td>Une voiture de moins</td>
            </tr>          
            </tbody>
          </table>    
        </div>
        <h2>Choisir son équipement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="/assets/images/bikes.jpg" class="fr-responsive-img" alt="ciel nuageux" />
          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
 
<figure class="fr-my-8w fr-quote fr-quote--column">
    <blockquote>
        <p>« Life is too short to ride shit bike »</p>
    </blockquote>
    <figcaption>
        <p class="fr-quote__author">Auteur inconnu</p>
        <div class="fr-quote__image">
            <img src="/assets/images/bike.jpg" class="fr-responsive-img" alt="" />
        </div>
    </figcaption>
</figure>
          <div class="fr-responsive-vid">
            <iframe class="fr-responsive-vid__player" src="https://www.youtube.com/embed/U8Pm5Cxe5cs?controls=0&amp;start=24" title="YouTube video player" frameborder="0"  ></iframe>
          </div>
        </div>
      </div>
    </section>
  </Exercise>
</template>

<script>
export default {
  metaInfo: {
    title: 'Qui sommes-nous ?',
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

