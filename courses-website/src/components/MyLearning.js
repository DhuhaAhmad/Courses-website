import React, { Component } from 'react'
// import CoursesContainer from './CoursesContainer'
import Course from './Course'

export default class MyLearning extends Component {
    render() {

        const learningCourses = this.props.myLearning.map((ele,i)=>{
            return <Course url={ele.snippet.thumbnails.standard.url} 
            courseTitle={ele.snippet.title}
             channelName={ele.snippet.channelTitle}
             playListId={ele.id}
             addToMyLearning={(e)=>this.props.addToMyLearning(ele)}
            //  handlelearning={this.handlelearning}
             islearning={this.props.islearning}
             key={i}
             />
            })
        return (
            <div>
                {learningCourses}
            </div>
        )
    }
}
