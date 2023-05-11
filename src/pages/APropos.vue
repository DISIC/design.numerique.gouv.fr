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
              <span aria-current="page" class="fr-breadcrumb__link">À propos</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/recrutement-picto.svg" aria-hidden="true">Le pôle design des services numériques</h1>
        <p class="fr-text--lead">Le pôle design des services numériques fait partie de la <a href="https://www.numerique.gouv.fr/dinum/" target="_blank" title="direction interministérielle du numérique - Nouvelle fenêtre">direction interministérielle du numérique</a>.</p>
      </div>
    </div>


    <div class="dg-content fr-px-2w">
      <section>
        <h2>Mission</h2>
        <p>En 2017, Emmanuel Macron a fixé deux objectifs à 2022 : rendre 100% des démarches administratives réalisables en ligne, et améliorer les services publics du quotidien grâce au numérique.</p>
        <p>Le numérique, c'est la promesse d’un accès à une multitude d’informations et services pour tous, et partout. Néanmoins, les produits et services numériques sont encore trop souvent conçus sans prendre en compte l'audience qu’ils servent. C’est le cas pour de nombreux services publics numériques. <strong>Le numérique doit nous permettre d'améliorer la relation entre les usagers et l'administration, à travers des services simples, accessibles et humains.</strong></p>
        <p>En partenariat avec les ministères, nous travaillons pour qu'un plus grand nombre puissent utiliser ces services en toute autonomie. Pour ce faire, nous pilotons et suivons la qualité de cette numérisation des services à travers l'<a href="https://observatoire.numerique.gouv.fr">Observatoire</a> depuis juin 2019.</p>
        <p>Depuis septembre 2020 nous avons mis en place le <a href="https://design.numerique.gouv.fr/commando-ux">Commando UX</a> : des designers et développeurs déployés au sein des ministères qui concoivent ces services publics pour les améliorer.</p>
        <p>Enfin, nous participons au développement d’une culture de design d'inclusion au sein de l’État, et à la mise en communauté de compétences de design dans les administrations.</p>
        <p>Le pôle Design des services numériques est rattaché à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a> et placé, par délégation du Premier ministre, sous l’autorité du ministre de la Transformation et de la Fonction publiques <a href="https://twitter.com/StanGuerini" target="_blank" title="Stanislas Guerini - nouvelle fenêtre">Stanislas Guerini</a>.</p>
      </section>

      <section>
        <h2>Notre équipe</h2>
        <ul class="dg-team">
          <li v-for="{ node } in team" :key="node.id" class="dg-team-member">
            <g-image class="dg-team-member__photo" :src="node.photo" :alt="node.firstName+' '+node.lastName" />
            <h3 class="dg-team-member__name fr-h6">{{ node.firstName }} {{ node.lastName }}</h3>
            <p class="dg-team-member__title">{{ node.job_title }}</p>
            <p v-if="node.sub_team_link" class="dg-team-member__team">
              <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
            </p>
            <p v-else-if="node.sub_team" class="dg-team-member__team">{{ node.sub_team }}</p>
            <p v-if="node.twitter" class="dg-team-member__twitter">
              <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>En appui</h2>
        <ul class="dg-team">
          <li v-for="{ node } in obs" :key="node.id" class="dg-team-member">
            <g-image class="dg-team-member__photo" :src="node.photo" :alt="node.firstName+' '+node.lastName" />
            <h3 class="dg-team-member__name fr-h6">{{ node.firstName }} {{ node.lastName }}</h3>
            <p class="dg-team-member__title">{{ node.job_title }}</p>
            <p v-if="node.sub_team_link" class="dg-team-member__team">
              <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
            </p>
            <p v-else-if="node.sub_team" class="dg-team-member__team">{{ node.sub_team }}</p>
            <p v-if="node.twitter" class="dg-team-member__twitter">
              <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
            </p>
          </li>
        </ul>
      </section>


      <section>
        <h2>Les expertes et les experts</h2>
        <ul class="dg-team">
          <li v-for="{ node } in expert" :key="node.id" class="dg-team-member">
            <g-image class="dg-team-member__photo" :src="node.photo" :alt="node.firstName+' '+node.lastName" />
            <h3 class="dg-team-member__name fr-h6">{{ node.firstName }} {{ node.lastName }}</h3>
            <p class="dg-team-member__title">{{ node.job_title }}</p>
            <p v-if="node.sub_team_link" class="dg-team-member__team">
              <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
            </p>
            <p v-else-if="node.sub_team" class="dg-team-member__team">{{ node.sub_team }}</p>
            <p v-if="node.twitter" class="dg-team-member__twitter">
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
    allPeople (filter: { group: { containsAny: ["team", "expert", "obs"] }}, sortBy: "lastName", order: ASC) {
      edges {
        node {
        	id
          firstName
          lastName
          job_title
          sub_team
          sub_team_link
          twitter
          photo (width: 96, height: 96, quality: 100)
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
      title: "Équipe",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
    computed: {
      team: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group.includes('team'))
      },
      external: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group.includes('external'))
      },
      obs: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group.includes('obs'))
      },
      expert: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group.includes('expert'))
      },
    }
  }
</script>
