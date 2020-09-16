<template>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page" >page courante</span> <!--v-html="$page.challenge.title" /-->
        </li>
      </ol>
    </nav>

</template>


<script>

  export default {
    name: 'Breadcrumb'
  }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .breadcrumb  {

    background-color: $light;
  }

</style>
