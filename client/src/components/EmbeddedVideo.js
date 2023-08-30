import React from 'react'

const EmbeddedVideo = ({ videoId, name }) => {
  return (
    <iframe
      class="video"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={`${name} Demo`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    >
    </iframe>
  )
}

export default EmbeddedVideo