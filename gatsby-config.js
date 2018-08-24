module.exports = {
    siteMetadata: {
        title: `Pandas Title`,
      },
    plugins: [
        `gatsby-transformer-remark`,
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