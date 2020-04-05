import { graphql } from "gatsby";
import TagComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/tag";

export default TagComponent;

export const query = graphql`
  query($slug: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`;
