import React, { Component } from 'react'
import CourseImage from './CourseImage'
import AddToList from './AddToList'
import StartCourse from './StartCourse'
import '../App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayCourse from './PlayCourse'
import Complete from './Complete'
import axios from "axios";
import ChannelPic from './ChannelPic'


export default class Course extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             channelPic:''
        }
    }
    

    getChannelInfo = () => {
      const Api =
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${this.props.channelId}&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0`;
     
        axios
          .get(Api)
          .then((response) => {
            // console.log(response)
            // console.log(response.data)
            //to get URL
            const channelPic = response.data.items[0].snippet.thumbnails.default.url;
            this.setState({channelPic})
          
           
          })
          .catch((error) => {
            console.log(`Error: ${error}`);
          });
     
    };
   
componentDidMount(){
    this.getChannelInfo()
}
    render() {

        // const toRender = <div></div>
        return (
            <Router>
            <div className='box'>
               <CourseImage url={this.props.url} /> 
                <p>Course Title: {this.props.courseTitle}</p>
                <p><ChannelPic channelPic={this.state.channelPic}/> Channel Name: {this.props.channelName}</p>
                

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
