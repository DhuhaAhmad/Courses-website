import React, { Component } from 'react'
import CourseImage from './CourseImage'
import AddToList from './AddToList'
import StartCourse from './StartCourse'
import '../App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayCourse from './PlayCourse'
import Complete from './Complete'

export default class Course extends Component {

   

    render() {

        // const toRender = <div></div>
        return (
            <Router>
            <div className='box'>
               <CourseImage url={this.props.url} /> 
                <p>Course Title: {this.props.courseTitle}</p>
                <p>Channel Name: {this.props.channelName}</p>


                <AddToList addToMyLearning={(e)=>this.props.addToMyLearning(e)} 
                // handlelearning={this.props.handlelearning}
                islearning={this.props.islearning}
                />
                <Complete  handleAddToComplete={(e)=>this.props.handleAddToComplete(e)}
                    isComplete={this.props.isComplete}
                />
               <Link to='/play-course'><StartCourse /></Link> 
                
               
              
                {/* Start icons or button */}

            </div>
            <Route
           exact path="/play-course"
            render={(props) => (
              <PlayCourse {...props}  playListId={this.props.playListId}/> )}
              />
            </Router>
        )
    }
}
