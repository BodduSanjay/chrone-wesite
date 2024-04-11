import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = ({each}) => {
  const {projectTitle, imageUrl, projectUlr, description, duration} = each

  return (
    <div className="course-card">
      <img src={imageUrl} alt={projectTitle} className="image" />
      <div className="title-time-cont">
        <h1 className="heading">{projectTitle}</h1>
        <div className="time-container">
          <AiFillCalendar className="time-icon" />
          <p className="time-para">{duration}</p>
        </div>
      </div>
      <p className="description-para">{description}</p>
      <a href={projectUlr}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
