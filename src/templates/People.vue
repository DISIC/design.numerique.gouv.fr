<template>
  <Layout class="people-page">

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

    <div class="cover">
     <div class="cover__container">
       <p class="cover__subhead">Notre équipe</p>
       <h1>{{ $page.people.firstName }} {{ $page.people.lastName }}</h1>
       <g-image class="cover__image" :src="$page.people.photo" alt="" />
       <p>{{ $page.people.job_title }}</p>
       <p v-if="$page.people.sub_team_link">
         <g-link :to="$page.people.sub_team_link">{{ $page.people.sub_team }}</g-link>
       </p>
       <p v-else-if="$page.people.sub_team">{{ $page.people.sub_team }}</p>
       <p v-if="$page.people.twitter">
         <g-link :to=" 'https://twitter.com/' + $page.people.twitter">@{{ $page.people.twitter }}</g-link>
       </p>
     </div>
   </div>

   <section class="content">
     <h2>
       <CommandoUX class="h2__icon" focusable="false" aria-hidden="true"/>Biographie
     </h2>
     <div v-if="$page.people.content == '\n'">Bio à venir.</div>
     <div v-else v-html="$page.people.content" />
   </section>

  </Layout>
</template>


<script>

  import CommandoUX from "~/assets/images/accompagnement.svg";

  export default {
    components: {
      CommandoUX,
    },
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


<page-query>

  query People ($id: ID!) {
    people: people (id: $id) {
      firstName
      lastName
      photo (width: 300, height: 300, quality: 100)
      content
      job_title
      sub_team
      sub_team_link
      twitter
    }
  }

</page-query>

