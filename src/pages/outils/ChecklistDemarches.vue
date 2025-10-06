<template>
  <Layout>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
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
              <g-link to="/outils/" class="fr-breadcrumb__link">Outils</g-link>
            </li>
            <li>
              <a class="fr-breadcrumb__link" aria-current="page"
                >Bonnes pratiques pour les démarches</a
              >
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">Bonnes pratiques pour les démarches</h1>
        <p class="fr-text--lead">
          Les citoyens les utilisent au quotidien. Pourtant,
          <a
            href="https://www.insee.fr/fr/statistiques/6438420"
            target="_blank"
            title="un tiers d'entre eux ont dû abandonner une démarche en ligne en 2021 - Nouvelle fenêtre"
            >un tiers d'entre eux ont dû abandonner une démarche en ligne en
            2021</a
          >
          à cause des difficultés qu'ils ont rencontrées. Une bonne démarche en
          ligne doit être <strong>simple, claire et accessible</strong>.
        </p>
      </div>
    </section>

    <section class="dg-content fr-px-2w">
      <div class="fr-notice fr-notice--info">
        <div class="fr-container">
          <div class="fr-notice__body">
            <p>
              <span class="fr-notice__title"
                >Ce guide s'adresse aux responsables produit / chefs de projet
                pour les aider à anticiper.
              </span>
              <span class="fr-notice__desc"
                >Il ne remplace pas le recourt aux compétences indispensables à
                la conception d'un bon service numérique (designer, expert en
                accessibilité numérique, etc.).</span
              >
            </p>
            <button
              title="Masquer le message"
              onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)"
              id="button-1299"
              class="fr-btn--close fr-btn"
            >
              Masquer le message
            </button>
          </div>
        </div>
      </div>

      <h2 class="fr-mt-6w">1️⃣ Préparer les travaux</h2>
      <p>
        Un bon formulaire passe par une bonne préparation des travaux liés à sa
        création / sa refonte.
      </p>
      <ul class="dg-list-no-decoration">
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Compétences" id="Compétences" type="checkbox" />
          <label class="fr-label" for="Compétences">
            <strong>Compétences&nbsp;</strong>: y a-t-il une designer et un
            expert en accessibilité numérique dans l&#39;équipe ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Besoins" id="Besoins" type="checkbox" />
          <label class="fr-label" for="Besoins">
            <strong>Besoins</strong> : les besoins des usagers ont-ils été
            recueillis et pris en compte ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Pertinence" id="Pertinence" type="checkbox" />
          <label class="fr-label" for="Pertinence">
            <strong>Pertinence</strong> : la démarche répond-elle à un besoin
            usager concret ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Automatisation" id="Automatisation" type="checkbox" />
          <label class="fr-label" for="Automatisation">
            <strong>Automatisation</strong> : la démarche peut-elle être rendue
            automatique (proactivité) ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Écosystème" id="Écosystème" type="checkbox" />
          <label class="fr-label" for="Écosystème">
            <strong>Écosystème</strong> : une démarche équivalente existe-t-elle
            déjà, ou pourrait être complétée ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Objectifs" id="Objectifs" type="checkbox" />
          <label class="fr-label" for="Objectifs">
            <strong>Objectifs</strong> : les objectifs pour la démarche ont-ils
            été clairement définis ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Accessibilité" id="Accessibilité" type="checkbox" />
          <label class="fr-label" for="Accessibilité">
            <strong>Accessibilité</strong> : l&#39;objectif de conformité à 100%
            au&nbsp;<a
              href="https://accessibilite.numerique.gouv.fr/"
              target="_blank"
              title="RGAA - Nouvelle fenêtre"
              >RGAA</a
            >, obligatoire, a-t-il été préparé ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Inclusion" id="Inclusion" type="checkbox" />
          <label class="fr-label" for="Inclusion">
            <strong>Inclusion</strong> : des tests avec des utilisateurs réels
            en situation réelle sont-ils prévus ?
          </label>
        </li>
      </ul>

      <h2 class="fr-mt-6w">2️⃣ Concevoir la démarche</h2>
      <p>Un bon formulaire nécessite une conception sérieuse et rigoureuse.</p>
      <ul class="dg-list-no-decoration">
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Priorisation" id="Priorisation" type="checkbox" />
          <label class="fr-label" for="Priorisation">
            <strong>Priorisation</strong> : une priorisation sur les
            fonctionnalités essentielles a t-elle été menée ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Parcours" id="Parcours" type="checkbox" />
          <label class="fr-label" for="Parcours">
            <strong>Parcours</strong> : les différents parcours utilisateur
            ont-ils été cartographiés ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Maquette" id="Maquette" type="checkbox" />
          <label class="fr-label" for="Maquette">
            <strong>Maquette</strong> : des maquettes ont-elles été réalisées
            pour formaliser ces parcours ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Faisabilité" id="Faisabilité" type="checkbox" />
          <label class="fr-label" for="Faisabilité">
            <strong>Faisabilité</strong> : le responsable technique a t-il
            validé la faisabilité des maquettes ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Accessibilité-2" id="Accessibilité-2" type="checkbox" />
          <label class="fr-label" for="Accessibilité-2">
            <strong>Accessibilité</strong> : l&#39;accessibilité a-t-elle été
            vérifiée lors de la réalisation des maquettes ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Langage" id="Langage" type="checkbox" />
          <label class="fr-label" for="Langage">
            <strong>Langage</strong> : les contenus sont-ils rédigés en langage
            clair ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Prototype" id="Prototype" type="checkbox" />
          <label class="fr-label" for="Prototype">
            <strong>Prototype</strong> : un prototype a-t-il été réalisé, sur la
            base des maquettes, pour tester la démarche ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Tests" id="Tests" type="checkbox" />
          <label class="fr-label" for="Tests">
            <strong>Tests</strong> : la démarche a-t-elle été testée et
            améliorée avant les développements ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Satisfaction" id="Satisfaction" type="checkbox" />
          <label class="fr-label" for="Satisfaction">
            <strong>Satisfaction</strong> : une mesure de la satisfaction
            usagers est-elle prévue (ex.
            <a href="https://jedonnemonavis.numerique.gouv.fr/">bouton JDMA</a>)
            ?
          </label>
        </li>
      </ul>

      <h2 class="fr-mt-6w">3️⃣ Bonnes pratiques pour les formulaires</h2>
      <h3 class="fr-mt-4w">☝️ En amont du formulaire</h3>
      <p>Un bon formulaire informe l&#39;usager en amont de sa démarche.</p>
      <ul class="dg-list-no-decoration">
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="remplissage" id="remplissage" type="checkbox" />
          <label class="fr-label" for="remplissage">
            <strong>Durée de remplissage</strong> : combien de temps environ
            pour remplir le formulaire ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Pièces" id="Pièces" type="checkbox" />
          <label class="fr-label" for="Pièces">
            <strong>Pièces justificatives</strong> : quelles pièces
            justificatives prévoir pour compléter la demande ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Prix" id="Prix" type="checkbox" />
          <label class="fr-label" for="Prix">
            <strong>Prix</strong> : si applicable, quel est le coût de la
            démarche ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Étapes" id="Étapes" type="checkbox" />
          <label class="fr-label" for="Étapes">
            <strong>Étapes</strong> : quelles sont les étapes liées
            <em>au traitement</em> de la demande ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="traitement" id="traitement" type="checkbox" />
          <label class="fr-label" for="traitement">
            <strong>Durée de traitement</strong> : combien de temps pour le
            traitement de la demande ?
          </label>
        </li>
      </ul>

      <h3 class="fr-mt-4w">✌️ Le formulaire</h3>
      <p>Un bon formulaire respecte les bonnes pratiques.</p>
      <ul class="dg-list-no-decoration">
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Découpage" id="Découpage" type="checkbox" />
          <label class="fr-label" for="Découpage">
            <strong>Découpage</strong> : un long formulaire est découpé en
            plusieurs pages thématiques
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Avancement" id="Avancement" type="checkbox" />
          <label class="fr-label" for="Avancement">
            <strong>Avancement</strong> : un indicateur d&#39;avancement est
            présent à chaque étape
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Navigation" id="Navigation" type="checkbox" />
          <label class="fr-label" for="Navigation">
            <strong>Navigation</strong> : l&#39;usager peut naviguer librement
            entre les différentes étapes
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Enregistrement" id="Enregistrement" type="checkbox" />
          <label class="fr-label" for="Enregistrement">
            <strong>Enregistrement</strong> : les données sont enregistrées
            automatiquement au fil de l&#39;eau
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Accessibilité-3" id="Accessibilité-3" type="checkbox" />
          <label class="fr-label" for="Accessibilité-3">
            <strong>Accessibilité</strong> : tous
            <a
              href="https://aucune informatoin non nécéssaire aux traitement de la demande n&#39;est récolté"
              >les critères d&#39;accessibilité</a
            >
            sont respectés
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="FranceConnect" id="FranceConnect" type="checkbox" />
          <label class="fr-label" for="FranceConnect">
            <strong>FranceConnect</strong> : France connect (ou France connect
            +) est systématiquement proposé
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Dites" id="Dites" type="checkbox" />
          <label class="fr-label" for="Dites">
            <strong>Dites Le Nous Une Fois</strong> : aucune donnée déjà connue
            de l&#39;administration n&#39;est demandée
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Données" id="Données" type="checkbox" />
          <label class="fr-label" for="Données">
            <strong>Données</strong> : aucune information non nécessaire au
            traitement de la demande n&#39;est récolté
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Conditionnalité" id="Conditionnalité" type="checkbox" />
          <label class="fr-label" for="Conditionnalité">
            <strong>Conditionnalité</strong> : ne demander que les informations
            pertinentes grâce à l'affichage conditionnel
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="RGPD" id="RGPD" type="checkbox" />
          <label class="fr-label" for="RGPD">
            <strong>RGPD</strong> :
            <a href="https://entreprendre.service-public.fr/vosdroits/F24270"
              >les obligations liées au RGPD</a
            >
            sont respectées
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Affichage" id="Affichage" type="checkbox" />
          <label class="fr-label" for="Affichage">
            <strong>Affichage</strong> : le formulaire s&#39;affiche
            correctement sur tous les supports (mobile en particulier)
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Lisibilité" id="Lisibilité" type="checkbox" />
          <label class="fr-label" for="Lisibilité">
            <strong>Lisibilité</strong> : les champs sont placés les uns
            au-dessus des autres (et non côte à côte)
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Informations" id="Informations" type="checkbox" />
          <label class="fr-label" for="Informations">
            <strong>Informations</strong> : toutes les informations nécessaires
            sont directement accessibles (pas d&#39;infobulle)
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Champs" id="Champs" type="checkbox" />
          <label class="fr-label" for="Champs">
            <strong>Champs</strong> : les champs obligatoires sont explicitement
            indiqués (une étoile ne suffit pas)
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Remplissage" id="Remplissage" type="checkbox" />
          <label class="fr-label" for="Remplissage">
            <strong>Remplissage</strong> : les placeholders au sein des champs
            de formulaire ne sont <strong>pas</strong> utilisés
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Erreurs" id="Erreurs" type="checkbox" />
          <label class="fr-label" for="Erreurs">
            <strong>Erreurs</strong> : les messages d&#39;erreurs sont complets,
            explicites et bien placés
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Langage-2" id="Langage-2" type="checkbox" />
          <label class="fr-label" for="Langage-2">
            <strong>Langage</strong> : aucun acronyme n&#39;est employé sans
            être explicité
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Aide" id="Aide" type="checkbox" />
          <label class="fr-label" for="Aide">
            <strong>Aide</strong> : une aide humaine est facilement accessible
            par l&#39;usager
          </label>
        </li>
      </ul>

      <h3 class="fr-mt-4w">🤟 Après le formulaire</h3>
      <p>Un bon formulaire informe l&#39;usager des suites de sa démarche.</p>
      <ul class="dg-list-no-decoration">
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Étapes-2" id="Étapes-2" type="checkbox" />
          <label class="fr-label" for="Étapes-2">
            <strong>Étapes</strong> : quelles sont les prochaines étapes ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="traitement-2" id="traitement-2" type="checkbox" />
          <label class="fr-label" for="traitement-2">
            <strong>Durée de traitement</strong> : combien de temps pour le
            traitement de la demande ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="retour" id="retour" type="checkbox" />
          <label class="fr-label" for="retour">
            <strong>Modalité de retour</strong> : quand et comment
            l&#39;administration fera un retour ?
          </label>
        </li>
        <li class="fr-checkbox-group fr-mb-2w">
          <input name="Satisfaction-2" id="Satisfaction-2" type="checkbox" />
          <label class="fr-label" for="Satisfaction-2">
            <strong>Satisfaction</strong> : présence d&#39;un formulaire de
            satisfaction concernant la demande (ex.
            <a href="https://jedonnemonavis.numerique.gouv.fr/">JDMA</a>) ?
          </label>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Recrutement",
    meta: [
      {
        name: "description",
        content:
          "Améliorons ensemble la qualité des services publics numériques.",
      },
      {
        property: "og:title",
        content: "Recrutement - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Améliorons ensemble la qualité des services publics numériques.",
      },
      {
        property: "og:image",
        content:
          "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png",
      },
    ],
  },
};
</script>
