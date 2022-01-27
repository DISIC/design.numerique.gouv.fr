# Contribuer au dépôt  <!-- omit in toc -->

Vos contributions sont les bienvenues !

## Langue

1. Ce qui concerne le métier : en **Français** :fr:
    - README
    - Pull Request
    - Documentation
    - Commit de contenu
    - …
2. Ce qui concerne la mécanique du code : en **Anglais** :gb:  
   _(cohérence avec les langages de programmation)_
    - Commit lié au code
    - …

## Les process de mise à jour de DesignGouv

### Je modifie du contenu en <span lang="en">Markdown</span>

Exemples :
* Je suis M et je publie une offre d’emploi
* Je suis A et je rectifie un critère du Diag Flash ou un article
* Je suis U et j’actualise un défi du commando
* Je suis B et je précise une étape du jeu de l’oaa
Ces contenus peuvent être modifiés directement depuis le dépot github
https://github.com/DISIC/design.numerique.gouv.fr/tree/master/content

### J’ajoute une fonctionnalité ou une rubrique

Exemples :
* Je suis U et j’enrichie la rubrique Design
* Je suis B et je veux mettre à jour le DSFR

La méthode est la suivante :
* Je créé une branche MA-FONC depuis master.
* Je travaille sur ma branche en faisant attention de faire des commits atomiques bien commentés
* Une fois les tests unitaires effectués, je propose une PR sur develop à revoir par une personne de l’équipe (B, M ou U)
* Si ok, merge & push develop
* Je navigue sur la preview en desktop ET mobile et vérifie le bon affichage des pages
* Si ok, merge & push master
* rebase & push develop
* Je supprime ma branche MA-FONC

### J’apporte une correction ou propose une évolution mineure

Exemples :
* Je suis U et je modifie la couleur du focus sur les boutons
* Je suis B et je veux mettre à jour le DSFR
* Je suis M et je veux ajouter une personne à l’équipe

La méthode est la suivante :
* Je travaille sur develop en faisant attention de faire des commits atomiques bien commentés
* Une fois les tests unitaires effectués, je propose une PR sur master à revoir par une personne de l’équipe (B, M ou U)
* Si ok, merge & push master
* rebase & push develop

### Tests minimum à effectuer avant déploiement

En plus des tests unitaires, naviguer sur le site en desktop ET mobile et vérifier le bon affichage des pages suivantes (surtout si on est vendredi):
* la page d’accueil
* un défi
* le jeu de l’oaa et ouvrir une modale
