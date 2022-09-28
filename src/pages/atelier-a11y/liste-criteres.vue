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
          Dans cet atelier nous allons tester une liste de 18
          critères.
        </p>
      </div>
    </div>

    <div class="dg-content fr-px-2w fr-mb-12w">

      <h2 class="fr-my-6w">Navigation & utilisation</h2>
      <ul class="fr-accordions-group">
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">1</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="1">Le site est consultable quelles que soient la taille et l’orientation de l’écran</button>
          </h3>
          <div class="fr-collapse" :id="1">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Depuis fin 2016, le trafic internet mobile a officiellement dépassé celui du trafic internet fixe dans le monde. De ce fait, il est indispensable de développer des services en ligne dont l’affichage s’adapte selon la taille de l’écran utilisé. La conception de sites web adaptatifs (responsive web design en anglais) contribue à :</p>
              <ul>
              <li>une audience supérieure ;</li>
              <li>une rapidité d’accès à l’information, quel que soit l’endroit où se trouve l’utilisateur ;</li>
              <li>une interactivité avec des fonctionnalités enrichies (mode tactile, capteurs, etc.) ;</li>
              <li>une amélioration du référencement.</li>
              </ul>
              <h4>Comment contrôler ?</h4>
              <p>Tester les différents formats d’écran avec un smartphone ou en modifiant la taille de la fenêtre sur ordinateur.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">2</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="2">
               La navigation et l’utilisation du site peuvent s’effectuer entièrement au clavier
            </button>
          </h3>
          <div class="fr-collapse" :id="2">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>La navigation au clavier est un des critères centraux de l’accessibilité numérique. De nombreux utilisateurs, souffrant de handicap ou non, naviguent sans souris, avec les touches de leur clavier.</p>
              <p>De plus, les dispositifs qui ne reposent pas sur la souris doivent être pris en compte ; notamment, les contenus et l’utilisation des services doivent être accessibles aux utilisateurs d’aides techniques (lecteurs d’écran par exemple) qui n’utilisent que le clavier ou un périphérique plus spécifique reposant sur les mêmes mécanismes que le clavier.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler que : </p>
              <ul>              
              <li>Chaque page comporte des liens d’accès rapides vers le contenu principal, le menu et le moteur de recherche s’il existe : ces liens sont au tout début de la page, ils sont de préférence visibles en permanence mais peuvent éventuellement ne s’afficher qu’au cours de la navigation au clavier (rafraîchir la page puis actionner la touche de tabulation pour les faire apparaître) ;
              </li><li>La navigation et l’utilisation peuvent s’effectuer entièrement au clavier dans un ordre prévisible ;
              </li><li>Le focus clavier (qui permet à l’usager de savoir sur quel élément interactif il se trouve) est clairement visible.</li>
              </ul>     
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">3</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="3">Deux systèmes de navigation sont présents (parmi les trois suivants : moteur de recherche, un menu de navigation et plan du site) et accessibles de manière identique sur chaque page</button>
          </h3>
          <div class="fr-collapse" :id="3">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Le moteur de recherche, le plan du site et le menu sont les moyens fondamentaux de repérage et d’accès à l’information. Il est important pour l’internaute de pouvoir se repérer dans l’arborescence du site.</p>
              <h4>Comment contrôler ?</h4>
              <p>Vérifier sur chacune des pages que deux systèmes de navigation sont bien présents et positionnés au même endroit.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">4</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="4">Le libellé de chaque lien permet d’en comprendre la destination</button>
          </h3>
          <div class="fr-collapse" :id="4">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Il s’agit de permettre aux internautes d’identifier clairement la destination du lien. Un lien "Lire la suite" ne donne aucune indication sur sa destination.</p>
              <h4>Comment contrôler ?</h4>
              <p>Vérifier que le libellé du lien désigne explicitement la nature ou la fonction du lien. 
              "Critère 3.2 du RGAA" et "Télécharger le RGAA (format pdf - 3,4Mo)"  sont des exemples de liens explicites.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">5</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="5">Le site propose au moins deux moyens de contact différents</button>
          </h3>
          <div class="fr-collapse" :id="5">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Le fait de proposer au moins deux moyens de contact différents permet de favoriser les retours d’information de la part des utilisateurs, tout en évitant de mettre ce dernier en difficulté en cas d’indisponibilité ou de problèmes d’utilisation de l’un des moyens de contact.</p>
              <h4>Comment contrôler ?</h4>
              <p>Vérifier que l’information "contact" permettant d’échanger avec un agent (ce qui exclut par exemple les tchat bots) est facile à trouver et qu’au moins deux alternatives existent (téléphone, mail, formulaire de contact, tchat, guichet physique local).</p>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="fr-my-6w">Langage & interface</h2>
      <ul class="fr-accordions-group">
         <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">6</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="6">
               Le contenu reste lisible lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur
            </button>
          </h3>
          <div class="fr-collapse" :id="6">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Les usagers nécessitant de grossir les caractères pour accéder au contenu d’un site ou d’une démarche ne doivent pas être ralentis ou bloqués par du texte disparaissant car hors du cadre ou caché, ou bien difficilement lisible car superposé à d’autres éléments.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler que le contenu reste clair lorsque la taille de caractères est portée à 200% de la taille par défaut dans le navigateur. Pour effectuer ce test, il faut augmenter la taille des caractères jusqu’à 200% :</p>
              <ul><li>soit en effectuant la combinaison de touches ctrl + + six fois ou ctrl + molette ;</li>
              <li>soit en modifiant les préférences du navigateur.</li></ul>
            </div>
          </div>
        </li>
       <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">7</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="7">
               Aucune information n’est véhiculée uniquement par la couleur
            </button>
          </h3>
          <div class="fr-collapse" :id="7">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Une information véhiculée uniquement par la couleur nuit au confort de navigation (par exemple si les liens sont en bleu foncé dans du texte en noir) et exclu de fait les usagers malvoyants. À titre d’exemple, 8% des hommes et 0,5% des femmes sont atteints de daltonisme.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler qu’aucun élément n’est compréhensible qu’en fonction de sa couleur (par exemple pas de texte telle que « la saisie des champs en rouge doit être corrigée »). Les liens sont visibles autrement que par une couleur distincte et sont soulignés. </p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">8</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="8">Les images porteuses d’informations, les infographies, les vidéos et les fichiers audio ont une alternative textuelle</button>
          </h3>
          <div class="fr-collapse" :id="8">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Les alternatives textuelles permettent par exemple aux personnes aveugles d’accéder aux contenus via un lecteur d’écran ou une page braille.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler que :</p>
              <ul>
              <li>Les vidéos sont sous-titrées et proposent une transcription et que les fichiers audio ont une transcription en alternative; le lien vers la transcription doit être adjacent au contenu vidéo ou audio ;</li>
              <li>Les images porteuses d’informations - c’est-à-dire les images qui ne sont pas purement décoratives - ont une alternative textuelle : dans le code source, rechercher img et vérifier que chacune de ces balises comporte un attribut <code>alt="ici le texte alternatif"</code> (À noter : si l’image est purement décorative, l’attribut doit être présent et vide <code>alt=""</code>) ;</li>
              <li>Dans le cas d’images complexes ou d’infographies, la transcription textuelle doit être adjacente et l’attribut alt doit être présent et vide <code>alt=""</code>.</li></ul>
              <p>La transcription textuelle et le texte alternatif doivent être pertinents c’est-à-dire transmettre les informations contenues dans l’image et non leur description factuelle.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">9</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="9">
               Les textes sont simples et compréhensibles
            </button>
          </h3>
          <div class="fr-collapse" :id="9">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Chaque service et métier ont leurs propres codes, leurs sigles, voire leur jargon. Il est donc essentiel de faire relire les contenus par des personnes extérieures et de se référer à une charte éditoriale pour gérer la qualité des contenus. Un vocabulaire simple et précis mettra l’usager en confiance.</p>
              <h4>Comment contrôler ?</h4>
              <p>Avec des personnes extérieures aux services, répondre aux questions suivantes :   </p>
              <ul>
              <li>Le langage utilisé est-il suffisamment clair ? Les phrases sont-elles simples à comprendre ?</li>
              <li>Reste-t-il des termes techniques non expliqués ? Sont-ils indispensables ?</li>
              <li>Les questions posées sont-elles logiques, justifiées et compréhensibles ?</li>
              <li>Reste-t-il des pages techniques en anglais avec des termes informatiques (par exemple, la page « Erreur 404 » en tapant après l’URL "/ridingbikeissocool" ) ?</li>
              <li>Les messages d’erreur ou de confirmation sont-ils écrits en français ? Sont-ils suffisamment clairs et précis ?</li>
              <li>Les sigles sont-ils développés la première fois qu’ils sont utilisés sur chaque page (éventuellement via une infobulle ou via un renvoi à un glossaire)?</li>
              </ul>
           
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">10</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="10">
               Les informations relatives aux fichiers proposés en téléchargement sont indiquées
            </button>
          </h3>
          <div class="fr-collapse" :id="10">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Les utilisateurs doivent savoir s’il est pertinent pour eux de télécharger les fichiers et si leurs outils le leur permettent.</p>
              <h4>Comment contrôler ?</h4>
              <p>Pour chaque fichier proposé en téléchargement, contrôler que :</p>
              <ul>
              <li>Le format est indiqué ;</li>
              <li>La taille est indiquée ;</li>
              <li>La langue, lorsque ce n’est pas la même que celle de la page, est indiquée ;</li>
              <li>Le nom du fichier permet d’en identifier le contenu et la provenance.
              </li>
              </ul>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">11</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="11">
               Les fichiers bureautiques téléchargeables sur le site sont proposés dans un format ouvert et sont accessibles
            </button>
          </h3>
          <div class="fr-collapse" :id="11">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Lors de la mise en ligne de fichiers en téléchargement (traitement de texte, images, audio, vidéo, etc.), il est nécessaire de proposer les formats ouverts afin que tout le monde puisse y avoir accès sans avoir à payer pour accéder à un format propriétaire.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler que :</p>
              <ul>
              <li>pour diffuser un document de type texte, le format recommandé est ODT ;</li>
              <li>pour diffuser un document de type présentation, le format recommandé est ODP ;</li>
              <li>pour diffuser un document de type feuille de calcul, le format recommandé est ODS. </li>
            </ul>
              <p>La suite Office n’est pas interdite mais les alternatives ci-dessus doivent être proposées.</p>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="fr-my-6w">Présentation de l’information</h2>
      <ul class="fr-accordions-group">
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">12</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="12">
               Le titre de la page est unique et pertinent
            </button>
          </h3>
          <div class="fr-collapse" :id="12">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Le titre de la page s’affiche dans l’onglet du navigateur.</p>
              <p>Il permet l’identification des contenus de la page dans l’onglet, dans les favoris, dans l’historique de navigation, dans la fenêtre du navigateur ou encore par les lecteurs d’écran.</p>
              <p>Un titre pertinent améliore le référencement et la présentation dans les moteurs de recherche.</p>
              <h4>Comment contrôler ?</h4>
              <p>
              Contrôler que :
              </p>
              <ul>
              <li>Le titre de chaque page est composé du titre de son contenu, suivi du nom du site ;</li>
              <li>Le titre est pertinent et unique ;</li>
              <li>Sur une page de résultat de recherche, le titre est "Résultat de la page de recherche de xxx page 1 - nom du site" ;</li>
              <li>Sur une page de confirmation d’action, le titre indique le résultat de l’action (suivi du nom du site).</li>
              </ul>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">13</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="13">
               Les textes et les éléments graphiques porteurs d’informations sont présentés avec un contraste suffisant par rapport à leur arrière-plan
            </button>
          </h3>
          <div class="fr-collapse" :id="13">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Afin de permettre une bonne lisibilité des contenus et de limiter la charge mentale lors de la consultation, le ratio de contraste entre le texte - y compris du texte sous forme d’image - et son arrière-plan doit être d’au moins 4,5:1.</p>
              <p>Pour les textes en gras ou agrandis (taille restituée supérieure ou égale à 24px, équivalent à de l’Arial 18), ce ratio doit être d’au moins 3:1.</p>
              <p>Dans le cas de graphique, le contraste entre chaque élément (courbe, bâton, part de camembert, etc.) doit être également suffisant.</p>
              <h4>Comment contrôler ?</h4>
              <p>Contrôler que les contrastes sont respectés à l’aide, par exemple, de l’extension de navigateur Contrast Checker (symbolisée par une roue multicolore).</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">14</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="14">Chaque champ de formulaire est clairement associé à son intitulé. Les champs et les formats obligatoires sont indiqués
</button>
          </h3>
          <div class="fr-collapse" :id="14">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>L’association - visuellement et dans le code - entre l’intitulé, le champ concerné et les informations de saisie (type de donnée demandé, format, champ obligatoire, etc.) évite l’agacement et l’incompréhension des utilisateurs. Elle leur permet d’identifier sans ambiguïté les champs de formulaire et la nature des informations à saisir, et ainsi de prévenir les erreurs. Elle améliore l’accessibilité en permettant l’utilisation des aides techniques (les lecteurs d’écran par exemple).</p>
              <h4>Comment contrôler ?</h4>
              <p>Pour tout champ de saisie, notamment dans les formulaires, contrôler que :</p>
              <ul>
              <li>En cliquant sur les intitulés des champs, le curseur vient bien se positionner dans le champ concerné ;</li>
              <li>Les intitulés des champs sont accolés soit immédiatement au-dessus ou à gauche du champ ;</li>
              <li>Une mention est présente pour les champs dont la saisie est obligatoire, soit explicitement, soit par le biais d’une indication (souvent un astérisque) dont l’explication est donnée au début du formulaire ;</li>
              <li>Pour tout champ de formulaire présentant un type de donnée ou un format obligatoire, l’utilisateur est informé ;</li>
              <li>Tout message d’erreur identifie le champ concerné.</li>
              </ul>             
            </div>
          </div>
        </li>

        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">15</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="15">
               La hiérarchie des titres est complète et cohérente
            </button>
          </h3>
          <div class="fr-collapse" :id="15">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>La mise en page - permet avant tout la navigation sur la page pour les utilisateurs aveugles ayant un lecteur d’écran ou un clavier braille : ils ont ainsi connaissance de la structuration de la page et peuvent naviguer de titre en titre sans être obligés de lire l’ensemble du contenu.</p>
              <p>Ce principe est d’ailleurs valable pour les outils bureautiques de type Document Writer ou Word ou encore PDF : il est indispensable d’utiliser les "styles" et non pas une mise en forme du texte.</p>
              <p>De manière plus générale, une bonne hiérarchisation permet une meilleure visualisation et permet l’extraction du plan de chaque page aux outils dédiés (dont ceux d’indexation, avec par conséquent un meilleur référencement).</p>
              <h4>Comment contrôler ?</h4>
              <p>Lancer l’extension headingsMap (symbolisée par le pictogramme <strong>[h/]</strong>). Vérifier qu’il y a au moins un titre de niveau 1 et que l’arbre des titres est logique et cohérent (il ne doit pas y avoir de "trous" : un titre de niveau <code>h2</code> ne doit pas être suivi d’un titre <code>h4</code>, <code>h5</code> ou <code>h6</code>, par exemple).</p>
            </div>
          </div>
        </li>

        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">16</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="16">
               Le soulignement est réservé aux liens
            </button>
          </h3>
          <div class="fr-collapse" :id="16">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Réserver le soulignement aux liens facilite leur identification et évite à l’utilisateur des clics inutiles sur des contenus soulignés perçus comme des hyperliens.</p>
              <h4>Comment contrôler ?</h4>
              <p>Vérifier que seuls les liens sont soulignés.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">17</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="17">
               Pas de contenu clignotant ou en mouvement
            </button>
          </h3>
          <div class="fr-collapse" :id="17">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Les contenus clignotants ou en mouvement peuvent perturber l’attention des personnes naviguant votre site. Il est important de laisser à l’utilisateur le contrôle des animations.</p>
              <h4>Comment contrôler ?</h4>
              <p>S’assurer que chaque animation (gif, carrousel, etc.) est accompagnée d’un bouton stop ou pause.</p>
            </div>
          </div>
        </li>
        <li  class="fr-accordion">
          <h3 class="fr-accordion__title"><span class="numero">18</span>
            <button class=" fr-accordion__btn" aria-expanded="false" :aria-controls="18">
               Le niveau de conformité est affiché sur toutes les pages
            </button>
          </h3>
          <div class="fr-collapse" :id="18">
            <div class="fr-accordion__inner">
              <h4>Pourquoi ?</h4>
              <p>Non seulement le service en ligne doit être conforme au RGAA, mais il doit aussi indiquer son niveau de conformité sur la page d’accueil.  </p>
              <h4>Comment contrôler ?</h4>
              <p>Vérifier que la page d’accueil comporte l’une des trois mentions suivante :</p>
              <ul>
              <li>Accessibilité : totalement conforme</li>
              <li>Accessibilité : partiellement conforme</li>
              <li>Accessibilité : non conforme</li>
              </ul>
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
  code {
    border: 1px solid var(--border-default-purple-glycine);
    color: var(--border-default-purple-glycine);
    padding:0.1rem;
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
