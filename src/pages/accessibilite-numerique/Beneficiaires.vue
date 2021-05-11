<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/accord-cadre-dae">Accord cadre</g-link>
        </li>
        <li>
          <span aria-current="page">Bénéficiaires</span>
        </li>
      </ol>
    </nav>
    <div class="cover cover--with-breadcrumb">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
        <h1>Liste des bénéficiaires</h1>
        <p>Découvrez la liste des bénéficiaires de l’accord-cadre interministériel accessibilité numérique de la Direction des achats de l’État (DAE).</p>
      </div>
    </div>

    <div class="content">

      <section>
        <h2>Bénéficiaires pour l’État</h2>
        <ul>
          <li>Présidence de la République</li>  
          <li>Services du Premier Ministre</li> 
          <li>Ministère des Armées</li> 
          <li>Ministère de l’Économie</li> 
          <li>Ministère de l’Action et des Comptes Publics</li> 
          <li>Ministère de l’Agriculture et de l’Alimentation</li>
          <li>Ministère de la Culture</li>
          <li>Ministère de l’Intérieur</li>
          <li>Ministère de la Justice</li>
          <li>Ministère de l’Europe et des Affaires Étrangères</li>
          <li>Ministère de la Transition Écologique et Solidaire</li>
          <li>Ministère du Logement et de l’Habitat durable</li>
          <li>Ministère de la Cohésion des Territoires</li>
          <li>Ministère du Travail</li>
          <li>Ministère des Sports</li>
          <li>Ministère des Solidarités et de la Santé</li>
          <li>Ministère des Familles de l’Enfance et des Droits des femmes</li>
          <li>Ministère des Outre-Mer</li>
        </ul>
      </section>



      <section>
        <h2>Établissements publics bénéficiaires</h2>
        <ul>
          <li>Agence de Mutualisation des Universités et des Établissements</li>
          <li>Agence Nationale de Sécurité Sanitaire de l’Alimentation de l’Environnement et du Travail</li>
          <li>Agence Régionale de Santé Normandie</li>
          <li>Centre d’Études et d’Expertises sur les risques l’Environnement la Mobilité et l’Aménagement</li>
          <li>Cité de l’Architecture et du Patrimoine</li>
          <li>École Nationale d’Administration</li>
          <li>École Nationale Supérieure d’Architecture de Marseille</li>
          <li>École Nationale Supérieure des Mines de Paris (Paris Tech)</li>
          <li>Établissement Public du Musée du Louvre</li>
          <li>Établissement public du Palais de la Découverte et de la Cité des sciences et de l’industrie – Universcience</li>
          <li>Institut National de l’Audiovisuel</li>
          <li>Institut National de Recherche en Sciences et Technologies pour l’Environnement et l’Agriculture</li>
          <li>Institut National du Travail de l’Emploi et de la Formation professionnelle</li>
          <li>Musée de l’Air et de l’Espace</li>
          <li>Musée des Civilisations d’Europe et de la Méditerranée</li>
          <li>Office Français de l’Immigration et de l’Intégration</li>
          <li>Office National des Forêts</li>
          <li>Office National d’Études et de Recherches Aérospatiales</li>
          <li>Service Hydrographique et Océanographique de la Marine</li>
          <li>Université Bordeaux</li>
          <li>Université Bordeaux 3 Montaigne</li>
          <li>Université Lyon 2 Lumière</li>
          <li>Université Paris 6 Pierre et Marie Curie (UPMC)</li>
          <li>Université Toulon Var</li>
          <li>Voies Navigables de France</li>
        </ul>
      </section>

    </div>

  </Layout>
</template>


<script>
import Accessibilite from "~/assets/images/accessibilite.svg"

  export default {
    components: {
      Accessibilite,
    },
    metaInfo: {
      title: "Liste des bénéficiaires de l’accord cadre DAÉ",
      meta: [{
        name: 'description',
        content: "Découvrez la liste des bénéficiaires de l’accord-cadre interministériel accessibilité numérique de la Direction des achats de l’État (DAE)."
      },
      {
        property: 'og:title',
        content: "Liste des bénéficiaires de l’accord cadre DAÉ - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez la liste des bénéficiaires de l’accord-cadre interministériel accessibilité numérique de la Direction des achats de l’État (DAE)."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>


<style lang="scss">

</style>
