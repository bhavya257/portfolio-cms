import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'
import {linkType} from '../objects/linkType'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Contact title is required.'),
    }),
    defineField({
      name: 'website',
      type: 'link',
      validation: (Rule) => Rule.required().error('A social profile for the contact is required.'),
    }),
  ],
  preview: {
    select: {
      media: 'website.logo',
      title: 'title',
    },
    prepare({media, title, }) {
      return {
        media,
        title: title || 'Untitled Channel',
      }
    },
  },
})
