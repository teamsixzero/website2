import {FaBriefcase} from 'react-icons/fa'
import {MdOutlineArticle} from 'react-icons/md'
import {generateDocumentStructure} from './utils/desk'

const DOCUMENT_TYPES_IN_STRUCTURE = [
  `project`,
  `post`,
  `page`,
  `person`,
  `colorPalette`,
  `media.tag`,
]

const documents = [
  {
    title: `Case Study`,
    type: `project`,
    icon: () => `💼`,
  },
  {
    title: `Blog`,
    type: `post`,
    icon: () => `📝`,
  },
  {
    title: `Person`,
    type: `person`,
    icon: () => `👨`,
  },
  {
    title: `Page`,
    type: `page`,
    icon: () => `📄`,
  },
]

// const singletons = [
//   {
//     title: `Home`,
//     type: `homePage`,
//   },
//   {
//     title: `About`,
//     type: `aboutPage`,
//   },
//   {
//     title: `Contact`,
//     type: `contactPage`,
//   },
// ]

export default (S) =>
  S.list()
    .title(`Content`)
    .items([
      // ...singletons.map((singleton) => generateSingletonStructure(S, singleton)),
      // S.divider(),
      ...documents.map((document) => generateDocumentStructure(S, document)),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
    ])
