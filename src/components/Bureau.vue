<template>
  <div class="design-office">

    <div class="design-office__header">
      <h2><Design class="design-office__title-icon" focusable="false" aria-hidden="true"/>Le bureau du Design</h2>
      <p class="design-office__date" v-html="(new Date()).toLocaleDateString('fr-FR', {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}).replace(' à ', ' ')"></p>
    </div>
    <div class="design-office__content">
      <div class="design-office__top">
        <div class="">
          <h3><File class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Lisez-moi</span></h3>
        </div>
        <div class="">
          <h3><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Actualité</span></h3>
        </div>
      </div>
      <div class="design-office__middle">
        <div class="">
          <h3><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Avant</span></h3>
          <h3><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Pendant</span></h3>
          <h3><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Après</span></h3>
        </div>
      </div>
      <div class="design-office__bottom">
        <div class="">
          <h3><g-image src="~/assets/images/bureau/photo.png" class="design-office__element-icon" width="64px" alt="Emmanuel Macron souriant"/> <span>Image.bmp</span></h3>
        </div>
        <div class="">
          <h3><Slack class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Slack</span></h3>
          <h3><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Accompagnement</span></h3>
        </div>
      </div>
    </div>

  </div>
</template>


<static-query>

</static-query>


<script>

  import Design from "~/assets/images/design.svg"
  import Folder from "~/assets/images/bureau/folder.svg"
  import File from "~/assets/images/bureau/file.svg"
  import Slack from "~/assets/images/bureau/slack.svg"

  export default {
    name: 'Bureau',
    components: {
      Design,
      Folder,
      File,
      Slack
    },
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .design-office {
    width: 100%;
    background-color: $light-gray;
    border: 0.125rem solid $gray;
    border-radius: 0.5rem;

    &__header {
      background-color: white;
      border-bottom: 0.125rem solid $gray;
      border-radius: 0.5rem 0.5rem 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    &__title-icon {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
      margin-bottom: -0.25rem;
    }

    &__date {
      margin: 0 0.75rem;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      color: $dark-gray;
      font-size: 0.875rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 26rem;
    }

    &__top, &__middle, &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: row;
        align-items: flex-end;;

        h3 {
          margin: 1rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            font-size: 0.875rem;
            margin-top: 0.25rem;
            padding: 0.125rem 0.5rem;
            background-color: white;
            font-weight: bold;
          }
        }
      }
    }

    &__middle {
      div {
        margin: 0 auto;
      }
    }

    &__element-icon {
      display: block;
    }
  }

</style>
