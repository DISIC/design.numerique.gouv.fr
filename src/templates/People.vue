<template>
  <Layout>
    <div class="dg-content dg-content--sm fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/equipe/" class="fr-breadcrumb__link">Équipe</g-link>
          </li>
          <li>
            <span aria-current="page">{{ $page.people.firstName }} {{ $page.people.lastName }}</span>
          </li>
        </ol>
      </nav>

      <h1 class="dg-text-center">{{ $page.people.firstName }} {{ $page.people.lastName }}</h1>

      <div class="dg-team-member">
        <g-image class="dg-team-member__photo fr-responsive-img" :src="$page.people.photo" alt="" />
        <p class="dg-team-member__title">{{ $page.people.job_title }}</p>
        <p v-if="$page.people.sub_team_link" class="dg-team-member__team" >
         <g-link :to="$page.people.sub_team_link">{{ $page.people.sub_team }}</g-link>
        </p>
        <p v-else-if="$page.people.sub_team" class="dg-team-member__team">{{ $page.people.sub_team }}</p>
        <p v-if="$page.people.twitter" class="dg-team-member__twitter" >
         <g-link :to=" 'https://twitter.com/' + $page.people.twitter">@{{ $page.people.twitter }}</g-link>
        </p>
      </div>

      <section>
        <h2>Biographie</h2>
        <div v-if="$page.people.content == '\n'">Bio à venir.</div>
        <div v-else v-html="$page.people.content" />
      </section>

    </div>
  </Layout>
</template>


<page-query>
  query People ($id: ID!) {
    people: people (id: $id) {
      firstName
      lastName
      photo (width: 96, height: 96, quality: 100)
      content
      job_title
      sub_team
      sub_team_link
      twitter
    }
  }
</page-query>


<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.people.firstName + ' ' + this.$page.people.lastName,
        meta: [
          {
            name: 'description',
            content: 'Biographie de ' + this.$page.people.firstName + ' ' + this.$page.people.lastName + ' sur DesignGouv'
          },
          {
            name: "robots",
            content: this.$page.people.content == "\n" ? "no index" : "index"
          }
        ]
      }
    }
  }
</script>
