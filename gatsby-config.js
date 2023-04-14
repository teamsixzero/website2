require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    siteUrl: `https://sixzero.co`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: isDev || false,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sixzero`,
        short_name: `Sixzero`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `static/images/favicon.svg`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
