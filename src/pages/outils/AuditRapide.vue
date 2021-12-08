<template>
  <Layout>

    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
        </li>
        <li>
          <span aria-current="page">Audit rapide</span>
        </li>
      </ol>
    </nav>

    <div class="content">
      <h1>Audit rapide RGAA</h1>
      <p>Vingt cinq critères du RGAA <strong>absolument essentiels</strong>. L’évaluation de ces critères nécessite une bonne connaissance du RGAA. Si vous n’avez pas d’expert dans votre équipe, <a href="/accessibilite-numerique/accord-cadre-dae#lot-1">vous pouvez faire appel à un prestataire</a>.<br/>Si le résultat de cet audit rapide n’est pas représentatif du niveau de conformité, il donne une bonne idée de la prise en compte ou non du RGAA dans les process de développement.</p>

    <p>L’audit rapide porte sur un  échantillon réduit de 3 à 5 pages et sur les 25 critères (<abbr lang="en" title="web content accessilibity guidelines">WCAG</abbr> niveau A) suivants :</p>
    <ul>
        <li>Chaque image porteuse d’information a-t-elle une alternative textuelle ? (Images, 1.1)</li>
        <li>Dans chaque page web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? (Couleurs, 3.1)</li>
        <li>Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription ? (Multimédia, 4.1)</li>
        <li>Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur ? (Multimédia, 4.10)</li>
        <li>Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ? (Tableau, 5.3)</li>
        <li>Pour chaque tableau de données, la technique appropriée permettant d’associer chaque cellule avec ses en-têtes est-elle utilisée ? (Tableau, 5.7)</li>
        <li>Chaque lien est-il explicite ? (Liens, 6.1)</li>
        <li>Dans chaque page web, chaque lien, à l’exception des ancres, a-t-il un intitulé ? (Liens, 6.2)</li>
        <li>Chaque script est-il, si nécessaire, compatible avec les technologies d’assistance ? (Scripts, 7.1)</li>
        <li>Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage ? (Scripts, 7.3)</li>
        <li>Dans chaque page web, la langue par défaut est-elle présente ? (Éléments obligatoires, 8.3)</li>
        <li>Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ? (Éléments obligatoires, 8.4)</li>
        <li>Chaque page web a-t-elle un titre de page ? (Éléments obligatoires, 8.5)</li>
        <li>Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de titres ? (Structuration, 9.1)</li>
        <li>Dans chaque page web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ? (Présentation, 10.3)</li>
        <li>Dans chaque page web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ? (Présentation, 10.6)</li>
        <li>Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ? (Présentation, 10.7)</li>
        <li>Chaque champ de formulaire a-t-il une étiquette ? (Formulaires, 11.1)</li>
        <li>Chaque étiquette associée à un champ de formulaire est-elle pertinente ? (Formulaires, 11.2)</li>
        <li>Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ? (Formulaires, 11.5)</li>
        <li>Dans chaque formulaire, chaque regroupement de champs de formulaire a-t-il une légende ? (Formulaires, 11.6)</li>
        <li>Dans chaque formulaire, l’intitulé de chaque bouton est-il pertinent ? (Formulaires, 11.9)</li>
        <li>Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ? (Formulaires, 11.10)</li>
        <li>Dans chaque page web, l’ordre de tabulation est-il cohérent ? (Navigation, 12.8)</li>
        <li>Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ? (Navigation, 12.9)</li>
    </ul>
<p>Le détail des critères et des tests est disponible à l’adresse suivante : <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/" target="_blank" title="numerique.gouv.fr/publications/rgaa-accessibilite/ - nouvelle fenêtre">numerique.gouv.fr/publications/rgaa-accessibilite/</a>.</p>
<p><strong>Vous avez terminé ?</strong><br/>Passez à l’étape suivante et vérifiez les vingt-cinq critères de l’<a href="/outils/audit-complementaire/">audit complémentaire</a>.</p>
</div>

  </Layout>
</template>


<script>


export default {

  metaInfo: {
    title: "Audit rapide",
    meta: [{
      name: 'description',
      content: "L‘audit rapide RGAA : la première étape pour une meilleure prise en compte de l'accessibilité numérique."
    },
    {
      property: 'og:title',
      content: "Audit rapide - DesignGouv"
    },
    {
      property: 'og:description',
      content: "L‘audit rapide RGAA : la première étape pour une meilleure prise en compte de l'accessibilité numérique."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>
