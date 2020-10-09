<template>


  <nav class="rf-nav rf-margin-top-2N" role="navigation" aria-label="Menu principal" id="header-navigation">
    <ul class="rf-nav__list">
      <li class="rf-nav__item">
        <a class="rf-link" href="/design/" target="_self">Design</a>
      </li>
      <li class="rf-nav__item">
        <button class="rf-btn" aria-expanded="false" aria-controls="rf-nav-item-3" >Accessibilité</button>
        <div class="rf-menu" id="rf-nav-item-3">
          <ul class="rf-menu__list">
            <li class="rf-menu__item">
              <a class="rf-link" href="/accessibilite-numerique/" target="_self">Accessibilité numérique</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/cadre-legal/" target="_self">Obligations légales et sanctions</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/rgaa/" target="_self">Le RGAA</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/schema-pluriannuel/" target="_self">Schéma pluriannuel de mise en accessibilite</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/declaration-accessibilite/" target="_self">Déclaration d‘accessibilite</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="rf-nav__item">
        <button class="rf-btn" aria-expanded="false" aria-controls="rf-nav-item-3" >On vous accompagne</button>
        <div class="rf-menu" id="rf-nav-item-3">
          <ul class="rf-menu__list">
            <li class="rf-menu__item">
              <a class="rf-link" href="/commando-ux/" target="_self">Commando UX</a>
            </li>
            <li class="rf-menu__item">
              <a class="rf-link" href="/formations/" target="_self">Les formations</a>
            </li>
            <!--li class="rf-menu__item">
              <a class="rf-link" href="/france-relance/" target="_self">France Relance</a>
            </li-->

          </ul>
        </div>
      </li>
      <li class="rf-nav__item">
      <a class="rf-link" href="/equipe/" target="_self">À propos</a>
      </li>
    </ul>
  </nav>

</template>



<script>

  export default {
    name: 'Navigation'
  }

</script>


