import React from "react";
import { graphql } from "gatsby";

const ProjectInfo = ({ data }) => {
  const { info } = data;

  return (
    <ul className="block-project-info">
      {info.map((information) => (
        <li key={information?.id}>
          <h3 class="text-bold">{information?.title}</h3>
          <p class="text-normal">{information?.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectInfo;

export const query = graphql`
  fragment BlockProjectInfo on ContentfulBlockProjectInfo {
    info {
      id
      title
      text
    }
  }
`;
