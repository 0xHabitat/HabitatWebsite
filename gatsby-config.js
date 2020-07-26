module.exports = {
  siteMetadata: {
    title: `Habitat`,
    description: `a beautifully and simple Governance Plattform on Layer2.  Launch your own Governance Token with a view clicks or use any exsisting ERC-20 token. We enable fast and cheap governance for your DAO or DEFI project.`,
    author: `@deora`,
    siteUrl: `https://habitat.deora.earth`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        prefix: "",
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://atomizecode.com/",
        sitemap: "https://atomizecode.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/atomize-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
