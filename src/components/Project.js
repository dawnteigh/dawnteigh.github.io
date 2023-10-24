import React, { useState } from 'react'
import parse from 'html-react-parser'


const Project = ({ project, setShow }) => {
  const { name, desc, img, highlights, stack, repo, videoId, deploy } = project
  const [animate, setAnimate] = useState(false)
  const handleVideoClick = () => {
    setShow({
      name: name,
      videoId: videoId,
      toggle: true
    })
  }
  const displayHighlights = highlights.map((h, i) => <li key={i}>{h}</li>)

  return (
    <div className='project-tile' onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimate(false)} >
      <h2 className="project-header">
        {name}
        {deploy && <a href={deploy} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>}
      </h2>
      <div className="img-container">
        <img src={animate ? img.gif : img.static} alt={name} className="project-img" />
      </div>
      <p>{parse(desc)}</p>
      <ul className="highlights">
        {displayHighlights}
      </ul>
      <button className='youtube' onClick={handleVideoClick}><i className="fa-brands fa-youtube"></i> Video</button>
      <span className="tech">{stack}</span>
      <a className="github" href={repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Repo</a>
    </div>
  )
}

export default Project