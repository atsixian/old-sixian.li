exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
