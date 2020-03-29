<template>

  <section v-if="buttonActivated">
    <g-link :to="link" >
      <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">

        <g-image :id="imageId" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

        <h2>{{ title }}</h2>

        <p v-html="text"></p>

        <p :id="buttonId" class="button button-blue">
          {{ buttonText }}<font-awesome class="icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
        </p>

      </div>
    </g-link>
  </section>

  <section v-else>
    <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">

      <g-image :id="imageId" :alt="iconAlt" :src="getImgUrl(iconSrc)"/>

      <h2>{{ title }}</h2>

      <p class="text" v-html="text"></p>

      <p class="button-disabled">{{ buttonText }}</p>

    </div>
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
      //document.getElementById("title-" + this._uid).style.color = styles.blue;
      document.getElementById("image-" + this._uid).classList.add("rotate-in");
      document.getElementById("image-" + this._uid).classList.remove("rotate-out");

      document.getElementById("button-" + this._uid).classList.add("hover");
    },
    mouseLeave () {
      //document.getElementById("title-" + this._uid).style.color = styles.black;
      document.getElementById("image-" + this._uid).classList.add("rotate-out");
      document.getElementById("image-" + this._uid).classList.remove("rotate-in");

      document.getElementById("button-" + this._uid).classList.remove("hover");
    },
  }
}

</script>


<style lang="scss" scoped>

@import "src/assets/scss/_vars.scss";

section {

  //border-top: 2px solid $black;
  padding: 16px 40px;
  margin: 0;
  margin-top: 64px;

  @media only screen and (max-width: $mobileMaxWidth) {
    margin: 0 auto 64px auto;
  }

  h2 {
    margin: 16px 0 20px 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: $dark;
  }

  .button {
    display: inline-block;
    margin-top: 8px;
    box-shadow: 5px 5px 0px $light;
  }

  .button-disabled {
    font-weight: bold;

    @media only screen and (max-width: $mobileMaxWidth) {
      font-size: 0.875em;
    }
  }

  .rotate-in
  {
    -webkit-transform: rotate(180deg);
    -webkit-transition: -webkit-transform 0.2s;
  }
  .rotate-out
  {
    -webkit-transform: rotate(0deg);
    -webkit-transition: -webkit-transform 0.2s;
  }
}

</style>
