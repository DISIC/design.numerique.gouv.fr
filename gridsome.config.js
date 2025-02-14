// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Load variables for all vue-files
const path = require("path");
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/scss/_vars.scss")],
    });
}

module.exports = {
  siteName: "DesignGouv",
  siteUrl: "https://design.numerique.gouv.fr/",
  plugins: [
    {
      use: "gridsome-plugin-matomo",
      options: {
        host: "//stats.data.gouv.fr",
        siteId: 105,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/docs/*", "/recrutement/*"],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "People",
        path: "./content/team/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Mission",
        path: "./content/commandoux/**/*.md",
        refs: {
          team: "People",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        path: "./content/articles/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Role",
        path: "./content/roles/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Pnu",
        path: "./content/pnu/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "GooseStep",
        path: "./content/goose/steps/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "GooseCard",
        path: "./content/goose/cards/*.md",
        refs: {
          step: "GooseStep",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "DiagFlashCat",
        path: "./content/diag/cat/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "DiagFlashCriterion",
        path: "./content/diag/*.md",
        refs: {
          cat: "DiagFlashCat",
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PidilaCriterion",
        path: "./content/pidila/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Entretien",
        path: "./content/entretiens/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Expert",
        path: "./content/expert-experte/*.md",
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["en-gb", "fr-fr"],
        pathAliases: {
          "en-gb": "en",
          "fr-fr": "fr",
        },
        fallbackLocale: "en-gb", // fallback language
        defaultLocale: "fr-fr", // default language
        rewriteDefaultLanguage: false,
        messages: {
          "en-gb": require("./src/locales/en-gb.json"), // Messages files
          "fr-fr": require("./src/locales/fr-fr.json"),
        },
      },
    },
    {
      use: "~/src/plugins/gridsome-source-grist",
      options: {
        apiKey: process.env.GRIDSOME_GRIST_API_KEY,
        docId: process.env.GRIDSOME_GRIST_DOC_ID,
        baseUrl: process.env.GRIDSOME_GRIST_URL,
        sort: "id",
        limit: 1000,
        tables: [
          {
            name: "Cours",
            typeName: "Cours",
            sort: "-id",
          },
          {
            name: "Formations",
            typeName: "Formation",
            sort: "-id",
          },
          {
            name: "Sessions",
            typeName: "Sessions",
            sort: "-id",
          },
          {
            name: "Intervenants",
            typeName: "Intervenants",
            sort: "-id",
          },
        ],
        relations: [
          {
            fromTable: "Cours",
            toTable: "Formation",
            foreignKey: "formation",
          },
          {
            fromTable: "Cours",
            toTable: "Intervenants",
            foreignKey: "intervenants",
          },
          {
            fromTable: "Cours",
            toTable: "Cours",
            foreignKey: "prerequis",
          },
          {
            fromTable: "Sessions",
            toTable: "Cours",
            foreignKey: "cours",
          },
          {
            fromTable: "Cours",
            toTable: "Sessions",
            foreignKey: "sessions",
          },
          {
            fromTable: "Formation",
            toTable: "Cours",
            foreignKey: "cours",
          },
        ],
      },
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_TOKEN, // required
        base: process.env.GRIDSOME_AIRTABLE_OBSERVATORY_BASE, // required
        tables: [
          {
            name: "tblDTPei5XSX4CUnO", // required
            typeName: "Accompagnement", // required
          },
        ],
        tableName: "tblDTPei5XSX4CUnO", // required
      },
    },
    {
      use: "gridsome-plugin-sentry",
      options: {
        dsn: "https://7e6b7f0da53c4796ace432e55a32da06@o1156251.ingest.sentry.io/6237416",
        attachProps: true, // defaults to true
        logErrors: true, // defaults to false
      },
    },
  ],
  transformers: {
    remark: {
      autolinkHeadings: false,
      slug: false,
      plugins: [
        "remark-attr",
        [
          "gridsome-plugin-remark-container",
          {
            customTypes: {
              steps: {
                keyword: "steps",
                customBlock: true,
                tagName: "div",
                properties: {
                  class: "dg-steps",
                },
              },
            },
            useDefaultTypes: false,
            tag: ":::",
            icons: "none",
            classMaster: "md",
          },
        ],
      ],
    },
  },
  templates: {
    People: "/equipe/:id",
    Mission: "/accompagnement/commando-ux/:slug",
    Article: "/articles/:slug",
    Role: "/accessibilite-numerique/roles-cles/:slug",
    Tag: "/articles/tag/:id",
    Formation: "/formations/:slug",
    Accompagnement: "/accompagnement/:Name",
    Entretien: "/entretiens/:firstName-:lastName",
    Expert: "/expert-experte/:firstName-:lastName",
    //ExpertsEtExpertes: '/experts/:lastName'
    // Poste: '/recrutement/:slug', -> géré manuellement dans gridsome.server.js
    // Cours: '/formations/cours/:id', -> géré manuellement dans gridsome.server.js
  },
  prefetch: {
    mask: "^$", // example - disable all prefetch
  },
  chainWebpack: (config) => {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
    // Load SVGs as components
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    // Load SVGs inline
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        removeAttributes: ["svg-inline", "src", "alt"],
        addAttributes: {
          role: "img",
        },
      });
  },
};
