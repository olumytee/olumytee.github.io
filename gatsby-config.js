module.exports = {
  siteMetadata: {
    title: `Olumide`,
    description: `Awo láàrin àwọn ọ̀gbẹ̀rì`,
    author: `@lohdlippi`,
    imageUrl: `https://res.cloudinary.com/pitech/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1578168111/thumbs/00100sPORTRAIT_00100_BURST20191228181227582_COVER.jpg`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
