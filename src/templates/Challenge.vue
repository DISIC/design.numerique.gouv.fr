<template>
  <Layout class="challenge-page" hideNewsletter showServices>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/commando-ux/">Commando UX</g-link>
        </li>
        <li>
          <span aria-current="page">{{ $page.challenge.title }}</span>
        </li>
      </ol>
    </nav>

    <div class="cover cover--with-breadcrumb">
      <div class="cover__container">
        <!-- <g-image :src="$page.challenge.illustration" class="cover__illustration--small" alt=""/> -->
        <h1>{{ $page.challenge.title }}</h1>
        <p class="cover__subtitle">{{ $page.challenge.description }}</p>
      </div>
    </div>

    <div class="content">

      <section class="procedure">

        <div class="key-elements">
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'university']" height="16px"/>
            </div>
            <p><b>{{ $page.challenge.department }}</b> - {{ $page.challenge.direction }}</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'user-friends']" height="16px"/>
            </div>
            <p><b>{{ $page.challenge.volumetry }}</b></p>
            <p>personnes utilisent cette démarche chaque année</p>
          </div>
          <div class="element">
            <div>
              <font-awesome :icon="['fas', 'desktop']" height="16px"/>
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
          <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Le commando
        </h2>
        <ul class="team">
          <li v-for="node in $page.challenge.team" :key="node.id">
            <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
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

  import CommandoUX from "~/assets/images/accompagnement.svg";

  export default {
    components: {
      CommandoUX,
    },
    metaInfo() {
      return {
        title: this.$page.challenge.title,
        meta: [
          {
            name: "description",
            content: this.$page.challenge.description
          },
          {
            property: 'og:title',
            content: this.$page.challenge.title
          },
          {
            property: 'og:description',
            content: this.$page.challenge.description
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
            content: this.$page.challenge.description
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

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .challenge-page {

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

    .content {

      h2 {
        margin-top: 54px;
      }

      h3 {
        margin-top: 36px;
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

      #problématique {
        &:before {
          background-image: url(/assets/images/problem.svg);
          background-size: 36px 36px;
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-right: 16px;
          margin-bottom: -5px;
          content:"";

          @media only screen and (max-width: $mobile-max-width) {
            background-size: 24px 24px;
            height: 24px;
            width: 24px;
            margin-right: 8px;
            margin-bottom: -3px;
          }
        }
      }

      #objectifs-du-défi {
        &:before {
          background-image: url(/assets/images/goal.svg);
          background-size: 36px 36px;
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-right: 16px;
          margin-bottom: -5px;
          content:"";

          @media only screen and (max-width: $mobile-max-width) {
            background-size: 24px 24px;
            height: 24px;
            width: 24px;
            margin-right: 8px;
            margin-bottom: -3px;
          }
        }
      }

      #le-défi-étape-par-étape {
        &:before {
          background-image: url(/assets/images/steps.svg);
          background-size: 36px 36px;
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-right: 16px;
          margin-bottom: -5px;
          content:"";

          @media only screen and (max-width: $mobile-max-width) {
            background-size: 24px 24px;
            height: 24px;
            width: 24px;
            margin-right: 8px;
            margin-bottom: -3px;
          }
        }
      }

      .steps {
        margin-left: 56px;
        padding-left: 32px;
        border-left: 4px dotted $blue;

        @media only screen and (max-width: $mobile-max-width) {
          margin-left: 8px;
          padding-left: 21px;
        }

        h3 {
          &:before {
            background-image: url(/assets/images/step.svg);
            background-size: 32px 32px;
            display: inline;
            position: absolute;
            margin-left: -50px;
            margin-top: -5px;
            width: 32px;
            height: 32px;
            content:"";

            @media only screen and (max-width: $mobile-max-width) {
              margin-left: -39px;
              margin-top: -5px;
            }
          }

          &:last-of-type {
            &:before {
              background-image: url(/assets/images/stepLong.svg);
              background-size: 32px 108px;
              width: 32px;
              height: 108px;
              margin-top: -15px;
            }
          }
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
            margin: 0 auto;
          }

          p {
              margin: 0;
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
            background-color: lighten($gray, 10%);
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
            background-color: lighten($gray, 10%);
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
  }

</style>
