<template>
  <Layout class="accessibility-page">


    <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
      <ol class="fr-breadcrumb__list">
        <li>
          <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Accessibilité</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Accessibilité</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Déclaration d’accessibilité</h2>
          <p>
            Le site design.numerique.gouv.fr est développé selon les recommendations du référentiel général d’amélioration de l’accessibilité (RGAA) pour être accessible à tous les usagers quel que soit le matériel ou le logiciel utilisé pour naviguer sur internet.
          </p>
          <h3>État de conformité</h3>
          <p>DesignGouv est <strong>totalement conforme</strong> avec le RGAA 4.</p>
          <h3>Échantillon évalué</h3>
          <p>Un premier audit, effectué en septembre 2020, a permis d’identifier certaines anomalies et des axes de progressions. L’audit mené en décembre 2020 par nos soins n’a relevé aucune non-conformité sur l’échantillon suivant :</p>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/newsletter/">Newsletter</a></li>
            <li><a href="/misc/mentions-legales/">Mentions légales</a></li>
            <li><a href="/misc/accessibilite">Accessibilité</a></li>
            <li><a href="/commando-ux/">Commando UX</a></li>
            <li><a href="/equipe/">Notre équipe</a></li>
          </ul>
        </section>

        <section>
          <h2>Retour d’information et contact</h2>
          <p>La DINUM s’engage à prendre les moyens nécessaires afin de donner accès, dans un délai raisonnable, aux informations et fonctionnalités recherchées par la personne handicapée, que le contenu fasse l’objet d’une dérogation ou non.</p>
          <p>La DINUM invite les personnes qui rencontreraient des difficultés à la contacter par courriel à communication.dinum@modernisation.gouv.fr afin qu’une assistance puisse être apportée (alternative accessible, information et contenu donnés sous une autre forme).</p>
        </section>

        <section>
          <h2>Défenseur des droits</h2>
          <p>Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits. Plusieurs moyens sont à votre disposition :</p>
          <ul>
            <li>un <a href="https://www.defenseurdesdroits.fr/nous-contacter" title="formulaire de contact - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">formulaire de contact</a></li>
            <li>la <a href="https://www.defenseurdesdroits.fr/fr/saisir/delegues" title="liste des délégués de votre région - nouvelle fenêtre"  target="_blank" rel="noreferrer noopener">liste des délégués de votre région</a> avec leurs informations de contact directs</li>
            <li>un numéro de téléphone : le 09 69 39 00 00 du lundi au vendredi de 8h00 à 20h00 (coût d’un appel local)</li>
            <li>une adresse postale dans l’<a href="https://lannuaire.service-public.fr/autorites-independantes/autorite-administrative-independante_195381" title="annuaire de l’administration - nouvelle fenêtre" target="_blank" rel="noreferrer noopener">annuaire de l’administration</a></li>
          </ul>
        </section>

    </div>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Accessibilité",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    }
  }

</script>


