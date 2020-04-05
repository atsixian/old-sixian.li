import { graphql } from "gatsby";
import BlogComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/blog";

export default BlogComponent;

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags {
          name
          slug
        }
        excerpt
      }
    }
  }
`;
