module.exports = {
  siteMetadata: {
    title: "Joaquin Romero",
    description: "Blog personal",
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:100,200,300,400,500,600,700,800,900"],
        },
      },
    },
  ],
}
