import React from "react";
import { graphql } from "gatsby";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RichText from "../RichText";
import SanityImage from "../SanityImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = ({ data }) => {
  const { persons, backgroundColor } = data;

  return (
    <div
      className={`block-testimonials ${
        backgroundColor?.value?.hex ? "has-background" : ""
      }`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <Swiper
        className="block-testimonials__list"
        tag="ul"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {persons?.length > 0 &&
          persons?.map((person) => (
            <SwiperSlide key={person._id} tag="li">
              <article className="block-testimonials__list__item">
                <blockquote>
                  <RichText content={person?.quote} />
                </blockquote>

                <header className="block-testimonials__list__item__person">
                  <SanityImage
                    className="block-testimonials__list__item__person__image"
                    src={person?.photo}
                    width={64}
                  />
                  <div className="block-testimonials__list__item__person__details">
                    <h3 className="text-small font-bold">{person.name}</h3>
                    <p className="text-small">{person.position}</p>
                  </div>
                </header>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

export const query = graphql`
  fragment BlockTestimonials on SanityTestimonials {
    persons {
      _id
      name
      position
      photo {
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
      quote: _rawQuote(resolveReferences: { maxDepth: 10 })
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
