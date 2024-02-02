exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createSlice } = actions;

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

  // Slices
  const slices = [
    {
      id: "navigation-header",
      context: { type: "header" },
      component: require.resolve("./src/components/HeaderNavigation.jsx"),
    },
    {
      id: "navigation-footer",
      context: { type: "footer" },
      component: require.resolve("./src/components/FooterNavigation.jsx"),
    },
    {
      id: "navigation-mobile",
      context: { type: "mobile" },
      component: require.resolve("./src/components/MobileNavigation.jsx"),
    },
    // blocks
    {
      id: "caseStudy",
      component: require.resolve("./src/components/blocks/CaseStudy.jsx"),
    },
    {
      id: "contactCallout",
      component: require.resolve("./src/components/blocks/ContactCallout.jsx"),
    },
    {
      id: "contactForm",
      component: require.resolve("./src/components/blocks/ContactForm.jsx"),
    },
    {
      id: "content",
      component: require.resolve("./src/components/blocks/Content.jsx"),
    },
    {
      id: "header",
      component: require.resolve("./src/components/blocks/Header.jsx"),
    },
    {
      id: "logos",
      component: require.resolve("./src/components/blocks/Logos.jsx"),
    },
    {
      id: "mediaColumns",
      component: require.resolve("./src/components/blocks/MediaColumns.jsx"),
    },
    {
      id: "mediaGrid",
      component: require.resolve("./src/components/blocks/MediaGrid.jsx"),
    },
    {
      id: "mediaSection",
      component: require.resolve("./src/components/blocks/MediaSection.jsx"),
    },
    {
      id: "multiSection",
      component: require.resolve("./src/components/blocks/MultiSection.jsx"),
    },
    {
      id: "nextProject",
      component: require.resolve("./src/components/blocks/NextProject.jsx"),
    },
    {
      id: "orderedList",
      component: require.resolve("./src/components/blocks/OrderedList.jsx"),
    },
    {
      id: "projectInfo",
      component: require.resolve("./src/components/blocks/ProjectInfo.jsx"),
    },
    {
      id: "testimonial",
      component: require.resolve("./src/components/blocks/Testimonial.jsx"),
    },
    {
      id: "testimonials",
      component: require.resolve("./src/components/blocks/Testimonials.jsx"),
    },
    {
      id: "textAndMedia",
      component: require.resolve("./src/components/blocks/TextAndMedia.jsx"),
    },
    {
      id: "threeColumnSection",
      component: require.resolve(
        "./src/components/blocks/ThreeColumnSection.jsx"
      ),
    },
  ];

  slices.forEach((slice) => {
    createSlice(slice);
  });
};
