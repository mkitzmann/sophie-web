module.exports = {
    siteMetadata: {
        title: `Pandas Title`,
      },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
            },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
  }