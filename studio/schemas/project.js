import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'project',
  title: 'Project',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: "Github", value: "github" },
          { title: "Website", value: "website" },
        ],
      }
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: "In progress", value: "in progress" },
          { title: "Live", value: "live" },
        ],
      }
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    }
  ],
}
