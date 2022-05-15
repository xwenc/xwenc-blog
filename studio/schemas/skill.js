import { BulbOutlineIcon } from '@sanity/icons'

export default {
  title: 'Skill',
  name: 'skill',
  icon: BulbOutlineIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
