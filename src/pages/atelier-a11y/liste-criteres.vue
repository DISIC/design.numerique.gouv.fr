<template>
  <Exercise>
    <div class="dg-cover dg-cover--linear">
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
        <h1 class="dg-cover__title">Liste des critères</h1>
        <p class="fr-text--lead">
          Dans cet atelier nous allons tester une liste de 24
          critères.
        </p>
      </div>
    </div>

    <div class="dg-content fr-px-2w fr-mb-12w">

      <h2 class="fr-my-6w">Navigation & utilisation</h2>
      <ul class="fr-accordions-group">
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">1</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="1">
               Le site est consultable que que soit la taille et l'orientation de l'écran
            </button>
          </h3>
          <div class="fr-collapse" :id="1">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">2</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="2">
               Le contenu reste lisible lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur
            </button>
          </h3>
          <div class="fr-collapse" :id="2">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">3</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="3">
               La navigation et l'utilisation du site peuvent s'effectuer entièrement au clavier
            </button>
          </h3>
          <div class="fr-collapse" :id="3">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">4</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="4">
               Deux systèmes de navigation sont présents (moteur de recherche, un menu de navigation et plan du site)
            </button>
          </h3>
          <div class="fr-collapse" :id="4">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">5</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="5">
               Les systèmes de navigation sont accessibles de manière identique sur chaque page
            </button>
          </h3>
          <div class="fr-collapse" :id="5">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">6</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="6">
               Pas de son déclenché sans action de l'utilisateur
            </button>
          </h3>
          <div class="fr-collapse" :id="6">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">7</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="7">
               le style du focus n'est ni supprimé ni dégradé
            </button>
          </h3>
          <div class="fr-collapse" :id="7">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">8</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="8">
               Le libellé de chaque lien permet d'en comprendre la destination
            </button>
          </h3>
          <div class="fr-collapse" :id="8">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">9</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="9">
               Le site propose au moins deux moyens de contact différents
            </button>
          </h3>
          <div class="fr-collapse" :id="9">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="fr-my-6w">Langage & interface</h2>
      <ul class="fr-accordions-group">
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">10</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="10">
               Aucune information n'est véhiculée que par la couleur
            </button>
          </h3>
          <div class="fr-collapse" :id="10">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">11</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="11">
               Les images porteuses d'informations, les infographies, les vidéos et les fichiers audio ont une alternative textuelle
            </button>
          </h3>
          <div class="fr-collapse" :id="11">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">12</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="12">
               Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ?
            </button>
          </h3>
          <div class="fr-collapse" :id="12">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">13</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="13">
               Les textes sont simples et compréhensibles
            </button>
          </h3>
          <div class="fr-collapse" :id="13">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">14</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="14">
               Les informations relatives aux fichiers proposés en téléchargement sont indiqués
            </button>
          </h3>
          <div class="fr-collapse" :id="14">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">15</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="15">
               Les fichiers bureautiques téléchargeables sur le site sont proposés dans un format ouvert et sont accessibles
            </button>
          </h3>
          <div class="fr-collapse" :id="15">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="fr-my-6w">Présentation de l'information</h2>
      <ul class="fr-accordions-group">
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">16</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="16">
               Le titre de la page est unique et pertinent
            </button>
          </h3>
          <div class="fr-collapse" :id="16">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">17</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="17">
               Les textes et les éléments graphiques porteurs d'informations sont présentés avec un contraste suffisant par rapport à leur arrière-plan
            </button>
          </h3>
          <div class="fr-collapse" :id="17">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">18</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="18">
               La hiérarchie des titres est complète et cohérente
            </button>
          </h3>
          <div class="fr-collapse" :id="18">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">19</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="19">
               Chaque champ de formulaire est clairement associé à son intitulé
            </button>
          </h3>
          <div class="fr-collapse" :id="19">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">20</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="20">
               Les champs et les formats obligatoires sont indiqués
            </button>
          </h3>
          <div class="fr-collapse" :id="20">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">21</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="21">
               Le format de saisie est indiqué
            </button>
          </h3>
          <div class="fr-collapse" :id="21">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">22</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="22">
               Le soulignement est réservé aux liens
            </button>
          </h3>
          <div class="fr-collapse" :id="22">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">23</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="23">
               Pas de contenu clignotant ou en mouvement
            </button>
          </h3>
          <div class="fr-collapse" :id="23">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">24</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="24">
               Le niveau de conformité est affiché sur toutes les pages
            </button>
          </h3>
          <div class="fr-collapse" :id="24">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>
                Le titre de la page s’affiche dans l’onglet du navigateur.
              </p>
              <h4>Comment contrôler ?</h4>
              <p>
                Sur l’échantillon, contrôler que :
              </p>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </Exercise>
</template>

<script>
export default {
  metaInfo: {
    title: 'Liste des critères',
    meta: [
      {
        name: 'description',
        content: 'Exercice d’audit et de mise en conformité RGAA',
      },
    ],
  },
};
</script>

<style lang="scss" scoped>

  .fr-accordion .fr-accordion__btn {
    padding: .75rem 0.5rem .75rem 3rem;
  }
  span.numero {
    padding:0.25rem;
    background-color: var(--border-default-purple-glycine);
    color: var(--background-default-grey);
    position: absolute;
    width: 1.6em;
    text-align: center;
    box-sizing: content-box;
  }

</style>
