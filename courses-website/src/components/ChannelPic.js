import React, { Component } from 'react'
import '../App.css'

export default class ChannelPic extends Component {


    
    render() {
        return (
            <div>
                <img className='channel-pic' src={this.props.channelPic}/>
            </div>
        )
    }
}
