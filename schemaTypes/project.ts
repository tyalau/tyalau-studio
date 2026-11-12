import { ProjectsIcon } from '@sanity/icons/Projects'
import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Featured Project',
  type: 'document',
  icon: ProjectsIcon,
  description:
    'Marks a GitHub repo as featured. Repo details (description, language, URL) are read live from the GitHub API by matching repoName.',
  fields: [
    defineField({
      name: 'repoName',
      title: 'Repo Name',
      type: 'string',
      description: 'Must exactly match the repository name on GitHub.',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Repo Name',
      name: 'repoNameAsc',
      by: [{ field: 'repoName', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'repoName' },
  },
})
