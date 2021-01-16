import React, { Component } from "react";
import '../App.css'

export default class ListItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       activeItem:false
    }
  }
  

    getUrl=()=>{
        this.props.getUrl(this.props.videoId)
        // console.log('Clicked item'+this.props.videoId)
        this.setState({activeItem:!this.state.activeItem})
    }
  render() {

    const active = this.state.activeItem? 'active-item' : ''
    return (
      <div >
        <li id='list-item' className={active} onClick={this.getUrl}>
          <img id='item-img' src={this.props.url} />
          <p id='item-title'>{this.props.title}</p>
        </li>
      </div>
    );
  }
}
