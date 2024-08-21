# DesignGouv
## Concevons des services publics numériques accessibles, inclusifs et humains.
DesignGouv rassemble les agents publics soucieux de la qualité des services numériques et met à disposition des outils pour leur amélioration.

### Installation

- `git clone git@github.com:DISIC/design.numerique.gouv.fr.git`
- `yarn global add @gridsome/cli`
- `yarn`

### Démarrer le projet
- Entrer dans le projet `cd design.numerique.gouv.fr`
- Créez un fichier .env contenant les variables suivantes :
  - GRIDSOME_AIRTABLE_API_KEY: clé d'API Airtable pouvant être trouvé une fois loggué dans airtable.com, sous "ACCOUNT > API"
  - GRIDSOME_AIRTABLE_COURSE_NEW_BASE: Base de donnée pouvant être trouvée en allant sur https://airtable.com/api puis sur le workspace contenant les données, et sera visible dans l'url: https://airtable.com/{YOUR_BASE_ID}/api/docs#curl/introduction
- Exécuter `gridsome develop` pour démarrer un environnement local


# Licence
Le code source de ce dépôt est publié sous [licence MIT](LICENSE.md#licence-mit).

Sauf mention de propriété intellectuelle détenue par des tiers (notamment
un crédit sur certaines images), les contenus de ce dépôt sont publiés sous [licence Ouverte 2.0](#licence-ouverte-20open-licence-20).

La marque d'État est à usage exclusif des acteurs de la sphère
étatique. En particulier, la typographie Marianne© est protégée par
le droit d'auteur. [Lire les explications sur le site de la marque
d'État.](https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/la-typographie)
