/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `沖縄貸切自然体験アドベンチャーツアー｜カヤック・トレッキング・結プログラム・ムイツアーでアドベンチャー体験｜oneocean（ワンオーシャン）`,
    description: `沖縄貸切自然体験アドベンチャーツアーのワンオーシャン、完全貸切で専門ガイド付き。沖縄本島北部でマングローブカヤック、リバートレッキング、ふれあいを大切にする結プログラム、古琉球の歴史を訪れるアドベンチャー体験！貸切だから自分のペースで冒険できる！お子様からご年配まで参加可能なツアーあり。子連れ家族旅行にもおすすめ`,
    author: `@hakusingo`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/one-ocean-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
}
