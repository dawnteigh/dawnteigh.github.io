import React from 'react'
import parse from 'html-react-parser'


const Project = ({ project }) => {
  const { name, desc, img, highlights, stack, repo_url, video_url } = project
  return (
    <div className='project-tile'>
      <h2>{name}</h2>
      <p>{parse(desc)}</p>
    </div>
  )
}

export default Project