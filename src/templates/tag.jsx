/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex, Heading } from "@theme-ui/components";
import { Link, graphql } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import cloneDeep from "lodash/cloneDeep";

const Tag = ({ data, pageContext }) => {
  const { allGhostPost } = data;
  const { tagsPath, basePath } = useSiteMetadata();
  const posts = cloneDeep(allGhostPost.nodes);
  // Change the key name, and modify the slug, deepCopy is essential
  posts.map(post => {
    post["date"] = post["published_at"];
    delete post["published_at"];
    post["slug"] = `${basePath}/${post["slug"]}`;
  });

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`
        }}
      >
        <Heading variant="h2" as="h2">
          {pageContext.name}
        </Heading>
        <Styled.a
          as={Link}
          sx={{ variant: `links.secondary` }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Styled.a>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Tag;

export const query = graphql`
  query($slug: String!) {
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        published_at(formatString: "MMMM DD, YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`;
