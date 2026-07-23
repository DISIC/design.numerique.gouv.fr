<template>
  <Layout>
    <div class="dg-content dg-text-start fr-px-2w fr-pt-4w">
      <h1 class="dg-text-blue fr-display-xs">Merci pour votre message</h1>
      <p>
        Vous recevrez un mail de confirmation d'ici quelques minutes. Nous vous
        répondrons rapidement.
      </p>
      <g-link to="/" class="fr-btn">Revenir à l'accueil</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Merci pour votre message",
    meta: [
      {
        name: "robots",
        content: "noindex",
      },
    ],
  },
};
</script>
