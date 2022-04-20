<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
          </li>
          <li>
            <span aria-current="page">RGAA</span>
          </li>
        </ol>
      </nav>

      <h1>Le Référentiel général d’amélioration de l’accessibilité (RGAA)</h1>

      <section>
        <h2>À quoi ça sert ?</h2>
        <p>
          Le RGAA permet de contrôler l’accessibilité d’un site et de ses contenus suivant les normes internationales de l’accessibilité numérique connues sous l’appellation de <a href="https://www.w3.org/TR/WCAG21/" title="WCAG - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener"><abbr lang="en" title="web content accessibilty guidelines">WCAG</abbr></a>. <strong>En France, le taux d’accessibilité d’un site est calculé en l’auditant au regard des critères du RGAA.</strong>
        </p>
        <p>
          Le RGAA définit une méthode technique et propose un cadre opérationnel de vérification de la conformité aux exigences d’accessibilité. Elle comporte 106 critères de contrôle RGAA incluant une moyenne de 2,5 tests par critères. Certains tests font référence à des techniques d'implémentation (HTML, CSS, JavaScript...) pour vérifier que le critère est respecté afin de réduire la marge d’interprétation quant au respect des normes d’accessibilité.
        </p>

        <p>
          <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/#contenu" title="Consulter les critères du RGAA - Nouvelle fenêtre" target="_blank" class="fr-btn">
            Consulter les critères du RGAA
          </a>
        </p>

      </section>

      <section>
        <h2>La 4<sup>e</sup> version du RGAA</h2>
        <p>La version en vigueur du RGAA est la 4.1 et a été publiée le 18 février 2021.</p>
        <p>
          Le RGAA 4 fait disparaître la distinction entre niveau A et AA qui n’est plus justifiée puisque toutes ces règles sont obligatoires.
        </p>

        <!--p>Consulter la <a href="https://design.numerique.gouv.fr/assets/pdf/RGAA4_vs_WCAG2.1.pdf" target="_blank" title="correspondance des critères de contrôle du RGAA 4 vs critères à succès des WCAG 2.1 - Nouvelle fenêtre">correspondance des critères de contrôle du RGAA 4 vs critères à succès des WCAG 2.1</a>. </p-->
      </section>

      <section>
        <h2>Si le RGAA n'était plus mis à jour</h2>
        <p>
          En cas d'absence de mise à jour du référentiel sous 3 ans pour prendre en compte de nouveaux standards ou spécifications techniques, il est possible de créer ses propres tests en complément de ceux existant. Certains tests, concernant notamment les composants d’interface développés en JavaScript, requièrent de vérifier la restitution des contenus avec des technologies d’assistance associées à des navigateurs et des systèmes d’exploitation.
        </p>
      </section>

      <section>
        <h2>Applications mobiles, progiciels et mobilier urbain numérique</h2>
        <p>
          La méthode technique du RGAA 4.1 ne couvre pas les applications mobiles natives, les progiciels et le mobilier urbain numérique pour lesquels il sera nécessaire de vérifier directement la mise en œuvre de la norme de référence EN 301-549 V2.1.2.
        </p>
      </section>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Le RGAA",
      meta: [{
        name: 'description',
        content: "Tout savoir sur le Référentiel général d'amélioration de l'accessibilité (RGAA)."
      },
      {
        property: 'og:title',
        content: "Le RGAA - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Tout savoir sur le Référentiel général d'amélioration de l'accessibilité."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
