import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fieldsets: [
    {
      name: 'image',
      title: 'Image',
      options: {columns: 2},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required.'),
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('A URL is required.'),
    }),
    defineField({
      name: 'imageType',
      type: 'string',
      options: {
        list: [
          {title: 'Icon Name', value: 'iconName'},
          {title: 'Logo Image', value: 'logo'},
        ],
        layout: 'radio',
      },
      fieldset: 'image',
      validation: (Rule) => Rule.required().error('An image is required.'),
    }),
    defineField({
      name: 'iconName',
      type: 'iconName',
      fieldset: 'image',
      hidden: ({parent}) => parent?.imageType !== 'iconName',
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          const parent = context.parent as {imageType?: string} | undefined
          if (parent?.imageType === 'iconName' && !fieldValue) {
            return 'Icon name is required.'
          }
          return true
        }),
    }),
    defineField({
      name: 'logo',
      type: 'imageContent',
      fieldset: 'image',
      hidden: ({parent}) => parent?.imageType !== 'logo',
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          const parent = context.parent as {imageType?: string} | undefined
          const logo = fieldValue as {asset?: unknown} | undefined
          if (parent?.imageType === 'logo' && !logo?.asset) {
            return 'A logo image is required.'
          }
          return true
        }),
    }),
  ],
})
