<template>
  <Layout>

    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <a aria-current="page" class="fr-breadcrumb__link">Design numérique</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title"><img class="dg-picto fr-mr-2w" svg-inline src="../assets/images/design-picto.svg" aria-hidden="true">Design numérique</h1>
        <p class="fr-text--lead">Le design permet de rendre les services numériques plus
          simples, accessibles et agréables pour tous. Concevoir par le design, c’est
          mettre en œuvre des solutions centrées sur les usagers, tout en s’appuyant
          sur de bonnes pratiques reconnues.</p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <p>Bientôt disponible.</p>
    </section>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Design numérique",
      meta: [
        { name: "description", content: "Cet espace est dédié aux agents publics soucieux de créer des services numériques accessibles pour tous." }
      ],
    }
  }

</script>
