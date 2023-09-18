import React from 'react'

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.desc}</p>
    </div>
  )
}

export default Task