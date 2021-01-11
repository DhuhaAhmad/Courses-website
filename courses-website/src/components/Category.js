import React, { Component } from 'react'
import complete from './Complete'
import AddToList from './AddToList'
import CourseImage from './CourseImage'
import '../App.css'

export default class Category extends Component {
    render() {
        return (
          <div className='box'>
              <CourseImage url={this.props.url} />
              <p>{this.props.category}</p>
          </div>
        )
    }
}
