<template>
  <Layout>
    <div class="dg-cover dg-cover--linear fr-mb-6w">
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
              <a class="fr-breadcrumb__link" aria-current="page">Contact</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Contact</h1>
        <p class="fr-text--lead">
          Envoyez nous un message, nous vous répondrons rapidement.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
    meta: [
      {
        name: "description",
        content:
          "Rester en contact avec l’équipe de Design des services numériques.",
      },
      {
        property: "og:title",
        content: "Contacter DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Rester en contact avec l’équipe de Design des services numériques.",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>
