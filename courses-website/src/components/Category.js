import React, { Component } from 'react'
import '../App.css'

export default class Category extends Component {
    render() {
        return (

    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img className='category-img' src={this.props.url}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{this.props.category}</span>
    </div>
  </div>


        )
    }
}
