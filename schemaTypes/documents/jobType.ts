import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'
import {imageContentType} from '../objects/imageContentType'
import {blockContentType} from '../objects/blockContentType'
import {linkType} from '../objects/linkType'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: CaseIcon,
  fieldsets: [
    {
      name: 'dates',
      title: 'Duration',
      options: {columns: 2},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Job title is required.'),
    }),
    defineField({
      name: 'company',
      type: 'string',
      validation: (Rule) => Rule.required().error('Company name is required.'),
    }),
    defineField({
      name: 'website',
      type: 'link',
      validation: (Rule) => Rule.required().error('A link to company website is required.'),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      options: {dateFormat: 'MM-YYYY'},
      fieldset: 'dates',
      validation: (Rule) => Rule.required().error('Start date is required.'),
    }),
    defineField({
      name: 'endDate',
      type: 'string',
      options: {
        list: [
          {title: 'Current', value: 'current'},
          {title: 'Custom Date', value: 'custom'},
        ],
        layout: 'radio',
      },
      initialValue: 'current',
      fieldset: 'dates',
      validation: (Rule) => Rule.required().error('End date is required.'),
    }),
    defineField({
      name: 'customEndDate',
      type: 'date',
      options: {dateFormat: 'MM-YYYY'},
      fieldset: 'dates',
      hidden: ({document}) => document?.endDate !== 'custom',
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          if (context.document?.endDate === 'custom' && !fieldValue) {
            return 'A custom end date is required.'
          }
          return true
        }),
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Job description is required.'),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'imageContent',
        }),
      ],
      validation: (Rule) =>
        Rule.warning('Consider adding at least one image for better presentation.'),
    }),
  ],
  preview: {
    select: {
      media: 'website.logo',
      title: 'title',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({media, title, company, startDate, endDate}) {
      const setTitle = title || 'Untitled Job'
      const setCompany = company || 'Unknown Company'
      const setStartDate = startDate || 'Not set'
      return {
        media,
        title: setTitle,
        subtitle: `${setCompany} (${setStartDate} - ${endDate})`,
      }
    },
  },
})
