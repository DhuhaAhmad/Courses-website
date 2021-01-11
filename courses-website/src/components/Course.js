import React, { Component } from 'react'
import CourseImage from './CourseImage'
import AddToList from './AddToList'
import '../App.css'

export default class Course extends Component {
    render() {
        return (
            <div className='box'>
               <CourseImage url={this.props.url} /> 
                <p>Course Title: {this.props.courseTitle}</p>
                <p>Channel Name: {this.props.channelName}</p>
                <AddToList />
                {/* Start icons or button */}

            </div>
        )
    }
}
