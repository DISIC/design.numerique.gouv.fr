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
        <h1 class="dg-cover__title">Déclarer ma bicyclette</h1>
        <p class="fr-text--lead"
          >Bravo, vous venez d‘acquérir une nouvelle bicyclette.<br />La
          planète, la ville et tous les usagers de la voie publique vous remercient :)<br /><strong
            >Vous devez déclarer cette nouvelle pratique aux autorités
            compétentes.</strong
          ></p
        >
      </div>
    </section>

    <section class="fr-container fr-px-2w fr-mb-8w">
        <div class="fixedWidth">
          <h2>Pourquoi déclarer sa bicyclette ?</h2>
          <p
            >- Parce que c’est une obligation légale depuis la loi sur la bonne
            mobilité du 01/04/2022 ;</p
          >
          <p
            >- Parce que plus l’État en sait sur votre pratique de la
            bicyclette, mieux c’est ;</p
          >
          <p
            >- Pour optimiser la répartition de l’organisation de l’espace
            public ;</p
          >
          <p>- À des fins statistiques plus ou moins pertinentes.</p>
          <h2>Comment déclarer sa bicyclette ?</h2>
          <p
            >Vous pouvez <a href="/assets/doc/declarationDeBicyclette.odt" download>télécharger</a> le formulaire,
            l’imprimer, le remplir et l’envoyer avec les pièces jointes
            demandées à la préfecture de votre région ainsi qu’à la personne
            chargée de la bonne mobilité de votre mairie.</p
          >
          <p
            >Vous pouvez également cliquer <a href="/atelier-a11y/declarer-ma-bicyclette/">ici</a> pour faire
            la démarche en ligne.</p
          >
          <h2>Besoin d’aide ?</h2>
          <p
            >Vous pouvez demander de l’aide en
            <a href="/atelier-a11y/aide/">cliquant ici</a> ou en nous
            interpellant, avec bienveillance, sur les réseaux sociaux.</p
          >
  
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
  },
};
</script>
<style lang="scss" scoped>
.fixedWidth { 
  width: 42em;
  display: block;
  margin: 0 auto;
}
</style>


