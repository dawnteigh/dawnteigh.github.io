import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>If you need someone for a job or are interested in networking, reach out to me on LinkedIn or shoot me an email:</p>
      <div>
        <a alt="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/donteladatto/">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a alt="email" href="mailto:donte279@gmail.com">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  )
}

export default Contact