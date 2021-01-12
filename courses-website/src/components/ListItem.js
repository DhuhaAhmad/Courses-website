import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <li>
          <img src={this.props.url} />
          <p>{this.props.title}</p>
        </li>
      </div>
    );
  }
}
