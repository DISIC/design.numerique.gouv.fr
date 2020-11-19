<template>
  <nav class="rf-nav rf-margin-top-2N" role="navigation" aria-label="Menu principal" id="header-navigation">
    <ul class="rf-nav__list">
      <li class="rf-nav__item">
        <a class="rf-link" href="/design/">Design</a>
      </li>
      <li class="rf-nav__item">
        <button class="rf-btn" aria-expanded="false" aria-controls="rf-nav-item-1" >Accessibilité</button>
        <div class="rf-menu" id="rf-nav-item-1">
          <ul class="rf-menu__list">
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/">Accessibilité numérique</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/cadre-legal/">Obligations légales et sanctions</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/rgaa/">Le RGAA</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/schema-pluriannuel/">Schéma pluriannuel de mise en accessibilite</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/declaration-accessibilite/">Déclaration d‘accessibilite</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/outils/">Outils</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/formations/">Formations</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/blog/">Blog</a>
      </li>
      <li class="rf-nav__item">
        <a class="rf-link" href="/equipe/">À propos</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>


