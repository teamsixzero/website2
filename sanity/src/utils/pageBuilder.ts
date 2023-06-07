import {defineArrayMember, defineField} from 'sanity'
import {HiOutlineDocumentMagnifyingGlass, HiOutlinePencilSquare} from 'react-icons/hi2'
import {
  BsMegaphone,
  BsBodyText,
  BsLayoutThreeColumns,
  BsColumns,
  BsCardImage,
  BsInfoCircle,
  BsImages,
} from 'react-icons/bs'
import {FaHeading} from 'react-icons/fa'
import {BiCarousel} from 'react-icons/bi'
import {RiCheckboxMultipleBlankFill} from 'react-icons/ri'
import {MdOutlineNextWeek, MdOutlineReviews} from 'react-icons/md'
import {GoListOrdered} from 'react-icons/go'
import {TfiLayoutMediaLeft} from 'react-icons/tfi'

export default defineField({
  name: 'blocks',
  title: 'Blocks',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'caseStudy',
      icon: HiOutlineDocumentMagnifyingGlass,
    }),
    defineArrayMember({
      type: 'contactCallout',
      icon: BsMegaphone,
    }),
    defineArrayMember({
      type: 'contactForm',
      icon: HiOutlinePencilSquare,
    }),
    defineArrayMember({
      type: 'content',
      icon: BsBodyText,
    }),
    defineArrayMember({
      type: 'header',
      icon: FaHeading,
    }),
    defineArrayMember({
      type: 'logos',
      icon: BiCarousel,
    }),
    defineArrayMember({
      type: 'mediaColumns',
      icon: BsImages,
    }),
    defineArrayMember({
      type: 'mediaGrid',
      icon: BsColumns,
    }),
    defineArrayMember({
      type: 'mediaSection',
      icon: BsCardImage,
    }),
    defineArrayMember({
      type: 'multiSection',
      icon: RiCheckboxMultipleBlankFill,
    }),
    defineArrayMember({
      type: 'nextProject',
      icon: MdOutlineNextWeek,
    }),
    defineArrayMember({
      type: 'orderedList',
      icon: GoListOrdered,
    }),
    defineArrayMember({
      type: 'projectInfo',
      icon: BsInfoCircle,
    }),
    defineArrayMember({
      type: 'testimonial',
      icon: MdOutlineReviews,
    }),
    defineArrayMember({
      type: 'textAndMedia',
      icon: TfiLayoutMediaLeft,
    }),
    defineArrayMember({
      type: 'threeColumnSection',
      icon: BsLayoutThreeColumns,
    }),
  ],
})
