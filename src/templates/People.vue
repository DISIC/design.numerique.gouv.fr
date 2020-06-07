<template>
  <Layout>
    <div class="cover">
     <div class="container">
       <p class="subhead">Notre équipe</p>
       <h1>{{ $page.people.first_name }} {{ $page.people.last_name }}</h1>
       <!-- <g-image :src="$page.people.photo" /> -->
     </div>
   </div>

   <div class="content">
      <div v-html="$page.people.content" />
   </div>

  </Layout>
</template>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.people.title,
      meta: [
        {
          name: 'description',
          content: this.$page.people.description
        }
      ]
    }
  }
}
</script>

<page-query>
query People ($id: ID!) {
  people: people (id: $id) {
    first_name
    last_name
    photo (width: 300, height: 300, quality: 100)
    content
  }
}
</page-query>

<style lang="scss">
</style>
