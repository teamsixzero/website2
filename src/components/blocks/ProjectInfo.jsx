import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const ProjectInfo = ({ data }) => {
  const { info, textColor, backgroundColor } = data;

  return (
    <ul
      className="block-project-info"
      style={{
        color: textColor?.value?.hex,
        backgroundColor: backgroundColor?.value?.hex,
      }}
    >
      {info.map((information) => (
        <li key={information?._key}>
          <h3 className="text-bold">{information?.title}</h3>
          <RichText content={information?.text} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectInfo;

export const query = graphql`
  fragment BlockProjectInfo on SanityProjectInfo {
    info {
      _key
      title
      text: _rawText
    }
    textColor {
      value {
        hex
      }
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
