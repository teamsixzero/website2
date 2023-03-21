import React from "react";
import { graphql } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";

import RichText from "../RichText";
import Image from "../Image";

import { addHighlight } from "../../utils/helpers";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (!children[0]) return <></>;
      return <p className="h4">{addHighlight(children)}</p>;
    },
  },
};

const Testimonial = ({ data }) => {
  const { quote, person } = data;

  return (
    <div className="block-testimonial">
      <div className="block-testimonial__wrapper">
        <blockquote>
          <RichText content={quote} options={options} />
        </blockquote>

        <header className="block-testimonial__wrapper__person">
          <Image src={person.photo} alt={person.photo.title} />
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
  fragment BlockTestimonial on ContentfulBlockTestimonial {
    quote {
      raw
    }
    person {
      name
      position
      photo {
        gatsbyImageData(
          quality: 100
          width: 48
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
    }
  }
`;
