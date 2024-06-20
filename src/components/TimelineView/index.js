// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="main-heading1">
        MY JOURNEY OF <br />
        <span className="main-heading2">CCBP 4.0</span>
      </h1>
      <div>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard details={each} key={each.id} />
            }
            return <ProjectTimelineCard details={each} key={each.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
