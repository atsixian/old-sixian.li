<p align="center">
  <a href="https://www.sixian.li">
    <img alt="LekoArts" src="https://i.imgur.com/P2ABXY8.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter: Minimal Blog Enhanced
</h1>

<p align="center">
  <a href="https://github.com/Deerhound579/sixian.li/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Minimal Blog Enhanced is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

[Demo Website](https://www.sixian.li)

Built upon the awesome Gatsby theme [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog):

> Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting. 

## Features

### Include all features from the original theme

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Typography driven, minimal style
- Tags/Categories support
- Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support. Also allows adding line numbers, line highlighting, language tabs, and file titles.
- RSS Feed for blog posts
- Google Analytics Support
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- Offline Support & WebApp Manifest

## And **more**

* Use [**Ghost**](https://ghost.org/) as the headless CMS. Write and manage your content anywhere, anytime with a nice [editor](https://ghost.org/faq/using-the-editor/)

  Note: You do need a running Ghost installation for this feature. Here’s a [guide](https://ghost.org/docs/setup/) on how to set up Ghost
  ![Ghost as CMS](./demo/ghost_cms.png)

* Math support with KaTex[ demo page](https://sixian.li/my-favorite-proofs-from-analysis-1)

* Image zoom for local **and** external images in MDX files or Ghost posts

  ![Zoom](./demo/image_zoom.gif)

  

* Show excerpt in the blog page list

  ![excerpt](./demo/excerpt.png)

TODO:

* A reading progress bar to replace reading time since it’s not very accurate
* Project page with project cards
* Table of content for each post for an easier navigation
* Suggestions are welcomed!

## Customization

You can follow the customization guide from [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog). Other things to point out:

#### Changing the “Random Facts"

Go to `src/@lekoarts/gatsby-theme-minimal-blog/texts/`, change `strings` in `Typewritte.jsx`. Or if you want to replace the whole section, just change `hero.mdx` to whatever you want.

#### Can I disable Ghost?

There's no easy switch to turn it on and off for now, but I plan to add this feature in the future.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.
