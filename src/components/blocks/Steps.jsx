import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";
import RichText from "../RichText";

const Steps = ({ data }) => {
  const { header, steps } = data;

  return (
    <article className="block-steps">
      <header>
        <RichText content={header} />
      </header>

      <ul className="block-steps__list">
        {steps.map((step) => {
          const { id, text, image, imageAlign } = step;

          return (
            <li key={id}>
              <div className="step">
                <figure
                  className={`step__image step__image__${imageAlign.toLowerCase()}`}
                >
                  <Image src={image.gatsbyImageData} alt={image.title} />
                </figure>

                <div className="step__content">
                  <RichText content={text} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Steps;

export const query = graphql`
  fragment BlockSteps on ContentfulBlockSteps {
    header {
      raw
    }

    steps {
      id
      text {
        raw
      }
      image {
        gatsbyImageData(
          quality: 100
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
      imageAlign
    }
  }
`;
