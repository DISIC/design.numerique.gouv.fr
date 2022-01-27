<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav aria-label="Breadcrumb" class="fr-breadcrumb">
        <ol  class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
          </li>
          <li>
            <span aria-current="page">Mémo design</span>
          </li>
        </ol>
      </nav>

      <h1>Mémo design</h1>
      <p class="fr-text--lead">Les recommandations ci-dessous sont extraites du <a href="https://disic.github.io/guide-concepteur/index.html" target="_blank" title="guide du concepteur RGAA - nouvelle fenêtre">guide du concepteur RGAA</a> de la DINUM. Ce guide propose des fiches pour chaque thématique avec des conseils de design, l'explication du besoin pour les utilisateurs et des ressources complémentaires.</p>

      <h2>Le mémo design</h2>

      <h3><a href="https://disic.github.io/guide-concepteur/conception-fonctionnelle.html" target="_blank" title="Conception fonctionnelle - nouvelle fenêtre">Conception fonctionnelle</a></h3>

      <h4><a href="https://disic.github.io/guide-concepteur/1-images.html"  target="_blank" title="Images - nouvelle fenêtre">Images</a></h4>
      <ul>
        <li>Éviter les captchas. C’est bloquant pour beaucoup d’usagers et difficile pour tout le monde.</li>
        <li>Décrire et prévoir un texte de remplacement pour les images complexes (infographie, graphiques, cartes, etc.)</li>
      </ul>
      <h4><a href="https://disic.github.io/guide-concepteur/2-tableaux.html"  target="_blank" title="Tableaux - nouvelle fenêtre">Tableaux</a></h4>
      <ul>
        <li>Attribuer un titre pertinent à chaque tableau de données</li>
        <li>Prévoir un résumé pour chaque tableau de données complexe.</li>
        <li>Éviter les tableaux complexes avec des cellules fusionnées ou des sous-contextes</li>
      </ul>
      <h4><a href="https://disic.github.io/guide-concepteur/3-formulaires.html"  target="_blank" title="Formulaires - nouvelle fenêtre">Formulaires</a></h4>
      <ul>
        <li>Définir une étiquette pertinente pour chaque champ de formulaire, y compris les listes de choix.</li>
        <li>Ne pas utiliser placeholder comme étiquette.</li>
        <li>Définir des intitulés de boutons pertinents.</li>
        <li>Accoler chaque étiquette au champ qu’elle définit.</li>
        <li>Regrouper les options des listes de choix si besoin, et attribuez une étiquette pertinence à chaque regroupement.</li>
        <li>Indiquer les champs obligatoires dans l’étiquette du champ si besoin, à l’aide d’une mention ou d’un symbole dont la légende se trouve avant le formulaire.</li>
        <li>Indiquer le format de saisie dans l’étiquette des champs obligatoires.</li>
        <li>Insérer l’erreur de saisie à côté du champ concerné et indiquer un exemple de saisie réelle lorsque nécessaire.</li>
      </ul>
      <h4><a href="https://disic.github.io/guide-concepteur/4-navigation.html"  target="_blank" title="Navigation - nouvelle fenêtre">Navigation</a></h4>
      <ul>
        <li>Prévoir un lien d’accès rapide au contenu.</li>
        <li>Prévoir un lien d’accès rapide à la navigation principale si nécessaire.</li>
        <li>Prévoir des liens d’accès rapide pour tous les groupes de liens importants.</li>
        <li>Prévoir deux systèmes de navigation au moins.</li>
        <li>Prévoir des liens facilitant la navigation dans les collections de pages.</li>
      </ul>
      <h4><a href="https://disic.github.io/guide-concepteur/5-consultation.html"  target="_blank" title="Consultation - nouvelle fenêtre">Consultation</a></h4>
      <ul>
        <li>Indiquer le poids, le format et la langue de chaque fichier téléchargeable.</li>
        <li>Créer un glossaire pour les expressions inhabituelles, les expressions idiomatiques ou le jargon.</li>
        <li>Proposer une alternative aux textes nécessitant un niveau de lecture avancé.</li>
      </ul>

      <h3><a href="https://disic.github.io/guide-concepteur/conception-graphique.html" target="_blank" title="Conception graphique - nouvelle fenêtre">Conception graphique</a></h3>

      <h4><a href="https://disic.github.io/guide-concepteur/6-couleurs.html"  target="_blank" title="Couleurs - nouvelle fenêtre">Couleurs</a></h4>
      <ul>
        <li>Prévoir une alternative textuelle à l’utilisation signifiante de la couleur sur un texte.</li>
        <li>S’assurer que le contraste entre la couleur du texte et la couleur de l’arrière-plan est suffisant.</li>
        <li>Fournir des méthodes de personnalisation de l’interface par l’utilisateur si les contrastes prévus par la charte graphique sont insuffisants.</li>
      </ul>
      <h4><a href="https://disic.github.io/guide-concepteur/7-presentation.html"  target="_blank" title="Présentation - nouvelle fenêtre">Présentation</a></h4>
      <ul>
        <li>S’assurer que l’information n’est pas donnée uniquement par la forme ou la position d’un élément.</li>
        <li>S’assurer que les liens sont correctement identifiables.</li>
        <li>S’assurer que l’interlignage est suffisant.</li>
        <li>S’assurer que la largeur des blocs de texte n’excède pas 80 caractères.</li>
        <li>Donner la possibilité à l’utilisateur de contrôler la justification des textes.</li>
        <li>Permettre à l’utilisateur de personnaliser la couleur de texte et la couleur d’arrière-plan lorsque les contrastes prévus par la charte graphique sont insuffisants.</li>
      </ul>

      <h3><a href="https://disic.github.io/guide-concepteur/conception-multimedia.html" target="_blank" title="Conception multimédia - nouvelle fenêtre">Conception multimédia</a></h3>

      <h4><a href="https://disic.github.io/guide-concepteur/8-multimedia.html"  target="_blank" title="Multimédia - nouvelle fenêtre">Multimédia</a></h4>
      <ul>
        <li>Faire précéder tous les médias d’un titre.</li>
        <li>Accompagner chaque vidéo d’une transcription textuelle ou d’une audiodescription synchronisée.</li>
        <li>Fournir des sous-titres synchronisés pour chaque vidéo.</li>
        <li>S’assurer que les dialogues sont suffisamment audibles.</li>
        <li>Accompagner chaque vidéo d’une traduction en langue des signes si possible.</li>
        <li>Ne pas déclencher de média automatiquement.</li>
        <li>Fournir un lien clairement identifié permettant d’accéder à l’alternative accessible des médias non temporels.</li>
      </ul>

    </div>
  </Layout>
</template>

<script>
export default {

  metaInfo: {
    title: "Mémo dev",
    meta: [{
      name: 'description',
      content: "Le mémo du développeur et de la développeuse web pour une meilleure prise en compte de l'accessibilité numérique (RGAA)."
    },
    {
      property: 'og:title',
      content: "Mémo dev - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Le mémo du développeur et de la développeuse web pour une meilleure prise en compte de l'accessibilité numérique (RGAA)."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>
