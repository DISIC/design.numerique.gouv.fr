<template>
  <div>
    <header class="header">
      <div>
        <g-link to="/">
          <g-image src="~/assets/images/marianne.svg" width="80" />
        </g-link>
        <strong>
          <g-link class="title" to="/">design.numerique.gouv.<span>fr</span></g-link>
        </strong>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/">Accueil</g-link>
        <g-link class="nav__link" to="/recrutement">Recrutement</g-link>        
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
      <div class="layout">

        <p class="small"><strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">Direction Interministérielle du Numérique</a>. <br>
        Le code de ce site est <a href="https://github.com/DSIC/design.numerique.gouv.fr" target="_blank">ouvert</a>.</p>

        <div class="public">
          <span>LES SITES PUBLICS :</span>
          <a href="https://elysee.fr" target="_blank">Elysee.fr</a>
          <a href="https://service-public.fr" target="_blank">service-public.fr</a>
          <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
          <a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a>
          <a href="https://france.fr" target="_blank">france.fr</a>
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
