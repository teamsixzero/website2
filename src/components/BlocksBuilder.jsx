import React, { memo } from "react";
import { Slice } from "gatsby";

import { v4 as uuidv4 } from "uuid";

const BlocksBuilder = memo(({ blocks }) => {
  const pageBlocks = [];

  blocks?.forEach((block) => {
    if (!block || Object.keys(block).length === 0) return;

    const blockName =
      block?.__typename.replace(`Sanity`, ``).charAt(0).toLowerCase() +
      block?.__typename.replace(`Sanity`, ``).slice(1);

    const blockKey = `block-${blockName}-${uuidv4()}`;

    switch (blockName) {
      case "caseStudy":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="caseStudy" data={block} />
          </section>
        );
        break;

      case "contactCallout":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="contactCallout" data={block} />
          </section>
        );
        break;

      case "contactForm":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="contactForm" data={block} />
          </section>
        );
        break;

      case "content":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="content" data={block} />
          </section>
        );
        break;

      case "header":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="header" data={block} />
          </section>
        );
        break;

      case "logos":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="logos" data={block} />
          </section>
        );
        break;

      case "mediaColumns":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="mediaColumns" data={block} />
          </section>
        );
        break;

      case "mediaGrid":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="mediaGrid" data={block} />
          </section>
        );
        break;

      case "mediaSection":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="mediaSection" data={block} />
          </section>
        );
        break;

      case "multiSection":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="multiSection" data={block} />
          </section>
        );
        break;

      case "nextProject":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="nextProject" data={block} />
          </section>
        );
        break;

      case "orderedList":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="orderedList" data={block} />
          </section>
        );
        break;

      case "projectInfo":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="projectInfo" data={block} />
          </section>
        );
        break;

      case "testimonial":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="testimonial" data={block} />
          </section>
        );
        break;

      case "testimonials":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="testimonials" data={block} />
          </section>
        );
        break;

      case "textAndMedia":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="textAndMedia" data={block} />
          </section>
        );
        break;

      case "threeColumnSection":
        pageBlocks.push(
          <section id={blockKey} key={blockKey} className="page-section">
            <Slice alias="threeColumnSection" data={block} />
          </section>
        );
        break;

      default:
        pageBlocks.push(null);
        break;
    }
  });

  return pageBlocks;
});

export default BlocksBuilder;
