import {generateDocumentStructure, generateSingletonStructure} from './utils/desk'

const DOCUMENT_TYPES_IN_STRUCTURE = [
  `project`,
  `post`,
  `page`,
  `person`,
  `colorPalette`,
  `media.tag`,
  `settings`,
]

const documents = [
  {
    title: `Blog`,
    type: `post`,
    icon: () => `📝`,
  },
  {
    title: `Case Study`,
    type: `project`,
    icon: () => `💼`,
  },
  {
    title: `Page`,
    type: `page`,
    icon: () => `📄`,
  },
  {
    title: `Person`,
    type: `person`,
    icon: () => `👨`,
  },
]

export default (S) =>
  S.list()
    .title(`Content`)
    .items([
      ...documents.map((document) => generateDocumentStructure(S, document)),
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
            ])
        ),
      generateSingletonStructure(S, {
        title: `Settings`,
        type: `settings`,
        icon: () => `⚙️`,
      }),
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
    ])
