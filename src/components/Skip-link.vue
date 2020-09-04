<template>

    <div class="skip-link">
      <div id="top">
          <ul class="container">
              <li><a href="#main">Aller au contenu</a></li>
              <li><a href="#menu-button">Aller au menu</a></li>
          </ul>
      </div>
    </div>

</template>
<script>

  export default {
    name: 'SkipLink',
    methods: {
      SkipLink: function() {
        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        var closest = Element.prototype.closest;

        if (!closest) {
          closest = function(s) {
            var el = this;
            do {
              if (matches.call(el, s)) return el;
              el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
          };
        }

        function toggleSkipLinks(evt){
          var link = closest.call(evt.target, ".skip-link a");
          if(!link) {
            return;
          }
          var container = closest.call(link, '.container');
          if(event.type === 'focus'){
            container.classList.add('skip-link-focus');
          }
          else {
            container.classList.remove('skip-link-focus');
          }
        }
        document.body.addEventListener("focus", toggleSkipLinks, true);
        document.body.addEventListener("blur", toggleSkipLinks, true);    
      }
    }
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
