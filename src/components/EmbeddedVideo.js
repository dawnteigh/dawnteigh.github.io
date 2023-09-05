import React from 'react'

const EmbeddedVideo = ({ show }) => {
  return (
    <iframe
      className="video"
      src={`https://www.youtube.com/embed/${show.videoId}`}
      title={`${show.name} Demo`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  )
}

export default EmbeddedVideo