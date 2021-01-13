import React, { Component } from 'react'
import Course from './Course'
import DeleteAllList from './DeleteAllList'

export default class CompletedCourse extends Component {
    render() {
        
        const completeCourses = this.props.complete.map((ele,i)=>{
            return <Course url={ele.snippet.thumbnails.standard.url} 
            courseTitle={ele.snippet.title}
             channelName={ele.snippet.channelTitle}
             playListId={ele.id}
             handleAddToComplete={()=>this.props.handleAddToComplete(ele)}
            addToMyLearning={(e)=>this.props.addToMyLearning(ele)}
            isComplete={true}
             key={i}
             />
            })
        return (
            <div>
                <DeleteAllList removeAll={this.props.removeAllcomplete} />
                {completeCourses.length >0 ? completeCourses: <h1>No completed course </h1>}
            </div>
        )
    }
}
