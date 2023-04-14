import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";
import Image from "../Image";

const Testimonial = ({ data }) => {
  const { quote, person, backgroundColor } = data;

  return (
    <div
      className={`block-testimonial ${
        backgroundColor?.value?.hex ? "has-background" : ""
      }`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <div className="block-testimonial__wrapper">
        <blockquote>
          <RichText content={quote} />
        </blockquote>

        <header className="block-testimonial__wrapper__person">
          <Image src={person?.photo?.asset} alt={person?.photo?.alt} />
          <div className="block-testimonial__wrapper__person__details">
            <h3 className="text-small font-bold">{person.name}</h3>
            <p className="text-small">{person.position}</p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Testimonial;

export const query = graphql`
  fragment BlockTestimonial on SanityTestimonial {
    quote: _rawQuote(resolveReferences: { maxDepth: 10 })
    person {
      name
      position
      photo {
        asset {
          gatsbyImageData(
            width: 48
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        alt
      }
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
