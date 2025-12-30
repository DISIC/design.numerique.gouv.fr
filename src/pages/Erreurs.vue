<template>
  <Exercice>
    <section class="dg-cover dg-cover--linear fr-mb-6w">
      <div class="dg-cover__container fr-mb-1w fr-pt-8w">
      <h1>Accessibilité vs conformité</h1>

         <p>
          Ou pourquoi on ne devrait jamais dire mon service est 100% accessible !
         </p>
      </div>
    </section>
        <div class=" fr-px-2w fr-mb-8w fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      <div class="fr-col-sm-8">
        <h3>Calcul du taux de conformité</h3>
        <p>Le taux de conformité au RGAA s’obtient en divisant le nombre de critères conformes par le nombre de critères applicables.</p>
        <h3>Taux moyen et taux global</h3>
        <p>Le seul taux global doit figurer sur la déclaration d’accessibilité. Il est calculé en divisant le nombre critère conforme par le nombre de critères applicables.</p>
        <p>Si un critère est NC sur une page, il est compté comme NC sur <strong>TOUTES</strong> les pages de l’échantillon.</p>
        <h4>Exemple</h4>
        <ul>
          <li>Le taux moyen par page est (0+100+66+50)/4 = 54%</li>
          <li>Le taux global est 0%</li>
        </ul>  
        <div class="fr-table">
          <div class="fr-table__wrapper">
            <div class="fr-table__container">
              <div class="fr-table__content">
                <table>
                  <caption>Exemple de grille d'audit</caption>
                  <tr>
                    <th>Critère</th>
                    <th>page A</th>
                    <th>page B</th>
                    <th>page C</th>
                    <th>page D</th>
                    <th>synthèse</th>
                  </tr>
                  <tr>
                    <td>1.1</td>
                    <td class="na">N/A</td>
                    <td  class="c">C</td>
                    <td class="nc">NC</td>
                    <td class="c">C</td>
                    <td class="nc">NC</td>
                  </tr>
                  <tr>
                    <td>1.2</td>
                    <td class="nc">NC</td>
                    <td class="c">C</td>
                    <td class="c">C</td>
                    <td class="na">N/A</td>
                    <td class="nc">NC</td>
                  </tr>
                  <tr>
                    <td>1.3</td>
                    <td class="na">N/A</td>
                    <td class="c">C</td>
                    <td class="c">C</td>
                    <td class="nc">NC</td>
                    <td class="nc">NC</td>
                  </tr>
                  <tr>
                    <td>Taux</td>
                    <td>0</td>
                    <td>100</td>
                    <td>66</td>
                    <td>50</td>
                    <td>0</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
         <p>Le site en exemple est donc <strong>non conforme</strong> avec le référentiel général d’amélioration de l’accessibilité (RGAA) version 4.</p>
        <h2>Améliorer le taux</h2>
				 <p>Si améliorer le taux de conformité d'un service peut partir d'une bonne intention, c'est plutôt une fausse bonne idée. <br>Et pour plusieurs raisons :<br>
             •  Seules les anomalies présentes sur l'échantillon vont être corrigées<br>
             •  Une fois qu'on sera à 100%, on risque de ne plus s'intéresser au sujet<br>
             •  La priorisation va se faire en fonction de la rentabilité du critère en erreur<br>
         </p>
         <h2>Comment faire un audit RGAA ?</h2>
         <figure class="fr-quote">
          <blockquote cite="https://accessibilite.numerique.gouv.fr/obligations/evaluation-conformite/#cadre-general">
            <p>Afin d’évaluer la conformité du service de communication au public en ligne avec la norme de référence, l’organisme doit conduire un audit d’accessibilité. L’audit (ou évaluation) peut être effectué par l’organisme lui-même (auto-évaluation) ou par un tiers. L’évaluation est réalisée sur un échantillon de pages représentatif du service de communication au public en ligne. La vérification de la conformité des pages de l’échantillon avec les critères applicables s’effectue à l’aide des critères de contrôle du RGAA qui contiennent des tests techniques. La phase finale de l’audit est la déclaration d’accessibilité qui rend compte de la conformité des services de communication au public en ligne avec les règles applicables.</p>
          </blockquote>
         </figure>
        <figcaption>
          <p class="fr-quote__source">RGAA - 16 septembre 2019</p>
        </figcaption>

        
        
        <div class="fr-callout fr-mb-6v fr-icon-alert-line fr-callout--yellow-moutarde fr-mt-4w">
        <h3  class="fr-callout__title">Aucun site n’a jamais été conforme par accident</h3>
        <p  class="fr-callout__text">Si aucune personne de l'équipe n’a pris en compte les critères du RGAA lors des phases de conception, développement, test,  recette et rédaction de contenu alors le site ne sera <strong>ni accessible ni conforme</strong> aux utilisateur·ices en situation de handicap (ou non) 🧒🏾👨🏻‍🦯🧑🏼🧑🏽‍🦱👩🏿‍🎓👱🏼🧑🏽‍🦳👨🏻‍🌾🧑🏼🧑🏽‍🦼‍➡️🧔🏾🧓🏽🧏‍♀️👳🏻.</p>
        </div>
        <p>Pour réaliser un audit de conformité, vous devez connaître le RGAA, ses critères et tests, ses termes du glossaire et savoir utiliser les aides techniques comme les synthèses vocales les plus courantes.</p>
        <p>Vous pouvez utiliser <img width="25" src="/assets/images/logo_Ara_bleu.jpg" alt="un perroquet plutôt bleu vraiment très stylé" /> ou bien la vieille grille d’audit. Les deux sont mis a disposition par la Dinum.</p>
      </div>
    </div>

  </Exercice>
</template>

<style scoped>
tr, td, th {
  border: 1px solid lightgrey;
}
.fr-table caption { 
  font-size: small;
  font-weight: lighter;
  margin:0;
}
td.na {
  background-color: lightsteelblue;
}
td.nc {
  background-color: lightcoral;
}
td.c {
  background-color: lightgreen;
}
</style>
<script>
export default {
  metaInfo: {
    title: 'Page avec des erreurs d’accessibilité',
    meta: [
      {
        name: 'description',
        content: 'Page html contenant des erreurs (volontaires !) d’accessibilité',
      },
    ],
  },
};
</script>

