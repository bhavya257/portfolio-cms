import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      options: {dateFormat: 'DD-MM-YYYY'},
      validation: (Rule) => Rule.required().error('Last updated date is required.'),
    }),
    defineField({
      name: 'pdf',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required().assetRequired().error('A PDF file is required.'),
    }),
  ],
  preview: {
    select: {
      lastUpdated: 'lastUpdated',
    },
    prepare({lastUpdated}) {
      const lastUpdatedDate = lastUpdated || 'Unknown'
      return {
        title: 'Resume',
        subtitle: `Last updated: ${lastUpdatedDate}`,
      }
    },
  },
})
