<template>

  <div class="card" style="--color: #168376; --colorLight: #3CDDCA;">
    <g-image class="icon" alt="Tchat icon" src="~/assets/images/community.svg"/>

    <p><a href="http://eepurl.com/gLJCsb" target="_blank" class="title">Rejoignez la communauté&nbsp;!</a></p>

    <p class="description">DesignGouv, c’est aussi une communauté pour faire vivre la culture design au sein des administrations. Nous organisons régulièrement des événements, des rencontres et des discussions. Rejoignez-nous&nbsp;!</p>

    <a href="http://eepurl.com/gLJCsb" target="_blank" class="button">Je m'inscris à la newsletter</a>

    <p>Sur Twitter : <a href="https://twitter.com/design_gouv_num" title="Twitter" target="_blank">@Design_Gouv_Num</a></p>
  </div>

</template>


<script>

export default {
  name: 'Newsletter'
}

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .card {
    margin: 80px 0;
    text-align: center;
    padding: 32px 32px 24px 32px;
    background: #FFFFFF;
    box-shadow: 0 0 32px -8px #C9D3DF;
    border-radius: 32px;

    @media only screen and (max-width: $mobileMaxWidth) {
      padding: 24px 8px 16px 8px;
    }

    p {
      margin: 8px;
    }

    a {
      color: var(--color);
    }

    .title {
      color: $dark;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      line-height: 1.2em;
      font-size: 2em;
      font-weight: 700;
      text-decoration: none;
      box-shadow:
        inset 0 -0.05em white,
        inset 0 -0.4em var(--colorLight);
      display: inline;
      transition: .1s all;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 1.75em;
      }

      &:hover, &:focus {
        box-shadow:
          inset 0 -0.05em white,
          inset 0 -1.4em var(--colorLight);
      }
    }

    .description {
      margin-top: 24px;
    }

    .button {
      text-decoration: none;
      color: white;
      border: 2px solid var(--color);
      background-color: var(--color);
      border-radius: 32px;
      padding: 8px 24px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;

      @media only screen and (max-width: $mobileMaxWidth) {
        font-size: 0.875em;
      }

      &:hover {
        background: white;
        color: var(--color);
      }
    }
  }

</style>
