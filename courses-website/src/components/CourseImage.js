
import React, { Component } from 'react'
import '../App.css'

export default class CourseImage extends Component {
    render() {
        return (
            <div>
              <img src={this.props.url}/>
            </div>
        )
    }
}
