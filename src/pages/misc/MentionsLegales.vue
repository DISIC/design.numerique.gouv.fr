<template>
  <Layout>
    <div class="dg-content fr-px-2w">

      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <ol class="fr-breadcrumb__list">
          <li>
            <g-link to="/" class="fr-breadcrumb__link">Accueil</g-link>
          </li>
          <li>
            <a class="fr-breadcrumb__link" aria-current="page">Mentions légales</a>
          </li>
        </ol>
      </nav>

      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur</h2>
        <p>
          Ce site est édité par l’équipe Design des services numériques, au sein de la direction interministérielle
          du numérique, un service du Premier ministre.
        </p>
        <p>
          DINUM</br>
          20 avenue de Ségur</br>
          75007 Paris</br>
          Tel. accueil : 01.71.21.01.70</br>
        </p>
        <p>
          SIRET : 12000101100010 (secrétariat général du gouvernement)</br>
          SIREN : 120 001 011
        </p>
      </section>

      <section>
        <h2>Directrice de publication</h2>
        <p>
          Stéphanie Schaer, directrice interministérielle du numérique.
        </p>
      </section>

      <section>
        <h2>Conception et gestion du site</h2>
        <p>
          Ce site est conçu et développé par l’équipe Design des services numériques. De nouvelles
          fonctionnalités sont ajoutées en continu.
        </p>
      </section>

      <section>
        <h2>Code source du site</h2>
        <p>
          Le code source du site est <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank" rel="noreferrer noopener" title="disponible sur Github - nouvelle fenêtre">disponible sur Github</a>.
        </p>
      </section>

      <section>
        <h2>Hébergement du site</h2>
        <p>Le site DesignGouv est hébergé par Clever Cloud SAS.</p>
        <p>Clever Cloud SAS est une société par actions simplifiée immatriculée au Registre du Commerce et des Sociétés (RCS) de Nantes sous le numéro RCS Nantes B 524 172 699.</p>
        <p>Son siège social est situé au 4 rue Voltaire, 44000 Nantes, France.</p>
        <p>Numéro de TVA : FR 87 524 172 699</p>
        <p>Contact téléphonique : 02 85 52 07 69</p>
      </section>

      <section>
        <h2>Propriété intellectuelle et liens</h2>
        <p>
          Tout site public ou privé est autorisé à établir, sans autorisation préalable,
          un lien (y compris profond) vers les informations diffusées sur design.numerique.gouv.fr.
        </p>
        <p>
          Sauf mention de propriété intellectuelle détenue par des tiers (notamment
          un crédit sur certaines images), les contenus de ce site sont proposés
          sous <a href="https://github.com/DISIC/design.numerique.gouv.fr/blob/master/LICENSE.md#licence-ouverte-20open-licence-20" target="_blank" rel="noreferrer noopener" title="licence ouverte 2.0 - nouvelle fenêtre">licence ouverte 2.0</a>.
        </p>
        <p>
          La mise en place de liens vers nos contenus et documents est cependant
          est à privilégier par rapport à la reproduction sur un site tiers. La
          mention explicite du site source design.numerique.gouv.fr est recommandée.
        </p>
      </section>

    </div>
  </Layout>
</template>


<script>
  export default {
    metaInfo: {
      title: "Mention légales",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    }
  }
</script>
