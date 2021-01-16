import React, { Component } from 'react'

export default class complete extends Component {

    handleComplete=(e)=>{
        console.log(this.props)

        this.props.handleAddToComplete()
      }
    render() {
        const iscomplete = this.props.isComplete? 'turned_in':'turned_in_not'
        return (
            
            <div className="btn-floating btn-large waves-effect waves-light orange complete-icon">
            <i  onClick={this.handleComplete} className="material-icons">{iscomplete}</i>
         </div>
        )
    }
}
