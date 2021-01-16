import React, { Component } from "react";
import Course from "./Course";
import DeleteAllList from "./DeleteAllList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayCourse from "./PlayCourse";

export default class CompletedCourse extends Component {
 
  render() {
    const completeCourses = this.props.complete.map((ele, i) => {
      return (
        <Course
          url={ele.snippet.thumbnails.standard.url}
          courseTitle={ele.snippet.title}
          channelName={ele.snippet.channelTitle}
          playListId={ele.id}
          handleAddToComplete={() => this.props.handleAddToComplete(ele)}
          addToMyLearning={(e) => this.props.addToMyLearning(ele)}
          isComplete={true}
          key={i}
        />
      );
    });
    return (
        <Router>
      <div className='my-courses'>
      <h1 className='page-title'>Completed Course</h1>
        <DeleteAllList removeAll={this.props.removeAllcomplete} />
                {completeCourses.length >0 ? completeCourses: <h1>No completed course </h1>}
      </div>
      </Router>
    );
  }
}
