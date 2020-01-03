## Change date format

Shadow queries

## Change theme color

Shadow theme-ui index.js

## Restructure the homepage

## Change the base directory

I want to show the main page at `sixian.li` and the blog page at `sixian.li/blog`

## Tricky part: combine two sources

We need to sort the value based on its date in a descending order, e.g. From the latest post to the oldest one).
Ghost has a different name for "date". To minimize modifications, I decided to change "published_at" to "date", so Ghost posts will be compatible with blog listing component.

```javascript
import React from "react";
import Blog from "../../gatsby-theme-minimal-blog/components/blog";

// Recreate the blog template to use posts from ghost and MDX

// Rename "published_at" to "date" to normalize the result
const renameKey = (obj, oldKey, newKey) => {
  if (obj[oldKey]) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
};

export default ({ data }) => {
  const { allPost, allGhostPost } = data;
  const combinedPosts = [...allPost.nodes, ...allGhostPost.nodes];

  combinedPosts.map(post => renameKey(post, "published_at", "date"));
  combinedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // combinedPosts.nodes is an array of all posts
  return <Blog posts={combinedPosts} />;
};
```

## TODO

1. Create pages for Ghost blog posts `gatsby-node.js`
2. Get reading_time for Ghost blog posts in `post-query`
3. Set up hooks for Ghost update with Netlify
4. Add environment variables in Netlify because I don't want to expose my app API key
5. Try to fix tags

### Tags fixed

mergeTwoResults

Another problem: how to handle posts from Ghost with existing tags?
Expected result: Show the merged results in the tag page. Display all posts with the same tag no matter whatever the source is.

Solution:
The same as the homepage one. Combine posts from two sources with the same tag and sort by date. `sortByDate` utility function

### Create posts and tags pages for Ghost posts in `gatsby-node.js`

Some tags only exist at the Ghost side, so I need to create tags pages for them following `/${basePath}/{$tagPath}/{tagName}`

### Math support is done via Helmet

Get code injection from `ghostPost.codeinjection_head` and wrap it in `Helmet`

```javascript
import React from "react";
import { Helmet } from "react-helmet";
export default () => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.css"
      crossorigin="anonymous"
    />
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/contrib/auto-render.min.js"
      crossorigin="anonymous"
      onload="renderMathInElement(document.body);"
    ></script>
    <script
      type="text/javascript"
      async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js?config=TeX-MML-AM_CHTML"
    ></script>
  </Helmet>
);
```

### Add image zoom
