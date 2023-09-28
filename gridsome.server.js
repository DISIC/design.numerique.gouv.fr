// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slugify = require('@sindresorhus/slugify');

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
		addSchemaResolvers({
			DiagFlashCriterion: {
				rgaaStr: {
					type: '[String]',
					resolve(obj) {
						return obj.rgaa || []
					}
				}
			}
		})
  });

  api.createPages(async ({ graphql, createPage }) => {

    // Création manuel des pages Cours pour prendre en compte la Formation dans l'URL
    const cours = await graphql(`{
      allCours (filter: { publier: { eq: true }}) {
        edges {
          node {
            id
            slug
            publier
            formation {
              slug
            }
          }
        }
      }
    }`);
    cours.data.allCours.edges.forEach(({ node }) => {
      createPage({
        path: `/formations/${node.formation.slug}/${node.slug}`,
        component: './src/templates/Cours.vue',
        queryVariables: { id: node.id } // use ($id: ID!) in page-query instead of $path
      })
    });

    // Création manuel des pages Poste pour ne créer que les offres publiées
    const poste = await graphql(`{
      allPoste (filter: { publier: { eq: 1 }}) {
        edges {
          node {
            id
            slug
            publier
          }
        }
      }
    }`);
    poste.data.allPoste.edges.forEach(({ node }) => {
      createPage({
        path: `/recrutement/${node.slug}`,
        component: './src/templates/Poste.vue',
        queryVariables: { id: node.id } // use ($id: ID!) in page-query instead of $path
      })
    });

  });

  api.onCreateNode((node, collection) => {
    if (node.internal.typeName === 'Cours') {
      const markdownStore = collection._store.addCollection('CoursContent')

      const markdownNode = markdownStore.addNode({
		    // any other fields, id, slug, title etc
        internal: {
          mimeType: 'text/markdown',
          content: node.Contenu,
          origin: node.id
        }
      })

      node.content = collection._store.createReference(markdownNode)
    }

    if (node.internal.typeName === 'Poste') {
      const markdownStore = collection._store.addCollection('PosteContent')

      const markdownNode = markdownStore.addNode({
		    // any other fields, id, slug, title etc
        internal: {
          mimeType: 'text/markdown',
          content: node.description,
          origin: node.id
        }
      })

      node.content = collection._store.createReference(markdownNode)
    }

    if (node.internal.typeName === 'Accompagnement') {
      const markdownStore = collection._store.addCollection('AccompagnementContent')

      const markdownNode = markdownStore.addNode({
		    // any other fields, id, slug, title etc
        internal: {
          mimeType: 'text/markdown',
          content: node.Mission,
          origin: node.id
        },
      })

      node.content = collection._store.createReference(markdownNode)

      // node.Experts.forEach((expert, i) => {
      //   node.Experts[i].slug = slugify(expert.name);
      // });
    }
  });
}
