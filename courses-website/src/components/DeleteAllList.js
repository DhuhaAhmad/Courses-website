import React, { Component } from "react";

export default class DeleteAllList extends Component {


    handleDelete=()=>{
        this.props.removeAllMyLearning()
    }

  render() {
    return (
      <div className="btn-floating btn-large waves-effect waves-light red">
        <i  onClick={this.handleDelete} className="material-icons">
          delete
        </i>
      </div>
    );
  }
}
