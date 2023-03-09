// support for .env, .env.development, and .env.production
require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://sixzero.co`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
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
    //`gatsby-redirect-from`,
    //`gatsby-plugin-meta-redirect`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`,
  ],
};
