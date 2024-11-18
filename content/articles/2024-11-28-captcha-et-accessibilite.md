---
title: Captcha et Accessibilité. Les personnes handicapées ne sont pas des robots !
slug: 2024-11-28-captcha-et-accessibilite
publishedDate: 2024-11-28
tags: [ "accessibilité", "RGAA"]
illustration:  ./illustrations/2023-10-19-ateliers-de-formation.png
description: "Dans cet article, nous vous expliquons ce que sont les Captcha et pourquoi certains posent problèmes. Enfin, nous présenterons des alternatives viables et des bonnes pratiques pour protéger vos sites tout en étant accessible."
---

<p class="fr-text--lead">Que ce soit pour se connecter à un compte, s’inscrire à une newsletter, les Captcha sont partout sur internet. Conçu pour  protéger les sites internet contre certaines attaques informatiques, ils permettent de différencier les utilisateurs humains des machines. Cependant, certains Captcha ne sont pas accessibles : qu’ils s’agissent de textes déformés, de puzzles visuels ou de tests audio, ces tests ne bloquent pas seulement les robots mais excluent aussi des millions d’utilisateurs en situation de handicap. </p>

<p class="fr-text--lead">Dans cet article, nous vous expliquons ce que sont les Captcha et pourquoi certains posent problèmes. Enfin, nous présenterons des alternatives viables et des bonnes pratiques pour protéger vos sites tout en étant accessible.</p>



## Que sont les Captcha ?

Captcha est un acronyme de « <span lang="en">Completely Automated Public Turing test to tell Computers and Humans Apart</span> » que l’on peut traduire littéralement par « test public de Turing entièrement automatisé pour distinguer les ordinateurs des humains ». 

C’est un type de test de sécurité qui est conçu pour distinguer un utilisateur humain d’un robot lors d’une interaction avec un site web. Ils sont utilisés pour sécuriser les sites internet contre des soumissions de formulaires automatisées et répétées par des robots. Par exemple pour éviter qu’un robot génère des milliers de fausses demandes sur une procédure en ligne. Ces attaques peuvent aller jusqu’à provoquer une interruption de service.

Il existe aujourd’hui une grande variété de Captcha allant du texte déformé à l’analyse du comportement de l’utilisateur par une IA (Intelligence Artificielle). 

## Quels sont les Captcha qui ne sont pas accessibles ?

**Les Captcha les plus couramment utilisés posent des problèmes majeurs d’accessibilité empêchant certains utilisateurs et utilisatrices en situation de handicap d’accéder à des services numériques.** Ainsi des outils conçus initialement pour se prémunir d’un déni de service sont ironiquement à l’origine d’un *déni de service public* pour ces usagers.

En 2024, [l’étude de WebAIM (en anglais)](https://webaim.org/projects/screenreadersurvey10/#problematic) relève que les Captcha sont toujours les éléments les plus gênants sur internet pour les personnes utilisant un lecteur d’écran.

### Les Captcha visuels

Ces Captcha sont basés sur la reconnaissance d’un texte ou d’une image.

#### Captcha textuel
L’utilisateur doit lire un texte déformé affiché dans une image et le recopier.
<figure class="fr-content-media--sm" role="group" aria-label="Exemple de Captcha textuel">
    <div class="fr-content-media__img">
        <img src="/assets/images/captcha-txt.png" class="fr-responsive-img" alt="" />
    </div>
    <figcaption class="fr-content-media__caption">Exemple de Captcha textuel</figcaption>
</figure>
    

#### Captcha basé sur des images
L’utilisateur doit sélectionner des images correspondant à une instruction (par exemple ”Sélectionnez toutes les images contenant des passages piétons” ou “Déplacez l’objet pour qu’il soit orienté dans la position de la flèche”).
    
  <figure class="fr-content-media--sm" role="group" aria-label="Exemple de Captcha basé sur les images">
    <div class="fr-content-media__img">
        <img src="/assets/images/captcha-img.png" class="fr-responsive-img" alt="" />
    </div>
    <figcaption class="fr-content-media__caption">Exemple de Captcha basé sur les images</figcaption>
</figure>
    
    

Les Captcha visuels sont basés sur des éléments graphiques et **sont donc impossibles à résoudre pour une personne aveugle ou malvoyante**, même avec un lecteur d’écran. En effet, ces captcha n’ont pas de texte alternatif qui serait lu par les lecteurs d’écran — mais aussi par un robot qui pourrait alors le résoudre, le rendant inutile.

### Les Captcha sonores

Ces Captcha sont utilisés en complément des Captcha visuels pour les personnes aveugles ou malvoyantes. L’utilisateur doit écouter un enregistrement audio et écrire les lettres ou les chiffres dictés. 

<figure class="fr-content-media--sm" role="group" aria-label="Exemple de Captcha sonore, en complément du Captcha textuel">
    <div class="fr-content-media__img">
        <img src="/assets/images/captcha-son.png" class="fr-responsive-img" alt="" />
    </div>
    <figcaption class="fr-content-media__caption">Exemple de Captcha sonore, en complément du Captcha textuel</figcaption>
</figure>


**Il n’est pas utile de préciser que les Captcha sonores sont inutilisables par les personnes sourdes**. De plus, la qualité de l’enregistrement est parfois réduite volontairement pour ne pas être reconnue par un robot ce qui **peut le rendre aussi inutilisable pour certaines personnes, d’autant plus pour des personnes malentendantes**.

**Proposer une alternative sonore à un Captcha textuel n’est pas suffisant** (mais représente tout de même une amélioration ) ! Une personne ayant des troubles visuels et auditifs, par exemple sourde-aveugle, ne pourra compléter aucune des deux versions. De plus, au lancement de l’enregistrement dictant le texte à renseigner, le lecteur d’écran peut fournir le message “lecture d’un fichier audio”. Cette information vient se superposer au début du message enregistré le rendant inaudible. Par ailleurs certains Captcha sonores ne différencient pas les majuscules des minuscules. Il est par ailleurs extrêmement difficile de mémoriser la réponse car elle n’a aucun sens. Une personne aveugle ou malvoyante utilisant un lecteur d’écran ne pourra alors ni remplir le Captcha textuel, ni le Captcha sonore.

### Les Captcha puzzles

Certains Captcha demandent à l’usager de compléter un puzzle logique. Par exemple, cela peut être de glisser-déposer une pièce d’un puzzle pour compléter une image. 

Une partie de ces Captcha reposent sur des éléments graphiques et ne sont donc pas accessibles. Ils peuvent aussi demander des tâches trop complexe pour des personnes ayant des troubles cognitifs ou encore reposer sur des actions qui nécessitent une souris et sont donc non réalisables pour une personne navigant au clavier. 

### reCaptcha et les Captcha invisibles

Ce Captcha (la fameuse case à cocher “je ne suis pas un robot”) est basé sur l’analyse du comportement de l’utilisateur. Une IA évalue le comportement de l’utilisateur pour évaluer s’il s’agit d’un humain ou d’un robot. **Si l’algorithme suspecte un robot, un Captcha traditionnel (visuel ou sonore) est utilisé. Ces Captcha ne sont donc pas accessible non plus.** 

De plus, pour analyser le comportement de l’usager cet algorithme se base sur les données de l’utilisateur qui sont envoyées à l’étranger et ne doit donc pas être utilisé par l’administration française.   

## Quelles sont les alternatives accessibles ?

Il existe plusieurs alternatives aux Captcha non accessibles décrits précédemment. 

### Pot de miel

Le <span lang="en">Honeypot</span> (« pot de miel ») consiste à ajouter un champ qui est invisible pour les humains mais sera rempli par un robot. Ainsi, quand le formulaire est soumis, il suffit de vérifier si ce champ est rempli. Un honeypot **ne** **rajoute pas d’action à l’usager** et est **très simple à mettre en place**.

### Question simple

Ces Captcha posent une question simple, de la vie courante ou de calcul basique. Par exemple « Combien font 2 + 3 » ou « Je mange mon lait et mes céréales le matin dans… : un bol, une assiette plate ou une gourde ? ». Ces questions sont très simples pour des humains mais peuvent être trop complexe pour des robots qui ne sont pas programmés pour comprendre du langage humain. 

Pour ces Captcha il faut s’assurer que les questions sont très simples pour être sur qu’elles ne posent pas de barrière aux usagères et usagers du service.

### Preuve de travail

La preuve de travail consiste à faire “travailler” l’ordinateur de l’utilisateur d’un site internet. Il s’agit d’une tâche qui demande une puissance de calcul importante au moment de soumettre un formulaire. Cette charge ne pose, en général, pas de problème pour une personne seule sur son ordinateur mais peut bloquer des robots qui ont des ressources limitées pour assurer leur grand nombre. 

Comme le pot de miel, cette technique est transparente pour l’usager.
<div class="fr-callout fr-icon-information-line">
    <p class="fr-callout__text">
Attention cependant, cette réponse n’est pas une bonne pratique d’un point de vue de l’éco-conception d’un service et peut poser des problèmes si l’usager utilise un ordinateur ou smartphone très peu puissant. 
Préférez donc les solutions précédentes dans la mesure du possible.</p>
</div>


## Sécurité

Qu’ils soient accessibles ou non, les Captcha ne représentent qu’une protection limitée. 

En effet, depuis 2014 [les algorithmes de Google peuvent résoudre les Captcha textuels avec une précision de 99% (en anglais)](https://security.googleblog.com/2014/04/street-view-and-recaptcha-technology.html). Une étude plus récente a montré que, grâce à l’avancée en matière de reconnaissance d’image des intelligences artificielles, [les robots sont plus rapides et plus précis que les humains pour compléter un Captcha (en anglais)](https://arxiv.org/abs/2307.12108).  Par exemple, pour un Captcha de texte déformé, les humains ont mis entre 9 et 15 secondes avec une précision de 50 à 84%, là où les robots ont mis moins d’une seconde avec une précision de 99,8%.  

De la même manière, les Captcha accessibles présentés précédemment ne sont pas infaillibles. Un robot adapté pourra détecter et donc ignorer un honeypot ou répondre à une question simple. Avec suffisamment de ressources, il pourra aussi ne pas être impacté par la preuve de travail. 

La protection d’un service numérique ne doit donc pas reposer uniquement sur un Captcha. Il faut aussi mettre des protections au niveau du réseau (réseau de distribution de contenu, équilibreur de charge, pare-feu …) et d’autre couche du service numérique. 

Il n’existe pas de solution miracle qui répond à tous les cas. Tout comme on ne protège pas de la même manière un coffre de banque qu’un casier dans un vestiaire, il faut choisir un ensemble de solutions adaptées aux risques. Et autant que possible, ne faites pas reposer la sécurité de votre service numérique sur vos utilisateurs.

## Quand et comment mettre en place un Captcha ?

Avant de mettre en place un Captcha sur votre site internet, il faut se poser quelques questions. A-t-on réellement besoin d’un Captcha ? Pourquoi ? Quel est le risque de ne pas en utiliser ? Quel est l’impact sur nos usagers ?

Si vous arrivez à la conclusion que vous devez en utiliser un, **il faut premièrement choisir un Captcha accessible**. 

Deuxièmement, il est plus judicieux de ne pas utiliser un Captcha tout le temps auprès de tous vos usagers. **Testez qu’il s’agit bien d’un humain seulement quand il y a un doute** (nombre de souscription trop élevé dans un laps de temps trop court etc.). De la même manière il n’est pas nécessaire d’afficher un Captcha si un usager est authentifié via [FranceConnect](https://franceconnect.gouv.fr/) : on est assuré qu’il s’agit de la bonne personne.

Enfin, si l’on vous impose l’utilisation d’un Captcha “traditionnel” non accessible, vous devez mettre en place des alternatives pour palier à ce problème (une personne contact pour faire la démarche par exemple. Pensez aussi à prendre aussi le Captcha le moins limitant possible.

<div class="fr-callout fr-icon-information-line">
    <p class="fr-callout__text">
À noter qu’un Hackaton sera organisé en début d’année 2025 pour améliorer l’accessibilité de la solution CAPCHÉTAT.  
</p>
</div>

## Conclusion

Il est essentiel que les solutions de sécurité soient traitées en prenant en compte leur impact sur les usagers du service. La sécurité d’un service numérique ne doit pas se faire au détriment de personnes en situation de handicap. 

Les alternatives accessibles présentées dans cet article doivent être envisagées lors de la conception de la sécurité d’un service numérique.

Si vous souhaitez allez plus loin sur les Captcha et l’accessibilité, Vous pouvez consulter l’article en anglais [“Inaccessibility of CAPTCHA”](https://www.w3.org/TR/turingtest/) rédigé par un groupe de travail du W3C (World Wide Web Consortium, qui est l’organisme de standardisation d’internet à l’échelle mondiale).