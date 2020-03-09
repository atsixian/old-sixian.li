const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          tagsPath
          basePath
        }
      }

      allGhostPost {
        nodes {
          slug
        }
      }

      allGhostTag {
        nodes {
          name
          slug
        }
      }

      tags: allPost(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  const { basePath, tagsPath } = result.data.site.siteMetadata;
  const ghostTags = result.data.allGhostTag.nodes;
  const localTags = result.data.tags.group;
  const posts = result.data.allGhostPost.nodes;

  // Filter out tags that already exists
  const existingTags = new Set();
  localTags.forEach(tag => existingTags.add(tag.fieldValue));
  const tags = ghostTags.filter(tag => !existingTags.has(tag.name));

  // Load templates
  const tagTemplate = path.resolve(`./src/templates/tag.jsx`);
  const postTemplate = path.resolve(`./src/templates/ghost-post.tsx`);

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/${basePath}/${tagsPath}/${tag.slug}`.replace(/\/\/+/g, `/`),
        component: tagTemplate,
        context: {
          slug: tag.slug,
          name: tag.name
        }
      });
    });
  }

  posts.forEach(post => {
    createPage({
      path: `/${basePath}/${post.slug}`.replace(/\/\/+/g, `/`),
      component: postTemplate,
      context: {
        slug: post.slug
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};