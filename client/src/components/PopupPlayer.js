import React from 'react'
import EmbeddedVideo from './EmbeddedVideo'

const PopupPlayer = ({ show, setShow }) => {

  const handleClose = () => setShow({
    name: "",
    videoId: "",
    toggle: false
  })

  return (
    <>
      <div className="focus"></div>
      <div id="player">
        <button className="close" onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
        <EmbeddedVideo show={show} />
      </div>
    </>
  )
}

export default PopupPlayer