import {DocumentIcon} from '@sanity/icons'

export const generateDocumentStructure = (S, {title, type, icon}) => {
  return S.listItem()
    .title(title)
    .icon(icon || DocumentIcon)
    .schemaType(type)
    .child(S.documentTypeList(type).defaultOrdering([{field: 'title', direction: 'asc'}]))
}

export const generateSingletonStructure = (S, {title, type}) => {
  return S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.editor().title(title).schemaType(type).documentId(type))
}
