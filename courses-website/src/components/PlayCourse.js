import React, { Component } from 'react'
import axios from "axios";
import PlayList from "./PlayList";


export default class PlayCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videoId:[],
             videoInfo:[]
        }
        this.getListItems=this.getListItems.bind(this)
    }
    

    getListItems = () => {
      
        let videoId = this.state.videoId
        let videoInfo = this.state.videoInfo
      const url =
        "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=15&playlistId=PLX6DRnWZs6BHIjiLWEPZVycyBEJuRASKZ&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0";
        axios
          .get(url)
          .then((response) => {
            // console.log(response)
            // console.log(response.data)
            // to get a video id
            const info = response.data.items

            // console.log(info)
            videoId = info.map(element => {

                // temp1.items[0].snippet.resourceId.videoId
             return element.snippet.resourceId.videoId

            });
        
            this.setState({videoId})

            videoInfo = info.map(element => {

              // temp1.items[0].snippet.resourceId.videoId
           return {
             title:element.snippet.title,
             image:element.snippet.thumbnails.default.url
            }

          });
      
          this.setState({videoInfo})


  
           
          })
          .catch((error) => {
            console.log(`Error: ${error}`);
          });
 
    };

    getOneVideo = () => {
      
        this.state.videoId.forEach(ele=>{

            const url =
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=${ele}&key=AIzaSyClcbcULTF_w0FjrpC1y_MlK8j278Xz5w0`;
            axios
              .get(url)
              .then((response) => {
                console.log(response)
                // console.log(response.data)
                const all = this.state.videoId.map(ele=>{
                  return <li>{ele}</li>
                })


    
      
               
              })
              .catch((error) => {
                console.log(`Error: ${error}`);
              });

        })
    
 
    };


    componentDidMount(){
        this.getListItems()
        // this.getOneVideo()
    }



    render() {

     
        return (
            <div>
                <PlayList videoInfo={this.state.videoInfo} />
            </div>
        )
    }
}

/**
 1- get all video list items 
 2- find the videoID 
 3- use another API tho pass videoID to get 
 4- get video lik

*/ 

