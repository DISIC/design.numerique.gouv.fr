// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allCours {
        edges {
          node {
            id
            slug
            formation {
              slug
            }
          }
        }
      }
    }`)

    data.allCours.edges.forEach(({ node }) => {
      createPage({
        path: `/formations/${node.formation.slug}/${node.slug}`,
        component: './src/templates/Cours.vue',
        queryVariables: { id: node.id } // use ($id: ID!) in page-query instead of $path
      })
    })
  })
}
