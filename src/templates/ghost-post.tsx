/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx, BaseStyles } from "theme-ui";
import { Heading } from "@theme-ui/components";
import React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import Math from "./math-support";

type PostProps = {
  data: {
    ghostPost: {
      slug: string;
      codeinjection_head: string;
      title: string;
      published_at: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      html: string;
      excerpt?: string;
      reading_time: number;
      feature_image?;
    };
  };
};

const Post = ({ data: { ghostPost } }: PostProps) => (
  <Layout>
    <Math />
    <SEO
      title={ghostPost.title}
      description={ghostPost.excerpt}
      image={
        ghostPost.feature_image
          ? process.env.GHOST_API_URL + ghostPost.feature_image
          : undefined
      }
    />
    <Heading variant="h2" as="h2">
      {ghostPost.title}
    </Heading>
    <p
      sx={{
        color: `secondary`,
        mt: 3,
        a: { color: `secondary` },
        fontSize: [1, 1, 2]
      }}
    >
      <time>{ghostPost.published_at}</time>
      {ghostPost.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={ghostPost.tags} />
        </React.Fragment>
      )}
      {` — `}
      <span>{ghostPost.reading_time} min read</span>
    </p>
    <section
      sx={{
        my: 5
      }}
    >
      <BaseStyles>
        <div
          dangerouslySetInnerHTML={{
            __html: ghostPost.html
          }}
        />
      </BaseStyles>
    </section>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      slug
      codeinjection_head
      title
      published_at(formatString: "MMMM DD, YYYY")
      tags {
        name
        slug
      }
      html
      excerpt
      reading_time
      feature_image
    }
  }
`;

export default Post;
