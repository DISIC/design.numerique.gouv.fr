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
          <span aria-current="page">Checklist dev</span>
        </li>
      </ol>
    </nav>



    <div class="content">

      <h1>Checklist dev</h1>

      <p>Après avoir réalisé une nouvelle fonctionnalité ou une nouvelle page, les développeurs et développeuses peuvent faire quelques tests et vérifications rapides avant de livrer leur travail pour la revue de code ou en recette.</p>
      <p>Les six points ci-dessous <strong>ne constituent pas</strong> des vérifications suffisantes pour établir que la fonctionnalité ou la page seront accessibles mais sont des tests qui devraient être systématiquement opérés avant de transmettre le code pour la revue ou la recette.</p>

      <div class="quick-test">
        <h2>Les tests et explications</h2>
        <ul class="fr-accordions-group">
          <li class="fr-accordion">
              <h3 class="fr-accordion__title">
                <button class="fr-accordion__btn fr-accordion__btn--icon-right" aria-expanded="false" aria-controls="fr-accordion-group-1">Le titre de la page est unique et pertinent</button>
              </h3>
              <div class="fr-collapse" id="fr-accordion-group-1">
                <h4>Comment vérifier ?</h4>
                <p>S'assurer que le titre de chaque page (contenu de la balise <code>title</code> dans le <code>head</code>, visible en titre de l'onglet du navigateur) permet de la distinguer des autres pages et reflète bien son contenu.</p>
                <h4>À quoi ça sert ?</h4>
                <p>Pour les personnes aveugles, utilisateurs de lecteurs d'écran, le titre de la page est le premier élément vocalisé. Pour des utilisateurs qui naviguent avec l'historique de navigation ou la liste des onglets, il est important qu'ils puissent retrouver les pages facilement en se basant sur leur titre.</p>
              </div>
          </li>
          <li class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="fr-accordion-group-2">La balise html possède l'attribut lang avec la valeur de la langue principale</button>
            </h3>          
            <div class="fr-collapse" id="fr-accordion-group-2">
                <h4>Comment vérifier ?</h4>
                <p>Vérifier dans le code source que la balise html comporte bien cet attribut et qu'il est bien renseigné. Si des passages de texte sont dans d'autres langues il faudra ajouter cet attribut dans les balises conteneurs correspondantes.</p>
                <h4>À quoi ça sert ?</h4>
                <p>Déclarer la langue de traitement permettra aux outils de synthèse vocales de prononcer le contenu avec l'accent qui convient à la langue utilisée.</p>
            </div>
          </li>
          <li class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="fr-accordion-group-3">Le code html est valide au regard de la DTD</button>
            </h3>          
            <div class="fr-collapse" id="fr-accordion-group-3">
                <h4>Comment vérifier ?</h4>
                <p>La validation doit s'effectuer sur le code source généré (avec JavaScript).</p>
                <p>Pour une page publique, on peut utiliser le https://validator.w3.org/. Pour une page locale il existe plusieurs extensions pour navigateur. On peut aussi prévoir cette validation dans le workflow de l'usine de développement.</p>
                <h4>À quoi ça sert ?</h4>
                <p>Un code source valide est essentiel pour la robustesse du site et pour s'assurer d'un rendu homogène avec tous les navigateurs. En effet, un code mal structuré est généralement « réparé » par le navigateur mais tous les navigateurs ne le font pas de la même manière, ce qui peut générer des différences importantes d'un navigateur à l'autre.</p>
                <p>Pour le <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr>, un code source valide est un code source :</p>
                <ul>
                  <li>dont les balises respectent les règles d'écriture (les balises sont conformes au type de document déclaré)&nbsp;;</li>
                  <li>dont l'imbrication des balises est conforme&nbsp;;</li>
                  <li>dont l'ouverture et la fermeture des balises sont conformes&nbsp;;</li>
                  <li>dont les attributs respectent les règles d'écriture&nbsp;;</li>
                  <li>dont les valeurs des attributs respectent les règles d'écriture (par exemple, les valeurs d'identifiant dupliquées ne sont pas conformes).</li>
                </ul>
            </div>
          </li>
          <li class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="fr-accordion-group-4">La page est entièrement navigable et utilisable au clavier</button>
            </h3>          
            <div class="fr-collapse" id="fr-accordion-group-4">
                <h4>Comment vérifier ?</h4>
                <p>Rafraîchir la page. S'assurer qu'on peut naviguer de lien en lien (ou tout autre élément focusable tel que bouton, champ de formulaire...) à l'aide de la touche tabulation. Lorsque le focus est posé sur un lien ou un bouton la touche d'espacement active ledit lien ou bouton. Les boutons sont également activables grâce à la touche <kbd>Return</kbd>.</p>
                <p>Lors du test, on utilisera aussi la combinaison de touches <kbd>maj</kbd>&nbsp;+&nbsp;<kbd>tab</kbd> pour vérifier qu'on peut naviguer à reculons.</p>
                <p>Additionnellement, on s'assure que le focus est visible, c'est-à-dire qu'on distingue bien où la tabulation nous a conduit.</p>
                <h4>À quoi ça sert ?</h4>
                <p>Les utilisateurs qui ont des problèmes de motricité fine utilisent principalement le clavier pour se déplacer sur la page. Ils doivent pouvoir effectuer leur navigation et utiliser toutes les fonctionnalités sans devoir recourir à une souris.</p>
            </div>
          </li>
          <li class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="fr-accordion-group-5">La sémantique des balises html est correctement utilisée</button>
            </h3>          
            <div class="fr-collapse" id="fr-accordion-group-5">

                <h4>Comment vérifier ?</h4>
                <p>Quelques exemples&nbsp;:</p>
                <ul>
                  <li>Les balises <code>a</code> sont utilisées lorsque le clic doit diriger vers une autre page ou un autre site.</li>
                  <li>Les balises <code>button</code> sont utilisées lorsque leur activation déclenche une action au sein de la page ou l'envoi d'un formulaire.</li>
                  <li>La balise <code>span</code> n'est utilisée que pour des passages de texte au sein de balises structurantes (<code>p</code>, <code>ul</code>, <code>hx</code>).</li>
                  <li>Les listes sont structurées avec les balises html sémantiques correspondantes et non simulées à l'aide de règles de présentation.</li>
                </ul>
                <h4>À quoi ça sert ?</h4>
                <p>L'utilisation des balises sémantiques correctes permet une bonne restitution des contenus. Les cas les plus courants des détournements perturbants sont l'utilisation de liens pour des boutons ou inversement et le choix de telle ou telle balise html en fonction de sa présentation plutôt que sa sémantique.</p>

            </div>
          </li>
          <li class="fr-accordion">
            <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="fr-accordion-group-6">Chaque champ de formulaire est associé à son étiquette</button>
            </h3>          
            <div class="fr-collapse" id="fr-accordion-group-6">
                <h4>Comment vérifier ?</h4>
                <p>Dans les formulaires cliquer sur chaque étiquette pour s'assurer que le focus se place bien dans le champ correspondant ou active bien le bouton radio ou la checkbox.</p>
                <h4>À quoi ça sert ?</h4>
                <p>L'identification des champs de formulaire est un élément essentiel. Beaucoup d'utilisateurs handicapés vont accéder aux champs de manières très diverses.</p>
                <p>Les utilisateurs de lecteurs d'écran disposent de raccourcis clavier leur permettant de naviguer rapidement d'un champ à l'autre et certains dispositifs de navigation vocale proposent d'accéder aux champs par leur nom.</p>
                <p>Dans ce type de contexte, il est important que chaque champ de formulaire possède une étiquette liée, afin qu'elle soit restituée lors de la prise de focus. Cela permettra aux personnes aveugles d'utiliser à profit les raccourcis clavier et aux utilisateurs de navigation vocale d'accéder rapidement aux champs. Pour les utilisateurs de dispositifs de pointage adapté, l'étiquette d'un champ permet d'étendre la surface de clic et ainsi améliore l'efficacité des manipulations.</p>
            </div>
            </section>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>


<script>


export default {

  metaInfo: {
    title: "Checklist dev",
    meta: [{
      name: 'description',
      content: "La checklist du développeur et de la développeuse web pour une meilleure prise en compte de l'accessibilité numérique (RGAA)."
    },
    {
      property: 'og:title',
      content: "Checklist dev - DesignGouv"
    },
    {
      property: 'og:description',
      content: "La checklist du développeur et de la développeuse web pour une meilleure prise en compte de l'accessibilité numérique (RGAA)."
    },
    {
      property: 'og:image',
      content: "https://design.numerique.gouv.fr/designGouv.png"
    }],
  }
}
</script>
