const path = require("path");
// const typeDefs = require("./typeDefs.txt");

// console.log(`typeDefs`, typeDefs);

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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, printTypeDefinitions } = actions;
  // printTypeDefinitions({ path: "./gatsbyTypeDefs.txt" });

  // Having to copy the type defs from the typeDefs.txt file, otherwise Contentful doesn't create the GrapphQL Schema entrires if there's no published content
  // Will have to do this for all other pages that page build and for every new block
  // all unions will have to be updated with the new block name. Ordered alphabetically
  const typeDefs = `
  union ContentfulBlockUnion = ContentfulBlockContent | ContentfulBlockHeader | ContentfulBlockImageFullWidth | ContentfulBlockImageTwoColumns | ContentfulBlockMultiSection | ContentfulBlockOrderedList | ContentfulBlockProjectInfo | ContentfulBlockTestimonial | ContentfulBlockTextAndImage

  union ContentfulMultiSectionBlockUnion = ContentfulBlockContent | ContentfulBlockImageFullWidth | ContentfulBlockOrderedList
  
  
  
  
  type ContentfulProject implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      slug: String
      alignment: String
      summaryImage: [ContentfulAsset] @link(by: "id", from: "summaryImage___NODE")
      blocks: [ContentfulBlockUnion] @link(by: "id", from: "blocks___NODE")
      summary: contentfulProjectSummaryTextNode @link(by: "id", from: "summary___NODE")
      description: contentfulProjectDescriptionTextNode @link(by: "id", from: "description___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulProjectSys
  }
  
  type ContentfulProjectSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulProjectSysContentType
  }
  
  type ContentfulProjectSysContentType @derivedTypes {
      sys: ContentfulProjectSysContentTypeSys
  }
  
  type ContentfulProjectSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  type contentfulProjectSummaryTextNode implements Node @derivedTypes @childOf(types: ["ContentfulProject"]) @dontInfer {
      summary: String
      sys: contentfulProjectSummaryTextNodeSys
  }
  
  type contentfulProjectSummaryTextNodeSys {
      type: String
  }
  
  type contentfulProjectDescriptionTextNode implements Node @derivedTypes @childOf(types: ["ContentfulProject"]) @dontInfer {
      description: String
      sys: contentfulProjectDescriptionTextNodeSys
  }
  
  type contentfulProjectDescriptionTextNodeSys {
      type: String
  }
  
  
  
  
  type ContentfulPerson implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      name: String
      position: String
      photo: ContentfulAsset @link(by: "id", from: "photo___NODE")
      block_testimonial: [ContentfulBlockTestimonial] @link(by: "id", from: "block testimonial___NODE") @proxy(from: "block testimonial___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulPersonSys
  }
  
  type ContentfulPersonSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulPersonSysContentType
  }
  
  type ContentfulPersonSysContentType @derivedTypes {
      sys: ContentfulPersonSysContentTypeSys
  }
  
  type ContentfulPersonSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockContent implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      text: ContentfulBlockContentText
      hasBackground: Boolean
      block_multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block multi section___NODE") @proxy(from: "block multi section___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockContentSys
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
  }
  
  type ContentfulBlockContentText {
      raw: String
  }
  
  type ContentfulBlockContentSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockContentSysContentType
  }
  
  type ContentfulBlockContentSysContentType @derivedTypes {
      sys: ContentfulBlockContentSysContentTypeSys
  }
  
  type ContentfulBlockContentSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockHeader implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      content: ContentfulBlockHeaderContent
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockHeaderSys
  }
  
  type ContentfulBlockHeaderContent {
      raw: String
  }
  
  type ContentfulBlockHeaderSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockHeaderSysContentType
  }
  
  type ContentfulBlockHeaderSysContentType @derivedTypes {
      sys: ContentfulBlockHeaderSysContentTypeSys
  }
  
  type ContentfulBlockHeaderSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockImageFullWidth implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      source: ContentfulAsset @link(by: "id", from: "source___NODE")
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
      spaceId: String
      block_multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block multi section___NODE") @proxy(from: "block multi section___NODE")
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockImageFullWidthSys
  }
  
  type ContentfulBlockImageFullWidthSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockImageFullWidthSysContentType
  }
  
  type ContentfulBlockImageFullWidthSysContentType @derivedTypes {
      sys: ContentfulBlockImageFullWidthSysContentTypeSys
  }
  
  type ContentfulBlockImageFullWidthSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockImageTwoColumns implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      imageOne: ContentfulAsset @link(by: "id", from: "imageOne___NODE")
      imageTwo: ContentfulAsset @link(by: "id", from: "imageTwo___NODE")
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockImageTwoColumnsSys
  }
  
  type ContentfulBlockImageTwoColumnsSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockImageTwoColumnsSysContentType
  }
  
  type ContentfulBlockImageTwoColumnsSysContentType @derivedTypes {
      sys: ContentfulBlockImageTwoColumnsSysContentTypeSys
  }
  
  type ContentfulBlockImageTwoColumnsSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockMultiSection implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      blocks: [ContentfulMultiSectionBlockUnion] @link(by: "id", from: "blocks___NODE")
      hasBackground: Boolean
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockMultiSectionSys
  }
  
  type ContentfulBlockMultiSectionSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockMultiSectionSysContentType
  }
  
  type ContentfulBlockMultiSectionSysContentType @derivedTypes {
      sys: ContentfulBlockMultiSectionSysContentTypeSys
  }
  
  type ContentfulBlockMultiSectionSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockOrderedList implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      listItems: [ContentfulListItem] @link(by: "id", from: "listItems___NODE")
      block_multi_section: [ContentfulBlockMultiSection] @link(by: "id", from: "block multi section___NODE") @proxy(from: "block multi section___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockOrderedListSys
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
  }
  
  type ContentfulBlockOrderedListSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockOrderedListSysContentType
  }
  
  type ContentfulBlockOrderedListSysContentType @derivedTypes {
      sys: ContentfulBlockOrderedListSysContentTypeSys
  }
  
  type ContentfulBlockOrderedListSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockProjectInfo implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      info: [ContentfulTitleText] @link(by: "id", from: "info___NODE")
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockProjectInfoSys
  }
  
  type ContentfulBlockProjectInfoSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockProjectInfoSysContentType
  }
  
  type ContentfulBlockProjectInfoSysContentType @derivedTypes {
      sys: ContentfulBlockProjectInfoSysContentTypeSys
  }
  
  type ContentfulBlockProjectInfoSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulBlockTestimonial implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    title: String
    quote: ContentfulBlockTestimonialQuote
    person: ContentfulPerson @link(by: "id", from: "person___NODE")
    project: [ContentfulProject] @link(by: "id", from: "project___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulBlockTestimonialSys
  }
  
  type ContentfulBlockTestimonialQuote {
    raw: String
  }
  
  type ContentfulBlockTestimonialSys @derivedTypes {
    type: String
    revision: Int
    contentType: ContentfulBlockTestimonialSysContentType
  }
  
  type ContentfulBlockTestimonialSysContentType @derivedTypes {
    sys: ContentfulBlockTestimonialSysContentTypeSys
  }
  
  type ContentfulBlockTestimonialSysContentTypeSys {
    type: String
    linkType: String
    id: String
  }
  
  
  
  
  type ContentfulBlockTextAndImage implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      hasBackground: Boolean
      imageAlign: String
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      text: ContentfulBlockTextAndImageText
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulBlockTextAndImageSys
      project: [ContentfulProject] @link(by: "id", from: "project___NODE")
  }
  
  type ContentfulBlockTextAndImageText {
      raw: String
  }
  
  type ContentfulBlockTextAndImageSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulBlockTextAndImageSysContentType
  }
  
  type ContentfulBlockTextAndImageSysContentType @derivedTypes {
      sys: ContentfulBlockTextAndImageSysContentTypeSys
  }
  
  type ContentfulBlockTextAndImageSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulListItem implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      block_ordered_list: [ContentfulBlockOrderedList] @link(by: "id", from: "block ordered list___NODE") @proxy(from: "block ordered list___NODE")
      text: contentfulListItemTextTextNode @link(by: "id", from: "text___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulListItemSys
  }
  
  type contentfulListItemTextTextNode implements Node @derivedTypes @childOf(types: ["ContentfulListItem"]) @dontInfer {
      text: String
      sys: contentfulListItemTextTextNodeSys
  }
  
  type contentfulListItemTextTextNodeSys {
      type: String
  }
  
  type ContentfulListItemSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulListItemSysContentType
  }
  
  type ContentfulListItemSysContentType @derivedTypes {
      sys: ContentfulListItemSysContentTypeSys
  }
  
  type ContentfulListItemSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  
  
  
  
  type ContentfulTitleText implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
      contentful_id: String!
      node_locale: String!
      title: String
      text: String
      block_project_info: [ContentfulBlockProjectInfo] @link(by: "id", from: "block project info___NODE") @proxy(from: "block project info___NODE")
      spaceId: String
      createdAt: Date @dateformat
      updatedAt: Date @dateformat
      sys: ContentfulTitleTextSys
  }
  
  type ContentfulTitleTextSys @derivedTypes {
      type: String
      revision: Int
      contentType: ContentfulTitleTextSysContentType
  }
  
  type ContentfulTitleTextSysContentType @derivedTypes {
      sys: ContentfulTitleTextSysContentTypeSys
  }
  
  type ContentfulTitleTextSysContentTypeSys {
      type: String
      linkType: String
      id: String
  }
  `;

  createTypes(typeDefs);
};
