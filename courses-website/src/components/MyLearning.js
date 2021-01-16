import React, { Component } from 'react'
// import CoursesContainer from './CoursesContainer'
import Course from './Course'
import DeleteAllList from './DeleteAllList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayCourse from "./PlayCourse";

export default class MyLearning extends Component {


    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          toggleRoute:false,
    //          playListId:''
             
    //     }
    // }
    
    // handleToggle=(id)=>{
    
    //     this.setState({toggleRoute:!this.state.toggleRoute,
    //         playListId:id
    //     })
    
    // }


    render() {
        

        const learningCourses = this.props.myLearning.map((ele,i)=>{
            return <Course url={ele.snippet.thumbnails.standard.url} 
            courseTitle={ele.snippet.title}
             channelName={ele.snippet.channelTitle}
             playListId={ele.id}
             addToMyLearning={()=>this.props.addToMyLearning(ele)}
             handleAddToComplete={()=>this.props.handleAddToComplete(ele)}
             islearning={true}
            //  handleToggle={this.handleToggle}
             key={i}
             />
            })

        return (
            <div className='my-courses'>
                <h1 className='page-title'>My learning</h1>

            <DeleteAllList removeAll={this.props.removeAllMyLearning} />
                {learningCourses.length >0 ? learningCourses: <h1>No course Added</h1>}
            </div>
        )
    }
}

