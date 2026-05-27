<template>
  <Layout>
    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page">Contact</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Contact</h1>
        <p class="fr-text--lead">
          Envoyez nous un message, nous vous répondrons rapidement.
        </p>
      </div>
    </div>

    <div class="dg-content fr-px-0 fr-px-md-2w">
      <div class="dg-content dg-content--xs fr-mt-6w">
        <form class="form" v-on:submit.prevent="sendMessage">
          <div class="form__trap" aria-hidden="true">
            <label for="website">Ne pas remplir ce champ</label>
            <input
              type="text"
              id="website"
              name="website"
              v-model="honeypot"
              autocomplete="off"
              tabindex="-1"
            />
          </div>
          <p>
            <small>Tous les champs sont obligatoires.</small>
          </p>
          <div class="fr-input-group">
            <label class="fr-label" for="email">
              Votre adresse e-mail
              <span class="fr-hint-text">Format attendu : prenom@mail.fr</span>
            </label>
            <input
              class="fr-input"
              type="email"
              id="email"
              v-model="form.mail"
              required
            />
          </div>
          <div class="fr-input-group">
            <label class="fr-label" for="message"> Votre message </label>
            <textarea
              class="fr-input"
              id="message"
              v-model="form.message"
              maxlength="5000"
              required
            ></textarea>
          </div>
          <p>
            <small>
              Nous utiliserons les informations recueillies ci-dessus pour vous
              contacter afin de répondre à votre message. <br /><br />
              Conformément à la règlementation, vous disposez d'un droit
              d'opposition et d'un droit à la limitation du traitement de
              données vous concernant, ainsi que d'un droit d'accès, de
              rectification, de portabilité et d'effacement de vos données. Vous
              pouvez exercer vos droits en nous écrivant à
              contact@design.numerique.gouv.fr.
            </small>
          </p>
          <div
            v-if="error"
            class="fr-alert fr-alert--error fr-mb-2w"
            role="alert"
          >
            <p>
              Un problème est survenu lors de l'envoi de votre message. Veuillez
              réessayer ultérieurement.
            </p>
          </div>
          <button class="fr-btn" type="submit" :disabled="submitting">
            Envoyer votre message
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import * as Sentry from "@sentry/browser";
import axios from "axios";

export default {
  metaInfo: {
    title: "Contact",
    meta: [
      {
        name: "description",
        content:
          "Rester en contact avec l’équipe de Design des services numériques.",
      },
      {
        property: "og:title",
        content: "Contacter DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Rester en contact avec l’équipe de Design des services numériques.",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
  data() {
    return {
      form: {
        mail: "",
        message: "",
      },
      honeypot: "",
      error: false,
      submitting: false,
    };
  },
  methods: {
    async sendMessage() {
      if (this.honeypot !== "") {
        this.$router.push("/contact/succes/");
        return;
      }

      this.submitting = true;
      this.error = false;

      const sanitizedMessage = this.form.message
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/’/g, "&#039;");

      const targetUrl = `${process.env.GRIDSOME_GRIST_URL}/api/docs/${process.env.GRIDSOME_GRIST_REQUESTS_DOC_ID}/tables/Contact/records`;

      try {
        await axios({
          method: "post",
          url: `${process.env.GRIDSOME_GRIST_PHP_PROXY}/grist-proxy.php?url=${encodeURIComponent(targetUrl)}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            records: [
              {
                fields: {
                  mail: this.form.mail,
                  message: sanitizedMessage,
                },
              },
            ],
          },
        });

        this.$router.push("/contact/succes/");
      } catch (err) {
        Sentry.captureException(err);
        this.error = true;
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
.form__trap {
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  overflow: hidden;
}
</style>
