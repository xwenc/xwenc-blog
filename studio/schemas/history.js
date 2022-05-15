// {
//   company: "Atomic Studio",
//   period: "January 2018 - present",
//   position: "Senior Web Developer",
//   url: "https://atomic.studio",
// },

import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'history',
  title: 'History',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'from',
      title: 'From',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
        calendarTodayLabel: 'Present'
      }
    },
    {
      name: 'to',
      title: 'To',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
        calendarTodayLabel: 'Present'
      }
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    }
  ],
}
