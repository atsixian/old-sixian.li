/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Heading, Box, Flex } from "@theme-ui/components";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

type PostsProps = {
  list: {
    fieldValue: string;
    totalCount: number;
  }[];
};

const Tags = ({ list }: PostsProps) => {
  const { basePath, tagsPath } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading variant="h2" as="h2">
        Tags
      </Heading>
      <Box mt={[4, 5]}>
        {list.map(listItem => (
          <Flex
            key={listItem.fieldValue}
            mb={[1, 1, 2]}
            sx={{ alignItems: `center` }}
          >
            <Styled.a
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={`/${basePath}/${tagsPath}/${kebabCase(
                listItem.fieldValue
              )}`.replace(/\/\/+/g, `/`)}
            >
              {listItem.fieldValue}{" "}
              <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Styled.a>
          </Flex>
        ))}
      </Box>
    </Layout>
  );
};

export default Tags;
