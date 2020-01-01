import React from "react";
import Homepage from "../../gatsby-theme-minimal-blog/components/homepage";
import { sortByDate } from "./util";

export default ({ data }) => {
  const { allPost, allGhostPost } = data;
  const combinedPosts = [...allPost.nodes, ...allGhostPost.nodes];
  sortByDate(combinedPosts);
  return (
    <Homepage
      posts={
        combinedPosts.length > 4 ? combinedPosts.slice(0, 5) : combinedPosts
      }
    />
  );
};
