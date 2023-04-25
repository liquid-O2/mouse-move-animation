module.exports = {
  siteMetadata: {
    title: `Groundcrew`,
    description: `A Gatsby Starter Created By Groundcrew to speed up development`,
    author: `@groundcrew`,
    siteUrl: `https://groundcrew.com.au`,
  },
  plugins: [
    // -- Uncomment the lines below when you want to integrate Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [process.env.GATSBY_GOOGLE_GTAG],
    //     gtagConfig: {
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //       send_page_view: true,
    //     },
    //     pluginConfig: {
    //       head: true,
    //       respectDNT: false,
    //     },
    //   },
    // },

    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
