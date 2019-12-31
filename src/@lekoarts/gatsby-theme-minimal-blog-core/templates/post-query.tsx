import { graphql } from "gatsby";
import PostComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/post";
import "katex/dist/katex.min.css"; // Add math support for post template

export default PostComponent;

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "MMMM DD, YYYY")
      tags {
        name
        slug
      }
      description
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`;
