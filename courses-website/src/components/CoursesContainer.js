import React, { Component } from "react";
import Course from "./Course";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import PlayCourse from './PlayCourse'

export default class CoursesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleRoute: false,
      playListId: "",
    };
  }

  handleToggle = (id) => {
    this.setState({ toggleRoute: !this.state.toggleRoute, playListId: id });

    console.log(this.state.playListId)
  };

  render() {
    const allCourses = this.props.course.map((ele, i) => {
      return (
        <Course
          url={ele.snippet.thumbnails.standard.url}
          courseTitle={ele.snippet.title}
          channelName={ele.snippet.channelTitle}
          playListId={ele.id}
          channelId={ele.snippet.channelId}
          addToMyLearning={() => this.props.addToMyLearning(ele)}
          islearning={this.props.islearning}
          // ========Complete==========
          handleAddToComplete={() => this.props.handleAddToComplete(ele)}
          isComplete={this.props.isComplete}
          //function to toggle the dispaly of playcourse component
          handleToggle={this.handleToggle}
          key={i}
        />
      );
    });
    return (

      <Router>
        <div>
          {this.state.toggleRoute? <Switch>
            <Redirect from="/courses-container" to="/play-course" />
            <Route
              path="/play-course"
              render={(props) => (
                <PlayCourse {...props} playListId={this.state.playListId} />
              )}
            />
          </Switch> :allCourses}
          
          
          {/* {this.state.toggleRoute ? <Route
          path="/play-course"
          render={(props) => (
            <PlayCourse {...props} playListId={this.state.playListId} />
          )}
        />  : allCourses} */}
          {/* {allCourses} */}
        </div>
      </Router>
    );
  }
}
