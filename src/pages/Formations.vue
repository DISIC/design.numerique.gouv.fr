<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Formations</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/formation-picto.svg" aria-hidden="true">Formations</h1>
        <p class="fr-text--lead">Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites.</p>
      </div>
    </div>

    <div class="dg-content fr-px-2w">
      <section>
        <div class="fr-grid-row fr-grid-row--gutters fr-mb-6w">
          <div v-for="{ node } in $page.allFormation.edges.sort((a, b) => (a.node.rang > b.node.rang))" :key="node.id" class="fr-col-12 fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <h2 class="fr-tile__title">
                  <g-link :to="'/formations/' + node.slug + '/'" class="fr-tile__link fr-text--lg">{{ node.nom }}</g-link>
                </h2>
                <p class="fr-badge fr-badge--sm">{{ node.cours.length }} cours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" fr-mt-8w">
        <h2>Tous nos cours</h2>
        <div class="fr-grid-row fr-grid-row--gutters fr-mb-6w">
          <div v-for="{ node } in $page.allCours.edges.sort((a, b) => (a.node.rang > b.node.rang))" :key="node.id" class="fr-col-12 fr-col-sm-4">
            <div class="fr-card fr-enlarge-link">
              <div class="fr-card__body">
                <h3 class="fr-card__title">
                  <g-link :to="'/formations/' + node.formation.slug + '/' + node.slug + '/'" class="fr-tile__link">{{ node.nom }}</g-link>
                </h3>
                <p v-if="futurCours.filter(element => element == node.id).length > 0" class="dg-flex-start fr-badge fr-badge--sm fr-badge--new fr-my-1w">Inscriptions ouvertes</p>
                <p v-else-if="node.replay" class="dg-flex-start fr-badge fr-badge--sm fr-my-1w">Replay disponible</p>
                <p class="fr-card__detail">{{ node.type == 'Amphi' ? 'Webinaire' : 'Atelier' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-contains-list fr-mt-8w">
        <h2>Nous recommandons également</h2>

        <h3 class="fr-mt-6w fr-mb-2w">Accessibilité</h3>

        <p class="fr-h6">Initiations :</p>
        <ul>
          <li><a href="https://www.fun-mooc.fr/en/cours/accessibilite-numerique/" title="L’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique</a>. Ce <abbr title="Massive Open Online Course" lang="en">MOOC</abbr> est un cours généraliste d’introduction à l’accessibilité numérique. Il est disponible en mode « Archivé ouvert » et nécessite une inscription.</a></li>
          <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.</li>
          <li>Si vous êtes agent de l’État et avez accès à la plateforme Mentor, deux parcours sont disponibles :
            <ul>
              <li><a href="https://mentor.gouv.fr/catalog/314" title="L’accessibilité numérique selon votre métier - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique selon votre métier</a>, de 1h20 à 8h suivant les modules choisis dans le parcours, gratuit.</li>
              <li><a href="https://mentor.gouv.fr/catalog/262" title="L’essentiel de l’accessibilité de la communication de l’État - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’essentiel de l’accessibilité de la communication de l’État</a>, 3h30, gratuit.</li>
            </ul>
          </li>
        </ul>
        <p class="fr-h6">Certification :</p>
        <ul>
          <li><a href="https://formations.access42.net/?p=877" title="Développer des sites web accessibles - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Développer des sites web accessibles</a>, 9 heures, payant.</li>
        </ul>

        <h3 class="fr-mt-6w fr-mb-2w">Design</h3>

        <p class="fr-h6">Initiations :</p>
        <ul>
          <li><a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" title="Initiez-vous au Design - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Initiez-vous au Design</a>, 6 heures, gratuit.</li>
          <li><a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" title="UX design : découvrez les fondamentaux - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">UX design&nbsp;: découvrez les fondamentaux</a>, 8 heures, gratuit.</li>
        </ul>

        <h3 class="fr-mt-6w fr-mb-2w">Numérique responsable</h3>

        <p class="fr-h6">Initiations :</p>
        <ul>
          <li><a href="https://www.academie-nr.org/sensibilisation/" title="Sensibilisation au numérique responsable - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Sensibilisation au numérique responsable</a>, 30 minutes, gratuit.</li>
          <li><a href="https://www.academie-nr.org/" title="MOOC numérique responsable - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">MOOC Numérique Responsable</a>, 4h30, gratuit.<br>14 modules pour progresser et saisir l’ensemble des enjeux environnementaux, éthique et d’inclusion.</li>
        </ul>

        <h3 class="fr-mt-6w fr-mb-2w">Qualité</h3>

        <p class="fr-h6">Certification :</p>
        <ul>
          <li><a href="https://www.opquast.com/certification/" title="Maîtrise de la qualité en projet web - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Maîtrise de la qualité en projet web</a>, 14 heures, payant.</li>
        </ul>

        <p class="fr-mt-6w">Si votre organisme propose une formation certifiante et souhaite être référencé sur notre site, vous pouvez <a href="https://github.com/DISIC/design.numerique.gouv.fr/pulls" title="proposer une PR - nouvelle fenêtre"  target="_blank" rel="noreferrer noopener">proposer une <abbr lang="en" title="pull request">PR</abbr></a> ou nous contacter en utilisant l’adresse électronique contact@design.numerique.gouv.fr.</p>
      </section>

    </div>

  </Layout>
</template>


<page-query>
  query {
    allFormation {
      edges {
        node {
        	id
          nom
          rang
          slug
          cours {
            id
          }
        }
      }
    },
    allCours {
      edges {
        node {
          id
          nom
          rang
          slug
          type
          replay
          formation {
            id
            slug
          }
          sessions {
            id
            date
          }
        }
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo: {
      title: "Les formations",
      meta: [{
        name: 'description',
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        property: 'og:title',
        content: "Les formations - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
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
        content: "Les formations - DesignGouv"
      },
      {
        name: "twitter:description",
        content: "Nous vous proposons de nombreuses formations, individuelles ou en équipe, dont certaines gratuites."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    },
    computed: {
      futurCours: function () {
        var futurList = [];
        this.$page.allCours.edges.forEach(cours => {
          var futur = cours.node.sessions.sort((a, b) => a.date > b.date).filter(session => new Date(session.date) > Date.now());
          futur.length > 0 ? futurList.push(cours.node.id) : null;
        });
        return futurList;
      },
    },
  }
</script>


<style lang="scss" scoped>

  .fr-card__title .fr-tile__link {
    font-size: 1rem;
    line-height: 1.5;
  }

</style>
