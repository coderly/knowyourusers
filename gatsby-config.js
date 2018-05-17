module.exports = {
  siteMetadata: {
    title: 'Know Your User',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:400,600,700`],
      },
    },
  ],
}
