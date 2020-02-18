<template>

  <div class="homeItem" :style="colors">

    <g-image class="icon" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

    <p><g-link :to="link"><h2>{{ title }}</h2></g-link></p>

    <p class="homeItemText" v-html="text"></p>

    <g-link :to="link" class="button">{{ buttonText }}</g-link>

  </div>

</template>


<script>

export default {
  name: 'HomeItem',
  props: {
    title: String,
    iconSrc: String,
    iconAlt: String,
    text: String,
    buttonText: String,
    link: String,
    color: String,
    colorLight: String,
  },
  data () {
    return {
    }
  },
  methods: {
    getImgUrl (src) {
      return require('../assets/images/' + src)
    }
  },
  computed: {
    colors () {
      return {
        '--color': this.color,
        '--colorLight': this.colorLight
      }
    }
  }
}

</script>


<style lang="scss" scoped>

@import "src/assets/scss/_vars.scss";

.homeItem {
  margin: 48px 0 108px 0;

  @media only screen and (max-width: $mobileMaxWidth) {
    margin: 28px 0 68px;

    p {
      margin: 12px 0;
    }
  }

  h2 {
    box-shadow:
      inset 0 -0.05em white,
      inset 0 -0.4em var(--colorLight);
    display: inline;
    transition: .1s all;

    &:hover {
      box-shadow:
        inset 0 -0.05em white,
        inset 0 -1.4em var(--colorLight);
    }
  }

  a {
    text-decoration: none;
    color: var(--color);
  }

  .homeItemText {
    margin-top: 24px;
  }

  .button {
    color: var(--color);
    border: 2px solid var(--color);
    background-color: white;
    border-radius: 32px;
    padding: 8px 24px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;

    @media only screen and (max-width: $mobileMaxWidth) {
      font-size: 0.875em;
    }

    &:hover, &:focus {
      background: var(--color);
      color: white;
    }
  }
}

</style>
