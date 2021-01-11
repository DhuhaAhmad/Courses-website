import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Course from './Course'

export default class CoursesContainer extends Component {
    render() {

        const allCourses = this.props.course.map((ele)=>{

           return <Course url={ele.snippet.thumbnails.standard.url} courseTitle={ele.snippet.title} channelName={ele.snippet.channelTitle}/>

            // return <ReactPlayer controls url={ele} />
        })
        return (
            <div>
                {allCourses}
            </div>
        )
    }
}
