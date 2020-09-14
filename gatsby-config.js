require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: `Mama Sue's Cook House`,
    description: `Mama Sue's Cook House. Gorgeous home cooked food`,
    author: "Yanny Kyprianou",
    twitterUsername: "@yannykyps",
    image: "/twitter-img.png",
    siteUrl: "https://www.mamasues.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u85zep1fjtj4`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
