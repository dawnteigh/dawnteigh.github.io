import React from 'react'
import transition from '../transition'

const Contact = () => {
  return (
    <div id="contact">
      <h1>It would be my pleasure to speak with you.</h1>
      <p>Whether you want to collaborate on a project, discuss employment opportunities, or just connect and chat, drop me a line!
        <br /><br />
        You can reach out to me via email, LinkedIn, or Discord!</p>
      <div className="icons">
        <a alt="email" href="mailto:donte279@gmail.com">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span className="sr-only">Email</span>
        </a>
        <a alt="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/donteladatto/">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a alt="discord" target="_blank" rel="noreferrer" href="https://www.discord.com/users/dawnteigh">
          <i className="fa-brands fa-discord"></i>
          <span className="sr-only">Discord</span>
        </a>
      </div>
      <h2>Other Profiles</h2>
      <div className="icons">
        <a alt="free-code-camp" target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/dladatto">
          <i className="fa-brands fa-free-code-camp"></i>
          <span className="sr-only">freeCodeCamp</span>
        </a>
        <a alt="github" target="_blank" rel="noreferrer" href="https://github.com/dawnteigh">
          <i className="fa-brands fa-github"></i>
          <span className="sr-only">GitHub</span>
        </a>
        <a alt="dev-blog" target="_blank" rel="noreferrer" href="https://dev.to/dawnteigh">
          <i className="fa-brands fa-dev"></i>
          <span className="sr-only">Blog</span>
        </a>
      </div>
    </div>
  )
}

export default transition(Contact)