import React from "react";
import Tags from "@lekoarts/gatsby-theme-minimal-blog/src/components/tags";
import { mergeTagsAddCount } from "./util";

type Props = {
  data: {
    allPost: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    allGhostPost: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
};

export default ({ data }: Props) => {
  const { allPost, allGhostPost } = data;
  const combined = mergeTagsAddCount(allPost.group, allGhostPost.group);
  // same tag, combined the total count
  return <Tags list={combined} />;
};
