<template>
  <Layout>
    <div class="content fr-mt-md-4w fr-mt-2w">

      <h1 class="fr-display-sm dg-text--center">Concevons des services publics numériques <strong>accessibles</strong>, <strong>inclusifs</strong> et <strong>humains</strong>.</h1>
      <p class="fr-text--lead dg-text--center">Les services publics numériques sont encore trop souvent conçus sans prendre en compte l’audience qu’ils servent. Nous mettons à la disposition des administrations des idées et outils pour améliorer l’expérience usager de leurs services.</p>
      <Formation/>

      <section class="fr-mt-4w">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-sm-6">
                <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                    <div class="fr-tile__body">
                        <h2>Design</h2>
                        <p class="fr-tile__desc">Rendre les services numériques plus <strong>simples</strong>, <strong>accessibles</strong> et <strong>agréables</strong> pour les usagers.</p>
                    </div>
                </div>
            </div>
            <div class="fr-col-sm-6">
                <div class="fr-tile fr-enlarge-link fr-tile--horizontal">
                    <div class="fr-tile__body">
                        <h2><a href="/accessibilite-numerique/" class="fr-tile__link">Accessibilité</a></h2>
                        <p class="fr-tile__desc">Rendre les services en ligne accessibles aux personnes en <strong>situation de handicap</strong>.</p>
                    </div>
                </div>
            </div>
          </div>
      </section>

      <section class="fr-mt-4w">
        <h2>Nos offres d’accompagnement</h2>
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-sm-6">
            <div class="fr-card fr-enlarge-link" >
              <div class="fr-card__body">
                  <h3 class="fr-card__title">
                    <a href="/commando-ux/" class="fr-card__link">Le Commando UX</a>
                  </h3>
                  <p class="fr-card__desc">Une équipe de designers, développeurs et développeuses pour améliorer les démarches en ligne&nbsp;🌟</p>
              </div>
            </div>
          </div>
          <div class="fr-col-sm-6">
            <div class="fr-card fr-enlarge-link" >
              <div class="fr-card__body">
                  <h3 class="fr-card__title">
                    <a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Le guichet France Relance - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener" class="fr-card__link">Notre guichet France Relance</a>
                  </h3>
                  <p class="fr-card__desc">Destiné aux administrations pour financer la simplification de leurs démarches en ligne&nbsp;👍</p>
              </div>
            </div>
          </div>
          <div class="fr-col-sm-6">
            <div class="fr-card fr-enlarge-link" >
              <div class="fr-card__body">
                  <h3 class="fr-card__title">
                    <a href="https://observatoire.numerique.gouv.fr/" title="L’observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener" class="fr-card__link">L’Observatoire</a>
                  </h3>
                  <p class="fr-card__desc">Les 250 démarches administratives les plus utilisées par les Français et les Françaises passées à la loupe&nbsp;🔎</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fr-mt-4w">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12 fr-col-sm-6">
            <h2>Outils</h2>
            <p>Nous mettons à votre disposition un ensemble d’outils pour vous guider sur les sujets du <strong>design</strong> et de l’<strong>accessibilité</strong>.</p>
            <g-link to="/outils/" >Accéder aux outils<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
          </div>
          <div class="fr-col-12 fr-col-sm-6">
            <h2>Formations</h2>
            <p>De nombreuses formations sont disponibles, que ce soit pour vous former <strong>personnellement</strong> ou en <strong>équipe</strong>.</p>
            <g-link to="/formations/" >Voir les formations<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/></g-link>
          </div>
        </div>
      </section>

      <section class="fr-mt-4w">
        <h2>Nos articles</h2>
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-12 fr-col-sm-6" v-for="{ node } in $page.allArticle.edges" :key="node.id">
              <div class="fr-card fr-enlarge-link" >
                <div class="fr-card__body">
                    <h2 class="fr-card__title">
                      <g-link :to="node.path" class="fr-card__link">{{ node.title }}</g-link>
                    </h2>
                    <p class="fr-card__desc">{{ node.description }}.</p>
                    <p class="fr-card__detail">{{ node.publishedDate }}</p>
                </div>
                <div class="fr-card__img">
                    <g-image :src="node.illustration" class="fr-responsive-img" alt=""/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section class="fr-mt-4w">
        <h2>Notre équipe</h2>
        <g-image class="team__image" src="~/assets/images/team-photos/equipe.png" alt="L’équipe DesignGouv sourire aux lèvres"/>
        <div>
          <p>DesignGouv c’est avant tout une équipe, <strong>le pôle Design des services numériques</strong>, diverse et heureuse de contribuer aux côtés des administrations à l’amélioration du quotidien des Français et des Françaises.<br>Ok, il n’y a pas tout le monde sur la photo, promis on en reprend une vite&nbsp;☀️</p>
          <g-link to="/equipe/">Découvrir l’équipe et notre mission<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3" aria-hidden="true" height="16px" width="16px"/></g-link>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
  import Formation from "~/components/alerts/Formation.vue"

  export default {
    components: {
      Formation,
    },
    metaInfo: {
      title: "DesignGouv - Le design numérique au service des administrations",
      meta: [{
        name: "description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        property: "og:title",
        content: "DesignGouv - Le design numérique au service des administrations"
      },
      {
        property: "og:description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
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
        content: "DesignGouv - Le design numérique au service des administrations"
      },
      {
        name: "twitter:description",
        content: "Comment créer des services numériques de qualité et accessibles pour tous."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      },
      {
        name: "google-site-verification",
        content: "3lr6jhip11QgAYBjIlgBMRAi7CfsjE8mQygaLbZo68A"
      }],
    }
  }

</script>


<page-query>

  query {
    allArticle (limit: 2, sortBy: "publishedDate", order: DESC) {
      edges {
        node {
        	id
          title
          publishedDate (format: "D MMMM YYYY", locale : "fr")
          illustration
          description
          path
        }
      }
    }
  }

</page-query>
