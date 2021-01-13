import React, { Component } from "react";

export default class AddToList extends Component {


  handleLearning=(e)=>{
    // this.props.handlelearning()
    this.props.addToMyLearning(e)
  }
  render() {
    const isLearning = this.props.islearning ? 'remove' : 'add'
    return (
      <div className="btn-floating btn-large waves-effect waves-light red">
         <i  onClick={this.handleLearning} className="material-icons">{isLearning}</i>
      </div>
      
    );
  }
}
 