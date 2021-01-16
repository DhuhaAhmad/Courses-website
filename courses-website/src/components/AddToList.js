import React, { Component } from "react";

export default class AddToList extends Component {


  handleLearning=(e)=>{
    console.log(this.props)

    this.props.addToMyLearning()
   

  }
  render() {
    const isLearning = this.props.islearning ? 'remove' : 'add'
    return (
      <div className="btn-floating btn-large waves-effect waves-light add-icon ">
         <i  onClick={this.handleLearning} className="material-icons">{isLearning}</i>
      </div>
      
    );
  }
}
 