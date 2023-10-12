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
              <span aria-current="page">{{ $page.entretien.firstName }} {{$page.entretien.lastName }}</span>
            </li>
          </ol>
        </nav>
        <div class="dg-cover__title fr-grid-row">
          <div class="fr-col-sm-2">
            <g-image
            class="dg-picto fr-mr-2w"
            :src="$page.entretien.photo"
            alt=""
            style="width:6em; height:6em"
          />
          </div>
          <div class="fr-col">
            <h1>Entretien avec {{ $page.entretien.firstName }} {{$page.entretien.lastName }}</h1>
            <p class="fr-text--lead"><span v-html="$page.entretien.job" /><br /><span v-html="$page.entretien.company" /></p>
          </div>
        </div>
      </div>
    </section>
    <div class="dg-content fr-px-2w">
      <section>
        <div v-html="$page.entretien.content" />
      </section>
      <a href="/articles/2023-10-19-paroles-de-responsables-du-design/" class="fr-mt-6w fr-link fr-icon-arrow-left-line fr-link--icon-left">Retour à l’article</a>
    </div>
  </Layout>
</template>

<page-query>
  query Entretien ($id: ID!) {
    entretien: entretien (id: $id) {
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
        title: "Entretien avec " + this.$page.entretien.firstName + " " + this.$page.entretien.lastName,
        meta: [{
          name: "description",
          content: this.$page.entretien.firstName + " " + this.$page.entretien.lastName + " (" + this.$page.entretien.job + " / " + this.$page.entretien.company + ") - DesignGouv"
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        },      {
          property: "og:title",
          content: "Entretien avec " + this.$page.entretien.firstName + " " + this.$page.entretien.lastName + " - DesignGouv"
        },
        {
          property: "og:description",
          content: "Entretien avec " + this.$page.entretien.firstName + " " + this.$page.entretien.lastName + " (" + this.$page.entretien.job + " / " + this.$page.entretien.company + ") - DesignGouv"
        }],
      }
    }
  }
</script>
