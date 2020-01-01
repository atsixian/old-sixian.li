import React from "react";
import Blog from "../../gatsby-theme-minimal-blog/components/blog";
import { sortByDate } from "./util";

// Recreate the blog template to use posts from ghost and MDX

export default ({ data }) => {
  const { allPost, allGhostPost } = data;
  const combinedPosts = [...allPost.nodes, ...allGhostPost.nodes];

  sortByDate(combinedPosts);

  // combinedPosts.nodes is an array of all posts
  return <Blog posts={combinedPosts} />;
};
