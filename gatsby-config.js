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
    siteUrl: "https://www.mamasues.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178447221-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mama Sue's Cook House`,
        short_name: `Mama Sue's`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `maskable`,
        },
      },
    },
    {
    resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mamasues.netlify.app/',
        sitemap: 'https://mamasues.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u85zep1fjtj4`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`Karla`, `Satisfy`],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
