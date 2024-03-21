<template>
  <Layout class="roles-cles-page">
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <g-link to="/articles/" class="fr-breadcrumb__link">Articles</g-link>
            </li>
            <li>
              <span aria-current="page">{{ $page.expert.firstName }} {{$page.expert.lastName }}</span>
            </li>
          </ol>
        </nav>
        <div class="dg-cover__title fr-grid-row">
          <div class="fr-col-sm-3">
            <g-image
            class="dg-picto fr-mr-2w"
            :src="$page.expert.photo"
            alt=""
            style="width:8em; height:8em"
          />
          </div>
          <div class="fr-col">
            <h1>{{ $page.expert.firstName }} {{$page.expert.lastName }}</h1>
           
            <p class="fr-text--lead"><span v-html="$page.expert.job" /><br /><span v-html="$page.expert.company" /><br />

            <!--g-link :href="$page.expert.rs" class="fr-link fr-text--xs" target="_blank"  title="LinkedIn - nouvelle fenêtre" >LinkedIn {{ $page.expert.firstName }} {{$page.expert.lastName }}</g-link-->
             </p>
          </div>
        </div>
      </div>
    </section>
    <div class="dg-content fr-px-2w">
      <section>
        <div v-html="$page.expert.content" />
      </section>
      <a href="/articles/2024-04-15-nos-experts-ont-la-parole/" class="fr-mt-6w fr-link fr-icon-arrow-left-line fr-link--icon-left">Retour à l’article</a>
    </div>
  </Layout>
</template>

<page-query>
  query Expert ($id: ID!) {
    expert: expert (id: $id) {
        	id
          firstName
          lastName
          job
          rs
          company
          photo
          content
    }
  }
</page-query>


<script>
  export default {
    metaInfo () {
      return {
        title: "Entretien avec " + this.$page.expert.firstName + " " + this.$page.expert.lastName,
        meta: [{
          name: "description",
          content: this.$page.expert.firstName + " " + this.$page.expert.lastName + " (" + this.$page.expert.job + " / " + this.$page.expert.company + ") - DesignGouv"
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        },      {
          property: "og:title",
          content: "Entretien avec " + this.$page.expert.firstName + " " + this.$page.expert.lastName + " - DesignGouv"
        },
        {
          property: "og:description",
          content: "Entretien avec " + this.$page.expert.firstName + " " + this.$page.expert.lastName + " (" + this.$page.expert.job + " / " + this.$page.expert.company + ") - DesignGouv"
        }],
      }
    }
  }
</script>
