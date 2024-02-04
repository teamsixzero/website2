import {DocumentIcon} from '@sanity/icons'
import {Views} from '../structure/views/preview'

export const generateDocumentStructure = (S, {title, type, icon, previews}, context) => {
  if (previews) {
    return S.listItem()
      .title(title)
      .icon(icon || DocumentIcon)
      .schemaType(type)
      .child(
        S.documentTypeList(type)
          .title(title)
          .child((documentId) =>
            S.document().documentId(documentId).schemaType(type).views(Views(S, context)),
          ),
      )
  }

  return S.listItem()
    .title(title)
    .icon(icon || DocumentIcon)
    .schemaType(type)
    .child(S.documentTypeList(type).defaultOrdering([{field: 'title', direction: 'asc'}]))
}

export const generateSingletonStructure = (S, {title, type, icon}) => {
  return S.listItem()
    .title(title)
    .schemaType(type)
    .icon(icon || DocumentIcon)
    .child(S.editor().title(title).schemaType(type).documentId(type))
}
