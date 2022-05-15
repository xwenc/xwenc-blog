import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'profile',
  title: 'Profile',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      title: 'About',
      name: 'about',
      type: 'text'
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Focus',
      name: 'focus',
      type: 'string',
    },
    {
      title: 'Focus URL',
      name: 'focus_url',
      type: 'url',
    },
    {
      title: 'For Hire',
      name: 'for_hire',
      type: 'boolean',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Profession',
      name: 'profession',
      type: 'string',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    }
  ],
}
