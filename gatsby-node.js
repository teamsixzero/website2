const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const path = require(`path`);
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
            id: node.id,
          },
        });
      });
      resolve();
    });
  }).catch((error) => {
    console.log(error);
    reject();
  });
};
