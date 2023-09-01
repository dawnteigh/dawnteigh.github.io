import React from 'react'
import parse from 'html-react-parser'


const Project = ({ project, setShow }) => {
  const { name, desc, img, highlights, stack, repo, videoId } = project
  const handleVideoClick = () => {
    setShow({
      name: name,
      videoId: videoId,
      toggle: true
    })
  }

  return (
    <div className='project-tile'>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{parse(desc)}</p>
      <button className='youtube' onClick={handleVideoClick}><i className="fa-brands fa-youtube"></i> Video</button>
      <span className="tech">{stack}</span>
      <a className="github" href={repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Repo</a>
    </div>
  )
}

export default Project