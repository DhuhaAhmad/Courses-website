import React, { Component } from 'react'
import axios from "axios";
import PlayList from "./PlayList";
import Video from './Video';


export default class PlayCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  videoId:[],
             videoInfo:[],
             videoUrl:'',
            //  id:''
        }
        this.getListItems=this.getListItems.bind(this)
        this.getOneVideo=this.getOneVideo.bind(this)
    }
    

    getListItems = () => {

      const playListId= this.props.playListId
        // let videoId = this.state.videoId
        let videoInfo = this.state.videoInfo
      const url =
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=100&playlistId=${playListId}&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0`;
        axios
          .get(url)
          .then((response) => {
            // console.log(response)
            console.log('getListItems',response.data)
            // to get a video id
            const info = response.data.items

            // console.log(info)
            // videoId = info.map(element => {

            //     // temp1.items[0].snippet.resourceId.videoId
            //  return element.snippet.resourceId.videoId

            // });
        
            // this.setState({videoId})

            videoInfo = info.map(element => {

              // temp1.items[0].snippet.resourceId.videoId
           return {
             title:element.snippet.title,
             image:element.snippet.thumbnails.standard.url,
             videoid: element.snippet.resourceId.videoId
            }

          });
      
          this.setState({videoInfo})


  
           
          })
          .catch((error) => {
            console.log(`Error: ${error}`);
          });
 
    };

    getOneVideo = (id) => {
// this.setState({id:id})      
        // this.state.videoId.forEach(ele=>{

            const url =
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cplayer&id=${id}&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0`;
            axios
              .get(url)
              .then((response) => {
                console.log(response)
                console.log(response.data)
                
                //get video url 
              const url =  response.data.items[0].player.embedHtml
              console.log(url)
             const urlStart = url.indexOf('src=') + 5
             const end = url.substring(urlStart).indexOf('"') + urlStart
             const videoUrl = url.substring(urlStart,end)
             console.log(videoUrl)
             this.setState({videoUrl})

              })
              .catch((error) => {
                console.log(`Error: ${error}`);
              });    
 
    };


    componentDidMount(){
        this.getListItems()
        // this.getOneVideo()
          }


    render() {

        return (
            <div className='play-course'>
                <PlayList videoInfo={this.state.videoInfo}  getUrl={this.getOneVideo}/>
                <Video videoUrl={this.state.videoUrl} videoInfo={this.state.videoInfo}/>
               
            </div>
        )
    }
} 

