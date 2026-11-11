import { CogIcon } from '@sanity/icons/Cog'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { techStackOptions } from './techStackOptions'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'githubUsername',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mediumUsername',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About (paragraphs)',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'metadataTitle',
      title: 'Metadata Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metadataDescription',
      title: 'Metadata Description',
      type: 'text',
      validation: (rule) => rule.max(200).warning('Keep it under 200 characters for best SEO'),
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'techStackGroup',
          fields: [
            defineField({ name: 'group', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'items',
              type: 'array',
              of: [defineArrayMember({ type: 'string', options: { list: techStackOptions } })],
              validation: (rule) => rule.min(1).unique(),
            }),
          ],
          preview: {
            select: { title: 'group', items: 'items' },
            prepare: ({ title, items }) => ({
              title,
              subtitle: Array.isArray(items) ? items.join(', ') : undefined,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'goodreads', value: 'goodreads' },
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'headline' },
  },
})
