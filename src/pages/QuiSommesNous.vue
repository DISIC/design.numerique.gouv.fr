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
              <a class="fr-breadcrumb__link" aria-current="page">Qui sommes-nous&nbsp;?</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/recrutement-picto.svg" aria-hidden="true">Qui sommes-nous&nbsp;?</h1>
        <p class="fr-text--lead">La brigade d‘intervention numérique fait partie de la <a href="https://www.numerique.gouv.fr/dinum/" target="_blank" title="direction interministérielle du numérique - Nouvelle fenêtre">direction interministérielle du numérique</a>.</p>
      </div>
    </div>


    <div class="dg-content fr-px-2w">
      <section class="fr-mb-8w">
        <h2>Mission</h2>
        <p>Le numérique, c’est la promesse d’un accès à une multitude d’informations et services pour tous et toutes, partout. Néanmoins, les produits et services numériques sont encore trop souvent conçus sans prendre en compte les personnes qu’ils servent. C’est le cas pour de nombreux services publics numériques.</p>
        <p><strong>Le numérique doit nous permettre d'améliorer la relation entre les usagers et l'administration, à travers des services utiles, utilisables, simples, inclusifs et humains.</strong>. En partenariat avec les ministères, nous travaillons pour qu'un plus grand nombre puissent utiliser ces services en toute autonomie.</p>
        <p>Depuis septembre 2020, nous avons mis en place des <g-link to="/accompagnement/">accompagnements d'experts</g-link> : des designers, chargées de recherche utilisateur, experts en référencement naturel, expertes en accessibilité numérique, designers de contenu, développeuses déployées au sein des administrations qui concoivent ces services publics pour les améliorer.</p>
        <p>Nous participons à la diffusion d’une culture de design inclusif au sein de l’État et à la mise en communauté de compétences de design dans les administrations.</p>
        <p>La brigade d’intervention numérique est rattachée à la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</p>
      </section>

      <section class="fr-mb-8w">
        <h2>Notre équipe</h2>
        <ul class="dg-team">
          <li v-for="{ node } in team" :key="node.id" class="dg-team-member">
            <g-image class="dg-team-member__photo" :src="node.photo" :alt="node.firstName+' '+node.lastName" />
            <h3 class="dg-team-member__name fr-h6 fr-mb-1w">{{ node.firstName }} {{ node.lastName }}</h3>
            <p class="dg-team-member__title">{{ node.job_title }}</p>
            <p v-if="node.sub_team_link" class="dg-team-member__team">
              <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
            </p>
            <p v-else-if="node.sub_team" class="dg-team-member__team">{{ node.sub_team }}</p>
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
      title: "Qui sommes-nous ?",
      meta: [{
          name: 'description',
          content: "La brigade d‘intervention numérique de la direction interministérielle du numérique peut vous aider à améliorer l‘expérience des services publics numériques des citoyens et citoyennes."
        },
        {
          property: 'og:title',
          content: "Qui sommes-nous ? - DesignGouv"
        },
        {
          property: 'og:description',
          content: "La brigade d‘intervention numérique de la direction interministérielle du numérique peut vous aider à améliorer l‘expérience des services publics numériques des citoyens et citoyennes."
        },
        {
          property: 'og:image',
          content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
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
