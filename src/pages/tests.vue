<template>
  <Test>
    <div class="dg-content fr-px-2w fr-pt-4w">
      <h1>Tests</h1>


<table aria-describedby="table-desc">
  <tr>
    <td>1.1</td>
    <td>1.2</td>
    <td>1.3</td>
  </tr>
 <tr>
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>   
</table>

<p id="table-desc">Ce tableau ne sert vraiment à rien</p>



<div
  aria-label="Attribut aria label restitué par vo"
  aria-description="Attribut aria description non restitué par vo">
  <h2>Test aria description</h2>
  <p>Exemple de contenu </p>
</div>


<h2>Test aria describedby</h2>
<img src="data:image/svg+xml,%3csvg%20width='442'%20height='364'%20viewBox='0%200%20442%20364'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M388.902%20139.926C388.307%20186.795%20350.084%20224.607%20303.018%20224.609L303.018%20138.817L388.909%20138.817L388.902%20139.926Z'%20fill='%23CE614A'/%3e%3cpath%20d='M204.595%200.0488726L302.825%200.00698179C302.889%200.00689411%20302.954%200.00581816%20303.018%200.00581816C379.774%200.00587221%20441.997%2062.1532%20442%20138.817H303.018V224.609H303.016C303.014%20301.273%20240.79%20363.422%20164.034%20363.422C132.626%20363.422%20103.652%20353.014%2080.3779%20335.465C126.913%20315.427%20160.302%20270.724%20164.037%20217.844V137.961H164.042C164.166%20117.688%20168.638%2098.4467%20176.578%2081.1191C142.898%2069.5167%20118.703%2037.5812%20118.701%200H204.595V0.0488726Z'%20fill='%238BA7F8'/%3e%3cpath%20d='M277.963%2069.4112C277.963%2087.5084%20263.275%20102.179%20245.156%20102.179C227.038%20102.179%20212.35%2087.5084%20212.35%2069.4112C212.35%2051.314%20227.038%2036.6433%20245.156%2036.6433C263.275%2036.6433%20277.963%2051.314%20277.963%2069.4112Z'%20fill='white'/%3e%3cpath%20d='M257.421%2039.0112C269.464%2043.8628%20277.964%2055.6449%20277.964%2069.4111C277.964%2083.1772%20269.464%2094.9582%20257.421%2099.8099C245.379%2094.9579%20236.879%2083.1768%20236.879%2069.4111C236.879%2055.6453%20245.378%2043.8631%20257.421%2039.0112Z'%20fill='%23343434'/%3e%3cpath%20d='M304.815%200.0172516C380.742%200.977985%20441.996%2062.7521%20442%20138.816H303.018V0.00561523L304.815%200.0172516Z'%20fill='%23F6C43C'/%3e%3cpath%20d='M138.982%20277.627C62.2264%20277.627%200.00337202%20215.48%200%20138.816L277.963%20138.816C277.96%20215.48%20215.737%20277.627%20138.982%20277.627Z'%20fill='%232F4077'/%3e%3c/svg%3e" alt="Ara" aria-describedby="p1">
<p   id="p1">Ce dessin représente un ara, une espèce de perroquet au plumage vivement coloré. Ara est aussi le nom d'un service en ligne destiné aux auditeurices en accessibilité numérique.
Designé par Adrien Muzyczka</p>
    </div>
  </Test>
</template>


<script>

  export default {
    metaInfo: {
      title: "Tests RGAA5",
      meta: [{
          name: 'description',
          content: "Page de tests pour le RGAA5"
        },
        {
          name: 'robots',
          content: "noindex, nofollow"        }
        ],
      }
    }
</script>
