<template>

  <div v-if="buttonActivated" class="homeItem" :style="colors">

    <g-image class="icon" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

    <h2><g-link :to="link">{{ title }}</g-link></h2>

    <p class="homeItemText" v-html="text"></p>

    <g-link :to="link" class="button">
      {{ buttonText }}
      <span class='arrow'>→</span>
    </g-link>

  </div>
  <div v-else class="homeItem disabled" :style="colors">

    <g-image class="icon" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

    <h2>{{ title }}</h2>

    <p class="homeItemText" v-html="text"></p>

    <p class="buttonDisabled">{{ buttonText }}</p>

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
    buttonActivated: Boolean,
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

.disabled {

  .icon {
    display: block;
    padding-bottom: 24px;
  }

  h2 {
    box-shadow:
      inset 0 -0.05em white,
      inset 0 -0.4em var(--colorLight);
    display: inline;
    transition: .1s all;
  }
}

.homeItem {
  margin: 48px 0 108px 0;

  @media only screen and (max-width: $mobileMaxWidth) {
    margin: 28px 0 68px;

    p {
      margin: 12px 0;
    }
  }

  h2 {
    a {
      text-decoration: none;
      color: $dark;
      box-shadow:
        inset 0 -0.05em white,
        inset 0 -0.4em var(--colorLight);
      display: inline;
      transition: .1s all;
    }

    a:hover {
      box-shadow:
        inset 0 -0.05em white,
        inset 0 -1.4em var(--colorLight);
    }
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

  .buttonDisabled {
    color: $gray;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin: 10px 0;

    @media only screen and (max-width: $mobileMaxWidth) {
      font-size: 0.875em;
    }
  }
}

</style>
