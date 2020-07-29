<template>

    <div class="skip-link">
      <div id="top">
          <ul class="container">
              <li><a href="#main">Aller au contenu</a></li>
              <li><a href="#nav-main">Aller à la navigation</a></li>
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
  background: $light;
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
  }

    a {
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
