import {defineField, defineType, defineArrayMember} from 'sanity'
import {TagIcon} from '@sanity/icons'
import {iconNameType} from '../objects/iconNameType'

export const skillGroupType = defineType({
  name: 'skillGroup',
  title: 'Skill Group',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Skill group title is required.'),
    }),
    defineField({
      name: 'iconName',
      type: 'iconName',
      validation: (Rule) => Rule.required().error('Group icon name is required.'),
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
      title: 'title',
      skills: 'skills',
    },
    prepare({title, skills}) {
      const setTitle = title || 'Untitled Skill Group'
      const skillsCount = skills?.length || 0
      return {
        title: setTitle,
        subtitle: `${skillsCount} skill(s)`,
      }
    },
  },
})
