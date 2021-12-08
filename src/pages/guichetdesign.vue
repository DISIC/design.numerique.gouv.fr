<template>
  <Layout>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">#guichetDesign</span>
        </li>
      </ol>
    </nav>

    <div class="content">
      <h1>#guichetDesign</h1>
      <p>Dans le cadre de France Relance, 32 M€ pour simplifier la relation entre les usagers et l’administration grâce au numérique.</p>


      <section>
        <h2>
          Candidatures ouvertes le 4 janvier 2021 !
        </h2>
        <h3>En attendant, vous pouvez :</h3>
        <p>
          <ul>
            <li>Consulter les <a href="https://design.numerique.gouv.fr/assets/pdf/francerelance-guichetdesign.pdf" target="_blank" rel="noreferrer noopener">dispositives du #guichetDesign</a> (présentées lors du webinaire du 25 novembre 2020)</li>
            <li>Consulter les détails du <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" target="_blank" rel="noreferrer noopener">#guichetDesign</a> sur le site du Ministère de la Transformation et de la Fonction publiques. C'est ici aussi que vous pourrez candidater à partir du 4 janvier 2021 !</li>
            <li>Consulter <a href="https://france-relance.transformation.gouv.fr/" target="_blank" rel="noreferrer noopener">l'ensemble des offres de financement</a> auxquelles vous pouvez faire appel</li>
          </ul>
        </p>
        <br>
        <h3>Le #guichetDesign en très bref :</h3>
        <p>Vous êtes une administration ou un opérateur en charge d'une politique publique devant donner ou donnant lieu à l'une des démarches recensées dans l'<a href="https://observatoire.numerique.gouv.fr" target="_blank" rel="noreferrer noopener">Observatoire</a> ? Vous souhaitez atteindre les objectifs fixés par le gouvernement en matière de qualité des démarches en ligne ? Bravo !</p>
        <p>Ce guichet permettra le cofinancement à 75 % de ces projets d'amélioration, et s'effectuera :
          <ul>
            <li>Soit via la mise à disposition de prestations prises en charge par la DINUM sur ses marchés : designers, développeurs, juristes, chercheurs usagers, rédacteurs UX, mentors en management produit agile, etc</li>
            <li>Soit via la mise à disposition de ressources financières</li>
          </ul>
        </p>
      </section>


    </div>

  </Layout>
</template>

<script>

  export default {
    metaInfo: {
      title: "GuichetDesign France Relance",
      meta: [{
        name: 'description',
        content: "32M€ pour améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
      },
      {
        property: 'og:title',
        content: "GuichetDesign - DesignGouv"
      },
      {
        property: 'og:description',
        content: "GuichetDesign - DesignGouv"
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
        content: "GuichetDesign - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "32M €pour améliorer l'expérience de 10 des 250 services publics numériques les plus utilisés par les Français !"
      },
    ],
    }
  }

</script>
