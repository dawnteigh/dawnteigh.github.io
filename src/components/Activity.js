import React from 'react'
import parse from 'html-react-parser'

const Activity = ({ activity }) => {
  return (
    <div className='activity'>
      <span className='date'>{activity.date}</span>
      <p>{parse(activity.entry)}</p>
    </div>
  )
}

export default Activity