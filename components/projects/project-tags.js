const ProjectTags = ({ tags }) => (
  <>
    {tags.map((tag,index) => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={index}
      >
        {tag.title}
      </li>
    ))}
  </>
)

export default ProjectTags
