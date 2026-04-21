---
id: 1
title: C’est quoi, une alternative textuelle pertinente ? 
order: 19
cat: 3
tag: ça dépend du contexte
---
Le Référentiel général d’amélioration de l’accessibilité (RGAA) indique à plusieurs reprises la nécessité de proposer une «&nbsp;alternative textuelle&nbsp;» et que celle-ci soit «&nbsp;pertinente&nbsp;».

<div class="fr-callout fr-callout--purple-glycine fr-mt-4w">
        <p class="fr-callout__text"><span aria-hidden="true">💡 </span>Dans les 250 tests des 106 critères du RGAA, «&nbsp;alternatif&nbsp;» et «&nbsp;alternative&nbsp;» apparaissent 29 fois, «&nbsp;pertinent&nbsp;» et «&nbsp;pertinente&nbsp;» 21 (les deux n’étant pas toujours associés). Sont notamment concernés&nbsp;: images, captchas, titres, multimédia, tableaux, scripts, étiquettes, légendes, intitulés, contrôles de saisie…</p>
</div>

L’exemple type est celui de l’image&nbsp;: que proposer à une personne aveugle ou malvoyante&nbsp;?

1. Si l’image est décorative, on ne propose aucune alternative&nbsp;: ce ne serait que du bruit inutile (littéralement dans le cas d’un lecteur vocal) dans la navigation du site.

    Dans ce cas, il faut que, dans le code (qui apparait en cliquant droit sur l’image et en sélectionnant «&nbsp;inspecter&nbsp;»), l’alternative `alt` à l’image `img` soit vide `alt=""`&nbsp;; s’il n’y a pas d’alternative `alt` , le lecteur d’écran lira le nom de l’image `src="n0m_1mb1t4bl3_4_b4s3_d3_ch1ffr3s_3t_d3_l3ttr3s"`, ce qui constitue aussi du bruit (désagréable).
    
2. Si l’image est porteuse de sens, il faut proposer une alternative textuelle.
    * S’il s’agit d’une image simple, l’alternative  `alt` à l’image `img` doit être renseignée dans le code.
    * S’il s’agit d’une image complexe (par exemple un schéma ou un graphique élaboré), l’alternative  `alt` à l’image `img` est laissée vide  `alt=""` dans le code&nbsp;: l’alternative est proposée clairement (par exemple un lien ou un accordéon) à proximité de l’image.
        
        Ça n’est pas le sujet ici, mais tant qu’on vous tient&nbsp;: sur les schémas et graphiques *aussi* les informations ne doivent pas être véhiculées que par la couleur (il est possible d’ajouter des flèches et des textures par exemple) et les contrastes entre éléments et avec l’arrière-plan doivent être respectés. Un exemple au hasard&nbsp;: que penseraient les personnes malvoyantes et daltoniennes d’une carte de France en rouge-orange-vert en fonction des restrictions de sorties dans le cadre d’une pandémie&nbsp;?
        
3. Si une alternative textuelle est nécessaire, celle-ci doit être *pertinente*. Une alternative textuelle pertinente n’est pas une description, c’est la transmission des informations importantes et nécessaires pour la compréhension. L’alternative d’un graphique ne sera pas une description des formes et des couleurs, mais sera une liste d’éléments associés à des chiffres.
    
    Prenons un exemple&nbsp;: une photo, l’accueil d’un dignitaire étranger par le président de la République, sur le perron de l’Élysée. Quelle serait l’alternative à cette image&nbsp;?
    
    - S’il s’agit d’une image décorative&nbsp;: l’alternative  `alt` à l’image `img` est laissée vide  `alt=""`
    - S’il s’agit d’une information journalistique sur une rencontre diplomatique&nbsp;: les protagonistes sont présentés, les éléments jugés pertinents de la scène sont décrits - vous débattrez ensuite avec votre auditeur RGAA de l’importance de dire que l’un à la main rouge et le sourire crispé tellement l’autre sert fort.
    - S’il s’agit d’un site sur les uniformes de l’armée&nbsp;: les soldats de la Garde républicaine de part et d’autre du perron sont détaillés, le serrage de main central peut être ignoré.
    - S’il s’agit du site du vendeur de tapis&nbsp;: le tapis rouge et sa disposition sont décrits.
    - Etc.

Quel que soit le média ou l’élément, le principe reste le même. C’est une des raisons pour lesquelles les tests automatiques ne sont pas en mesure de contrôler les critères du RGAA dans leur intégralité.
