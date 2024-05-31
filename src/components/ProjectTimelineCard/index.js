import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = itemDetails

  return (
    <div className="project-timeline-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-duration-container">
        <h1>{projectTitle}</h1>
        <div className="icon-duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="visit-btn">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
