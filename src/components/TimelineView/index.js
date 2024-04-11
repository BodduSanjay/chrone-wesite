import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = ({timelineItemsList}) => (
  <div className="bg-cont">
    <h1 className="heading">MY JOURNEY OF</h1>
    <h2>CCBP 4.0</h2>
    <div className="chrono-container">
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard each={each} key={each.id} />
          }
          return <ProjectTimelineCard each={each} key={each.id} />
        })}
      </Chrono>
    </div>
  </div>
)
export default TimelineView
