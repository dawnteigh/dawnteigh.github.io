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
      <button className='youtube' onClick={(e) => console.log("clickable")}><i className="fa-brands fa-youtube"></i> Video</button>
      <span className="tech">{stack}</span>
      <a className="github" href={repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Repo</a>
    </div>
  )
}

export default Project