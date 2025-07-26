import {defineField} from 'sanity'

export const iconNameType = defineField({
  name: 'iconName',
  title: 'Icon name',
  type: 'string',
  validation: (Rule) => Rule.required().error('Icon name is required.'),
})
