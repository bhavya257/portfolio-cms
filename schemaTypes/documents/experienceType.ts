import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'jobs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'job'}],
        }),
      ],
      validation: (Rule) => Rule.required().error('At least one job is required.'),
    }),
  ],
  preview: {
    select: {
      jobs: 'jobs',
    },
    prepare({jobs}) {
      const jobCount = jobs?.length || 0
      return {
        title: 'Experience Section',
        subtitle: `${jobCount} job(s)`,
      }
    },
  },
})
