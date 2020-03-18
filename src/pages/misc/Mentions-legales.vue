<template>
  <Layout>

    <div class="coverLight">
     <div class="coverContainer">

       <h1>Mentions légales</h1>

      </div>
    </div>

    <div>

        <section>
          <h2>Éditeur</h2>
          <p>
            Ce site est édité par l'équipe DesignGouv, au sein de la direction interministérielle
            du numérique (DINUM), un service du Premier ministre.
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
          <h2>Directeur de publication</h2>
          <p>
            Pour les sujets relevant de la DINUM (transformation numérique de l’État) :
            Nadi Bou Hanna, directeur interministériel du numérique.
          </p>
        </section>

        <section>
          <h2>Conception et gestion du site</h2>
          <p>
            Ce site est conçu et développé par l'équipe DesignGouv. De nouvelles
            fonctionnalités sont ajoutées en continue.
          </p>
        </section>

        <section>
          <h2>Code source du site</h2>
          <p>
            Le code source du site est <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">disponible sur Github</a>.
          </p>
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
            sous licence ouverte.
          </p>
          <p>
            La mise en place de liens vers nos contenus et documents est cependant
            est à privilégier par rapport à la reproduction sur un site tiers. La
            mention explicite du site source design.numerique.gouv.fr est recommandée.
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Netlify Inc.</br>
            2325 3rd Street, Suite 215</br>
            San Francisco, California 94107</br>
            États-Unis d'Amérique</br>
            +1 844-899-7312</br>
          </p>
        </section>

    </div>

  </Layout>
</template>

<script>
import HomeItem from '~/components/HomeItem.vue'

export default {
  components: {
  },
  metaInfo: {
    title: "Mention légales",
    meta: [{
      name: "robots",
      content: "noindex"
    }],
  }
}
</script>

<style scoped lang="scss">

</style>
