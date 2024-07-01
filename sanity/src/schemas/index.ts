import {type SchemaTypeDefinition} from 'sanity'

//singletons
import settings from './singletons/settings'

const singletons = [settings]

//documents
import blog from './documents/blog'
import color from './documents/color'
import page from './documents/page'
import person from './documents/person'
import project from './documents/project'

const documents = [blog, color, page, person, project]

// blocks
import caseStudy from './blocks/caseStudy'
import contactCallout from './blocks/contactCallout'
import contactForm from './blocks/contactForm'
import content from './blocks/content'
import header from './blocks/header'
import logos from './blocks/logos'
import mediaColumns from './blocks/mediaColumns'
import mediaGrid from './blocks/mediaGrid'
import mediaSection from './blocks/mediaSection'
import multiSection from './blocks/multiSection'
import nextProject from './blocks/nextProject'
import orderedList from './blocks/orderedList'
import projectInfo from './blocks/projectInfo'
import testimonial from './blocks/testimonial'
import testimonials from './blocks/testimonials'
import textAndMedia from './blocks/textAndMedia'
import threeColumnSection from './blocks/threeColumnSection'

const blocks = [
  caseStudy,
  contactCallout,
  contactForm,
  content,
  header,
  logos,
  mediaColumns,
  mediaGrid,
  mediaSection,
  multiSection,
  nextProject,
  orderedList,
  projectInfo,
  testimonial,
  testimonials,
  textAndMedia,
  threeColumnSection,
]

//objects
import altImage from './objects/altImage'
import button from './objects/button'
import column from './objects/column'
import footer from './objects/footer'
import link from './objects/link'
import linkGroup from './objects/linkGroup'
import listItem from './objects/listItem'
import media from './objects/media'
import mediaBlock from './objects/mediaBlock'
import mediaContent from './objects/mediaContent'
import menu from './objects/menu'
import projectCaseStudy from './objects/projectCaseStudy'
import notFound from './objects/404'
import redirect from './objects/redirect'
import richText from './objects/richText'
import scriptInline from './objects/scriptInline'
import scriptSrc from './objects/scriptSrc'
import step from './objects/step'
import titleCard from './objects/titleCard'
import titleText from './objects/titleText'
import video from './objects/video'

const objects = [
  altImage,
  button,
  column,
  footer,
  link,
  linkGroup,
  listItem,
  media,
  mediaBlock,
  mediaContent,
  menu,
  projectCaseStudy,
  notFound,
  redirect,
  richText,
  scriptInline,
  scriptSrc,
  step,
  titleCard,
  titleText,
  video,
]

// seo
import seoSettings from './objects/seo/settings'
import seoPage from './objects/seo/page'

const seo = [seoSettings, seoPage]

// form fields
import checkbox from './objects/formFields/checkbox'
import email from './objects/formFields/email'
import radio from './objects/formFields/radio'
import select from './objects/formFields/select'
import text from './objects/formFields/text'
import textarea from './objects/formFields/textarea'

const formFields = [checkbox, email, radio, select, text, textarea]

export const schemaTypes = [
  ...singletons,
  ...documents,
  ...blocks,
  ...objects,
  ...seo,
  ...formFields,
] satisfies SchemaTypeDefinition[]
