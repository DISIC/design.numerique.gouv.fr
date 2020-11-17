// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DesignGouv',
  siteUrl: 'https://design.numerique.gouv.fr/',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: '//stats.data.gouv.fr',
        siteId: 105
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/docs/*','/recrutement/*'],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'People',
        path: './content/team/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Job',
        path: './content/jobs/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Challenge',
        path: './content/commandoux/*.md',
        refs: {
          team: 'People',
          profil1: 'People',
          profil2: 'People',
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: './content/articles/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      }
    },
  ],
  transformers: {
    remark: {
      autolinkHeadings: false,
      plugins: [
        'remark-attr',
        [
          'gridsome-plugin-remark-container',
          {
            customTypes: {
              steps: {
                 keyword: 'steps',
                 customBlock: true,
                 tagName: 'div',
                 properties: {
                   class: 'steps'
                 }
               },
            },
            useDefaultTypes: false,
            tag: ':::',
            icons: 'none',
            classMaster: 'md'
          }
        ]
      ]
    }
  },
  templates: {
    People: '/equipe/:id',
    Job: '/recrutement/:slug',
    Challenge: '/commando-ux/:slug',
    Article: '/blog/:slug',
    Tag: '/tag/:id',
  },
  prefetch: {
    mask: '^$', // example - disable all prefetch
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
