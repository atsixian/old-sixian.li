/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";

type BlogListItemProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
    excerpt: string;
  };
  showTags?: boolean;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <Styled.a
      as={Link}
      to={post.slug}
      sx={{ fontSize: [1, 2, 3], color: `secondary` }}
    >
      {post.title}
    </Styled.a>
    <p
      sx={{
        color: `text`,
        mt: 1,
        a: { color: `text` },
        fontSize: [1, 1, 2]
      }}
    >
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      <p sx={{ color: `text`, mb: 4, fontSize: [1, 2] }}>{post.excerpt}</p>
    </p>
  </Box>
);

export default BlogListItem;
