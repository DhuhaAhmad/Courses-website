import React, { Component } from "react";

export default class AddToList extends Component {


  handleLearning=(e)=>{
    // this.props.handlelearning()
    this.props.addToMyLearning()
  }
  render() {
    const isLearning = this.props.islearning ? 'remove' : 'add'
    console.log('lllllllll'+isLearning+'\n'+this.props.islearning)
    return (
      <div className="btn-floating btn-large waves-effect waves-light red">
         <i  onClick={this.handleLearning} className="material-icons">{isLearning}</i>
      </div>
    );
  }
}
 