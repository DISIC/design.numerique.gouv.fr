<template>

  <section>
    <g-link :to="link" >
      <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">

        <g-image :id="imageId" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

        <h2>{{ title }}</h2>

        <p v-html="text"></p>

        <p v-if="buttonActivated" :id="buttonId" class="button blue shadow">
          {{ buttonText }}<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
        </p>
        <p v-else class="disabled">{{ buttonText }}</p>

      </div>
    </g-link>
  </section>
</template>


<script>

import styles from "../assets/scss/_vars.scss";

export default {
  name: "HomeItem",
  props: {
    title: String,
    iconSrc: String,
    iconAlt: String,
    text: String,
    buttonText: String,
    buttonActivated: Boolean,
    link: String,
  },
  data () {
    return {
      imageId: null,
      buttonId: null
    }
  },
  mounted () {
    this.imageId = "image-" + this._uid;
    this.buttonId = "button-" + this._uid;
  },
  methods: {
    getImgUrl (src) {
      return require("../assets/images/" + src)
    },
    mouseEnter () {
      document.getElementById("image-" + this._uid).classList.add("rotate");
      document.getElementById("button-" + this._uid).classList.add("hover");
    },
    mouseLeave () {
      document.getElementById("image-" + this._uid).classList.remove("rotate");
      document.getElementById("button-" + this._uid).classList.remove("hover");
    },
  }
}

</script>


<style lang="scss" scoped>

@import "src/assets/scss/_vars.scss";

section {

  h2 {
    margin: 16px 0 20px 0;
  }

  img {
    transition: .2s all;
  }

  a {
    display: block;
    text-decoration: none;
    color: $black;
  }

  .button {
    margin-top: 8px;
  }

  .disabled {
    font-weight: bold;

    @media only screen and (max-width: $mobileMaxWidth) {
      font-size: 0.875em;
    }
  }
}

</style>
