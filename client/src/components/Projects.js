import React, { useState } from 'react'
import Project from './Project'
import PopupPlayer from './PopupPlayer'
import { projects } from '../data/projects'

const Projects = () => {

  const [show, setShow] = useState({
    name: "",
    videoId: "",
    toggle: false
  })

  const displayProjects = projects.map((p, i) => {
    return (
      <Project project={p} key={i} setShow={setShow} />
    )
  })

  return (
    <div id="projects">
      {show.toggle ? <PopupPlayer show={show} setShow={setShow} /> : null}
      <div id="projects-div">
        {displayProjects}
      </div>
    </div>
  )
}

export default Projects