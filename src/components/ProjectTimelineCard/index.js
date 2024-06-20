// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-content-container">
        <div className="project-title-container">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="project-duration-container">
            <AiFillCalendar />
            <p className="project-duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="project-link" target="__blank">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
