<template>
  <Layout>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/">Accessibilité</g-link>
        </li>
        <li>
          <g-link to="/accessibilite-numerique/vous-etes/">Vous êtes</g-link>
        </li>
        <li>
          <span aria-current="page">designer</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
      <div class="cover__container">
        <div class="cover__subhead"><Accessibilite class="cover__subhead-icon" focusable="false" aria-hidden="true"/>Accessibilité</div>
        <h1>Vous êtes <span class="text-highlight">designer</span></h1>
        <p class="cover__subtitle">Cette fiche est destinée à toute personne confrontée aux enjeux relatifs à l’accessibilité numérique, notamment l’obligation de rendre les sites et applications web conformes au RGAA, et amenée à mettre en place une politique d’accessibilité numérique dans son organisation.</p>

      </div>  
    </div>
    <div class="content">
      <h2>Prendre conscience</h2>
      <h3>Du handicap</h3>
      <p>15 à 20% de la population est en situation de handicap, vous êtes à peu près sûr que certains de « vos » utilisateurs peuvent rencontrer des difficultés.</p>
      <h3>Du handicap</h3>
      <p>15 à 20% de la population est en situation de handicap, vous êtes à peu près sûr que certains de « vos » utilisateurs peuvent rencontrer des difficultés.</p>
      <h3>De la législation</h3>
      <p>La loi de 2005 pour l’égalité des droits et des chances, la loi pour une république numérique de 2016, le référentiel général d’amélioration de l’accessibilité (RGAA) : les dispositifs règlementaires sont applicables à tous.</p>

      <h2>Faire des tests</h2>
      <p>Intégrer des personnes en situations de handicap dans vos tests usagers et vos personæ.</p>

      <h2>UX</h2>
      <h3>Images</h3>
      <ul>
        <li>Éviter les captcha. C’est bloquant pour beaucoup d’usagers et difficile pour tout le monde.</li>
        <li>Décrire et prévoir un texte de remplacement pour les images complexes (infographie, graphiques, cartes, etc.)</li>
      </ul>
      <h3>Tableaux</h3>
      <ul>
        <li>Attribuer un titre pertinent à chaque tableau de données</li>
        <li>Prévoir un résumé pour chaque tableau de données complexe.</li>
        <li>Éviter les tableaux complexes avec des cellules fusionnées ou des sous-contextes</li>
      </ul>
      <h3>Formulaires</h3>
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
      <h3>Navigation</h3>
      <ul>
        <li>Prévoir un lien d’accès rapide au contenu.</li>
        <li>Prévoir un lien d’accès rapide à la navigation principale si nécessaire.</li>
        <li>Prévoir des liens d’accès rapide pour tous les groupes de liens importants.</li>
        <li>Prévoir deux systèmes de navigation au moins.</li>
        <li>Prévoir des liens facilitant la navigation dans les collections de pages.</li>
      </ul>
      <h3>Consultation</h3>
      <ul>
        <li>Indiquer le poids, le format et la langue de chaque fichier téléchargeable.</li>
        <li>Créer un glossaire pour les expressions inhabituelles, les expressions idiomatiques ou le jargon.</li>
        <li>Proposer une alternative aux textes nécessitant un niveau de lecture avancé.</li>
      </ul>
      <h3>Multimédia</h3>
      <ul>        
        <li>Faire précéder tous les médias d’un titre.</li>
        <li>Accompagner chaque vidéo d’une transcription textuelle ou d’une audiodescription synchronisée.</li>
        <li>Fournir des sous-titres synchronisés pour chaque vidéo.</li>
        <li>S’assurer que les dialogues sont suffisamment audibles.</li>
        <li>Accompagner chaque vidéo d’une traduction en langue des signes si possible.</li>
        <li>Ne pas déclencher de média automatiquement.</li>
        <li>Fournir un lien clairement identifié permettant d’accéder à l’alternative accessible des médias non temporels.</li>
      </ul>
      <h2>UI</h2>
      <h3>Couleurs</h3>
      <ul>
        <li>Prévoir une alternative textuelle à l’utilisation signifiante de la couleur sur un texte.</li>
        <li>S’assurer que le contraste entre la couleur du texte et la couleur de l’arrière-plan est suffisant.</li>
        <li>Fournir des méthodes de personnalisation de l’interface par l’utilisateur si les contrastes prévus par la charte graphique sont insuffisants.</li>
      </ul>
      <h3>Présentation</h3>
      <ul>
        <li>S’assurer que l’information n’est pas donnée uniquement par la forme ou la position d’un élément.</li>
        <li>S’assurer que les liens sont correctement identifiables.</li>
        <li>S’assurer que l’interlignage est suffisant.</li>
        <li>S’assurer que la largeur des blocs de texte n’excède pas 80 caractères.</li>
        <li>Donner la possibilité à l’utilisateur de contrôler la justification des textes.</li>
        <li>Permettre à l’utilisateur de personnaliser la couleur de texte et la couleur d’arrière-plan lorsque les contrastes prévus par la charte graphique sont insuffisants.</li>
      </ul>

    </div>

  </Layout>
</template>

<script>

import Accessibilite from "~/assets/images/accessibilite.svg"

export default {
  components: {
    Accessibilite,
  },
  metaInfo: {
    title: "Vous êtes décideur ou décideuse",
    meta: [{
      name: 'description',
      content: "Cette fiche est destiné à toute personne confrontée aux enjeux relatifs à l’accessibilité numérique, notamment l’obligation de rendre les sites et applications web conformes au RGAA, et amenée à mettre en place une politique d’accessibilité numérique dans son organisation."
    },
    {
      property: 'og:title',
      content: "RGAA à emporter - DesignGouv"
    },
    {
      property: 'og:description',
      content: "Afficher la conformité RGAA, s’organiser et se faire aider pour améliorer l’accessibilité."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>

<style lang="scss">

</style>
