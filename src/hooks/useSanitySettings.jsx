import { useStaticQuery, graphql } from "gatsby";

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
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
          _key
          value
        }
      }
    }
  `);

  return data?.sanitySettings;
};

export default useSanitySettings;
