
  var Scampi = Scampi || {};

if(document.documentElement.classList.contains('no-js')){
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
}

function skipLinks(){
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

Scampi.skipLinks();
