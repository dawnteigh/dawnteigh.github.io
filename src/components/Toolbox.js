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
      <div className="legend">
        <span><div className="key one"></div> Hands-On Experience </span>
        <span><div className="key two"></div> Portfolio Project </span>
        <span><div className="key three"></div> 2+ Projects </span>
      </div>
      <div id='skill-container' >
        {displaySkills}
      </div>
    </div>
  )
}

export default Toolbox