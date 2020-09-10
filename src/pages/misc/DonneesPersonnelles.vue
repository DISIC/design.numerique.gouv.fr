<template>
  <Layout class="privacy-page">

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Données personnelles</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Cookies et respect de votre vie privée</h2>
          <p>
            Ce site ne prélève aucune donnée à caractère personnel.
          </p>
          <p>
            L’outil de mesure d’audience que nous utilisons, Matomo (ex-Piwik),
            est paramétré de façon à ce que les informations recueillies soient
            anonymisées. Le petit fichier texte (« cookie ») déposé sur votre ordinateur
            lorsque vous le consultez nous permet simplement de connaître le nombre
            de visites et les pages les plus consultées, et ainsi d’améliorer nos
            contenus et votre expérience, sans pour autant permettre de vous identifier
            personnellement.
          </p>
          <p>
            Nous sommes ainsi en conformité avec la
            <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience" target="_blank">
              réglementation « Cookies » de la CNIL
            </a>
            et exemptés d’autorisation préalable. C’est pour cela que vous
            n’avez pas eu besoin de cliquer sur un bloc pour accepter le dépôt de
            cookies !
          </p>
        </section>

    </div>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Données personnelles",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    }
  }

</script>


<style lang="scss">

  .privacy-page {


  }

</style>
