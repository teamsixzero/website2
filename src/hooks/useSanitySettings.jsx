import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    sanitySettings {
      menu {
        links {
          __typename
          ... on SanityLink {
            _key
            title
            url
          }
          ... on SanityLinkGroup {
            _key
            title
            url
            links {
              _key
              title
              url
            }
          }
        }
      }

      footer {
        links {
          __typename
          ... on SanityLink {
            _key
            title
            url
          }
          ... on SanityLinkGroup {
            _key
            title
            url
            links {
              _key
              title
              url
            }
          }
        }
        email
      }

      seo {
        title
        description
        keywords
        favicon {
          asset {
            url
          }
        }
        socialImage {
          asset {
            url
          }
        }
      }

      scripts {
        __typename
        ... on SanityScriptInline {
          _key
          value
        }
        ... on SanityScriptSrc {
          _key
          value
        }
      }
    }
  }
`;

const useSanitySettings = () => {
  const data = useStaticQuery(query);

  return data?.sanitySettings;
};

export default useSanitySettings;
