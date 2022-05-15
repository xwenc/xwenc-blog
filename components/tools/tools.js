import React from "react"

const Tools = ({ tools }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Main skills
    </h5>
    <ul className="flex flex-wrap pb-8 mt-2 space-x-1">
      {tools.map((tool, index) => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0" key={index}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
            {tool.title}
          </span>
        </li>
      ))}
    </ul>
  </>
)

export default Tools
