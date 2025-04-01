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

### Démarrer le projet

1. Lancer le serveur de développement Gridsome :

```bash
yarn develop
```

2. Lancer le serveur proxy PHP pour les appels à l'API Grist du browser (inscription, demande d'accompagnement, candidature) :

```bash
docker-compose up
```

Le proxy PHP est nécessaire pour gérer les appels à l'API Grist en contournant les problèmes de CORS. Il tourne sur le port 8000 et gère automatiquement l'authentification avec votre clé API Grist configurée dans le fichier `.env`.

**Note** : Cette solution utilise les capacités PHP du module Static de CleverCloud pour gérer les appels API sans avoir besoin d'un backend dédié. Le fichier grist-proxy.php est automatiquement inclus dans le build (dossier /dist) lors du déploiement en production.

# Licence

Le code source de ce dépôt est publié sous [licence MIT](LICENSE.md#licence-mit).

Sauf mention de propriété intellectuelle détenue par des tiers (notamment
un crédit sur certaines images), les contenus de ce dépôt sont publiés sous [licence Ouverte 2.0](#licence-ouverte-20open-licence-20).

La marque d'État est à usage exclusif des acteurs de la sphère
étatique. En particulier, la typographie Marianne© est protégée par
le droit d'auteur. [Lire les explications sur le site de la marque
d'État.](https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/la-typographie)
