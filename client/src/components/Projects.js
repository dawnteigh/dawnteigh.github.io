import React from 'react'
import Project from './Project'
import { projects } from '../data/projects'

const Projects = () => {

  const displayProjects = projects.map((p, i) => {
    return (
      <Project project={p} key={i} />
    )
  })
  return (
    <div id="projects">
      <h1>Portfolio</h1>
      <div id="projects-div">
        {displayProjects}
      </div>
    </div>
  )
}

export default Projects