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
              <span aria-current="page" class="fr-breadcrumb__link">Atelier a11é</span>
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
        <h2>Les différentes pratiques à la mode</h2>
          <h4 class="fr-h3">Le gravel</h4>
          <p>Le gravel est une pratique du vélo qui mélange des passages sur route ainsi que sur des sentiers, des pistes et des chemins. Elle se rapproche du cyclo-cross mais avec une moindre notion de performance.</p>
          <h4 class="fr-h3">Le bikepacking</h4>
          <p>Le bikepacking consiste à évoluer sur un vélo dépourvu de porte-bagages, contrairement au cyclotourisme, aussi bien pour des parcours réduits que pour de longues expéditions en autonomie. Le vélo est doté de sacoches, qui, à l’inverse du cyclotourisme, sont peu nombreuses pour voyager léger ou parcourir plus rapidement un périple. La monture du cycle sert ainsi elle-même de porte-bagages. Le cycle de bikepacking est polyvalent, permettant d’emprunter aussi bien le réseau routier que les chemins muletiers. Les mini-sacoches sont accrochées au guidon, au cadre, ou encore à la tige de selle, et sont généralement fixées par des sangles.</p>
          <h3>Le pignon fixe</h3>
          <p>Le montage avec pignon fixe (« fixie » en anglais) est un montage particulier de la bicyclette, lorsque le pignon de la roue arrière est monté sans roue libre, ce qui le rend solidaire de la roue dans les deux sens de rotation. Obligatoire sur les pistes de vélodrome, cette pratique a été adoptée par les coursiers d’Amérique du Nord à la fin des années 90. </p>

          <img src="/assets/images/bikes.jpg" class="fr-responsive-img" alt="ciel nuageux" />

        <h2 class="fr-mt-4w">Ressources intéressantes</h2>

          <p>Le <a href="https://wiklou.org/wiki/Accueil">wiklou</a> est un espace de partage de ressources autour du vélo sous toutes ses facettes.</p>
          <p>Initialement conçu par et pour les ateliers vélos participatifs et solidaires, il est devenu au fil du temps un outil utilisé par toutes et tous.</p>
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

