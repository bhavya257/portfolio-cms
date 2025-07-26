import {defineField, defineType} from 'sanity'

export const imageContentType = defineType({
  name: 'imageContent',
  title: 'Image Content',
  type: 'image',
  validation: (Rule) => Rule.required().assetRequired().error('You need to upload an image.'),
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternate text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Alternate text field is required.'),
    }),
  ],
  options: {hotspot: true},
})
