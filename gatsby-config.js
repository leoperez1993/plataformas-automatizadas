module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "plataformas-automatizadas",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `platform`,
        path: `${__dirname}/resources/platform`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `framework`,
        path: `${__dirname}/resources/framework`,
      },
    },
  ],
};
