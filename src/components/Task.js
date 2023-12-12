import React from 'react'

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>
        {task.desc}
        {
          task.blocker &&
          <>
            <br />
            <span className='blocker'>
              <b>BLOCKER: </b>
              {task.blocker}
            </span>
          </>
        }
      </p>
    </div>
  )
}

export default Task