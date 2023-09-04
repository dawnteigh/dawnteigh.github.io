import React from 'react'
import { skills } from '../data/skills'

const Toolbox = () => {

  const displaySkills = skills.map((s, i) => {
    return (
      <div key={i} className={`skill  ${s.level}`}>{s.skill}</div>
    )
  })

  return (
    <div id='toolbox'>
      {displaySkills}
    </div>
  )
}

export default Toolbox