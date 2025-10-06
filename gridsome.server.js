// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // Set specific response HTTP headers for JSON files only:
  //
  // - max-age = 0     : the response is never fresh
  //
  // - s-maxage = 0    : the response is never fresh in a shared cache
  //                     (e.g. Proxy, CDN…)
  //
  // - no-cache        : the response can be stored in caches, but the response
  //                     must be validated with the origin server before each
  //                     reuse, even when the cache is disconnected from the
  //                     origin server.
  //
  // - must-revalidate : the response can be stored in caches and can be reused
  //                     while fresh (never here). If the response becomes stale
  //                     (straighaway here), it must be validated with the
  //                     origin server before reuse.
  //
  // - proxy-revalidate: equivalent of must-revalidate, but for shared caches
  //
  // → Hack to fix [Hash did not match #1032](https://github.com/gridsome/gridsome/issues/1032)
  api.configureServer((app) => {
    app.use((req, res, next) => {
      if (req.path.endsWith(".json")) {
        res.setHeader(
          "Cache-Control",
          "max-age=0, s-maxage=0, no-cache, must-revalidate, proxy-revalidate",
        );
        res.setHeader("Expires", "0");
      }
      next();
    });
  });

  api.loadSource(({ addSchemaResolvers }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addSchemaResolvers({
      DiagFlashCriterion: {
        rgaaStr: {
          type: "[String]",
          resolve: (obj) => obj.rgaa || [],
        },
      },
    });
  });

  api.createPages(async ({ graphql, createPage }) => {
    // Création manuel des pages Cours pour prendre en compte la Formation dans l'URL
    const cours = await graphql(`
      {
        allCours(filter: { publier: { eq: true } }) {
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
      }
    `);

    cours.data.allCours.edges.forEach(({ node }) => {
      createPage({
        path: `/formations/${node.formation.slug}/${node.slug}`,
        component: "./src/templates/Cours.vue",
        queryVariables: { id: node.id },
      });
    });
  });

  api.onCreateNode((node, collection) => {
    if (node.internal.typeName === "Cours") {
      const markdownStore = collection._store.addCollection("CoursContent");

      const markdownNode = markdownStore.addNode({
        // any other fields, id, slug, title etc
        internal: {
          mimeType: "text/markdown",
          content: node.Contenu,
          origin: node.id,
        },
      });

      node.content = collection._store.createReference(markdownNode);
    }
  });
};
