import { useStaticQuery, graphql } from "gatsby";

export const useSanitySettings = () => {
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
              links {
                _key
                title
                url
              }
            }
          }
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
      }
    }
  `);

  return data?.sanitySettings;
};
