# DesignGouv
## Concevons des services publics numériques accessibles, inclusifs et humains.
DesignGouv rassemble les agents publics soucieux de la qualité des services numériques et met à disposition des outils pour leur amélioration.

### Installation

- `git clone git@github.com:DISIC/design.numerique.gouv.fr.git`
- `yarn global add @gridsome/cli`
- `yarn`

### Démarrer le projet
- Entrer dans le projet `cd design.numerique.gouv.fr`
- Exécuter `gridsome develop` pour démarrer un environnement local


# Licence
Le contenu de ce dépôt est placé sous [licence MIT](LICENSE), à l'exception du répertoire : `/src/assets/fonts/Marianne/`. 




## Les process de mise à jour de DesignGouv

### Je modifie du contenu en md

Exemples :
* Je suis M et je publie une offre d’emploi
* Je suis A et je rectifie un critère du Diag Flash
* Je suis U et j’actualise un défi du commando
* Je suis B et je précise une étape du jeu de l’oaa

Ces contenus peuvent être modifiés directement depuis le dépot github 
https://github.com/DISIC/design.numerique.gouv.fr/tree/master/content


### J’ajoute une fonctionnalité ou une rubrique

Exemples : 
* Je suis U et j’enrichie la rubrique _Design_
* Je suis B et je veux mettre à jour le _DSFR_

La méthode est la suivante :
* Je créé une branche _MA-FONC_ depuis master.
* Je travaille sur ma branche en faisant attention de faire des commits atomiques bien commentés
* Une fois les *tests unitaires* effectués, je propose une PR sur develop à revoir par une personne de l'équipe (B, M ou U)
* Si ok, *merge & push develop*
* Je navigue sur la preview en desktop ET mobile et vérifie le bon affichage des pages 
* Si ok, *merge & push master*
* *rebase & push develop*
* Je supprime ma branche _MA-FONC_


### J’apporte une correction ou propose une évolution mineure

Exemples : 
* Je suis U et je modifie la couleur du focus sur les boutons
* Je suis B et je veux mettre à jour le _DSFR_
* Je suis M et je veux ajouter une personne à l’équipe

La méthode est la suivante :
* Je travaille sur _develop_ en faisant attention de faire des commits atomiques bien commentés
* Une fois les *tests unitaires* effectués, je propose une PR sur master à revoir par une personne de l'équipe (B, M ou U)
* Si ok, *merge & push master*
* *rebase & push develop*


### Tests minimum à effectuer avant déploiement 

En plus des tests unitaires, naviguer sur le site en desktop ET mobile et vérifier le bon affichage des pages suivantes (surtout si on est vendredi):
* la page d’accueil
* un défi
* le jeu de l’oaa et ouvrir une modale


