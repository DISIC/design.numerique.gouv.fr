<template>
  <Exercise>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w">
        <nav
          role="navigation"
          class="fr-breadcrumb"
          aria-label="vous êtes ici :"
        >
          <ol class="fr-breadcrumb__list">
            <li>
              <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
            </li>
            <li>
              <span aria-current="page">Atelier a11é</span>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Liste des 42 critères</h1>
        <p class="fr-text--lead"
          >Dans cet atelier nous allons tester une liste restreinte de 42
          critères parmi les 106 critères du
          <abbr title="Référentiel général d’amélioration de l’accessibilité"
            >RGAA</abbr
          >.</p
        >
      </div>
    </section>

    <section class="fr-container fr-px-2w fr-mb-8w">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-8">
          <ol
            ><li>
              <h2>Images</h2>
              <ul
                ><li
                  ><b>1.1</b> Chaque image porteuse d’information a-t-elle une
                  alternative textuelle ?</li
                ><li
                  ><b>1.3</b> Pour chaque image porteuse d’information ayant une
                  alternative textuelle, cette alternative est-elle
                  pertinente ?</li
                ></ul
              ></li
            ><li>
              <h2>Cadres</h2>
              <ul
                ><li><b>2.1</b> Chaque cadre a-t-il un titre de cadre ?</li
                ><li
                  ><b>2.2</b> Pour chaque cadre ayant un titre de cadre, ce
                  titre de cadre est-il pertinent ?</li
                ></ul
              ></li
            ><li>
              <h2>Couleurs</h2>
              <ul
                ><li
                  ><b>3.1</b> Dans chaque page web, l’information ne doit pas
                  être donnée uniquement par la couleur. Cette règle est-elle
                  respectée ?</li
                ><li
                  ><b>3.2</b> Dans chaque page web, le contraste entre la
                  couleur du texte et la couleur de son arrière-plan est-il
                  suffisamment élevé ?</li
                ><li
                  ><b>3.3</b> Dans chaque page web, les couleurs utilisées dans
                  les composants d’interface ou les éléments graphiques porteurs
                  d’informations sont-elles suffisamment contrastées ?</li
                ></ul
              ></li
            ><li>
              <h2>Multimédia</h2>
              <ul
                ><li
                  ><b>4.1</b> Chaque média temporel pré-enregistré a-t-il, si
                  nécessaire, une transcription textuelle ou une
                  audiodescription ?</li
                ><li
                  ><b>4.2</b> Pour chaque image porteuse d’information ayant une
                  alternative textuelle, cette alternative est-elle
                  pertinente ?</li
                ><li
                  ><b>4.3</b> Chaque média temporel synchronisé pré-enregistré
                  a-t-il, si nécessaire, des sous-titres synchronisés ?</li
                ><li
                  ><b>4.4</b> Pour chaque média temporel synchronisé
                  pré-enregistré ayant des sous-titres synchronisés, ces
                  sous-titres sont-ils pertinents ?</li
                ></ul
              ></li
            ><li>
              <h2>Tableaux</h2>
              <ul
                ><li
                  ><b>5.3</b> Pour chaque tableau de mise en forme, le contenu
                  linéarisé reste-t-il compréhensible ?</li
                ><li
                  ><b>5.7</b> Pour chaque tableau de données, la technique
                  appropriée permettant d’associer chaque cellule avec ses
                  en-têtes est-elle utilisée ?</li
                ></ul
              ></li
            ><li>
              <h2>Liens</h2>
              <ul
                ><li><b>6.1</b> Chaque lien est-il explicite ?</li
                ><li
                  ><b>6.2</b> Dans chaque page web, chaque lien, à l’exception
                  des ancres, a-t-il un intitulé ?</li
                ></ul
              ></li
            ><li>
              <h2>Scripts</h2>
              <ul
                ><li
                  ><b>7.1</b> Chaque script est-il, si nécessaire, compatible
                  avec les technologies d’assistance ?</li
                ><li
                  ><b>7.3</b> Chaque script est-il contrôlable par le clavier et
                  par tout dispositif de pointage ?</li
                ></ul
              ></li
            ><li>
              <h2>Élements obligatoires</h2>
              <ul
                ><li
                  ><b>8.3</b> Dans chaque page web, la langue par défaut
                  est-elle présente ?</li
                ><li
                  ><b>8.4</b> Pour chaque page web ayant une langue par défaut,
                  le code de langue est-il pertinent ?</li
                ><li><b>8.5</b> Chaque page web a-t-elle un titre de page ?</li
                ><li
                  ><b>8.6</b> Pour chaque page web ayant un titre de page, ce
                  titre est-il pertinent ?</li
                ></ul
              ></li
            ><li>
              <h2>Structuration de l'information</h2>
              <ul
                ><li
                  ><b>9.1</b> Dans chaque page web, l’information est-elle
                  structurée par l’utilisation appropriée de titres ?</li
                ><li
                  ><b>9.3</b> Dans chaque page web, chaque liste est-elle
                  correctement structurée ?</li
                ></ul
              ></li
            ><li>
              <h2>Présentation de l'information</h2>
              <ul
                ><li
                  ><b>10.3</b> Dans chaque page web, l’information reste-t-elle
                  compréhensible lorsque les feuilles de styles sont
                  désactivées ?</li
                ><li
                  ><b>10.4</b> Dans chaque page web, le texte reste-t-il lisible
                  lorsque la taille des caractères est augmentée jusqu’à 200%,
                  au moins ?</li
                ><li
                  ><b>10.6</b> Dans chaque page web, chaque lien dont la nature
                  n’est pas évidente est-il visible par rapport au texte
                  environnant ?</li
                ><li
                  ><b>10.7</b> Dans chaque page web, pour chaque élément
                  recevant le focus, la prise de focus est-elle visible ?</li
                ></ul
              ></li
            ><li>
              <h2>Formulaires</h2>
              <ul
                ><li
                  ><b>11.1</b> Chaque champ de formulaire a-t-il une
                  étiquette ?</li
                ><li
                  ><b>11.2</b> Chaque étiquette associée à un champ de
                  formulaire est-elle pertinente ?</li
                ><li
                  ><b>11.5</b> Dans chaque formulaire, les champs de même nature
                  sont-ils regroupés, si nécessaire ?</li
                ><li
                  ><b>11.6</b> Dans chaque formulaire, chaque regroupement de
                  champs de formulaire a-t-il une légende ?</li
                ><li
                  ><b>11.9</b> CDans chaque formulaire, l’intitulé de chaque
                  bouton est-il pertinent ?</li
                ><li
                  ><b>11.10</b> Dans chaque formulaire, le contrôle de saisie
                  est-il utilisé de manière pertinente ?</li
                ></ul
              ></li
            ><li>
              <h2>Navigation</h2>
              <ul
                ><li
                  ><b>12.1</b> Chaque ensemble de pages dispose-t-il de deux
                  systèmes de navigation différents, au moins ?</li
                ><li
                  ><b>12.7</b> Dans chaque page web, un lien d’évitement ou
                  d’accès rapide à la zone de contenu principal est-il présent
                   ?</li
                ><li
                  ><b>12.8</b> Dans chaque page web, l’ordre de tabulation
                  est-il cohérent ?</li
                ><li
                  ><b>12.9</b> Dans chaque page web, la navigation ne doit pas
                  contenir de piège au clavier. Cette règle est-elle
                  respectée ?</li
                ></ul
              ></li
            ><li>
              <h2>Consultation</h2>
              <ul
                ><li
                  ><b>13.3</b> Dans chaque page web, chaque document bureautique
                  en téléchargement possède-t-il, si nécessaire, une version
                  accessible ?</li
                ><li
                  ><b>13.8</b> Dans chaque page web, chaque contenu en mouvement
                  ou clignotant est-il contrôlable par l’utilisateur ?</li
                ><li
                  ><b>13.9</b> Dans chaque page web, le contenu proposé est-il
                  consultable quelle que soit l’orientation de l’écran (portrait
                  ou paysage) ?</li
                ><li
                  ><b>13.10</b> Dans chaque page web, les fonctionnalités
                  utilisables ou disponibles au moyen d’un geste complexe
                  peuvent-elles être également disponibles au moyen d’un geste
                  simple ?</li
                ></ul
              >
            </li></ol
          >
        </div>
      </div>
    </section>
  </Exercise>
</template>

<script>
export default {
  metaInfo: {
    title: 'Liste des 42 critères',
    meta: [
      {
        name: 'description',
        content: 'Exercice d’audit et de mise en conformité RGAA',
      },
    ],
  },
};
</script>

<style type="scoped">
ol > li::marker {
  font-size: 2em;
}
</style>
