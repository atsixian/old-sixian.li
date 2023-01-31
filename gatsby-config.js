require(`dotenv`).config({
  path: `.env`,
});

const version = process.env.GATSBY_BUILD_VERSION;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Sixian Li`,
    // Default title of the page
    siteTitleAlt: `Sixian Li`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Sixian Li`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sixian.li`,
    // Used for SEO`
    siteDescription: `Sixian Li's life and thoughts`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `GitHub`,
        url: `https://github.com/Deerhound579`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/lisixian/`,
      },
      {
        name: `Unsplash`,
        url: `https://unsplash.com/@sixian`,
      }
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`, // I want the default homepage to be /blog
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 70,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 70,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        basePath: `/`,
        blogPath: `/blog`,
        mdx: false, // disabling mdx from the theme and redefine it here for new plugins
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID
    //   }
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sixian Li`,
        short_name: `sixian.li`,
        description: `Attempts to capture floating thoughts in Sixian Li's mind`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
