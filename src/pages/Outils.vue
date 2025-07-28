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
              <a class="fr-breadcrumb__link" aria-current="page">Outils</a>
            </li>
          </ol>
        </nav>
        <h1 class="dg-cover__title">
          <img
            class="dg-picto fr-mr-2w"
            svg-inline
            src="../assets/images/outils-picto.svg"
            aria-hidden="true"
          />Outils
        </h1>
        <p class="fr-text--lead">
          Une sélection d’outils <em>faits maison</em> pour vous accompagner dans
          l’amélioration de l’accessibilité et du design de vos sites et
          applications web.
        </p>
        <ul class="fr-tags-group">
          <li>
              <a href="#tech" class="fr-tag" target="_self">Tech</a>
          </li>
          <li>
              <a href="#methode" class="fr-tag" target="_self">Méthode</a>
          </li>
          <li>
              <a href="#audit" class="fr-tag" target="_self">Audit</a>
          </li>
         <li>
              <a href="#declaration" class="fr-tag" target="_self">Déclaration</a>
          </li>
           <li>
              <a href="#tests" class="fr-tag" target="_self">Tests usagers en situation de handicap</a>
          </li>
          <li>
              <a href="#dsfr" class="fr-tag" target="_self">Système de design</a>
          </li>
      </ul>      </div>
    </section>

    <div class="dg-content fr-px-2w">
      <section>
        <h2 id="tech">Les checklists pour toustes</h2>
        <ul class="fr-mb-3w">
          <li><span class="fr-badge fr-badge--purple-glycine">Nouveau !</span> La <g-link to="/outils/checklist-pdf/">checklist PDF</g-link> propose un ensemble de règles pour réaliser un <strong>document PDF accessible</strong> à partir d’un traitement de texte ;
          </li>
          <li>
            le <g-link to="/outils/diagnostic-flash/">diagnostic flash</g-link> permet d’estimer
            de manière <strong>rapide et partielle</strong> l’accessibilité d’un
            site ou d’une démarche en ligne, sans avoir d’expertise particulière
            et en n’y consacrant que peu de temps ;
          </li>
          <li>
            la <g-link to="/outils/checklist-pidila/">checklist Pidila</g-link> regroupe
            les critères des différents référentiels et bonnes pratiques du web.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="tech">Tech</h2>
        <ul class="fr-mb-3w">
          <li>
            la <g-link to="/outils/checklist-dev/">checklist dev</g-link> regroupe les tests et
            vérifications rapides à faire soi-même avant de livrer son travail ;
          </li>
          <li>
            le <g-link to="/outils/memo-dev/">mémo dev</g-link> regroupe sur une seule et même
            page les points d’attention pour
            <strong>les développeurs et les développeuses front</strong> ainsi
            que les liens vers les ressources adéquates ;
          </li>
          <li>
            le <g-link to="/outils/memo-design/">mémo design</g-link> regroupe sur une seule et
            même page les points d’attention pour
            <strong>les designers</strong> ainsi que les liens vers les
            ressources adéquates.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="methode">Méthode</h2>
        <ul class="fr-mb-3w">
          <li>
            le
            <g-link to="/outils/jeu-de-oaa/">
              jeu de l’organisation de l’amélioration de l’accessibilité
              (OAA)</g-link>
            vous guide dans la mise en accessibilité de votre service
            numérique ;
          </li>
          <li>
            les
            <g-link to="/outils/roles-cles/">fiches métiers</g-link>
            décrivent votre rôle, vos actions et vos outils ;
          </li>
          <li>
            le <g-link to="/outils/diagnostic-flash/">diagnostic flash</g-link> permet d’estimer
            de manière <strong>rapide et partielle</strong> l’accessibilité d’un
            site ou d’une démarche en ligne, sans avoir d’expertise particulière
            et en n’y consacrant que peu de temps ;
          </li>
          <li>
            les nombreux
            <a
              href="https://github.com/DISIC?q=guide+RGAA"
              target="_blank"
              rel="noreferrer noopener"
              >Guides méthodologiques RGAA
            </a>
            : Plus de 40 ressources et outils autour du référentiel général
            d’accessibilité pour les administrations (RGAA 3) ont été réalisés
            par la direction interministérielle du numérique (DINUM) avec le
            soutien du fonds pour l’insertion des personnes handicapées dans la
            fonction publique (FIPHFP) ;
          </li>
          <li>
            l’<g-link to="/outils/audit-rapide/">audit rapide</g-link> permet à moindre coût
            d’apprécier l’accessibilité d’un site et la maturité d’une équipe ;
          </li>
          <li>
            la page <g-link to="/outils/accessibilite-marche-public/">l’accessibilité numérique dans les marchés publics</g-link> recense les points importants dans la rédaction des marchés et l’analyse des offres.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="audit">Audit</h2>
        <ul class="fr-mb-3w">
          <li>
            <a
              href="https://ara.numerique.gouv.fr"
              title="Ara - nouvelle fenêtre"
              target="_blank" rel="noreferrer noopener"
              ><strong>Ara</strong></a
            > permet de réaliser des audits d’accessibilité numérique, générer un rapport d’accessibilité et rédiger la déclaration d’accessibilité ;
          </li>
          <li>
            L’<strong>assistant RGAA</strong> facilite la réalisation d’audit en
            mettant à disposition les critères et tests du RGAA 4.1 directement
            dans le navigateur. Disponible sur
            <a
              href="https://addons.mozilla.org/fr/firefox/addon/assistant-rgaa/"
              target="_blank"
              title="assistant RGAA pour firefox - nouvelle fenêtre"
              >firefox</a
            > et
            <a
              href="https://chrome.google.com/webstore/detail/assistant-rgaa/cgpmofepeeiaaljkcclfldhaalfpcand?hl=fr"
              target="_blank"
              title="assistant RGAA pour chrome - nouvelle fenêtre"
              >chrome</a
            > ;
          </li>
          <li>
            Télécharger le
            <a
              href="https://accessibilite.numerique.gouv.fr/doc/rgaa4.1.2.modele-de-grille-d-audit.ods"
              title="Télécharger le modèle de grille d’audit (format ODS – 233 Ko)"
              download
              >modèle de grille d’audit (format ODS – 233 Ko)</a
            > ;
          </li>
          <li>
             Télécharger le
            <a
              href="https://accessibilite.numerique.gouv.fr/doc/rgaa4-2019-modele-rapport-audit.odt"
              title="Télécharger le modèle de rapport d’audit (format ODT – 51 Ko)"
              download
              >modèle de rapport d’audit (format ODT – 51 Ko)</a
            >.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="declaration">Déclaration d’accessibilité</h2>
          <p>
            Un
            <g-link href="/outils/exemple-declaration-accessibilite/"
              >Exemple de déclaration d’accessibilité</g-link
            >
            prêt à remplir.
          </p>
      </section>

      <section>
        <h2 id="tests">Tests usagers en situation de handicap</h2>
        <h3 class="fr-h4">Mode d’utilisation du groupe d’utilisateurs handicapés</h3>
        <p>
          La DINUM a créé un groupe d’utilisateurs handicapés pour tester
          l’accessibilité des sites et applications mobiles publics. Il inclut
          actuellement une trentaine d’utilisateurs, majoritairement handicapés
          visuels : non-voyants et mal voyants, une dizaine de personnes
          handicapées cognitives et quelques personnes handicapées mobiles. Mais
          il a vocation à accueillir un plus grand nombre d’internautes
          handicapés appartenant à toutes les catégories de personnes
          handicapées. Ces utilisateurs ne sont pas des experts en
          accessibilité, mais ont pour point commun d’avoir l’habitude de
          naviguer sur internet et de posséder à titre professionnel ou
          personnel les matériels et logiciels nécessaires à cette fin. Les
          tests ainsi effectués ne remplacent ni ceux réalisés à l’aide des
          logiciels de test, ni ceux réalisés par des professionnels experts en
          accessibilité. Ils peuvent avoir, néanmoins, une grande utilité pour
          montrer le degré d’efficacité des publics concernés sur les sites et
          applications testés, d’une façon concrète, sans nécessairement se
          référer au taux de conformité à déterminer aux normes en vigueur.
        </p>
        <p>
          La demande de test doit être adressée par mail à
          <strong>jamshid.kohandel@modernisation.gouv.fr</strong>.
        </p>
      </section>

      <section>
        <h2 id="dsfr">Le système de design de l’État</h2>
        <p>
          Le
          <a
            href="https://www.systeme-de-design.gouv.fr/"
            rel="noreferrer noopener"
            title="système de design de l‘État - nouvelle fenêtre"
            target="_blank"
            >système de design de l’État</a
          >, développé, maintenu et géré par le <a
          href="https://www.gouvernement.fr/service-d-information-du-gouvernement-sig"
          rel="noreferrer noopener"
          title="Service d’Information du Gouvernement - nouvelle fenêtre"
          target="_blank">Service d’Information du Gouvernement</a>, assure une cohérence graphique et une meilleure expérience utilisateur sur les sites et applications web de l’État.
        </p>
        <p>Il propose :</p>
        <ul class="fr-mb-3w">
          <li>
            les éléments de base : couleurs, typographies, grilles et icônes ;
          </li>
          <li>
            une librairie de composants disponible au format Sketch et Figma ;
          </li>
          <li>
            un ensemble de composants HTML/CSS
            <strong
              >conformes au
              <abbr
                title="Référentiel général d’amélioration de l’accessibilité"
                >RGAA</abbr
              ></strong
            > ;
          </li>
          <li>une communauté active de designers et de développeurs.</li>
        </ul>
        <div class="fr-highlight">

<p> <strong>Utilisation interdite en dehors des sites Internet de l’État</strong><br>Il est formellement interdit à tout autre acteur d’utiliser le Système de Design de l’État (les administrations territoriales ou tout autre acteur privé). Le Système de Design de l’État représente l’identité numérique de l’État. En cas d’usage à des fins trompeuses ou frauduleuses, l’État se réserve le droit d’entreprendre les actions nécessaires pour y mettre un terme.<br> Voir les <a
  href="https://www.systeme-de-design.gouv.fr/version-courante/fr/a-propos/conditions-generales-d-utilisation"
  rel="noreferrer noopener"
  title="conditions générales d'utilisation - nouvelle fenêtre"
  target="_blank"
 >conditions générales d’utilisation</a>.</p>
        </div>
      </section>
<hr class=" fr-mt-8w">
      <p class="fr-text--lead">
        Vous pouvez proposer de nouveaux outils, méthodes ou autres bonnes
        idées,
        <a
          target="_blank"
          title="Créer une demande sur le dépôt de notre site - nouvelle fenêtre"
          href="https://github.com/DISIC/design.numerique.gouv.fr/issues"
          >en créant une <em>issue</em> sur le dépôt de notre site</a
        >.
      </p>
    </div>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Les outils",
    meta: [
      {
        name: "description",
        content:
          "Découvrez les outils pour designer et développer des services numériques accessibles et conformes au RGAA.",
      },
      {
        property: "og:title",
        content: "Les outils de design et d’accessibilité - DesignGouv",
      },
      {
        property: "og:description",
        content:
          "Découvrez les outils pour designer et développer des services numériques accessibles et conformes au RGAA.",
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
