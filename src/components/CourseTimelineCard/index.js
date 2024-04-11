import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = ({each}) => {
  const {courseTitle, description, duration, tagList} = each

  return (
    <div className="course-card">
      <div className="title-time-cont">
        <h1 className="heading">{courseTitle}</h1>
        <div className="time-container">
          <AiFillClockCircle className="time-icon" />
          <p className="time-para">{duration}</p>
        </div>
      </div>
      <p className="description-para">{description}</p>
      <ul className="ul-container">
        {tagList.map(item => (
          <li className="list-container" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
