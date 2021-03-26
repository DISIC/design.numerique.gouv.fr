<template>
  <div>

    <main class="layout" id="main" role="main">
      <slot/>
    </main>


  </div>
</template>

<static-query>

</static-query>

<script>

  export default {
    mounted () {
      let src = "/assets/js/all.min.js"

      let dsfr = document.createElement('script');
      dsfr.type = "text/javascript";
      dsfr.src = src;

      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }

      document.body.appendChild(dsfr);
    }
  }
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  @font-face {
    font-family: "Marianne";
    font-style: normal;
    font-weight: 800;
    src: url("../assets/fonts/Marianne-ExtraBold.woff") format("woff2"),
         url("../assets/fonts/Marianne-ExtraBold.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Inter-Regular-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Regular-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    src: url("../assets/fonts/Inter-Italic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Italic-Reduced.woff2") format("woff");
    font-display: fallback;
  }
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/Inter-Medium-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Medium-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    src: url("../assets/fonts/Inter-MediumItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-MediumItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/Inter-Bold-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-Bold-Reduced.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    src: url("../assets/fonts/Inter-BoldItalic-Reduced.woff") format("woff2"),
         url("../assets/fonts/Inter-BoldItalic-Reduced.woff2") format("woff");
    font-display: fallback;
  }

</style>
