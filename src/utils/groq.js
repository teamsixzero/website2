const objects = {
  button: `
    _type == "button" => {
        text,
        link,
    },
    `,
  color: `
        color -> {
            value,
            hex,
        },
    `,
  textColor: `
    textColor -> {
        ...
    },
    `,
  backgroundColor: `
    backgroundColor -> {
        ...
    },
`,
  get colors() {
    return `
    ${this.backgroundColor}
    ${this.textColor}
`;
  },
  imageAsset: `
    asset -> {
        _id,
        metadata {
            dimensions {
                width,
                height,
            },
        },
    },
`,
  get image() {
    return `
    image {
        ${this.imageAsset}
        alt,
        mobile {
            ${this.imageAsset}
        },
    },
`;
  },
  get poster() {
    return `
    poster {
        ${this.imageAsset}
        alt,
        mobile {
            ${this.imageAsset}
        },
    },
`;
  },
  get video() {
    return `
    video {
        src,
        ${this.poster}
        isIframe,
        autoplay,
        loop,
    },
`;
  },
  get media() {
    return `
    media {
        type,
        ${this.image}
        ${this.video}
    },
`;
  },
  get featureMedia() {
    return `
        featureMedia {
            type,
            ${this.image}
            ${this.video}
        },
        `;
  },
  additionalFields: `
    additionalFields[] {
        "__typename": _type,
        _key,

        _type == "formField.text" => {
            name,
            placeholder,
        },
    },
`,
  get richText() {
    return `
    ...,
    markDefs[] {
        ...,
        _type == "textColor" => {
            reference -> {
                ...,
            },
        },

        _type == "highlightColor" => {
            reference -> {
                ...,
            },
        },

        _type == "highlightColor" => {
            reference -> {
                ...,
            },
        },
    },

    _type == "altImage" => {
        ${this.imageAsset}
        alt,
    },

    ${this.button}
`;
  },
  link: `
    _type == "link" => {
        _key,
        title,
        url,
    },
  `,
  linkGroup: `
    _type == "linkGroup" => {
        _key,
        title,
        url,
        links[] {
            _key,
            title,
            url,
        },
    },
  `,
};

const blocks = {
  get all() {
    return `
        blocks[] {
            _key,
            "__typename": _type,

            ${this.caseStudy}
            ${this.contactCallout}
            ${this.contactForm}
            ${this.content}   
            ${this.header}
            ${this.logos}
            ${this.mediaColumns}
            ${this.mediaGrid}
            ${this.mediaSection}
            ${this.multiSection}
            ${this.nextProject}
            ${this.orderedList}
            ${this.projectInfo}
            ${this.testimonial}
            ${this.testimonials}
            ${this.textAndMedia}
            ${this.threeColumnSection}
        },
    `;
  },
  caseStudy: `
      _type == "caseStudy" => {
          project -> {
              title,
              slug {
                  current,
              },
              caseStudy {
                  alignment,
                  ${objects.colors}
                  ${objects.media}
                  summary,
              },
          },
      },
  `,
  content: `
      _type == "content" => {
          text[] {
            ${objects.richText}
          },
          textAlign,
          ${objects.colors}
      },
  `,
  contactCallout: `
      _type == "contactCallout" => {
          heading,
          subHeading,
          buttonText,
          buttonUrl,
      },
  `,
  contactForm: `
      _type == "contactForm" => {
          ${objects.additionalFields}
          content[] {
            ${objects.richText}
          },
          emailPlaceholder,
          errorMessage[] {
            ${objects.richText}
          },
          messagePlaceholder,
          namePlaceholder,
          submitText,
          successMessage[] {
            ${objects.richText}
          },
      },
  `,
  header: `
      _type == "header" => {
          content[] {
            ${objects.richText}
          },
      },
  `,
  logos: `
      _type == "logos" => {
          logos[] {
              _key,
              ${objects.imageAsset}
              alt,
          },
      },
  `,
  mediaColumns: `
      _type == "mediaColumns" => {
          columns[] {
              _key,
              source {
                  type,
                  ${objects.image}
                  ${objects.video}
              },
              ${objects.backgroundColor}
          }
      },
  `,
  mediaGrid: `
      _type == "mediaGrid" => {
          gridItems[] {
              _key,
              source {
                  type,
                  ${objects.image}
                  ${objects.video}
              },
              ${objects.backgroundColor}
          },
          style,
      },
  `,
  mediaSection: `
      _type == "mediaSection" => {
          ${objects.media}
          fullWidth,
          ${objects.backgroundColor}
      },
  `,
  get multiSection() {
    return `
          _type == "multiSection" => {
              blocks[] {
                  "__typename": _type,
                  ${this.content}
                  ${this.mediaSection}
                  ${this.orderedList}
              },
              ${objects.backgroundColor}
          },
      `;
  },
  nextProject: `
      _type == "nextProject" => {
          project -> {
              title,
              slug {
                  current,
              },
          },
          coverImage {
              ${objects.imageAsset}
              alt,
          },
      },
  `,
  orderedList: `
      _type == "orderedList" => {
          listItems[] {
              "__typename": _type,
              _key,

              _type == "listItem" => {
                  step {
                      text,
                      ${objects.color}
                  },
                  title,
                  text[] {
                     ${objects.richText}
                  },
                  ${objects.image}
              },

              _type == "titleCard" => {
                  title,
                  ${objects.colors}
              },
          },
      },
  `,
  projectInfo: `
      _type == "projectInfo" => {
          info[] {
              _key,
              title,
              text[] {
                ${objects.richText}
              },
          },
          ${objects.colors}
      },
  `,
  testimonial: `
      _type == "testimonial" => {
          person -> {
              name,
              position,
              photo {
                  ${objects.imageAsset}
                  alt
              },
              quote[] {
                ${objects.richText}
              },
          },
          ${objects.backgroundColor}
      },
  `,
  testimonials: `
      _type == "testimonials" => {
          persons[] -> {
              name,
              position,
              photo {
                  ${objects.imageAsset}
                  alt
              },
              quote[] {
                ${objects.richText}
              },
          },
          ${objects.backgroundColor}
      },
  `,
  textAndMedia: `
      _type == "textAndMedia" => {
          text[] {
            ${objects.richText}
          },
          mediaBlock {
              source {
                  type,
                  ${objects.image}
                  ${objects.video}
              },
              ${objects.backgroundColor}
              paddingAlign,
          },
          align,
          ${objects.backgroundColor}
      },
  `,
  threeColumnSection: `
      _type == "threeColumnSection" => {
          title[] {
            ${objects.richText}
          },
          columns[] {
              _key,
              title,
              content[] {
                ${objects.richText}
              },
              ${objects.image}
              textAlignment,
          },
      },
  `,
};

export const pageQuery = `
    *[_type == "page" && slug.current == $slug][0] {
        ${blocks.all}
    }
`;

export const projectQuery = `
    *[_type == "project" && slug.current == $slug][0] {
        title,
        description,
        ${blocks.all}
    }
`;

export const blogQuery = `
    *[_type == "blog" && slug.current == $slug][0] {
        title,
        date,
        summary,
        ${objects.featureMedia}
        content[] {
            ${objects.richText}
        },
    }
`;

export const headerQuery = `
    *[_type == "settings" ][0] {
        menu {
            links[] {
                _type,
                ${objects.link}
                ${objects.linkGroup}
            },
            button {
                title,
                url
            }
        }
    }
`;

export const footerQuery = `
    *[_type == "settings" ][0] {
        footer {
            links[] {
                _type,
                ${objects.link}
                ${objects.linkGroup}
            }
        }
    }
`;
