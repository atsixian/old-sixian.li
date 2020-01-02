import React from "react";
import Tag from "@lekoarts/gatsby-theme-minimal-blog/src/components/tag";
import { sortByDate } from "./util";

type Props = {
  data: {
    allPost: any;
    allGhostPost: any;
    [key: string]: any;
  };
  pageContext: any;
};

export default ({ data, pageContext }: Props) => {
  const { allPost, allGhostPost } = data;
  const combinedPosts = [...allPost.nodes, ...allGhostPost.nodes];
  sortByDate(combinedPosts);
  return <Tag posts={combinedPosts} pageContext={pageContext} />;
};
