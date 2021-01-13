import React, { Component } from 'react'
// import CoursesContainer from './CoursesContainer'
import Course from './Course'
import DeleteAllList from './DeleteAllList'

export default class MyLearning extends Component {
    render() {
        

        const learningCourses = this.props.myLearning.map((ele,i)=>{
            return <Course url={ele.snippet.thumbnails.standard.url} 
            courseTitle={ele.snippet.title}
             channelName={ele.snippet.channelTitle}
             playListId={ele.id}
             addToMyLearning={()=>this.props.addToMyLearning(ele)}
             handleAddToComplete={()=>this.props.handleAddToComplete(ele)}

            //  handlelearning={this.handlelearning}
             islearning={true}
             key={i}
             />
            })
        return (
            <div>
                <DeleteAllList removeAll={this.props.removeAllMyLearning} />
                {learningCourses.length >0 ? learningCourses: <h1>No course Added</h1>}
            </div>
        )
    }
}
