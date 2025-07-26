import {defineField, defineType, defineArrayMember} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'
import {blockContentType} from '../objects/blockContentType'
import {imageContentType} from '../objects/imageContentType'
import {linkType} from '../objects/linkType'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
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
      validation: (Rule) => Rule.required().error('Project title is required.'),
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
      type: 'date',
      options: {dateFormat: 'MM-YYYY'},
      fieldset: 'dates',
      validation: (Rule) => Rule.required().error('End date is required.'),
    }),
    defineField({
      name: 'summary',
      type: 'string',
      validation: (Rule) => Rule.required().error('Project summary is required.'),
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Project description is required.'),
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
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'link',
        }),
      ],
      validation: (Rule) =>
        Rule.warning('Consider adding at least one link (e.g., GitHub, live demo).'),
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'skill'}],
        }),
      ],
      validation: (Rule) => Rule.required().error('At least one skill is required.'),
    }),
  ],
  preview: {
    select: {
      media: 'images[0]',
      title: 'title',
    },
    prepare({media, title}) {
      const setTitle = title || 'Untitled Project'
      return {
        media,
        title: setTitle,
      }
    },
  },
})
