import React from 'react'

const Activity = ({ activity }) => {
  return (
    <div className='activity'>
      <span className='date'>{activity.date}</span>
      <p>{activity.entry}</p>
    </div>
  )
}

export default Activity