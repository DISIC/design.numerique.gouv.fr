<template>
  <Layout>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/">Commando UX</g-link>
        </li>
        <li>
          <g-link
            to="/accessibilite-numerique/cadre-legal"
            aria-current="page"
          ><span v-html="$page.challenge.title" /></g-link>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
      <div class="cover__container">
        <g-image :src="$page.challenge.illustration" class="cover__illustration--small" aria-hidden="true"/>
        <h1>{{ $page.challenge.title }}</h1>
        <p class="cover__subtitle">{{ $page.challenge.description }}</p>
      </div>
    </div>

    <div class="content content--challenge">

      <section class="procedure">

        <div class="key-elements">
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'university']"/>
            </div>
            <p><b>{{ $page.challenge.department }}</b> - {{ $page.challenge.direction }}</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'user-friends']"/>
            </div>
            <p><b>{{ $page.challenge.volumetry }}</b></p>
            <p>personnes utilisent cette démarche chaque année</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'desktop']"/>
            </div>
            <p v-if="$page.challenge.website"><b>{{ $page.challenge.ratio }}</b></p>
            <p v-else><b>-</b></p>
            <p v-if="$page.challenge.website">de demandes se font par le service en ligne</p>
            <p v-else>La démarche n'est pas encore réalisable en ligne</p>
          </div>
        </div>
        <p>Nom de la démarche : {{ $page.challenge.fullTitle }}</p>
        <p v-if="$page.challenge.website">Lien vers la démarche : <g-link :to="$page.challenge.website">{{ $page.challenge.website }}</g-link></p>

      </section>

      <section>
        <div v-html="$page.challenge.content" />
      </section>

      <section>
        <h2>
          <CommandoUX class="h2__icon" aria-hidden="true"/>Le commando
        </h2>
        <ul class="team">
          <li v-for="node in $page.challenge.team" :key="node.id">
            <g-image :src="node.photo" quality="100" height="150" width="150" />
            <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
            <p>{{ node.job_title }}</p>
            <p v-if="node.twitter">
              <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
            </p>
          </li>
        </ul>
      </section>

    </div>
  </Layout>
</template>

<script>
import Services from "~/assets/images/services.svg";
import CommandoUX from "~/assets/images/services.svg";
import CommandouxIllustration from "~/assets/images/commandouxIllustration.svg";

export default {
  components: {
    Services,
    CommandoUX,
    CommandouxIllustration,
  },
  metaInfo() {
    return {
      title: this.$page.challenge.title,
      meta: [
        {
          name: "description",
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
        {
          property: 'og:title',
          content: this.$page.challenge.title
        },
        {
          property: 'og:description',
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
          {
          property: 'og:image',
          content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
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
          content: this.$page.challenge.title
        },
        {
          name: "twitter:description",
          content: "Vous êtes designers ou développeurs, venez améliorer en 4 mois l'expérience de ce service."
        },
        {
          name: "twitter:image",
          content: "https://design.numerique.gouv.fr/assets/meta-images/commandoUX.png"
        },
      ]
    };
  }
};
</script>

<page-query>
query Challenge ($id: ID!) {
  challenge: challenge (id: $id) {
    description
    department
    direction
    content
    place
    title
    description
    illustration
    fullTitle
    volumetry
    ratio
    website
    team {
      id
      firstName
      lastName
      photo (width: 150, height: 150, quality: 100)
      path
      job_title
      twitter
    }
  }
}
</page-query>

<style scoped lang="scss">

  @import "src/assets/scss/_vars.scss";

  .cover {
    margin-bottom: 64px;

    @media only screen and (max-width: $mobile-max-width) {
      margin-top: 48px;
      margin-bottom: 48px;

      h1 {
        margin-top: 16px;
      }
    }
  }

  .button {
    text-decoration: none;
    border-color: $blue;
    background-color: $blue;
    color: white;
    border-radius: 32px;
    padding: 8px 24px;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;

    @media only screen and (max-width: $mobile-max-width) {
      font-size: 0.875em;
    }

    &:hover {
      background: $red;
      border-color: $red;
    }
  }

  .cta {
    text-align: center;
    margin-top: 28px;

    > p {
      margin: 0;
      display: block;
      font-size: 0.9em;
      color: $mid-gray;
    }
  }

  .procedure {
    margin-bottom: 96px;

    @media only screen and (max-width: $mobile-max-width) {
      margin-bottom: 64px;
    }

    p {
      margin: 4px 0;
    }
  }

  .team {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    h3 {
      margin: 4px 0;

      a {
        color: $black;
        border: none;

        &:hover {
          color: $blue;
        }
      }
    }

    > li {
      list-style: none;
      text-align: center;
      width: 30%;
      margin: 24px 4px;

      @media only screen and (max-width: $mobile-max-width) {
        width: 46%;
      }

      img {
        border-radius: 50em;
        max-width: 150px;
      }

      p {
          margin: 0;
      }
    }
  }

  .content {

    a {
      svg {
        padding-right: 12px;
        transition: 0.1s all;
      }

      &:hover {
        svg {
          padding-left: 8px;
          padding-right: 4px;
        }
      }
    }

    .subsection {
      margin-bottom: 40px;
    }

    .key-elements {
      margin: 32px 0 64px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        margin: 0px 0;
      }

      .element {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 240px;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0px 4px 32px 4px;
          width: 160px;
        }

        img {
          background-color: lighten($gray-hover, 10%);
          border-radius: 100%;
          padding: 12px;
        }

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          width: 88px;
          height: 88px;
          background-color: lighten($gray-hover, 10%);
          margin-bottom: 16px;

          @media only screen and (max-width: $mobile-max-width) {
            margin-bottom: 8px;
          }

          svg {
            font-size: 40px;
            color: $blue;
          }
        }

        p {
          margin: 0;
          padding: 0 8px;
        }
      }
    }
  }

</style>
