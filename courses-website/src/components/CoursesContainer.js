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
            channelId={ele.snippet.channelId}
            addToMyLearning={(e)=>this.props.addToMyLearning(ele)}
            islearning={this.props.islearning}
            // ========Complete==========
            handleAddToComplete={(e)=>this.props.handleAddToComplete(ele)}
            isComplete={this.props.isComplete}
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
