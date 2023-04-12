import React from "react";
import { graphql, Link } from "gatsby";

import Image from "../Image";

const NextProject = ({ data }) => {
  const { project, coverImage } = data;

  return (
    <div className="block-next-project">
      <Link
        to={`/projects/${project?.slug?.current}`}
        className="block-next-project__wrapper"
      >
        <header>
          <p>NextProject</p>
          <h2 className="h4">{project?.title}&nbsp;→</h2>
        </header>

        <Image src={coverImage?.asset} alt={coverImage?.alt} />
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
      asset {
        gatsbyImageData(
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      alt
    }
  }
`;
