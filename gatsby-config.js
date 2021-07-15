// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` || `.env`,
})

const config = require("gatsby-plugin-config").default

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter `,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    // },
    // },
    // using env variable without GATSBY_ prefix
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["MY_ENV", "GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"],
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "SELFMAX",
    //     fieldName: "selfmax",
    //     url: process.env.GRAPHCMS_ENDPOINT,
    //   },
    // },

    // {
    //   resolve: "gatsby-source-graphcms",
    //   options: {
    //     endpoint: config.GRAPHCMS_ENDPOINT,
    //     token: config.GRAPHCMS_TOKEN,
    //     downloadLocalImages: true,
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
