import React, { Component } from "react";
import axios from 'axios'
// import Home from './Home'
// import About from './About'
import Category from "./Category";
import CoursesContainer from "./CoursesContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Categories extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             webDevelpment:[],
             Markiting:[],
             MakeUp:[]

        }
        this.getPlaylist = this.getPlaylist.bind(this)
    }


    getPlaylist=()=>{

        const webDevelpment = this.state.webDevelpment
        const url = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0'
        const url2 ='https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL0eyrZgxdwhwNC5ppZo_dYGVjerQY3xYU&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0'
        const Api = [url,url2]
        Api.forEach((ele)=>{
            axios
            .get(ele)
            .then((response)=>{
                // console.log(response)
                // console.log(response.data)
                //to get URL
               const sinlePlaylist =  response.data.items[0]
               webDevelpment.push(sinlePlaylist)
               this.setState({webDevelpment})

            //    const src =  response.data.items[0].player.embedHtml
            //    const urlStart = src.indexOf('src=') + 5
            //    const end = src.substring(urlStart).indexOf('"') + urlStart
            //    const playListUrl = src.substring(urlStart,end) 
            //    webDevelpment.push(playListUrl)
            //    this.setState({webDevelpment})
            //    console.log(this.state.webDevelpment)
        
            })
            .catch((error)=>{
            
                console.log(`Error: ${error}`)
            })

        })
      }
    

  render() {
    return (
      <Router>
        <div>
          <Link to="/courses-container"  onClick={(e)=>{this.getPlaylist()}}>
            {" "}
            <Category
              url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
              category={"Web Development"}
            />{" "}
          </Link>
        {/* ==================================================================== */}
        <Category
            url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
            category={"Marketing"}
          />
        {/* ==================================================================== */}
          <Category
            url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
            category={"Design"}
          />
          Categories
          <Route path="/courses-container" 
          render={(props) => <CoursesContainer {...props}  course={this.state.webDevelpment}/>} />

          {/* Add props with Route */}
          {/* <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} isAuthed={true} />}
          /> */}
        </div>
      </Router>
    );
  }
}
