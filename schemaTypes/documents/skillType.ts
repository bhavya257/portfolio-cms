import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Skill name is required.'),
    }),
    defineField({
      name: 'documentation',
      type: 'link',
      validation: (Rule) =>
        Rule.warning('Consider adding link to the skill (e.g., documentation).'),
    }),
  ],
  preview: {
    select: {
      media: 'documentation.logo',
      title: 'name',
    },
    prepare({media, title}) {
      const setTitle = title || 'Untitled Skill'
      return {
        media,
        title: setTitle,
      }
    },
  },
})
