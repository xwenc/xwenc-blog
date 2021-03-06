import Skill from "./skill"

const Skills = ({ skills }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Top skills
    </h5>
    <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
      {skills.map((skill, i) => (
        <Skill skill={skill} key={skill} i={i + 1} />
      ))}
    </ul>
  </>
)

export default Skills
