<template>
  <div class="design-office">

    <div class="design-office__header">
      <p>Le bureau du Design</p>
    </div>
    <div class="design-office__content">

    </div>

  </div>
</template>


<static-query>

</static-query>


<script>

export default {
  name: 'Bureau',
}

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .design-office {
    width: 100%;
    height: 460px;
    background-color: #fff;
    background-image: linear-gradient(45deg, $black 25%, transparent 25%, transparent 75%, $black 75%), linear-gradient(45deg, $black 25%, transparent 25%, transparent 75%, $black 75%);
    background-size: 5px 5px;
    background-position: 0 0, 2.5px 2.5px;
    border-radius: 0.5rem;

    &__header {
      background-color: white;
      border: 0.125rem solid $black;
      border-radius: 0.5rem 0.5rem 0 0;

      p {
        margin: 0;
        padding: 0.25rem 0.5rem 0.25rem 1rem;
        font-weight: bold;
        -webkit-font-smoothing: none;
      }
    }
  }

</style>
