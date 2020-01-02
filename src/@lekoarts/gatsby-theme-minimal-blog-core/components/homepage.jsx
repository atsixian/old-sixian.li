import React from "react";
import Homepage from "../../gatsby-theme-minimal-blog/components/homepage";
import { sortByDate } from "./util";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import cloneDeep from "lodash/cloneDeep";

export default ({ data }) => {
  const { allPost, allGhostPost } = data;
  const { basePath } = useSiteMetadata();
  const ghostPosts = cloneDeep(allGhostPost.nodes);
  ghostPosts.map(post => (post["slug"] = `${basePath}/${post.slug}`));
  const combinedPosts = [...allPost.nodes, ...ghostPosts];
  sortByDate(combinedPosts);
  return (
    <Homepage
      posts={
        combinedPosts.length > 4 ? combinedPosts.slice(0, 5) : combinedPosts
      }
    />
  );
};
