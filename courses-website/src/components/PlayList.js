import React, { Component } from 'react'
import ListItem from './ListItem'


export default class PlayList extends Component {
    render() {

        const allVideoList = this.props.videoInfo.map(ele=>{
            return <ListItem title={ele.title} url={ele.image}/>

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
