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
