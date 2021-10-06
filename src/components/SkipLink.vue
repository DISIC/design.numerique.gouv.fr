<template>
<div class="fr-skiplinks">
    <div class="fr-container">
        <ul class="fr-skiplinks__list">
            <li>
                <a class="fr-link" href="#main"  @click.stop>Contenu</a>
            </li>
            <li>
                <a class="fr-link" href="#nav"  @click.stop>Menu</a>
            </li>
        </ul>
    </div>
</div>


</template>
<script>

  export default {
    name: 'Skiplink'
  }
</script>

<style lang="scss" scoped>

  @import "src/assets/scss/_vars.scss";

  .skip-link {
    margin: 0;
    padding:0;
    background: $light-gray;
    color: $blue;

    .container {
      position: relative;
      &.skip-link-focus {
        height: 2em;
      }
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    a {
      padding: 0;
      color: $blue;
      text-decoration: none;
      position: absolute;
      left: -7000px;
      z-index: 1000;
      padding: 0;
      &:focus {
        position: absolute;
        top:0.2em;
        left:0;
      }
    }
  }

</style>
