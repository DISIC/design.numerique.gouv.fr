<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
          </li>
          <li>
            <a aria-current="page" class="fr-breadcrumb__link">Audit complémentaire</a>
          </li>
        </ol>
      </nav>

      <h1>Audit complémentaire RGAA </h1>

      <p class="fr-text--lead">Vous avez validé tous les critères de l’<a href="/outils/audit-rapide/">audit rapide</a>, vous pouvez maintenant passer à la deuxième étape et auditer votre échantillon sur les vingt cinq critères suivants.</p>

      <p>L’audit complémentaire porte sur un échantillon réduit de 3 à 5 pages et sur les 25 critères de niveau A suivants :</p>
      <ul>
        <li>Pour chaque image porteuse d’information ayant une alternative textuelle, cette alternative est-elle pertinente ? (Images, 1.3)</li>
        <li>Pour chaque image utilisée comme CAPTCHA, une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?  (Images, 1.5)</li>
        <li>Chaque image porteuse d’information a-t-elle, si nécessaire, une description détaillée ? (Images, 1.6)</li>
        <li>Pour chaque image porteuse d’information ayant une description détaillée, cette description est-elle pertinente ? (Images, 1.7)</li>
        <li>Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes ? (Multimédia, 4.2)</li>
        <li>Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ? (Multimédia, 4.4)</li>
        <li>Chaque média non temporel a-t-il, si nécessaire, une alternative ? (Multimédia, 4.8)</li>
        <li>Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ? (Multimédia, 4.9)</li>
        <li>Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ? (Tableau, 5.4)</li>
        <li>Pour chaque tableau de données, chaque en-tête de colonnes et chaque en-tête de lignes sont-ils correctement déclarés ? (Tableau, 5.6)</li>
        <li>Pour chaque script ayant une alternative, cette alternative est-elle pertinente ? (Scripts, 7.2)</li>
        <li>Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ? (Éléments obligatoires, 8.2)</li>
        <li>Pour chaque page web ayant un titre de page, ce titre est-il pertinent ? (Éléments obligatoires, 8.6)</li>
        <li>Dans chaque page web, les changements du sens de lecture sont-ils signalés ? (Éléments obligatoires, 8.10)</li>
        <li>Dans chaque page web, le contenu visible reste-t-il présent lorsque les feuilles de styles sont désactivées ? (Présentation, 10.2)</li>
        <li>Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d’assistance ? (Présentation, 10.8)</li>
        <li>Dans chaque page web, l’information ne doit pas être donnée uniquement par la forme, taille ou position  ? (Présentation, 10.9)</li>
        <li>Dans chaque page web, l’information ne doit pas être donnée par la forme, taille ou position uniquement Cette règle est-elle implémentée de façon pertinente ? (Présentation, 10.10)</li>
        <li>Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu ? (Consultation, 13.1)</li>
        <li>Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ? (Consultation, 13.3)</li>
        <li>Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ? (Consultation, 13.4)</li>
        <li>Dans chaque page web, chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) a-t-il une alternative ? (Consultation, 13.5)</li>
        <li>Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ? (Consultation, 13.6)</li>
        <li>Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ? (Consultation, 13.7)</li>
        <li>Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur ? (Consultation, 13.8)</li>
      </ul>
      <p>Le détail des critères et des tests est disponible à l’adresse suivante : <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" title="accessibilite.numerique.gouv.fr/methode/criteres-et-tests - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">accessibilite.numerique.gouv.fr/methode/criteres-et-tests</a>.</p>

    </div>
  </Layout>
</template>


<script>


export default {

  metaInfo: {
    title: "Audit complémentaire",
    meta: [{
      name: 'description',
      content: "La deuxième étape de l‘audit rapide RGAA pour une meilleure prise en compte de l'accessibilité numérique."
    },
    {
      property: 'og:title',
      content: "Audit complémentaire - DesignGouv"
    },
    {
      property: 'og:description',
      content: "La deuxième étape de l‘audit rapide RGAA pour une meilleure prise en compte de l'accessibilité numérique."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
    }],
  }
}
</script>
