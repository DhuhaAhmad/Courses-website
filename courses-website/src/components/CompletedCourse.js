import React, { Component } from "react";
import Course from "./Course";
import DeleteAllList from "./DeleteAllList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayCourse from "./PlayCourse";

export default class CompletedCourse extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     toggleRoute: false,
  //     playListId: "",
  //   };
  // }

  // handleToggle = (id) => {
  //   this.setState({ toggleRoute: !this.state.toggleRoute, playListId: id });
  // };
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
          // handleToggle={this.handleToggle}
          key={i}
        />
      );
    });
    return (
        <Router>
      <div>
        {/* <Link to="/play-course"></Link>

        {this.state.toggleRoute ? (
          <Route
            path="/play-course"
            render={(props) => (
              <PlayCourse {...props} playListId={this.state.playListId} />
            )}
          />
        ) : (
          <div>
            <DeleteAllList removeAll={this.props.removeAllcomplete} />
            {completeCourses.length > 0 ? (
              completeCourses
            ) : (
              <h1>No completed course </h1>
            )}
          </div>
        )} */}
        <DeleteAllList removeAll={this.props.removeAllcomplete} />
                {completeCourses.length >0 ? completeCourses: <h1>No completed course </h1>}
      </div>
      </Router>
    );
  }
}
