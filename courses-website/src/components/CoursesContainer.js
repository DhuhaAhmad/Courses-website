import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Course from './Course'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class CoursesContainer extends Component {
    render() {

        const allCourses = this.props.course.map((ele)=>{

           return <Course url={ele.snippet.thumbnails.standard.url} courseTitle={ele.snippet.title} channelName={ele.snippet.channelTitle}/>

        })
        return (

            <div>
              {allCourses}
            </div>
        )
    }
}
