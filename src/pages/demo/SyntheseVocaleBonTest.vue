<template>
  <Layout>
    <div class="dg-content fr-px-2w fr-pt-4w">
      <h1>Synthèse vocale – Bon formulaire</h1>
      <p
        >Cette page a été créée dans le but de comprendre comment fonctionne la
        navigation au clavier à l'aide de la synthèse vocale.
      </p>
      <p>Consignes :</p>
      <ol>
        <li
          >Cliquez par ici (au-dessus du bloc noir ci-après) et appuyez sur la
          touche Tab pour parcourir les champs du formulaire</li
        >
        <li
          >Laissez-vous guider par la synthèse vocale pour remplir les
          champs</li
        >
      </ol>

      <section class="fixed-width">
        <form id="form-test">
          <p id="message"></p>
          <div id="screencurtain" class="screencurtain"></div>
          <fieldset id="identite">
            <legend class="fr-fieldset__legend fr-text--regular"
              >Identité</legend
            >
            <label class="fr-label" for="prenom">Prénom</label>
            <input class="fr-input" type="text" id="prenom" name="prenom" />
            <label class="fr-label" for="nom">Nom</label>
            <input class="fr-input" type="text" id="nom" name="nom" />
          </fieldset>
        </form>
      </section>
      <p class="fr-mt-4w fr-mb-1w"
        >Vous pouvez enlever / remettre le rideau noir à l'aide de cette case à
        cocher :
      </p>
      <div class="fr-checkbox-group fr-mt-1w">
        <input type="checkbox" id="rideau" name="rideau" checked />
        <label class="fr-label" for="rideau">Rideau noir</label>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Synthèse vocale',
    description: 'Cette page web simule l’utilisation d’une synthèse vocale.',
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
  mounted() {
    // Everything happens under "identite" element
    const identiteEl = document.querySelector('#identite');
    const synth = window.speechSynthesis;
    const msgEl = document.getElementById('message');
    const rideau = document.querySelector('#rideau');
    const screencurtain = document.querySelector('#screencurtain');

    identiteEl.addEventListener('focusin', function (e) {
      const curEl = e.target;
      const val = curEl.value;

      let msg = curEl.previousElementSibling.textContent;
      msg = 'Champ ' + msg + ', ';
      if (val == '') {
        msg += 'vide';
      } else {
        msg += val;
      }
      return voPlay(msg);
    });

    identiteEl.addEventListener('focusout', voStop);

    /**
     * VoiceOver Play (voice + text message)
     *
     * @param (string) message The message to play
     */
    function voPlay(message) {
      speak(message);
      msgEl.innerHTML = message;
    }

    /**
     * VoiceOver Stop (stops voice + clear message)
     */
    function voStop() {
      synth.cancel();
      msgEl.innerHTML = '';
    }

    /**
     * Speaks the given message
     *
     * @param (string) message The message to be spoken
     */
    function speak(message) {
      if (!'speechSynthesis' in window) {
        msgEl.innerHTML =
          'Malheureusement votre navigateur ne vous permet pas de tester ce formulaire correctement.';
        return;
      }
      if (message !== '') {
        const utter = new SpeechSynthesisUtterance(message);
        utter.lang = 'fr-FR';
        utter.onerror = function (event) {
          console.error('SpeechSynthesisUtterance.onerror');
        };
        //utter.pitch = 1;
        utter.rate = 2;
        synth.speak(utter);
      }
    }

    document.addEventListener(
      'keyup',
      (event) => {
        var name = event.key;
        if (
          (event.keyCode >= 48 && event.keyCode <= 57) ||
          (event.keyCode >= 65 && event.keyCode <= 90)
        ) {
          voPlay(event.key);
        }
      },
      false
    );

    rideau.addEventListener('change', function (e) {
      if (e.target.checked) {
        screencurtain.className = 'screencurtain';
      } else {
        screencurtain.className = '';
      }
    });
  },
};
</script>

<style scoped lang="scss">
#form-test {
  position: relative;
}
.screencurtain {
  background-color: black;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
