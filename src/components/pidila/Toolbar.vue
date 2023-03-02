<template>
  <div>
    <ul class="fr-btns-group fr-btns-group--inline">
      <li>
        <button
          class="fr-btn fr-btn--tertiary-no-outline fr-icon-link"
          type="button"
          title="Copier la liste dans le presse-papier"
          @click="copyLink"
          @blur="hideClipboardAlert"
        >
          Copier la liste dans le presse-papier
        </button>
      </li>
      <li>
        <button
          ref="printButton"
          class="fr-btn fr-btn--tertiary-no-outline fr-icon-printer-fill"
          type="button"
          title="Imprimer la liste"
          @click="printList"
        >
          Imprimer la liste
        </button>
      </li>
      <!-- <li>
        <button
          class="fr-btn fr-btn--tertiary-no-outline fr-icon-arrow-down-s-fill"
          type="button"
          title="Ouvrir toute la liste"
          disabled
          @click="discloseAll"
        >
          Ouvrir toute la liste
        </button>
      </li>
      <li>
        <button
          class="fr-btn fr-btn--tertiary-no-outline fr-icon-arrow-up-s-fill"
          type="button"
          title="Fermer toute la liste"
          disabled
          @click="concealAll"
        >
          Fermer toute la liste
        </button>
      </li> -->
    </ul>

    <!-- Clipboard alert -->
    <div role="alert" aria-live="polite">
      <div
        v-if="showClipboardAlert"
        class="fr-alert fr-alert--success fr-alert--sm fr-mb-2w"
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
    discloseAll() {
      this.$emit("disclose-all");
    },
    concealAll() {
      this.$emit("conceal-all");
    },
    hideClipboardAlert() {
      this.showClipboardAlert = false;
    },
  },
};
</script>
