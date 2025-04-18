<template>
  <Layout>
    <div class="dg-content dg-text-center fr-px-2w fr-pt-4w">
      <h1 class="dg-text-blue fr-display-xs">Merci pour votre inscription !</h1>
      <p class="fr-text--lead fr-mb-3w">
        Vous êtes désormais inscrit(e) à la newsletter DesignGouv.
      </p>
      <g-link to="/" class="fr-btn">Retourner à l'accueil</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Inscription confirmée à la newsletter DesignGouv",
    description:
      "Votre inscription à la newsletter DesignGouv a bien été prise en compte.",
    meta: [
      {
        name: "robots",
        content: "noindex",
      },
    ],
  },
};
</script>
