import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Home from './components/Home'

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
  //  console.log(playListUrl)
return (
{/* <ReactPlayer controls url= {playListUrl} /> */}

)

    
})
.catch((error)=>{

    console.log(`Error: ${error}`)
})

  }
  render() {
    return (
      <div>
        <iframe width='700px' height='700px' src='http://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'></iframe>
         {/* <button onClick={(e)=>this.getPlaylist(e)}>Click me</button> */}
        
        
      </div>
    )
  }
}



// var srcIndex = __cdata.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
// var urlStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
// var urlEnd = __cdata.substring(urlStart).indexOf('"') + urlStart; // Find where the URL ends
// var src = __cdata.substring(urlStart, urlEnd); // Extract just the URL
