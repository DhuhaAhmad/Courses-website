import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Video extends Component {
    render() {
        return (
            <div >
                <ReactPlayer  id='video' controls url={this.props.videoUrl}/>
            </div>
        )
    }
}
