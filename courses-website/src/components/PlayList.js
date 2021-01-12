import React, { Component } from 'react'
import ListItem from './ListItem'


export default class PlayList extends Component {
    render() {

        const allVideoList = this.props.videoInfo.map((ele,i)=>{
            return <ListItem title={ele.title} 
            url={ele.image} 
            videoId={ele.videoId}
            key={i}
            getUrl={this.props.getUrl}
            />

        })
        return (
            <div>
                <ul>
                    {allVideoList}
                </ul>
            </div>
        )
    }
}
