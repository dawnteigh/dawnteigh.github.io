import React from 'react'
import Bio from './Bio'
import ActivityLog from './ActivityLog'
import Toolbox from './Toolbox'
import transition from '../transition'

const Home = () => {
  return (
    <div id="about">
      <Bio />
      <div id="extras">
        <ActivityLog />
        <Toolbox />
      </div>
    </div>
  )
}

export default transition(Home)