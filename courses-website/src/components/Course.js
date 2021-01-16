import React, { Component } from "react";
import AddToList from "./AddToList";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Complete from "./Complete";
import axios from "axios";



export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelPic: "",
    };
  }

  getChannelInfo = () => {
    const Api = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${this.props.channelId}&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0`;

    axios
      .get(Api)
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        //to get URL
        const channelPic =
          response.data.items[0].snippet.thumbnails.default.url;
        this.setState({ channelPic });
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  componentDidMount() {
    this.getChannelInfo();
  }

  handleToggle = () =>{
    this.props.handleToggle(this.props.playListId)
  }

  render() {
    return (
      <Router>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img src={this.props.url} />
          </div>
          <div class="card-content">
            <span class="card-title activator">
              <p  id='course-title'>{this.props.courseTitle}</p>
              <i class="material-icons right">more_vert</i>
            </span>
            <div>
            By:{" "}
              <img className='channel-pic' src={this.state.channelPic}/>
             <p className='channel-name'> {this.props.channelName}</p>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Course description<i class="material-icons right">close</i>
            </span>
            <p>
              {this.props.description}
            </p>
          </div>

          <AddToList
            addToMyLearning={this.props.addToMyLearning}
            islearning={this.props.islearning}
          />
          <Complete
            handleAddToComplete={ this.props.handleAddToComplete}
            isComplete={this.props.isComplete}
          />
          <Link to="/play-course" onClick={this.handleToggle}>
          <button className='button'>Start</button>
          </Link>

        </div>
      </Router>
    );
  }
}

