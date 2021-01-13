import React, { Component } from "react";
import '../App.css'

export default class ListItem extends Component {

    getUrl=(e)=>{
        this.props.getUrl(this.props.videoId)
    }
  render() {
    return (
      <div>
        <li onClick={this.getUrl}>
          <img id='item-img' src={this.props.url} />
          <p>{this.props.title}</p>
        </li>
      </div>
    );
  }
}
