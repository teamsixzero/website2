import {generateDocumentStructure, generateSingletonStructure} from '../utils/desk'

const DOCUMENT_TYPES_IN_STRUCTURE = [
  `project`,
  `blog`,
  `page`,
  `person`,
  `colorPalette`,
  `media.tag`,
  `settings`,
]

const documents = [
  {
    title: `Blog`,
    type: `blog`,
    icon: () => `📝`,
    previews: true,
  },
  {
    title: `Case Study`,
    type: `project`,
    icon: () => `💼`,
    previews: true,
  },
  {
    title: `Page`,
    type: `page`,
    icon: () => `📄`,
    previews: true,
  },
  {
    title: `Person`,
    type: `person`,
    icon: () => `👨`,
  },
]

export default (S, context) =>
  S.list()
    .title(`Content`)
    .items([
      ...documents.map((document) => generateDocumentStructure(S, document, context)),
      S.divider(),
      S.listItem()
        .title(`Globals`)
        .icon(() => '🌏')
        .child(
          S.list()
            .title(`Colours`)
            .items([
              generateDocumentStructure(S, {
                title: `Colours`,
                type: `colorPalette`,
                icon: () => `🎨`,
              }),
            ]),
        ),
      generateSingletonStructure(S, {
        title: `Settings`,
        type: `settings`,
        icon: () => `⚙️`,
      }),
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()),
      ),
    ])
