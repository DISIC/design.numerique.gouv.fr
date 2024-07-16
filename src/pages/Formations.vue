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
              <a class="fr-breadcrumb__link" aria-current="page">Formations</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/formation-picto.svg" aria-hidden="true">Formations</h1>
        <p class="fr-text--lead">Toutes nos formations ouvertes à toutes et tous : renseignez-vous, inscrivez-vous et revisionnez les formations passées.</p>
      </div>
    </div>

    <div class="dg-content dg-content--lg">
      <section class="dg-content fr-px-2w">
        <div class="fr-grid-row fr-grid-row--gutters fr-mb-6w">
          <div v-for="{ node } in sortedFormations" :key="node.id" class="fr-col-12 fr-col-sm-6">
            <div class="fr-tile fr-enlarge-link">
              <div class="fr-tile__body">
                <div class="fr-tile__content">
                  <h2 class="fr-tile__title">
                    <g-link :to="'/formations/' + node.slug + '/'" class="fr-tile__link fr-text--lg">{{ node.nom }}</g-link>
                  </h2>
                  <p class="fr-badge fr-badge--sm">{{ node.cours.filter(cours => cours.publier).length }} {{ node.cours.filter(cours => cours.publier).length > 1 ? "formations" : "formation"}}</p>
                </div>
              </div>
              <div class="fr-tile__header">
                <div class="fr-tile__img dg-picto dg-picto--rotate">
                  <img v-if="node.slug == 'design'" svg-inline src="'../assets/images/design-picto.svg'" class="fr-responsive-img" aria-hidden="true">
                  <img v-else-if="node.slug == 'accessibilite'" svg-inline src="'../assets/images/accessibilite-picto.svg'" class="fr-responsive-img" aria-hidden="true">
                  <img v-if="node.slug == 'recherche-utilisateur'" svg-inline src="'../assets/images/recherche-utilisateur-picto.svg'" class="fr-responsive-img" aria-hidden="true">
                  <img v-else-if="node.slug == 'ecoconception'" svg-inline src="'../assets/images/ecoconception-picto.svg'" class="fr-responsive-img" aria-hidden="true">
                  <img v-else-if="node.slug == 'simplification-information'" svg-inline src="'../assets/images/simplification-information-picto.svg'" class="fr-responsive-img" aria-hidden="true">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formations" class="dg-block fr-mt-8w">
        <div class="dg-content fr-px-2w fr-pt-6w fr-pb-1w">
          <h2 class="fr-mb-4w">Toutes nos formations</h2>
          <div class="filter">
            <p class="filter__name fr-mr-1w fr-mt-1v">Filtrer par format :</p>
            <ul class="filter__list fr-tags-group">
              <li v-for="type in typeList.sort((a, b) => (a > b))" :key="type">
                <button class="fr-tag" :id="type" aria-pressed="false" @click="changeTypes($event)">{{ type }}</button>
              </li>
            </ul>
          </div>
          <div class="filter fr-mb-4w">
            <p class="filter__name fr-mr-1w fr-mt-1v">Filtrer par thème :</p>
            <ul class="filter__list fr-tags-group">
              <li v-for="tag in tagList.sort((a, b) => (a > b))" :key="tag">
                <button class="fr-tag" :id="tag" aria-pressed="false" @click="changeTags($event)">{{ tag }}</button>
              </li>
            </ul>
          </div>
          <div class="fr-grid-row fr-grid-row--gutters fr-mb-6w" aria-live="polite">
            <div v-for="{ node } in filterCours" :key="node.id" class="fr-col-12 fr-col-sm-4">
              <div class="fr-card fr-enlarge-link">
                <div class="fr-card__body">
                  <div class="fr-card__content">
                    <h3 class="fr-card__title">
                      <g-link :to="'/formations/' + node.formation.slug + '/' + node.slug + '/'" class="fr-card__link">{{ node.nom }}</g-link>
                    </h3>
                    <div class="fr-card__start">
                      <p v-show="futurCours.filter(element => element == node.id).length > 0" class="dg-flex-start fr-badge fr-badge--sm fr-badge--new fr-my-1w">Inscriptions ouvertes</p>
                      <p v-show="futurCours.filter(element => element == node.id).length == 0 && node.replay" class="dg-flex-start fr-badge fr-badge--sm fr-my-1w">Replay disponible</p>
                    </div>
                    <div class="fr-card__end">
                      <p class="fr-card__detail">{{ node.type }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="filterCours.length == 0" class="info fr-mt-1w fr-col-12">
              <p>Aucune formation ne correspond aux filtres appliqués</p>
            </div>
          </div>
        </div>
      </section>

      <section class="dg-content dg-contains-list fr-mt-8w fr-px-2w">
        <h2 id="autres-formations" class="fr-h2">Autres formations pour un web meilleur</h2>
        <p>Si vous travaillez dans le numérique public, il existe en ligne des formations vous permettant de vous former de manière autonome à l’amélioration des services en ligne. La liste ci-dessous répond à plusieurs critères :</p>
        <ul>
          <li>qualité de la formation ;</li>
          <li>en ligne (pas de présentiel) ;</li>
          <li>autonomie du participant ;</li>
          <li>simplicité de l’inscription (pas de marché, convention ou autre) ;</li>
          <li>gratuité (ou financement de la Direction interministérielle du numérique - Dinum).</li>
        </ul>
        <p>Cette liste n’est pas exhaustive. Elle concerne le design des services numériques, l’accessibilité numérique et le numérique responsable/écoconception.</p>

        <section class="fr-accordion">
          <h3 class="fr-accordion__title">
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-1">Design des services numériques</button>
          </h3>
          <div class="fr-collapse" id="accordion-1">
            <ul class="fr-my-2w">
              <li><a href="https://openclassrooms.com/fr/courses/3013836-initiez-vous-au-design-thinking" title="Initiez-vous au Design - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Initiez-vous au Design</a>
                <ul><li>Organisme de formation : <strong>OpenClassRoom</strong></li><li>Durée : <strong>6h</strong></li></ul>
              </li>
              <li><a href="https://openclassrooms.com/fr/courses/3013856-ux-design-decouvrez-les-fondamentaux" title="UX design : découvrez les fondamentaux - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">UX design&nbsp;: découvrez les fondamentaux</a>
                <ul><li>Organisme de formation : <strong>OpenClassRoom</strong></li><li>Durée : <strong>8h</strong></li></ul>
              </li>
            </ul>
          </div>
        </section>

        <section class="fr-accordion">
          <h3 class="fr-accordion__title">
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-2">Accessibilité numérique</button>
          </h3>
          <div class="fr-collapse" id="accordion-2">
            <ul class="fr-my-2w">
               <li><a href="https://www.fun-mooc.fr/fr/cours/accessibilite-numerique/" title="L’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique</a>
                <ul><li>Organisme de formation : <strong>Inria</strong> (Institut national de recherche en sciences et technologies du numérique), France Université numérique</li><li>Durée : <strong>13h</strong></li></ul>
               </li>
               <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Mise en œuvre de l’accessibilité numérique</a>
                  <ul><li>Organisme de formation : <strong>Wikiversité</strong></li><li>Durée : <strong>14h</strong></li><li>La formation fait référence à la précédente version du Référentiel général d’amélioration de l’accessibilité (RGAA) mais garde toute sa pertinence.</li></ul>
               </li>
               <li><a href="https://mentor.gouv.fr/catalog/314" title="L’accessibilité numérique selon votre métier - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique selon votre métier</a>
                  <ul><li>Durée : <strong>1h20 à 8h</strong> suivant les modules choisis</li><li>Réservé aux agents de l’État ayant accès à la <a href="https://mentor.gouv.fr/login/index.php" title="plateforme Mentor - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">plateforme Mentor</a>.</li></ul>
               </li>
               <li><a href="https://mentor.gouv.fr/catalog/262" title="L’essentiel de l’accessibilité de la communication de l’État - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’essentiel de l’accessibilité de la communication de l’État</a>
                 <ul><li>Durée : <strong>3h30</strong></li><li>Réservé aux agents de l’État ayant accès à la <a href="https://mentor.gouv.fr/login/index.php" title="plateforme Mentor - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">plateforme Mentor</a>.</li></ul>
               </li>
               <li><a href="https://mentor.gouv.fr/local/catalog/pages/training.php?trainingid=1405" title="L’accessibilité numérique des sites et applications web : Game of code- Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique des sites et applications web : <span lang="en">Game of code</span></a>
                 <ul><li>Durée : <strong>2h</strong></li><li>Réservé aux agents de l’État ayant accès à la <a href="https://mentor.gouv.fr/login/index.php" title="plateforme Mentor - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">plateforme Mentor</a> ou ayant accès aux formations de l’Institut de la gestion publique et du développement économique (IGPDE) (<a href="https://catalogue.igpde.finances.gouv.fr/1528-laccessibilite-numerique-des-sites-et-applications-web-game-of-code.html?search_query=accessibilite&results=6">catalogue.igpde.finances.gouv.fr</a>).</li></ul>
               </li>
            </ul>


              <!--li><a href="https://www.fun-mooc.fr/en/cours/accessibilite-numerique/" title="L’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique</a>. Ce <abbr title="Massive Open Online Course" lang="en">MOOC</abbr> est un cours généraliste d’introduction à l’accessibilité numérique. Il est disponible en mode « Archivé ouvert » et nécessite une inscription.</li>
              <li><a href="https://fr.wikiversity.org/wiki/Mise_en_%C5%93uvre_de_l_accessibilite_numerique" title="Mise en œuvre de l’accessibilité numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Mise en œuvre de l’accessibilité numérique</a>, 14 heures, gratuit.</li>
              <li>Si vous êtes agent de l’État et avez accès à la plateforme Mentor, deux parcours sont disponibles :
                <ul>
                  <li><a href="https://mentor.gouv.fr/catalog/314" title="L’accessibilité numérique selon votre métier - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’accessibilité numérique selon votre métier</a>, de 1h20 à 8h suivant les modules choisis dans le parcours, gratuit.</li>
                  <li><a href="https://mentor.gouv.fr/catalog/262" title="L’essentiel de l’accessibilité de la communication de l’État - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’essentiel de l’accessibilité de la communication de l’État</a>, 3h30, gratuit.</li>
                </ul>
              </li>
              <li>Si vous êtes agent de l’État et avez accès aux formations de l’IGPDE, un parcours à destination des profils « maîtrise d’œuvre » est disponible : <a href="https://catalogue.igpde.finances.gouv.fr/878-appliquer-l-accessibilite-aux-interfaces-web.html" title="Appliquer l'accessibilité aux interfaces web - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Appliquer l'accessibilité aux interfaces web</a>, 3 jours.
              </li-->
  
          </div>
        </section>

        <section class="fr-accordion">
          <h3 class="fr-accordion__title">
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-3">Numérique responsable, écoconception</button>
          </h3>
          <div class="fr-collapse" id="accordion-3">
            <ul class="fr-my-2w">
              <li><a href="https://www.fun-mooc.fr/fr/cours/impacts-environnementaux-du-numerique/" title="Les impacts environnementaux du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Les impacts environnementaux du numérique</a>
                <ul><li>Organisme de formation : <strong>Inria</strong> (Institut national de recherche en sciences et technologies du numérique), France Université numérique</li><li>Durée : <strong>5h</strong></li></ul>
              </li>
            </ul>
          </div>
        </section>

        <section class="fr-accordion">
          <h3 class="fr-accordion__title">
            <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-4">Qualité web</button>
          </h3>
          <div class="fr-collapse" id="accordion-4">
            <ul class="fr-my-2w">
              <li><a href="https://www.opquast.com/certification/" title="Certification Qualité web - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Certification Qualité web</a>
                <ul><li>Organisme de formation : <strong>Opquast</strong></li><li>Durée : <strong>14h</strong></li><li>Coût : financé par la Dinum pour les agents des trois fonctions publiques, dans la limite des places disponibles. Pour en bénéficier, contacter <strong>formation[a]design.numerique.gouv.fr</strong>.</li></ul>              
              </li>
            </ul>
          </div>
        </section>


<p class="fr-mt-8w fr-pr-1w">Vous pouvez aussi consulter et partager les vidéos de sensibilisation à l’accessibilité numérique sur <a href="https://www.youtube.com/playlist?list=PLzwHdQWfGYgaOs3drhozCyHWW4pVO4Skw" title="youtube - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">YouTube</a>, également visibles <strong>et</strong> téléchargeables sur <a href="https://tube.numerique.gouv.fr/c/designgouv/videos?s=1" title="peertube - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">PeerTube</a>.</p>
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
          publier
          picto {
            url
          }
          cours {
            id
            publier
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
          tags
          publier
          formation {
            id
            slug
          }
          sessions {
            id
            date
            ouverte
          }
        }
      }
    }
  }
</page-query>


<script>
  export default {
    data() {
      return {
        types: [],
        tags: []
      }
    },
    mounted() {
      var type = this.$route.query.type;
      var tag = this.$route.query.tag;
      if (type) {
        var button = document.getElementById(type);
        if (button) {
          button.setAttribute("aria-pressed", "true");
          this.types.push(type);
        }
      }
      if (tag) {
        var button = document.getElementById(tag);
        if (button) {
          button.setAttribute("aria-pressed", "true");
          this.tags.push(tag);
        }
      }
    },
    methods: {
      changeTypes: function (event) {
        if (event.target.attributes["aria-pressed"].value == "false") {
          this.types.push(event.target.id);
        } else if (event.target.attributes["aria-pressed"].value == "true") {
          const index = this.types.indexOf(event.target.id);
          if (index > -1) {
            this.types.splice(index, 1);
          }
        }
      },
      changeTags: function (event) {
        if (event.target.attributes["aria-pressed"].value == "false") {
          this.tags.push(event.target.id);
        } else if (event.target.attributes["aria-pressed"].value == "true") {
          const index = this.tags.indexOf(event.target.id);
          if (index > -1) {
            this.tags.splice(index, 1);
          }
        }
      }
    },
    computed: {
      sortedFormations: function () {
        return this.$page.allFormation.edges.filter(formation => formation.node.publier).sort((a, b) => (a.node.rang - b.node.rang));
      },
      filterCours: function () {
        const someTypes = this.types.length > 0;
        const someTags = this.tags.length > 0;
        if (someTypes || someTags) {
          return this.$page.allCours.edges.filter(edge => {
            var testType = this.types.indexOf(edge.node.type) > -1;
            var testTag = false;
            edge.node.tags.forEach(tag => {
              testTag = testTag || this.tags.indexOf(tag) > -1;
            });
            if(someTypes && !someTags) return testType && edge.node.publier
            else if(!someTypes && someTags) return testTag && edge.node.publier
            else return testType && testTag && edge.node.publier
          }).sort((a, b) => (a.node.rang - b.node.rang));
        } else {
          return this.$page.allCours.edges.filter(cours => cours.node.publier).sort((a, b) => (a.node.rang - b.node.rang));
        }
      },
      futurCours: function () {
        var futurList = [];
        this.$page.allCours.edges.forEach(cours => {
          var futur = cours.node.sessions.filter(session => session.ouverte && new Date(session.date) > Date.now());
          futur.length > 0 ? futurList.push(cours.node.id) : null;
        });
        return futurList;
      },
      typeList: function () {
        var list = [];
        this.$page.allCours.edges.forEach(cours => {
          if(list.indexOf(cours.node.type) == -1) {
            list.push(cours.node.type);
          }
        });
        return list;
      },
      tagList: function () {
        var list = [];
        this.$page.allCours.edges.forEach(cours => {
          cours.node.tags.forEach(tag => {
            if(list.indexOf(tag) == -1) {
              list.push(tag);
            }
          })
        });
        return list;
      }
    },
    metaInfo: {
      title: "Les formations",
      meta: [{
        name: 'description',
        content: "Toutes nos formations ouvertes à toutes et tous : renseignez-vous, inscrivez-vous et revisionnez les formations passées."
      },
      {
        property: 'og:title',
        content: "Les formations - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Toutes nos formations ouvertes à toutes et tous : renseignez-vous, inscrivez-vous et revisionnez les formations passées."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }
    ],
    },
  }
</script>


<style lang="scss" scoped>

  .fr-card__title .fr-card__link {
    font-size: 1rem;
    line-height: 1.5;
  }

  .filter {
    display: flex;

    &__name {
      flex-shrink: 0;
    }
  }

  .info {
    background-color: white;

    p {
      text-align: center;
      margin: 0.5rem;
    }
  }

</style>
