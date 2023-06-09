import React from "react";
import { graphql } from "gatsby";

import Link from "../Link";
import SanityImage from "../SanityImage";

const NextProject = ({ data }) => {
  const { project, coverImage } = data;

  return (
    <div className="block-next-project">
      <Link
        to={`/projects/${project?.slug?.current}`}
        className="block-next-project__wrapper"
      >
        <header>
          <p className="text-small">Next Project</p>
          <h2 className="h4">{project?.title}&nbsp;→</h2>
        </header>

        <SanityImage src={coverImage} />
      </Link>
    </div>
  );
};

export default NextProject;

export const query = graphql`
  fragment BlockNextProject on SanityNextProject {
    project {
      title
      slug {
        current
      }
    }
    coverImage {
      ...ImageWithPreview
      asset {
        metadata {
          dimensions {
            width
            height
          }
        }
      }
      alt
    }
  }
`;
