# DesignGouv

## Concevons des services publics numériques accessibles, inclusifs et humains.

DesignGouv rassemble les agents publics soucieux de la qualité des services numériques et met à disposition des outils pour leur amélioration.

### Installation

1. Cloner le projet :

```bash
git clone git@github.com:DISIC/design.numerique.gouv.fr.git
```

2. Installer les dépendances :

```bash
yarn global add @gridsome/cli
yarn
```

3. Configurer les variables d'environnement :

```bash
cp .env.example .env
```

Puis modifiez le fichier `.env` avec vos valeurs :

- `GRIDSOME_GRIST_API_KEY` : Votre clé API Grist
- `GRIDSOME_GRIST_TRAINING_DOC_ID` : L'ID du document Grist pour les formations
- `GRIDSOME_GRIST_REQUESTS_DOC_ID` : L'ID du document Grist pour les demandes d'accompagnement
- `GRIDSOME_GRIST_URL` : L'URL de votre instance Grist
- `GRIDSOME_CORS_PROXY` est déjà configuré avec `https://thingproxy.freeboard.io/fetch/`

### Démarrer le projet

- Entrer dans le projet : `cd design.numerique.gouv.fr`
- Exécuter `gridsome develop` pour démarrer un environnement local

# Licence

Le code source de ce dépôt est publié sous [licence MIT](LICENSE.md#licence-mit).

Sauf mention de propriété intellectuelle détenue par des tiers (notamment
un crédit sur certaines images), les contenus de ce dépôt sont publiés sous [licence Ouverte 2.0](#licence-ouverte-20open-licence-20).

La marque d'État est à usage exclusif des acteurs de la sphère
étatique. En particulier, la typographie Marianne© est protégée par
le droit d'auteur. [Lire les explications sur le site de la marque
d'État.](https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/la-typographie)
