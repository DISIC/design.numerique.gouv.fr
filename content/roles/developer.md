---
title: Développeur ou développeuse
slug: developer
cat: Mettre en oeuvre
description: Vous utilisez ou développez des composants d’interfaces accessibles et conformes au RGAA
---

## Comprendre

Rencontrer un utilisateur en situation de handicap utiliser votre site.

## Se former

Former vous à la conception et au développement d’interfaces accessibles et conformes au RGAA.

## Développer accessible

Utiliser des [composants fiables et éprouvés](https://www.systeme-de-design.gouv.fr/){composants fiables et éprouvés - nouvelle fenêtre}

### Revoir le code

La revue de code avec un expert accessibilité permet d’une part de résoudre de nombreux blocages et d’acquérir de nouvelles compétences d’autre part.

## Gabarits statiques (html/css/js)

* Le premier livrable doit impérativement contenir un styleguide responsive inspiré de celui du graphiste. Ce gabarit sera audité au regard de la Checklist Pidila, notamment le RGAA.
* Sources non compilées (si usage d'un préprocesseur)
* js non minifié aux premières livraisons
* Compat navigateurs : à fixer par le chef de projet/produit au cadrage (au minimum ceux recommandés au RGI)
* Préférence mobile first (peut être utilisé en fallback pour les vieux nav)
* Document d’accompagnement : méthodo d’inté, mécanique des templates…


## Tester

Après avoir réalisé une nouvelle fonctionnalité ou une nouvelle page, vous pouvez faire quelques **tests manuels** et vérifications rapides avant de livrer votre travail pour la revue de code ou en recette.

Les points ci-dessous ne constituent pas des vérifications suffisantes pour établir que la fonctionnalité ou la page seront accessibles mais sont des tests qui devraient être systématiquement opérés avant de transmettre le code pour la revue ou la recette :
* Le titre de la page est unique et pertinent
* La balise html possède l'attribut lang avec la valeur de la langue principale
* Le code html est valide au regard de la DTD
* La page est entièrement navigable et utilisable au clavier
* La sémantique des balises html est correctement utilisée
* Chaque champ de formulaire est associé à son étiquette


### Attention aux outils de tests automatiques

Ils ne couvrent qu’une petite partie des tests RGAA