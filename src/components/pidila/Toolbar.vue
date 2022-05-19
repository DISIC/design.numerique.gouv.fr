<template>
  <div>
    <ul class="fr-btns-group fr-btns-group--inline">
      <li>
        <button
          class="fr-btn fr-btn--tertiary"
          type="button"
          @click="copyLink"
          @blur="hideClipboardAlert"
        >
          Copier la liste dans le presse-papier
        </button>
      </li>
      <li>
        <button
          ref="printButton"
          class="fr-btn fr-btn--tertiary"
          type="button"
          @click="printList"
        >
          Imprimer la liste
        </button>
      </li>
    </ul>

    <!-- Clipboard alert -->
    <div role="alert" aria-live="polite">
      <div
        v-if="showClipboardAlert"
        class="fr-alert fr-alert--success fr-alert--sm fr-mb-1w"
      >
        <p>Le lien vers la liste a bien été copié dans le presse-papier.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      showClipboardAlert: false,
    };
  },
  methods: {
    copyLink() {
      const link = window.location.href;

      navigator.clipboard
        .writeText(link)
        .then(() => {
          this.showClipboardAlert = true;
        })
        .catch((err) => {
          console.error(`Error copying link to the clipboard: ${err}.`);
        });
    },
    printList() {
      window.print();
    },
    hideClipboardAlert() {
      this.showClipboardAlert = false;
    },
  },
};
</script>