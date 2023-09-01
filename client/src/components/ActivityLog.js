import React from 'react'
import Activity from './Activity'
import { activity } from '../data/activity'

const ActivityLog = () => {

  const displayActivity = activity.map((a, i) => (<Activity key={i} activity={a} />))

  return (
    <div>
      {displayActivity}
    </div>
  )
}

export default ActivityLog