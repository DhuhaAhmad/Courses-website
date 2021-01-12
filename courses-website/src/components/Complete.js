import React, { Component } from 'react'

export default class complete extends Component {

    handleComplete=(e)=>{
        // this.props.handlelearning()
        this.props.handleAddToComplete()
      }
    render() {
        return (
            
            <div className="btn-floating btn-large waves-effect waves-light red">
            <i  onClick={this.handleComplete} className="material-icons">done</i>
         </div>
        )
    }
}
