import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import CoursesContainer from './components/CoursesContainer'
import PlayCourse from './components/PlayCourse'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {



  getPlaylist=()=>{
    const url = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&id=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0'
    axios
.get(url)
.then((response)=>{
    // console.log(response)
    // console.log(response.data)
    //to get URL
   const url =  response.data.items[0].player.embedHtml
   const urlStart = url.indexOf('src=') + 5
   const end = url.substring(urlStart).indexOf('"') + urlStart
   const playListUrl = url.substring(urlStart,end)  
})
.catch((error)=>{

    console.log(`Error: ${error}`)
})

  }
  render() {
    return (
      <Router>
      <div className='container'>
      <nav >
        <Link to='/'>Home</Link>  <span> || </span>
        <Link to='/about'>About</Link> <span> || </span>
        <Link to='/categories'>Categories</Link>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/categories' component={Categories} />

        {/* <iframe width='700px' height='700px' src='http://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'></iframe> */}
         {/* <button onClick={(e)=>this.getPlaylist(e)}>Click me</button> */}
        
        {/* <CoursesContainer /> */}
        <PlayCourse />

      </div>
      </Router>
    )
  }
}



// var srcIndex = __cdata.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
// var urlStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
// var urlEnd = __cdata.substring(urlStart).indexOf('"') + urlStart; // Find where the URL ends
// var src = __cdata.substring(urlStart, urlEnd); // Extract just the URL
