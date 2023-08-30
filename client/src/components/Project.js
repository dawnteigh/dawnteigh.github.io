import React from 'react'
import parse from 'html-react-parser'
import EmbeddedVideo from './EmbeddedVideo'


const Project = ({ project }) => {
  const { name, desc, img, highlights, stack, repo, videoId } = project
  return (
    <div className='project-tile'>
      <h2>{name}</h2>
      <EmbeddedVideo name={name} videoId={videoId} />
      <p>{parse(desc)}</p>
    </div>
  )
}

export default Project