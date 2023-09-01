import React from 'react'
import EmbeddedVideo from './EmbeddedVideo'

const PopupPlayer = ({ show, setShow }) => {

  const handleClose = () => setShow({
    name: "",
    videoId: "",
    toggle: false
  })

  return (
    <div id="player">
      <button onClick={handleClose}>X</button>
      <EmbeddedVideo show={show} />
    </div>
  )
}

export default PopupPlayer