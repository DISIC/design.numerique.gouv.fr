<template>
  <div>
    <header class="header">
      <div>
        <g-image src="~/assets/images/marianne.svg" width="80" />
        <strong>
          <g-link class="title" to="/">design.numerique.gouv.<span>fr</span></g-link>
        </strong>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/">Accueil</g-link>
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
      <div class="layout">

        <p class="small"><strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">Direction Interministérielle du Numérique</a>. <br>
        Le code de ce site est <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">ouvert</a>.</p>

        <div class="public">
          <span>LES SITES PUBLICS :</span>
          <g-link to="https://elysee.fr">Elysee.fr</g-link>
          <g-link to="https://service-public.fr">service-public.fr</g-link>
          <g-link to="https://legifrance.gouv.fr">legifrance.gouv.fr</g-link>
          <g-link to="https://data.gouv.fr">data.gouv.fr</g-link>
          <g-link to="https://france.fr">france.fr</g-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
