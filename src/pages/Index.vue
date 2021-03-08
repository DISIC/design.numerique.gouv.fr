<template>
  <Layout class="index-page">

    <div class="cover">
      <div class="cover__container">
        <h1>Concevons des services publics numériques <span class="text-highlight">accessibles</span>, <span class="text-highlight">inclusifs</span> et <span class="text-highlight">humains</span>.</h1>
        <p class="cover__subtitle">Des idées et des outils à la disposition des agents publics pour améliorer l’expérience usager des services publics numériques.</p>

      </div>
    </div>

    <div class="content">

      <Commando/>

      <section class="items">

          <div class="item item--left">
            <div class="item__content">
              <Design focusable="false" class="item__icon" aria-hidden="true"/>
              <h2>Design</h2>
              <p>
                Rendre les services numériques
                plus <strong>simples</strong>, <strong>accessibles</strong>
                et <strong>agréables</strong> pour les usagers.
              </p>
            </div>

            <p class="item__link item__link--disabled">
              Bientôt disponible !
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

            <g-link to="/accessibilite-numerique/" class="item__link button button--blue button--highlight">
              L’accessibilité en détails<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section>


      <section class="actions">

        <div class="actions__title">
          <Actions focusable="false" class="actions__icon" aria-hidden="true"/>
          <h2>Nos dispositifs</h2>
        </div>

        <ul class="actions__list">
          <li class="action">
            <Observatoire focusable="false" class="action__illustration" aria-hidden="true" height="16px" width="16px"/>
            <h3><a href="https://observatoire.numerique.gouv.fr/" title="L’observatoire de la qualité des démarches en ligne - Nouvelle fenêtre" target="_blank">L’Observatoire <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4" aria-hidden="true" height="16px" width="16px"/></a></h3>
            <p>Les 250 démarches administratives les plus utilisées par les Français passées à la loupe&nbsp;🔎</p>
          </li>

          <li class="action">
            <font-awesome :icon="['fas', 'user-astronaut']" focusable="false" class="action__illustration" aria-hidden="true" transform="shrink-6" height="16px" width="16px"/>
            <h3><g-link to="/commando-ux/">Le Commando UX <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4"  aria-hidden="true" height="16px" width="16px"/></g-link></h3>
            <p>Une équipe de designers et développeurs pour améliorer les services publics numériques&nbsp;🌟</p>
          </li>

          <li class="action">
            <FranceRelance focusable="false" class="action__illustration" aria-hidden="true" height="16" width="16"/>
            <h3><a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Le guichet FranceRelance - Nouvelle fenêtre" target="_blank">Notre guichet FranceRelance <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4" aria-hidden="true" height="16px" width="16px"/></a></h3>
            <p>Pour simplifier la relation entre les usagers et l’administration grâce au numérique&nbsp;👍</p>
          </li>
        </ul>

      </section>


      <section class="bricks">

        <div class="brick brick--left">
          <div class="brick__description">
            <Outils focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Outils</h2>

            <p>
              Nous mettons à votre disposition un ensemble d’outils pour vous guider sur les sujets du <b>design</b> et de l’<b>accessibilité</b>.
            </p>
          </div>
          <g-link to="/outils/" class="brick__link">
            J’accède aux outils<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
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
            Je découvre les formations<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

      </section>


      <!-- <section class="blog">

          <div class="blog__top">
            <div>
              <Blog class="blog__icon" focusable="false" aria-hidden="true"/>
              <h2>Notre blog</h2>
            </div>

            <div class="blog__allArticlesLinkDesktop">
              <g-link to="/blog/">
                Voir toutes nos publications<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
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
            <g-link to="/blog/">
              Voir toutes nos publications<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section> -->


      <section class="team">

        <div class="team__title">
          <Equipe focusable="false" class="team__icon" aria-hidden="true"/>
          <h2>Notre équipe</h2>
        </div>

        <div class="team__content">
          <g-image class="team__image" src="~/assets/images/team-photos/equipe.png" alt="L’équipe DesignGouv sourire aux lèvres"/>
          <div class="team__text">
            <p>
              DesignGouv c’est avant tout une équipe, <strong>le pôle
              Design des service numérique</strong>, diverse et heureuse de contribuer aux côtés
              des administrations à l’amélioration du quotidien des Français !
              Ok, il n’y a pas tout le monde sur la photo,
              promis on en reprend une vite&nbsp;☀️.</p>
            <p></p>
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

  import Commando from "~/components/alerts/Commando.vue"
  import Design from "~/assets/images/design.svg"
  import Accessibilite from "~/assets/images/accessibilite.svg"
  import Outils from "~/assets/images/outils.svg"
  import Services from "~/assets/images/services.svg"
  import Formations from "~/assets/images/formations.svg"
  import Blog from "~/assets/images/blog.svg"
  import Actions from "~/assets/images/actions.svg"
  import Observatoire from "~/assets/images/observatoire.svg"
  import FranceRelance from "~/assets/images/franceRelance.svg"
  import Equipe from "~/assets/images/equipe.svg"

  export default {
    components: {
      Commando,
      Design,
      Accessibilite,
      Outils,
      Services,
      Formations,
      Blog,
      Actions,
      Observatoire,
      FranceRelance,
      Equipe
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


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .index-page {

    .alert {
      margin-bottom: 80px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 64px;
      }
    }

    h2 {
      font-size: 2rem;

      @media only screen and (max-width: $mobile-max-width) {
        font-size: 1.5rem;
      }
    }

    .team {
      position: relative;

      &:hover, &:focus {
        .team__icon {
          transform: rotate(180deg);
        }
      }

      &__title {
        margin-bottom: 1.5rem;

        h2 {
          display: inline-block;
          padding: 8px 0;
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
        margin: 0 1rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: initial;
        }

        .team__text {
          padding-left: 2rem;

          @media only screen and (max-width: $mobile-max-width) {
            padding: 1rem;
          }

          p {
            margin: 0 0 1rem 0;
          }

          a {
            border-bottom: none !important;
            text-align: right;

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


          @media only screen and (max-width: $mobile-max-width) {
            flex-basis: 94%;
            margin: 0 3% 1.5rem 3%;
          }

          h3 {
            margin: 0;

            a {
              border-bottom: none !important;

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
            background-color: $lighter-gray;
            border-radius: 50%;
            color: $red;
          }

          &:hover {
            border-left: 4px solid $red;

            h3 {
              color: $blue;
              text-shadow: 5px 5px 0px $light;

              svg {
                margin-left: 12px;
              }
            }
          }
        }
      }
    }

    .blog {

      &__top {
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
      }

      &__allArticlesLinkMobile {
        display: none;

        @media only screen and (max-width: $mobile-max-width) {
          display: block;
          text-align: right;
          margin-top: -16px;
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
        background-color: $lighter-gray;
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
          border: none;
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
          border-bottom: none !important;

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
          box-shadow: 5px 5px 0px $light;

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
            margin: 0 0 3rem 0;
          }
        }

        &__link {
          margin-top: 0.5rem;

          &--disabled {
            font-weight: bold;
            margin-top: 2rem;

            @media only screen and (max-width: $mobile-max-width) {
              font-size: 0.875em;
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
