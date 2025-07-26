import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'
import {imageContentType} from '../objects/imageContentType'
import {blockContentType} from '../objects/blockContentType'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Profile picture',
      type: 'imageContent',
      validation: (Rule) => Rule.required().error('An image is required for the About section.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) =>
        Rule.required().error('A description is required for the About section.'),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      description: 'description',
    },
    prepare({media, description}) {
      const descriptionSet = description ? 'Description set' : 'No description'
      return {
        media: media,
        title: 'About Section',
        subtitle: descriptionSet,
      }
    },
  },
})
