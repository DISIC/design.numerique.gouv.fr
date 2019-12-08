# DesignGouv

### Initial setup

- `git clone git@github.com:DISIC/design.numerique.gouv.fr.git`
- `npm install --global @gridsome/cli`
- `npm install`

### Run the projet
- Enter directory `cd design.numerique.gouv.fr`
- Run `gridsome develop` to start local development
    - This won't run unless you're also running the APIs from this [repo](https://github.com/DISIC/designgouv-admin)
    - If your work is unrelated to the APIs, you can also comment out these 2 parts below from `gridsome.config.js` while you develop.

      ```js
      {
        use: '@gridsome/source-strapi',
        options: {
          apiURL: process.env.STRAPI_API,
          queryLimit: 1000, // Defaults to 100
          contentTypes: ['jobs'],
        }
      }
      ```
      and
      ```js
      templates: {
        StrapiJobs: '/recrutement/:title',
      },
      ```
