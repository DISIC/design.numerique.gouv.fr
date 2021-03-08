<template>
  <Layout class="outils-page">

     <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <g-link to="/outils/">Outils</g-link>
        </li>
        <li>
          <span aria-current="page">Mémo dev</span>
        </li>
      </ol>
    </nav>


    <div class="cover">
     <div class="cover__container">

      <h1 class="text-highlight">Mémo dev</h1>

      <p class="cover__subtitle">Les recommandations ci-dessous sont extraites du Guide de l'intégrateur RGAA de la DINUM. Ce guide propose des fiches pour chaque thématique avec des conseils de développement, l'explication du besoin pour les utilisateurs et des ressources complémentaires.</p>


      </div>
    </div>

<div class="content memo">

  <h2>Le mémo développement</h2>
  <p class="lead">Les recommandations ci-dessous sont extraites du <a href="https://disic.github.io/guide-integrateur/index.html" target="_blank" title="guide de l’intégrateur RGAA - nouvelle fenêtre">guide de l’intégrateur RGAA</a> établi par la <abbr title="Direction interministérielle du numérique">Dinum</abbr>. Ce guide propose des fiches pour chaque thématique avec des conseils de développement, l'explication du besoin pour les utilisateurs et des ressources complémentaires.</p>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/1-gabarit-general.html" title="Layout - nouvelle fenêtre" ><span lang="en">Layout</span></a></h3>
  <ul>
    <li>Déclarer un doctype valide.</li>
    <li>Déclarer toujours la langue de traitement sur la balise <code>html</code>.</li>
    <li>Valider le code source.</li>
    <li>Structurer votre page avec les landmarks ARIA.</li>
    <li>Si le site est en HTML5, structurer la page avec les balises HTML5 et les landmarks ARIA.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/2-navigation.html" title="Navigation - nouvelle fenêtre" >Navigation</a></h3>
  <ul>
    <li>Définir des titres de pages pertinents.</li>
    <li>Implémenter un lien d'accès rapide au contenu.</li>
    <li>Implémenter un lien d'accès rapide à la navigation principale.</li>
    <li>Implémenter des liens d'évitement pour tous les groupes de liens importants.</li>
    <li>Implémenter deux systèmes de navigation au moins.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/3-contenus.html" title="Contenus - nouvelle fenêtre" >Contenus</a></h3>
  <ul>
    <li>Donner un titre pertinent aux cadres en ligne.</li>
    <li>Utiliser les balises appropriées pour structurer les listes.</li>
    <li>Indiquer les changements de langue et de sens de lecture.</li>
    <li>Indiquer les ouvertures de nouvelles fenêtres.</li>
    <li>Indiquer le format et le poids des documents en téléchargements.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/4-tableaux.html" title="Tableaux - nouvelle fenêtre" >Tableaux</a></h3>
  <ul>
    <li>Implémenter le <code>role="presentation"</code> sur les tableaux de mise en forme.</li>
    <li>Déclarer les cellules d'en-têtes dans des éléments <code>th</code>.</li>
    <li>Implémenter un attribut <code>scope="col"</code> pour les en-têtes de colonnes.</li>
    <li>Implémenter un attribut <code>scope="row"</code> pour les en-têtes de lignes.</li>
    <li>Utiliser les relations <code>id</code>, <code>headers</code> pour relier les cellules de données à leurs en-têtes dans le cas de cellules fusionnées.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/5-liens.html" title="Liens - nouvelle fenêtre" >Liens</a></h3>
  <ul>
    <li>Attention aux liens vides.</li>
    <li>Définir des intitulés de liens pertinents.</li>
    <li>Respecter la construction des titres de liens.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/6-formulaires.html" title="Formulaires - nouvelle fenêtre" >Formulaires</a></h3>
  <ul>
    <li>Définir des étiquettes pertinentes.</li>
    <li>Utiliser une méthode conforme pour relier les champs à leurs étiquettes respectives.</li>
    <li>Pour les champs obligatoires avec un format de saisie, pensez toujours à l'indiquer (de préférence dans l'étiquette du champ).</li>
    <li>Pour les erreurs de saisie, reliez l'erreur au champ concerné et indiquez un exemple de saisie réelle lorsque nécessaire.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/7-focus.html" title="Focus - nouvelle fenêtre" >Focus</a></h3>
  <ul>
    <li>La prise de focus est visible, les valeurs de l'outline ne la dégradent pas.</li>
    <li>Une mise en forme autre que la couleur permet d'identifier les liens ainsi que leur survol et la prise de focus.</li>
    <li>Lors de la navigation au clavier la prise de focus est cohérente et ne reste pas bloquée sur un élément (piège au clavier).</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/8-distinction-fond-forme.html" title="Respecter la distinction fond et forme - nouvelle fenêtre" >Respecter la distinction fond et forme</a></h3>
  <ul>
    <li>Aucun contenu ne disparaît lors de l'activation ou de la désactivation des styles.</li>
    <li>La page reste compréhensible et les différentes zones sont correctement ordonnées lorsque les styles sont désactivés.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/9-images.html" title="Images - nouvelle fenêtre" >Images</a></h3>
  <ul>
    <li>Définir un <code>alt</code> sur toutes les images <code>img</code>.</li>
    <li>Définir un <code>alt=""</code> sur les images de décoration.</li>
    <li>Définir une alternative conforme et pertinente lorsqu'elle est porteuse d'information.</li>
    <li>Éviter le plus possibles les images textes</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/10-infos-forme-couleur.html" title="Informations par la forme et la couleur - nouvelle fenêtre" >Informations par la forme et la couleu</a></h3>
  <ul>
    <li>Ne pas donner d'informations uniquement par la couleur.</li>
    <li>Ne pas donner d'informations uniquement par la forme.</li>
    <li>Implémenter des alternatives à la couleur et à la forme qui soient pertinentes.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/11-agrandissement-des-caracteres.html" title="Agrandissement des caractères - nouvelle fenêtre" >Agrandissement des caractères</a></h3>
  <ul>
    <li>Ne pas définir des tailles de caractères en pixels.</li>
    <li>Eviter de fixer des hauteurs de boîte en pixels.</li>
    <li>Utiliser la propriété overflow:hidden avec précaution.</li>
    <li>Définir si possible des points de rupture en em.</li>
  </ul>
  <h3><a target="_blank" href="https://disic.github.io/guide-integrateur/12-multimedia.html" title="Multimédia - nouvelle fenêtre" >Multimédia</a></h3>
  <ul>
    <li>Faire précéder toutes les vidéos d'un titre.</li>
    <li>Fournir un lien clairement identifié permettant d'accéder à l'alternative accessible des médias non temporels.</li>
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
    }],
  }
}
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";
  .memo {
    li {
      list-style-position: inside;
      list-style-type: disc;
    }

  }
</style>
