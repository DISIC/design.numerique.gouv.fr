<template>
  <Layout class="contact-page">

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Contact</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container cover__container--light">
        <h1>Contact</h1>
      </div>
    </div>

    <div class="content">
      <section>
        <p>Vous pouvez nous contacter en utilisant l’adresse électronique <strong>contact@design.numerique.gouv.fr</strong>.</p>
        <p>Vous pouvez également nous suivre sur les réseaux sociaux suivants :</p>
        <ul>
              <li><a href="https://twitter.com/design_gouv/" title="Twitter - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Twitter <font-awesome  width="0" :icon="['fab', 'twitter']"/>
                </a></li>
              <li><a href="https://www.instagram.com/design_gouv/" title="Instagram - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Instagram <font-awesome  width="0" :icon="['fab', 'instagram']"/>
                </a></li>
              <li><a href="https://www.youtube.com/c/DesignGouv" title="Youtube - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Youtube <font-awesome  width="0" :icon="['fab', 'youtube']"/>
                </a></li>
              <li><a href="https://www.linkedin.com/company/designgouv" title="Linkedin - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Linkedin <font-awesome  width="0" :icon="['fab', 'linkedin']"/>
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
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>
