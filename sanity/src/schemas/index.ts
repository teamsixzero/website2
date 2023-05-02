import {type SchemaTypeDefinition} from 'sanity'

//singletons
import settings from './singletons/settings'

//documents
import blog from './documents/blog'
import color from './documents/color'
import page from './documents/page'
import person from './documents/person'
import project from './documents/project'

// blocks
import caseStudy from './blocks/caseStudy'
import contactCallout from './blocks/contactCallout'
import contactForm from './blocks/contactForm'
import content from './blocks/content'
import header from './blocks/header'
import imageFullWidth from './blocks/imageFullWidth'
import imageGrid from './blocks/imageGrid'
import imageThreeColumns from './blocks/imageThreeColumns'
import imageTwoColumns from './blocks/imageTwoColumns'
import logos from './blocks/logos'
import multiSection from './blocks/multiSection'
import nextProject from './blocks/nextProject'
import orderedList from './blocks/orderedList'
import projectInfo from './blocks/projectInfo'
import testimonial from './blocks/testimonial'
import textAndImage from './blocks/textAndImage'

//objects
import altImage from './objects/altImage'
import button from './objects/button'
import footer from './objects/footer'
import link from './objects/link'
import linkGroup from './objects/linkGroup'
import listItem from './objects/listItem'
import media from './objects/media'
import mediaBlock from './objects/mediaBlock'
import menu from './objects/menu'
import notFound from './objects/404'
import richText from './objects/richText'
import script from './objects/script'
import titleCard from './objects/titleCard'
import titleText from './objects/titleText'
import video from './objects/video'

// seo
import seoSettings from './objects/seo/settings'
import seoPage from './objects/seo/page'

// form fields
import checkbox from './objects/formFields/checkbox'
import email from './objects/formFields/email'
import radio from './objects/formFields/radio'
import select from './objects/formFields/select'
import text from './objects/formFields/text'
import textarea from './objects/formFields/textarea'

export const schemaTypes = [
  //singletons
  settings,

  //documents
  blog,
  color,
  page,
  person,
  project,

  // blocks
  caseStudy,
  contactCallout,
  contactForm,
  content,
  header,
  imageFullWidth,
  imageGrid,
  imageThreeColumns,
  imageTwoColumns,
  logos,
  multiSection,
  nextProject,
  orderedList,
  projectInfo,
  testimonial,
  textAndImage,
  video,

  //objects
  altImage,
  button,
  footer,
  link,
  linkGroup,
  listItem,
  media,
  mediaBlock,
  menu,
  notFound,
  richText,
  script,
  titleCard,
  titleText,

  //
  seoSettings,
  seoPage,

  //
  checkbox,
  email,
  radio,
  select,
  text,
  textarea,
] satisfies SchemaTypeDefinition[]
