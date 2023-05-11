<template>
  <Layout>

    <div class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a aria-current="page" class="fr-breadcrumb__link">Contact</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Contact</h1>
        <p class="fr-text--lead">Vous pouvez nous contacter en utilisant l’adresse électronique <strong>contact@design.numerique.gouv.fr</strong>.</p>
      </div>
    </div>

    <div class="dg-content fr-px-2w">
      <section>
        <p>Vous pouvez également nous suivre sur les réseaux sociaux suivants :</p>
        <ul>
          <li><a href="https://twitter.com/design_gouv/" title="Twitter - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Twitter <span class="fr-fi-twitter-fill" aria-hidden="true"></span>
                </a></li>
          <li><a href="https://www.instagram.com/design_gouv/" title="Instagram - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Instagram <span class="fr-fi-instagram-fill" aria-hidden="true"></span>
                </a></li>
              <li><a href="https://www.youtube.com/c/DesignGouv" title="Youtube - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Youtube <font-awesome  width="0" :icon="['fab', 'youtube']"/>
                </a></li>
          <li><a href="https://www.linkedin.com/company/designgouv" title="Linkedin - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Linkedin <span class="fr-fi-linkedin-box-fill" aria-hidden="true"></span>
                </a></li>
        </ul>
      </section>
    </div>

  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Contact",
      meta: [{
        name: 'description',
        content: "Rester en contact avec l’équipe de Design des services numériques."
      },
      {
        property: 'og:title',
        content: "Contacter DesignGouv"
      },
      {
        property: 'og:description',
        content: "Rester en contact avec l’équipe de Design des services numériques."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
