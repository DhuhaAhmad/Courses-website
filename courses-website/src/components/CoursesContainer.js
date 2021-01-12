import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Course from './Course'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class CoursesContainer extends Component {

    constructor(props) {
        super(props)
    
        // this.state = {
        //     islearning:false
        // }
    }



    render() {

        const allCourses = this.props.course.map((ele,i)=>{

           return <Course url={ele.snippet.thumbnails.standard.url} 
           courseTitle={ele.snippet.title}
            channelName={ele.snippet.channelTitle}
            playListId={ele.id}
            addToMyLearning={(e)=>this.props.addToMyLearning(ele)}
            islearning={this.props.islearning}
            key={i}
            />

        })
        return (
            <div>
              {allCourses}
            </div>
        )
    }
}
