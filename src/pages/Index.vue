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
          <g-image class="team__image" src="~/assets/images/team-photos/equipe.jpg" alt="L’équipe DesignGouv, sourire aux lèvres" width="480" height="320" quality="50"/>
          <div class="team__text">
            <p>DesignGouv c’est avant tout une équipe&nbsp;☀️, <strong>le pôle Design des services numériques</strong>, diverse et heureuse de contribuer aux côtés des administrations à l’amélioration du quotidien des Français et des Françaises.</p>
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
          illustration (width: 400, height: 180, quality: 50)
          description
          path
        }
      }
    }
  }

</page-query>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .index-page {

    .alert {
      margin-bottom: 80px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 64px;
      }
    }

    .blog {

      a {
        border-bottom: none !important;
      }

      article {
        margin-bottom: 2rem;
      }

      &__top {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: $mobile-max-width) {
          display: block;
        }
      }

      &__allArticlesLinkDesktop {
        margin-top: 8px;

        @media only screen and (max-width: $mobile-max-width) {
          display: none;
        }

        a {
          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      }

      &__allArticlesLinkMobile {
        display: none;

        @media only screen and (max-width: $mobile-max-width) {
          display: block;
          text-align: right;
        }
      }

      h2 {
        display: inline-block;

        @media only screen and (max-width: $mobile-max-width) {
          margin-bottom: 40px;
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        height: 36px;
        width: 36px;
        margin-bottom: -5px;
        margin-right: 16px;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          height: 32px;
          width: 32px;
          margin-bottom: -6px;
          margin-right: 12px;
        }
      }

      &:hover, &:focus {
        .blog__icon {
          transform: rotate(180deg);
        }
      }
    }

    .team {
      position: relative;

      &:hover {
        .team__icon {
          transform: rotate(180deg);
        }
      }

      &__title {
        margin-bottom: 1.5rem;

        h2 {
          display: inline-block;
          padding: 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        height: 2rem;
        width: 2rem;
        margin-bottom: -0.25rem;
        margin-right: 0.75rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          margin-bottom: -6px;
        }
      }

      &__content {
        display: flex;
        align-items: flex-start;
        margin: 0;

        @media only screen and (max-width: $mobile-max-width) {
          display: initial;
        }

        .team__text {
          padding-left: 2rem;

          @media only screen and (max-width: $mobile-max-width) {
            padding: 1rem 0;
          }

          p {
            margin: 0 0 1rem 0;
          }

          a {
            border: none !important;

            &:after {
              position: absolute;
              content: "";
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }
          }
        }

        .team__image {
          max-width: 240px;
        }
      }
    }

    .actions {

      &__title {
        margin-bottom: 1.5rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: flex;
        }

        h2 {
          display: inline-block;
          padding: 0.25rem 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        min-width: 2rem;
        height: 2rem;
        width: 2rem;
        margin-bottom: -0.25rem;
        margin-right: 0.75rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          margin-bottom: -6px;
        }
      }

      &__list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .action {
          position: relative;
          flex-basis: 44%;
          margin: 0 1.5% 1.5rem 1.5%;
          padding-left: 2%;
          border-left: 4px solid $blue;
          list-style: none;

          &:before {
            content: none;
          }


          @media only screen and (max-width: $mobile-max-width) {
            flex-basis: 94%;
            margin: 0 3% 1.5rem 3%;
          }

          h3 {
            margin: 0;

            a {
              border: none !important;

              &:after {
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }

              svg {
                margin-left: 4px;
                transition: .2s all;
              }
            }
          }

          p {
            margin: 8px 0 0 0;
          }

          &__illustration {
            height: 36px;
            width: 36px;
            background-color: $light-gray;
            border-radius: 50%;
            color: $red;
          }

          &:hover {
            border-left: 4px solid $red;

            h3 {
              color: $blue;

              svg {
                margin-left: 12px;
              }
            }
          }
        }
      }
    }

    .bricks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .brick {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 1;
        flex-basis: 49%;
        margin-bottom: 24px;
        background-color: $light-gray;
        border-radius: 32px;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          margin-bottom: 16px;
        }

        &__description {
          display: inline-block;
          margin: 24px 24px 0 24px;
        }

        &--right {
          margin-left: 0.5%;
        }

        &--left {
          margin-right: 0.5%;
        }

        h2 {
          display: inline-block;
          padding: 4px 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

        &__link {
          margin: 4px 24px 24px 24px;
          text-align: right;
          border: none !important;
        }

        &__icon {
          display: inline-block;
          transition: .2s all;
          height: 2rem;
          width: 2rem;
          margin-bottom: -0.25rem;
          margin-right: 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            margin-bottom: -6px;
          }
        }

        a {
          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &:hover {
          .brick__icon {
            transform: rotate(180deg);
          }
        }
      }
    }

    .items {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        align-items: start;
        margin: 0 0 4rem 0;
      }

      .item {
        position: relative;
        flex-basis: 48%;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          flex-grow: 1;
        }

        &--left {
          margin-right: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0 0 3rem 0;
          }
        }

        &--right {
          margin-left: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0;
          }
        }

        &__link {
          margin-top: 0.5rem;

          &--disabled {
            font-weight: bold;
            margin-top: 2rem;

            @media only screen and (max-width: $mobile-max-width) {
              font-size: 0.875em;
              margin-top: 1rem;
            }
          }

          &::after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &__icon {
          display: inline-block;
          transition: .2s all;
          height: 2rem;
          width: 2rem;
          margin-bottom: -0.25rem;
          margin-right: 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            margin-bottom: -6px;
          }
        }

        h2 {
          display: inline-block;
          padding: 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

        &:hover, &:focus {
          .item__icon {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

</style>
