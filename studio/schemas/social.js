import { DocumentIcon } from "@sanity/icons";

export default {
  name: "social",
  title: "Social",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        list: [
          { title: "Behance", value: "behance" },
          { title: "Dribbble", value: "dribbble" },
          { title: "Facebook", value: "facebook" },
          { title: "Github", value: "github" },
          { title: "Goodreads", value: "goodreads" },
          { title: "Medium", value: "medium" },
          { title: "Instagram", value: "instagram" },
          { title: "Linkedin", value: "linkedin" },
          { title: "Product Hunt", value: "producthunt" },
          { title: "Twitter", value: "twitter" },
          { title: "Youtube", value: "youtube" },
          { title: "Xing", value: "xing" },
        ],
      },
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },   
  ],
};
