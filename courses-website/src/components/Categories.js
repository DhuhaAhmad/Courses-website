import React, { Component } from "react";
import axios from "axios";
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
      language: [],
      cooking: []
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
    const url3 =
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
    const Api = [url, url2,url3];
    Api.forEach((ele) => {
      axios
        .get(ele)
        .then((response) => {
          // console.log(response)
          // console.log(response.data)
          //to get URL
          const singlePlaylist = response.data.items[0];
          webDevelpment.push(singlePlaylist);
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
  const url3 =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLX6DRnWZs6BF3e4FBuCKMA3StW6sTRxeB&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const Api = [url, url2];
  Api.forEach((ele) => {
    axios
      .get(ele)
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        //to get URL
        const singlePlaylist = response.data.items[0];
        business.push(singlePlaylist);
        this.setState({ business });
        this.setState({appear:false})
       
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  });
};
  getLanguageCourses = (filter) => {
    this.setState({filter:filter})
  const language = this.state.language;
  const url =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL2IkMHFHWdEo-t2mIKmk_HwrJYOTwlT0i&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const url2 =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLF97A549D60C2EBA4&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const url3 =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLfDmeEHel1x3o_e4UjWXR4kClH7ZfAgZ9&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const Api = [url, url2,url3];
  Api.forEach((ele) => {
    axios
      .get(ele)
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        //to get URL
        const singlePlaylist = response.data.items[0];
        language.push(singlePlaylist);
        this.setState({ language });
        this.setState({appear:false})
       
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  });
};
  getCookingCourses = (filter) => {
    this.setState({filter:filter})
  const cooking = this.state.cooking;
  const url =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLTzMGnJjrsSyDJU9XClzZtuJ6GAIsvRk7&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  const url2 =
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PL1dleLLvCiHOrrj2lDtCDiU8oX-ySckf8&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
  
  const Api = [url, url2];
  Api.forEach((ele) => {
    axios
      .get(ele)
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        //to get URL
        const singlePlaylist = response.data.items[0];
        cooking.push(singlePlaylist);
        this.setState({ cooking });
        this.setState({appear:false})
       
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  });
};


  render() {
      const courseArray = (this.state.filter === 'web development' ? this.state.webDevelpment :
       (this.state.filter === 'business'? this.state.business : (this.state.filter === 'language'? this.state.language : 
       (this.state.filter === 'cooking'? this.state.cooking: (this.props.filter === 'mylearning'? this.props.myLearnig: this.props.complete)))))
    // store categories in var
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
        this.getLanguageCourses('language');
      }}
    >

    <Category
      url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
      category={"language"}
    />
    </Link> 
    
    <Link
      to="/courses-container"
      onClick={(e) => {
        this.getCookingCourses('cooking');
      }}
    >

    <Category
      url={"https://hackernoon.com/images/z2xg2bpo.jpg"}
      category={"cooking"}
    />
    </Link>
    </div>
      return (
      <Router>
        <div> 
          {/* to disappear the course categories */}

            {this.state.appear ? toRender : <Route
           exact path="/courses-container"
            render={(props) => (
              <CoursesContainer {...props} course={courseArray}
                
              addToMyLearning={this.props.addToMyLearning} 
              filter={this.state.filter}
              islearning={this.state.islearning} 

              // ===========Complete==========
              handleAddToComplete={this.props.handleAddToComplete}
              isComplete={this.props.isComplete}

              // ==========To get playlistid to start course
              // handleToggle={this.props.handleToggle}
              />
            )}
          />} {/**END IF statement */}

          

         
          
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


          // render before toggleRoute

          // {this.state.appear ? toRender : <Route
          //   exact path="/courses-container"
          //    render={(props) => (
          //      <CoursesContainer {...props} course={courseArray}
                 
          //      addToMyLearning={this.props.addToMyLearning} 
          //      filter={this.state.filter}
          //      islearning={this.state.islearning} 
 
          //      // ===========Complete==========
          //      handleAddToComplete={this.props.handleAddToComplete}
          //      isComplete={this.props.isComplete}
 
          //      // ==========To get playlistid to start course
          //      handleToggle={this.handleToggle}
          //      />
          //    )}
          //  />}