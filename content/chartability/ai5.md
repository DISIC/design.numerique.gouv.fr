---
id: 41
title: Mauvaise gestion de l’espace dans le cas de valeurs extrêmes
cat: 6
critical: false
origin: "community practice"
reference_link:
reference_name:
---

Dans un graphique, l’utilisation de l’espace doit tenir compte des écarts extrêmes au sein des données, ou de leurs similitudes marquées, afin d’éviter qu’un graphique devienne illisible.

Cela peut arriver quand les données sont trop regroupés ou au contraire très différentes. Le graphique doit gérer automatiquement ces cas ou, à défaut, indiquer clairement à l’utilisateur ce qui se passe au moyen d’annotations.

Si les données sont dynamiques ou s’il est impossible de générer des annotations automatiques, le graphique doit permettre à l’utilisateur de trier, de diviser ou de filtrer l’espace d’affichage par lui-même.

<p class="fr-text--sm">
Les données réelles sont souvent problématiques. Ce phénomène est fréquent lorsque le format d’un graphique est prédéfini. Les graphiques devraient être suffisamment adaptables et flexibles pour gérer les valeurs extrêmes (en s’agrandissant ou en se modifiant selon les nouveaux paramètres), mais ils doivent aussi savoir détecter les cas où les paramètres génèrent des données qui se chevauchent dans un même espace (un point abordé dans une autre heuristique). Si deux courbes sont si proches qu’il devient presque impossible de les distinguer, il peut s’avérer nécessaire de choisir un autre type de graphique ou d’appliquer un filtrage.
</p>

<h5>Pour aller plus loin</h5>
<ul class="fr-text--sm">
  <li>Exemple d’implémentation : <a class="fr-link fr-text--sm" lang="en" href="https://medium.com/data-science/data-visualisation-principles-part-1-white-space-text-and-colour-13f520f90ce9">Data Visualisation Principles Part 1: White Space, Text and Colour</a></li>
</ul>
