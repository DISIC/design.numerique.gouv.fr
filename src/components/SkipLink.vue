<template>
<div class="fr-skiplinks">
    <div class="fr-container">
        <ul class="fr-skiplinks__list">
            <li>
                <a class="fr-link" href="#main"  @click.stop>Contenu</a>
            </li>
            <li>
                <a class="fr-link" href="#nav"  @click.stop>Menu</a>
            </li>
        </ul>
    </div>
</div>


</template>
<script>

  export default {
    name: 'Skiplink'
  }
</script>
