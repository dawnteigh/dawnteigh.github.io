import React from 'react'
import { skills } from '../data/skills'

const Toolbox = () => {

  const displaySkills = skills.map((s, i) => {
    return (
      <div key={i} className={`skill  ${s.level}`}>{s.skill}</div>
    )
  })

  return (
    <div id="toolbox">
      <h2>Toolbox</h2>
      <p className="secondary-paragraph">
        Hard skills that I feel are worth mentioning. You can find more on my <a alt="linkedin-skills" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/donteladatto/details/skills/">LinkedIn</a>.
      </p>
      <div id='skill-container' title="Color brightness represents my brightness.">
        {displaySkills}
      </div>
    </div>
  )
}

export default Toolbox