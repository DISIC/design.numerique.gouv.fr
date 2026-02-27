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
              <a class="fr-breadcrumb__link" aria-current="page"
                >Concevoir un service public numérique de qualilté</a
              >
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../assets/images/accompagnement-picto.svg"
            aria-hidden="true"
          />Concevoir un service public numérique de qualilté
        </h1>
        <p class="fr-text--lead">
          Un service public numérique de qualité,
          <strong
            >c'est un service pertinent, efficace, inclusif et
            responsable.</strong
          >
          C'est un service utilisable facilement par toutes et tous et conçu
          avec soin.
        </p>
        <ul class="fr-tags-group">
          <li>
            <a href="#definir" class="fr-tag" target="_self"
              >Les critères de qualité</a
            >
          </li>
          <li>
            <a href="#anticiper" class="fr-tag" target="_self"
              >Les bonnes pratiques</a
            >
          </li>
          <li>
            <a href="#entourer" class="fr-tag" target="_self"
              >Les compétences clés</a
            >
          </li>
          <li>
            <a href="#lancer" class="fr-tag" target="_self">Les étapes clés</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="dg-content dg-content--sm fr-px-0 fr-px-md-2w">
      <div class="fr-highlight fr-highlight--pink-macaron fr-my-8w">
        <p class="fr-text--lg">
          Les services publics numériques font partie du quotidien des français.
          Pourtant,
          <a
            href="https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique_edition_2025_RAPPORT_mars2025.pdf"
            target="_blank"
            title="44 % des français rencontrent des difficultés - Nouvelle fenêtre"
            >44 % des français rencontrent des difficultés</a
          >
          dans la réalisation de leurs démarches en ligne, et
          <a
            href="https://www.insee.fr/fr/statistiques/6438420"
            target="_blank"
            title="32 % d'entre eux finissent même par abandonner - Nouvelle fenêtre"
            >32 % d'entre eux finissent même par abandonner</a
          >. Par ailleurs, bien que 12 millions de personnes soient en situation
          de handicap en France, on estime à
          <a
            href="https://webaim.org/projects/million/"
            target="_blank"
            title="3% le nombre de sites internet accessibles - Nouvelle fenêtre"
            >3% le nombre de sites internet accessibles</a
          >, c'est-à-dire conçus pour toutes et tous.
        </p>
      </div>

      <h2 id="definir">Les critères de qualité</h2>
      <div class="fr-mb-6w">
        <p>
          L'administrations noue un lien avec les usagers à travers les services
          publics numériques qu’elle propose. Cela nous oblige à respecter un
          certain nombre de principes, portés par notre mission d’intérêt
          général, pour assurer la qualité de nos services.
        </p>

        <ul class="dg-list-no-decoration fr-pl-0">
          <li>
            <h3 class="fr-mb-1w">
              <span
                class="fr-badge fr-badge--sm fr-badge--green-tilleul-verveine fr-mb-1v"
                ><span aria-hidden="true">🎯</span>&nbsp;Un service
                pertinent</span
              >
            </h3>
            <ul>
              <li>
                <strong>Utile :</strong> qui répond à un besoin concret, exprimé
                par ses (futurs) usagers.
              </li>
              <li>
                <strong>Utilisable :</strong> qui fonctionne correctement, qui
                permet aux usagers de réaliser leurs tâches.
              </li>
              <li>
                <strong>Simple :</strong> qui soit facile à utiliser par ses
                usagers.
              </li>
              <li>
                <strong>Agréable :</strong> que les usagers aient plaisir à
                utiliser.
              </li>
            </ul>
          </li>
          <li>
            <h3 class="fr-mb-1w">
              <span
                class="fr-badge fr-badge--sm fr-badge--green-tilleul-verveine fr-mb-1v"
                ><span aria-hidden="true">👐</span>&nbsp;Un service
                inclusif</span
              >
            </h3>
            <ul>
              <li>
                <strong>Accessible :</strong> qui soit utilisable par toutes et
                tous, qui respecte le RGAA.
              </li>
              <li>
                <strong>Compatible :</strong> qui soit utilisable dans toutes
                situations (qualité du réseau, type d’équipement, etc.)
              </li>
              <li>
                <strong>Compréhensible :</strong> qui utilise un
                <a
                  href="https://www.modernisation.gouv.fr/publications/actimage-eb-langage-clair-et-services-publics"
                  title="langage clair - Nouvelle fenêtre"
                  target="_blank"
                  >langage clair</a
                >, simple à comprendre par ses usagers.
              </li>
              <li>
                <strong>Équitable :</strong> qui traite tout le monde avec
                équité, est exempt de biais dans son fonctionnement.
              </li>
            </ul>
          </li>
          <li>
            <h3 class="fr-mb-1w">
              <span
                class="fr-badge fr-badge--sm fr-badge--green-tilleul-verveine fr-mb-1v"
                ><span aria-hidden="true">⚡️</span>&nbsp;Un service
                efficace</span
              >
            </h3>
            <ul>
              <li>
                <strong>Performant :</strong> qui se définit des objectifs
                clairs et produit les effets attendus.
              </li>
              <li>
                <strong>Résilient :</strong> qui sait évoluer dans un
                environnement changeant (lois, besoins usager, etc.).
              </li>
              <li>
                <strong>Fiable :</strong> qui fonctionne correctement et assure
                la protection des usagers (RGPD, etc.).
              </li>
              <li>
                <strong>Transparent :</strong> qui présente aux usagers ses
                règles de décision (critères, algorithmes, etc.).
              </li>
            </ul>
          </li>
          <li>
            <h3 class="fr-mb-1w">
              <span
                class="fr-badge fr-badge--sm fr-badge--green-tilleul-verveine fr-mb-1v"
                ><span aria-hidden="true">🌍</span>&nbsp;Un service
                responsable</span
              >
            </h3>
            <ul>
              <li>
                <strong>Frugal :</strong> qui se contente de l’essentiel, qui
                est économe en ressources et en moyens.
              </li>
              <li>
                <strong>Ouvert :</strong> qui utilise des briques mutualisées et
                redistribue (design et logiciel libres).
              </li>
              <li>
                <strong>Humain :</strong> qui accompagne les usagers, leur fait
                confiance, leur permet l’erreur et la contestation.
              </li>
              <li>
                <strong>Convivial :</strong> qui respecte et renforce
                l’autonomie des usagers, qui les implique dans la conception.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <h2 id="anticiper">Les bonnes pratiques</h2>
      <p>
        La création de services numériques se base sur des principes éprouvés.
        Leur respect est indispensable pour assurer la création de services de
        qualité.
      </p>
      <ul class="dg-list-no-decoration fr-mt-4w">
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">❓</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Commencer par identifier les besoins, non les solutions.</span
            ><br />
            Aller d’abord à la rencontre de vrais usagers pour les écouter,
            comprendre leurs besoins.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">🧪</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Toujours tester une solution avant de la développer.</span
            ><br />
            Mener de tests qualitatifs avec des vrais usagers représentatifs et
            en situation réelle.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">✔️</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Concevoir et développer de façon itérative.</span
            ><br />
            Découper et prioriser les travaux, faire évoluer le service
            progressivement.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">🚧</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Savoir s’adapter aux changements des besoins usagers et
              métiers.</span
            ><br />
            Savoir faire face à l’imprévu, faire preuve de souplesse et
            d’adaptabilité.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">🔥</span>
          </div>
          <div class="">
            <span class="fr-h6">Piloter par l’impact.</span><br />
            Vérifier en continu les indicateurs de succès et faire évoluer le
            service en conséquence.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">💬</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Travailler de manière collaborative, empathique et
              inclusive.</span
            ><br />
            Constituer dès le début une équipe pluridisciplinaire qui
            travaillera ensemble au quotidien.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">💫</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Identifier clairement les rôles de chacune et chacun.</span
            ><br />
            Définir qui fait quoi, qui est responsable de quoi et qui prend les
            décisions.
          </div>
        </li>
        <li class="dg-flex dg-flex--align-center fr-mb-4w">
          <div class="dg-picto dg-picto--sm fr-mr-2w">
            <span aria-hidden="true">👐</span>
          </div>
          <div class="">
            <span class="fr-h6"
              >Bâtir avec les autres et travailler ouvert.</span
            ><br />
            Ne pas réinventer la roue, produire du design et code ouvert,
            accueillir la contribution.
          </div>
        </li>
      </ul>

      <h2 id="entourer" class="fr-mt-8w">Les rôles et compétences clés</h2>
      <p>
        Pour créer des services numériques de qualité, il est nécessaire de
        mobiliser les experts de la conception numérique. Et ce, dès le début du
        projet et tout au long de la vie du produit. Ces expertises pourront
        être internes à l'équipe, transverses à l'organisation ou externalisés.
        Certaines expertises peuvent être détenues par une même personne.
      </p>

      <ul>
        <li>
          <strong>Un sponsor</strong> qui soutient le projet et valide les choix
          stratégiques
        </li>
        <li>
          <strong>Un responsable produit</strong> qui conduit les travaux et
          prend les décisions au quotidien
        </li>
        <li>
          <strong>L’équipe métier</strong> qui possède l’expertise métier et
          nourrit les choix de conception
        </li>
        <li>
          <strong>L’équipe design</strong> qui s’occupe de la conception du
          service
          <ul>
            <li>
              <strong>Recherche utilisateur</strong> pour récolter les besoins
              et tester avec les usagers
            </li>
            <li>
              <strong>Design UX/UI</strong> pour concevoir le service, les
              parcours et les prototypes
            </li>
            <li>
              <strong>Design de contenu</strong> pour concevoir des contenus
              clairs et adaptés aux usagers
            </li>
          </ul>
        </li>
        <li>
          <strong>L’équipe technique</strong> qui s’appuie sur la conception
          pour développer et maintenir le service
        </li>
        <li>
          <strong>L’expertise accessibilité numérique</strong> qui guide, forme
          et accompagne sur ce sujet
        </li>
        <li>
          <strong>L’expertise numérique responsable</strong> qui guide, forme et
          accompagne sur ce sujet
        </li>
        <li>
          <strong>L’expertise donnée</strong> (analytics) qui accompagne sur le
          sujet
        </li>
        <li>
          <strong>L’expertise référencement naturel</strong> (SEO) qui
          accompagne sur le sujet
        </li>
      </ul>

      <h2 id="lancer" class="fr-mt-8w">Les phases clés</h2>
      <p>
        La conception de services numériques de qualité nécessite le passage par
        un certain nombre de phases clés. Chaque projet étant spécifique, le
        responsable produit les déroulera en fonction de son contexte.
      </p>
      <ol class="dg-list-no-decoration">
        <li class="fr-mb-2w">
          <h3 class="fr-h4 fr-mb-2w">
            <span aria-hidden="true">1️⃣</span> Phase d’exploration
          </h3>
          <ul>
            <li>
              Recueillir les données (métiers, usagers) déjà à disposition
            </li>
            <li>
              Mener des études exploratoires pour approfondir la connaissance
              (métier, usager)
            </li>
            <li>
              Définir le problème à résoudre, fixer des objectifs et indicateurs
              de réussite
            </li>
          </ul>
        </li>
        <li class="fr-mb-2w">
          <h3 class="fr-h4 fr-mb-2w">
            <span aria-hidden="true">2️⃣</span> Phase d’idéation
          </h3>
          <ul>
            <li>Imaginer la ou les premières pistes de solution</li>
            <li>Les tester auprès d’usagers réels</li>
            <li>Acter la solution retenue</li>
          </ul>
        </li>
        <li class="fr-mb-2w">
          <h3 class="fr-h4 fr-mb-2w">
            <span aria-hidden="true">3️⃣</span> Phase de conception et
            développement
          </h3>
          <ul>
            <li>Découper et prioriser les travaux</li>
            <li>
              Concevoir, tester et développer le service de manière itérative
            </li>
            <li>
              Mener des revues de conception et de développement régulières
            </li>
          </ul>
        </li>
        <li class="fr-mb-2w">
          <h3 class="fr-h4 fr-mb-2w">
            <span aria-hidden="true">4️⃣</span> Phase de mise à l’épreuve
          </h3>
          <ul>
            <li>
              Mettre à l’épreuve une première version opérationnelle (beta,
              expérimentation, etc.)
            </li>
            <li>Suivre les retours usagers et indicateurs de réussite</li>
            <li>Améliorer le service avant son déploiement</li>
          </ul>
        </li>
        <li class="fr-mb-2w">
          <h3 class="fr-h4 fr-mb-2w">
            <span aria-hidden="true">5️⃣</span> Phase de déploiement et
            amélioration continue
          </h3>
          <ul>
            <li>
              Généraliser le service (sortie de beta, déploiement national,
              etc.)
            </li>
            <li>
              Suivre les retours usagers et indicateur pour améliorer le service
              en continu
            </li>
            <li>Fermer le service lorsqu’il n’a plus de raison d’être</li>
          </ul>
        </li>
      </ol>
    </section>

    <section id="formation" class="dg-content dg-block fr-my-6w">
      <div class="dg-content fr-px-6w fr-pt-4w fr-pb-0">
        <h2>Formations</h2>
        <div
          class="fr-grid-row fr-grid-row--gutters fr-mb-6w"
          aria-live="polite"
        >
          <div
            v-for="{ node } in $page.allCours.edges"
            :key="node.id"
            class="fr-col-12 fr-col-sm-4"
          >
            <div class="fr-card fr-enlarge-link">
              <div class="fr-card__body">
                <div class="fr-card__content">
                  <div class="fr-card__start">
                    <ul class="fr-badges-group">
                      <li>
                        <p class="fr-badge fr-badge--sm fr-badge--pink-macaron">
                          {{ node.type }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <h3 class="fr-h6 fr-card__title">
                    <g-link
                      :to="
                        '/formations/' +
                        node.formation.slug +
                        '/' +
                        node.slug +
                        '/'
                      "
                      class="fr-card__link"
                      >{{ node.nom }}</g-link
                    >
                  </h3>
                  <!-- <div class="fr-card__start">
                    <p v-show="futurCours.filter(element => element == node.id).length > 0" class="dg-flex-start fr-badge fr-badge--sm fr-badge--new fr-my-1w">Inscriptions ouvertes</p>
                    <p v-show="futurCours.filter(element => element == node.id).length == 0 && node.replay" class="dg-flex-start fr-badge fr-badge--sm fr-my-1w">Replay disponible</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    allCours (sortBy: "nom", order: ASC, filter: { tags: { contains: ["Design", "Recherche utilisateur"] }}) {
      edges {
        node {
          id
          nom
          rang
          slug
          type
          replay
          tags
          publier
          formation {
            id
            slug
          }
          sessions {
            id
            date
            ouverte
          }
        }
      }
    },
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Concevoir un service public numérique de qualilté",
    meta: [
      {
        name: "description",
        content:
          "Qu'est-ce qu'un service public numérique de qualité ? Tour d'horizon pour comprendre et passer à l'action.",
      },
      {
        property: "og:title",
        content:
          "DesignGouv - Concevoir un service public numérique de qualilté",
      },
      {
        property: "og:description",
        content:
          "Qu'est-ce qu'un service public numérique de qualité ? Tour d'horizon pour comprendre et passer à l'action.",
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
