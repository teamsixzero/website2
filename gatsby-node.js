exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  const result = await graphql(`
    {
      sanitySettings {
        redirects {
          _key
          from
          to
          status
        }
      }
    }
  `);

  result.data.sanitySettings.redirects.forEach(({ from, to, status }) => {
    createRedirect({
      fromPath: from,
      toPath: to,
      statusCode: status,
    });
  });
};
