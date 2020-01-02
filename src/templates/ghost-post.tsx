/** @jsx jsx */
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { jsx, BaseStyles } from "theme-ui";
import { Heading } from "@theme-ui/components";
import React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import "../styles/app.css";

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

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { ghostPost } }: PostProps) => (
  <Layout>
    <div>
      {ghostPost.codeinjection_head ? (
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
      ) : null}
    </div>
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
        my: 5,
        ".gatsby-resp-image-wrapper": {
          my: [4, 4, 5],
          boxShadow: shadow.join(`, `)
        }
      }}
    >
      <BaseStyles>
        <div
          className="content-body"
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
