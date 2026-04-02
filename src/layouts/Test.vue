<template>
  <div>

    <main class="layout" id="main" role="main" tabindex="-1">
			<div class="dg-cover-container fr-container">
        <slot/>
      </div>
    </main>


  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

  export default {
    mounted () {
      let src = "/assets/dsfr/dsfr.module.min.js";
      let dsfr = document.createElement('script');
      dsfr.type = "module";
      dsfr.src = src;
      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }
      document.body.appendChild(dsfr);
    }
  }
</script>
