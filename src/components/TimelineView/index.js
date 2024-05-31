import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <div className="timeline-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            theme={{secondary: 'white'}}
            items={timelineItemsList}
          >
            {timelineItemsList.map(eachItem => {
              if (eachItem.categoryId === 'COURSE') {
                return <CourseTimelineCard itemDetails={eachItem} />
              }
              return <ProjectTimelineCard itemDetails={eachItem} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
