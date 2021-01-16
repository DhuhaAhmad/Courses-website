import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Video extends Component {
    render() {
        return (
            <div id='video'>
                <ReactPlayer width={740} height={480}  controls url={this.props.videoUrl}/>
                {this.props.videoInfo.title}
            </div>
        )
    }
}
