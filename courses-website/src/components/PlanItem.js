import React, { Component } from 'react'

export default class PlanItem extends Component {

    handleEdit=(e)=>{
        this.props.handleEdit(e)
    }
    render() {
        return (
            <div className="card" onClick={(e)=>this.handleEdit(e)}>
            
             <li  > {this.props.plan}</li>  <p className="material-icons edit-icon">edit</p>  
            </div>
        )
    }
}
