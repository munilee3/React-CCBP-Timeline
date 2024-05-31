import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails
  return (
    <div className="course-timeline-container">
      <div className="title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list">
        {tagsList.map(eachList => (
          <p key={eachList.name} className="tag-item">
            {eachList.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
