import React, { Component } from "react";
import axios from "axios";
// import Home from './Home'
// import About from './About'
import Category from "./Category";
import CoursesContainer from "./CoursesContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
        appear:true,
      filter: "",
      webDevelpment: [],
      business : [],
      makeUp: [],
    };
    this.getWebDevelpmentCourses = this.getWebDevelpmentCourses.bind(this);
    this.getBusinessCourses = this.getBusinessCourses.bind(this);
  }

  getWebDevelpmentCourses = (filter) => {
      this.setState({filter:filter})
    const webDevelpment = this.state.webDevelpment;
    const url =
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
    const url2 =
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL0eyrZgxdwhwNC5ppZo_dYGVjerQY3xYU&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
    const Api = [url, url2];
    Api.forEach((ele) => {
      axios
        .get(ele)
        .then((response) => {
          // console.log(response)
          // console.log(response.data)
          //to get URL
          const sinlePlaylist = response.data.items[0];
          webDevelpment.push(sinlePlaylist);
          this.setState({ webDevelpment });
          this.setState({appear:false})

         
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    });
  };

  getBusinessCourses = (filter) => {
    this.setState({filter:filter})
  const business = this.state.business;
  const url =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const url2 =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLX6DRnWZs6BHIjiLWEPZVycyBEJuRASKZ&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const Api = [url, url2];
  Api.forEach((ele) => {
    axios
      .get(ele)
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        //to get URL
        const sinlePlaylist = response.data.items[0];
        business.push(sinlePlaylist);
        this.setState({ business });
        this.setState({appear:false})
       
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  });
};

  render() {
      const courseArray = (this.state.filter === 'web development' ? this.state.webDevelpment : (this.state.filter === 'business'? this.state.business : this.state.makeUp))
    
      const toRender = <div> <Link
      to="/courses-container"
      onClick={(e) => {
        this.getWebDevelpmentCourses('web development');
      }}
    >
      {" "}
      <Category
        url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
        category={"Web Development"}
      />{" "}
    </Link>
    <Link
      to="/courses-container"
      onClick={(e) => {
        this.getBusinessCourses('business');
      }}
    >
    <Category
      url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
      category={"Business"}
    />
    </Link>
    <Link
      to="/courses-container"
      onClick={(e) => {
        this.grtWebDevelpmentCourses('makeup');
      }}
    >

    <Category
      url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
      category={"Design"}
    />
    </Link> </div>
      return (
      <Router>
        <div> 
            {this.state.appear ? toRender : <Route
            path="/courses-container"
            render={(props) => (
              <CoursesContainer {...props} course={courseArray} />
            )}
          />}

         
          
          Categories

          
          
        </div>
      </Router>
    );
  }
}



 //    const src =  response.data.items[0].player.embedHtml
          //    const urlStart = src.indexOf('src=') + 5
          //    const end = src.substring(urlStart).indexOf('"') + urlStart
          //    const playListUrl = src.substring(urlStart,end)
          //    webDevelpment.push(playListUrl)
          //    this.setState({webDevelpment})
          //    console.log(this.state.webDevelpment)
