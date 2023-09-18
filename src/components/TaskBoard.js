import React from 'react'
import Task from './Task'
import { tasks } from '../data/tasks'

const TaskBoard = () => {

  const displayTasks = (status) => {
    const filteredTasks = tasks.filter(task => task.status === status)
    return filteredTasks.map((t, i) => <Task key={i} task={t} />)
  }
  return (
    <div className="task-board">
      <div className="task-column">
        <h2>Backlog</h2>
        <div className="task-container">
          {displayTasks("backlog")}
        </div>
      </div>
      <div className="task-column">
        <h2>In Progress</h2>
        <div className="task-container">
          {displayTasks("inProgress")}
        </div>
      </div>
      <div className="task-column">
        <h2>Complete</h2>
        <div className="task-container">
          {displayTasks("complete")}
        </div>
      </div>
    </div>
  )
}

export default TaskBoard