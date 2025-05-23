<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <g-link to="/accessibilite-numerique/" class="fr-breadcrumb__link">Accessibilité</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Déclaration d’accessibilité</a>
          </li>
        </ol>
      </nav>

      <h1>Déclaration d’accessibilité</h1>

      <section>
        <h2>
          Contenu de la déclaration d’accessibilité
        </h2>
        <p>La déclaration d’accessibilité est le résultat d’une évaluation effective de la conformité du service de communication au public en ligne à la norme de référence.</p>

        <p>La déclaration d’accessibilité comprend :</p>
        <ul>
          <li>Un état de conformité :
            <ol>
              <li>Conformité totale : si tous les critères de contrôle du RGAA sont respectés</li>
              <li>Conformité partielle : si au moins 50 % des critères de contrôle du RGAA sont respectés</li>
              <li>Non-conformité : s’il n’existe aucun résultat d’audit en cours de validité permettant de mesurer le respect des critères ou si moins de 50 % des critères de contrôle du RGAA sont respectés</li>
            </ol>
          </li>
          <li>Un signalement des contenus non accessibles, distingués selon qu’il s’agit de non-conformité avec le RGAA, de contenus exemptés ou de contenus soumis à dérogation pour charge disproportionnée. Dans ce dernier cas, les dérogations doivent être expliquées et motivées. Le signalement est assorti, le cas échéant, d’une présentation des alternatives accessibles prévues</li>
          <li>Des dispositifs d’assistance et de contact : un mécanisme accessible (adresse électronique ou formulaire) pour permettre à toute personne de signaler à l’organisme concerné tout défaut d’accessibilité et à une personne handicapée de demander les informations correspondantes ou une solution alternative accessible</li>
          <li>La mention de la faculté pour la personne concernée de saisir le Défenseur des droits, en cas d’absence de réponse ou de solution, une fois les démarches effectuées via le mécanisme mentionné ci-dessus</li>
        </ul>
        <p>Voici un exemple de déclaration d’accessibilité <a href="https://www.numerique.gouv.fr/uploads/rgaa/rgaa4-2019-exemple-declaration.pdf" title="Exemple de déclaration d'accessibilité au format pdf - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">au format pdf</a> ou <a href="/outils/exemple-declaration-accessibilite/" title="Exemple de déclaration d'accessibilité au format html">au format html</a>.</p>
      </section>

      <section>
        <h2>Validité de la déclaration d’accessibilité</h2>
        <p>La déclaration d’accessibilité est valide à partir de sa date de publication. Elle doit être mise à jour :</p>
        <ul>
          <li>À la date de modification substantielle ou de refonte du site concerné,</li>
          <li>3 ans après la date de publication de la déclaration ou</li>
          <li>18 mois après la date de publication d’une nouvelle version du référentiel, pour les personnes qui appliquent la méthode technique</li>
        </ul>
        <p>Il peut cependant être souhaitable de mettre à jour plus régulièrement la déclaration d’accessibilité, y compris pour une même version de la méthode technique, afin de souligner les efforts réalisés et de mettre à jour le pourcentage de critères respectés.</p>
      </section>

      <section>
        <h2>Publication de la déclaration d’accessibilité</h2>
        <p>La déclaration d’accessibilité est publiée sur internet dans un format accessible.</p>
        <p>Pour les sites internet, la déclaration d’accessibilité est publiée sur le site internet concerné. Elle est mise à disposition au sein d’une page accessibilité, directement accessible depuis la page d’accueil et depuis n’importe quelle page du site.</p>
        <p>Pour les applications mobiles, elle est disponible sur le site internet de l’organisme qui a développé l’application ou apparaît avec d’autres informations disponibles lors du téléchargement de l’application. L’état de conformité est précisé au sein de l’application.</p>
        <p>Pour les autres services de communication au public en ligne, elle est disponible sur le site internet des organismes responsables de leur gestion ou de leur mise à disposition.</p>
        <p>La déclaration d’accessibilité fait l’objet d’un dépôt par le biais d’un téléservice selon les modalités arrêtées conjointement par le ministre chargé des personnes handicapées et le ministre chargé du numérique.</p>
      </section>

      <section>
        <h2>Réponse aux usagers</h2>
        <p>L’organisme concerné fournit en ligne aux utilisateurs la possibilité de faire des réclamations relatives à l’accessibilité de ses services de communication au public en ligne. Il accuse réception de ces réclamations conformément aux dispositions de l’article R112-3 du code des relations entre le public et l’Administration. L’accusé de réception comporte les informations mentionnées à l’article R112-5 du même code.</p>
        <p>L’organisme concerné répond à toute réclamation dans un délai d’une semaine à compte de sa date d’envoi. Si la réclamation de l’utilisateur soulève une ou plusieurs questions complexes justifiant un délai d’examen plus long, la réponse indique un délai raisonnable pour la réponse définitive. Le caractère complexe des questions soulevées doit être dûment motivé.</p>
        <p>L’utilisateur  doit s’identifier dans sa réclamation en suivant les prescriptions de l’article R112-9-1 du même code.</p>
        <p>Si les informations transmises par l’utilisateur dans sa réclamation sont incomplètes ou ne sont pas suffisamment claires, l’organisme concerné lui demande de les compléter ou de les clarifier et lui communique le délai raisonnable de traitement ou sa réponse définitive après réception des compléments demandés.</p>
      </section>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Déclaration d‘accessibilité",
      meta: [{
        name: 'description',
        content: "La déclaration d’accessibilité est le résultat d’une évaluation effective de la conformité du service de communication au public en ligne à la norme de référence."
      },
      {
        property: 'og:title',
        content: "Les outils pour le design numérique et l'accessibilité - DesignGouv"
      },
      {
        property: 'og:description',
        content: "Découvrez les outils pour améliorer vous-même la qualité de vos démarches."
      },
      {
        property: 'og:image',
        content: "https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"
      }],
    }
  }
</script>
