<template>
  <Layout>
    <Header class="page-header">
      <div v-html="$page.strapiJobs.jobtypes.job_type" />
      <h1 v-html="$page.strapiJobs.title" />
    </Header>
    <Main>
      <h2>À propos</h2>
      <p v-html="$page.strapiJobs.about" />

      <h2>Descriptif du poste</h2>
      <p v-html="$page.strapiJobs.role" />

      <h2>Profil recherché</h2>
      <p v-html="$page.strapiJobs.requirements" />

      <h2>Détails pratiques</h2>
      <p v-html="$page.strapiJobs.details" />

      <h2>Pour candidater</h2>
      <p v-html="$page.strapiJobs.apply" />

    </Main>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  strapiJobs(id: $id) {
    title
    about
    role
    requirements
    details
    apply
    jobtypes {
      job_type
    }
  }
}
</page-query>
