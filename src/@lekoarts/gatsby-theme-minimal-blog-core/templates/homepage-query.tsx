import { graphql } from "gatsby"
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 4) {
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
`