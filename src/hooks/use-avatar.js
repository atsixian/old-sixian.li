import { useStaticQuery, graphql } from "gatsby";

const useAvatar = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { regex: "/about/avatar.jpg/" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return avatar;
};

export default useAvatar;
