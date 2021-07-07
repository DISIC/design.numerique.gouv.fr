<template>
  <Layout class="team-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Home</g-link>
        </li>
        <li>
          <span aria-current="page">About</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <h1>Design of digital services team</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Mission</h2>
          <p>
            In 2017, Emmanuel Macron set 2 goals for 2022. Make 100% of public services accessible online, and improve the experience of public services thanks to digital.
          </p>
          <p>
            The digital world gives us access to a multitude of information, of culture and services for each and everyone, and everywhere. Nevertheless, in France, digital products and services are too often conceived without taking into account the audience they serve. It's the case for many digital public services. <strong>Digital world must allow us to improve the relationship between our administration and our citizen, via simpler and more accessible services.</strong>
          </p>
          <p>
            Working with all ministers responsible for digital public services, our goal is that most French people can use these services on their own, and especially the 12 million people with handicap. In order to do so, we pilot and track the quality of this digitalisation on the <a href="https://observatoire.numerique.gouv.fr">Observatory</a> since june 2019. We launched in september 2020 the <a href="https://design.numerique.gouv.fr/commando-ux">UX Commando</a> to deploy designers et développeurs amongst ministers who build these public services. Finally, we participate to the development of a culture of design and inclusion within the administration.
          </p>
          <p>
            The team works under the <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a> and for the Minister of the Transformation and the Public Workforce <a href="https://twitter.com/AdeMontchalin">Amélie de Montchalin</a>.
          </p>
          <h2>Success metrics by 2022</h2>
          <ul>
            <li>
              Finalise the digitalisation of 100% of the <a href="https://observatoire.numerique.gouv.fr">250 most used services</a>
            </li>
            <li>
              Reach 70% public satisfaction on all those digital services
            </li>
            <li>
              Assure that 80% of these services follow the web accessibility standards
            </li>
          </ul>
        </section>

        <section>
          <h2>Our team</h2>
          <ul class="team">
            <li v-for="{ node } in team" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>En appui</h2>
          <ul class="team">
            <li v-for="{ node } in external" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Le commando</h2>
          <ul class="team">
            <li v-for="{ node } in commando" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" alt="" />
              <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<page-query>

  query {
    allPeople (sortBy: "lastName", order: ASC) {
      edges {
        node {
        	id
          firstName
          lastName
          job_title
          sub_team
          sub_team_link
          twitter
          photo (width: 150, height: 150, quality: 100)
          group
          content
        }
      }
    }
  }

</page-query>

<script>

  export default {
    metaInfo: {
      title: "About",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
    computed: {
      team: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.lastName === 'team')
      },
      external: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'external')
      },
      commando: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'commando')
      },
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .team-page {

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
  }

</style>
