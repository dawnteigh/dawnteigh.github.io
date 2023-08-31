import React from 'react'

const EmbeddedVideo = ({ videoId, name }) => {
  return (
    <iframe
      className="video"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={`${name} Demo`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  )
}

export default EmbeddedVideo