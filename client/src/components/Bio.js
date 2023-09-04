import React from 'react'
import fullstackdev from "../assets/fullstackdev.jpeg"

const Bio = () => {
  return (
    <div id="bio">
      <img src={fullstackdev} alt="Me eating the stack of pancakes I developed" className="bio-pic" title="Get it? Full-Stack Developer? And I made a stack of pancakes? Yeah, you got it." />
      <h1>Hey, I'm Donte.</h1>
      <p>
        I'm a full-stack web developer. I'm most well-versed with React + Ruby on Rails, but I can find my way and quickly get up to speed with any language or framework; same concepts, different syntax. I relish the challenge and opportunity to learn. Let's <a href="/contact">talk</a>.
      </p>
      <p>
        When I'm not glued to my computer, I enjoy cooking, playing tennis or disc golf, craft beer, and karaoke.
      </p>
    </div>
  )
}

export default Bio