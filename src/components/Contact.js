import React from 'react'
import transition from '../transition'

const Contact = () => {
  return (
    <div id="contact">
      <h1>It would be my pleasure to speak with you.</h1>
      <p>If you want to talk projects, potential collaboration, or just code in general, I'm here!
        <br />
        I'm also actively seeking frontend or full-stack employment opportunities, primarily those involving React & NodeJS. My mind is open to using other tech stacks of course, and you can bet I'll be fully devoting myself to quickly mastering whatever technologies are required. My inquisitive nature and competitive fire work in tandem to ensure that I'm not useless at anything for too long!
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