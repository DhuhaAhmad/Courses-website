import React, { Component } from 'react'
import complete from './Complete'
import AddToList from './AddToList'
import CourseImage from './CourseImage'
import '../App.css'

export default class Category extends Component {
    render() {
        return (
            
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <CourseImage url={this.props.url} />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{this.props.category}<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{this.props.category}<i class="material-icons right">close</i></span>
      <p>des</p>
    </div>
  </div>


        )
    }
}
