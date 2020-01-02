import React from "react";
import Blog from "../../gatsby-theme-minimal-blog/components/blog";
import { sortByDate } from "./util";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import cloneDeep from "lodash/cloneDeep";

// Recreate the blog template to use posts from Ghost and MDX

export default ({ data }) => {
  const { allPost, allGhostPost } = data;
  const { basePath } = useSiteMetadata();
  const ghostPosts = cloneDeep(allGhostPost.nodes);
  ghostPosts.map(post => (post["slug"] = `${basePath}/${post.slug}`));
  const combinedPosts = [...allPost.nodes, ...ghostPosts];
  // Change the slug
  sortByDate(combinedPosts);

  // combinedPosts.nodes is an array of all posts
  return <Blog posts={combinedPosts} />;
};
