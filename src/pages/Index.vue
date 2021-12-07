<template>
  <Layout class="index-page">

    <div class="cover cover--home">
      <div class="cover__container cover__container--home">
        <h1>Concevons des services publics numériques <span class="text-highlight">accessibles</span>, <span class="text-highlight">inclusifs</span> et <span class="text-highlight">humains</span>.</h1>
        <p class="cover__subtitle">Les services publics numériques sont encore trop souvent conçus sans prendre en compte l’audience qu’ils servent. Nous mettons à la disposition des administrations des idées et outils pour améliorer l’expérience usager de leurs services.</p>
      </div>
    </div>

    <div class="content">

      <Formation/>

      <section class="items">

          <div class="item item--left">
            <div class="item__content">
              <Design focusable="false" class="item__icon" aria-hidden="true"/>
              <h2>Design</h2>
              <p>
                Rendre les services numériques plus <strong>simples</strong>, <strong>accessibles</strong> et <strong>agréables</strong> pour les usagers.
              </p>
            </div>

            <p class="item__link item__link--disabled">
              À venir.
            </p>
          </div>

          <div class="item item--right">
            <div class="item__content">
              <Accessibilite focusable="false" class="item__icon" aria-hidden="true"/>
              <h2>Accessibilité</h2>
              <p>
                Rendre les services en ligne accessibles aux personnes en <strong>situation de handicap</strong>.
              </p>
            </div>

            <g-link to="/accessibilite-numerique/" class="item__link button button--highlight">
              L’accessibilité en détails<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section>


      <section class="actions">

        <div class="actions__title">
          <Accompagnement focusable="false" class="actions__icon" aria-hidden="true"/>
          <h2>Nos offres d’accompagnement</h2>
        </div>

        <ul class="actions__list">
          <li class="action">
            <font-awesome :icon="['fas', 'user-astronaut']" focusable="false" class="action__illustration" aria-hidden="true" transform="shrink-6" height="16px" width="16px"/>
            <h3><g-link to="/commando-ux/">Le Commando UX <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4"  aria-hidden="true" height="16px" width="16px"/></g-link></h3>
            <p>Une équipe de designers, développeurs et développeuses pour améliorer les démarches en ligne&nbsp;🌟</p>
          </li>

          <li class="action">
            <FranceRelance focusable="false" class="action__illustration" aria-hidden="true" height="16" width="16"/>
            <h3><a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Le guichet France Relance - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Notre guichet France Relance <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4" aria-hidden="true" height="16px" width="16px"/></a></h3>
            <p>Destiné aux administrations pour financer la simplification de leurs démarches en ligne&nbsp;👍</p>
          </li>

          <li class="action">
            <Observatoire focusable="false" class="action__illustration" aria-hidden="true" height="16px" width="16px"/>
            <h3><a href="https://observatoire.numerique.gouv.fr/" title="L’observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’Observatoire <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4" aria-hidden="true" height="16px" width="16px"/></a></h3>
            <p>Les 250 démarches administratives les plus utilisées par les Français et les Françaises passées à la loupe&nbsp;🔎</p>
          </li>
        </ul>

      </section>


      <section class="bricks">

        <div class="brick brick--left">
          <div class="brick__description">
            <Outils focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Outils</h2>

            <p>
              Nous mettons à votre disposition un ensemble d’outils pour vous guider sur les sujets du <strong>design</strong> et de l’<strong>accessibilité</strong>.
            </p>
          </div>
          <g-link to="/outils/" class="brick__link">
            Accéder aux outils<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <div class="brick brick--right">
          <div class="brick__description">
            <Formations focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Formations</h2>

            <p>
              De nombreuses formations sont disponibles, que ce soit pour vous former <strong>personnellement</strong> ou en <strong>équipe</strong>.
            </p>
          </div>
          <g-link to="/formations/" class="brick__link">
            Voir les formations<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

      </section>

      <section class="blog">

          <div class="blog__top">
            <div>
              <Blog class="blog__icon" focusable="false" aria-hidden="true"/>
              <h2>Nos articles</h2>
            </div>
            <div class="blog__allArticlesLinkDesktop">
              <g-link to="/articles/">
                Voir tous nos articles<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
              </g-link>
            </div>
          </div>

          <div class="articles">
            <article v-for="{ node } in $page.allArticle.edges" :key="node.id">
              <g-image :src="node.illustration" alt=""/>
              <p class="articles__date">{{ node.publishedDate }}</p>
              <h3><g-link :to="node.path">{{ node.title }}</g-link></h3>
              <p>{{ node.description }}</p>
            </article>
          </div>

          <div class="blog__allArticlesLinkMobile">
            <g-link to="/articles/">
              Voir tous nos articles<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section>


      <section class="team">

        <div class="team__title">
          <Equipe focusable="false" class="team__icon" aria-hidden="true"/>
          <h2>Notre équipe</h2>
        </div>

        <div class="team__content">
          <g-image class="team__image" src="~/assets/images/team-photos/equipe.png" alt="L’équipe DesignGouv sourire aux lèvres"/>
          <div class="team__text">
            <p>DesignGouv c’est avant tout une équipe, <strong>le pôle Design des services numériques</strong>, diverse et heureuse de contribuer aux côtés des administrations à l’amélioration du quotidien des Français et des Françaises.
              Ok, il n’y a pas tout le monde sur la photo, promis on en reprend une vite&nbsp;☀️</p>
            <g-link to="/equipe/">
              Découvrir l’équipe et notre mission<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3" aria-hidden="true" height="16px" width="16px"/>
            </g-link>
          </div>
        </div>

      </section>

    </div>

  </Layout>
</template>


<script>

  import Formation from "~/components/alerts/Formation.vue"
  import Design from "~/assets/images/design.svg"
  import Accessibilite from "~/assets/images/accessibilite.svg"
  import Outils from "~/assets/images/outils.svg"
  import Formations from "~/assets/images/formations.svg"
  import Accompagnement from "~/assets/images/accompagnement.svg"
  import Observatoire from "~/assets/images/observatoire.svg"
  import FranceRelance from "~/assets/images/franceRelance.svg"
  import Equipe from "~/assets/images/equipe.svg"
  import Blog from "~/assets/images/articles.svg"

  export default {
    components: {
      Formation,
      Design,
      Accessibilite,
      Outils,
      Formations,
      Accompagnement,
      Observatoire,
      FranceRelance,
      Equipe,
      Blog
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

