<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1>Design Gouv</h1>

    <p>Bienvenue sur le site de la communauté des <strong>designers numériques de l'État</strong>. Vous y trouverez prochainement un ensemble de ressources utiles lors du développement de services publics numériques centrés sur les usagers.</p>
    <p class="subtitle">En attendant, inscrivez-vous à notre newsletter :</p>

    <data id="mj-w-res-data" data-token="4258b94c15c87c7f6574db5cdd84b824" class="mj-w-data" data-apikey="1O2v" data-w-id="jmM" data-lang="fr_FR" data-base="https://app.mailjet.com" data-width="640" data-height="569" data-statics="statics"></data>

    <div class="mj-w-button mj-w-btn" data-token="4258b94c15c87c7f6574db5cdd84b824" style="font-family: Ubuntu, Helvetica; color: white; padding: 0px 25px; background-color: rgb(16, 68, 242); text-align: center; vertical-align: middle; display: inline-block; border-radius: 50px;">
        <div style="display: table; height: 45px;">
            <div style="display: table-cell; vertical-align: middle;">
                <div class="mj-w-button-content" style="font-family:Ubuntu, Helvetica; display: inline-block; text-align: center; font-size: 13px; vertical-align: middle;"><b><font size="3">Je m'inscris à la newsletter</font></b></div>
            </div>
        </div>
    </div>

    <p>Et sur Twitter : <a href="https://twitter.com/designgouv" title="Twitter" target="_blank">@designGouv</a></p>

    <p class="small"><strong>DesignGouv</strong> est propulsé par la <a href="https://numerique.gouv.fr" target="_blank">Direction Interministérielle du Numérique</a>. <br>
    Le code de ce site est <a href="https://github.com/DISIC/design.numerique.gouv.fr" target="_blank">ouvert</a>.</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>


<style>
.home-links a {
  margin-right: 1rem;
  display: none;
}
.small {
  color: #999;
  font-size: .8em;
  margin-top: 5em;
}
.small a {
color: red;
}
</style>
