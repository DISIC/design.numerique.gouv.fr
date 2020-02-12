<!-- Leaving this here until this is reutilised -->
<template>
  <Layout>
    <Header class="page-header">
      <div v-html="$page.jobtypes.job_type" />
      <h1 v-html="$page.title" />
    </Header>
    <Main>
      <h2>À propos</h2>
      <p v-html="$page.about" />

      <h2>Descriptif du poste</h2>
      <p v-html="$page.role" />

      <h2>Profil recherché</h2>
      <p v-html="$page.requirements" />

      <h2>Détails pratiques</h2>
      <p v-html="$page.details" />

      <h2>Pour candidater</h2>
      <p v-html="$page.apply" />

    </Main>
  </Layout>
</template>
