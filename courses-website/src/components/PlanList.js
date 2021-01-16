import React, { Component } from 'react'
import PlanItem from './PlanItem'

export default class PlanList extends Component {
    render() {

        const allPlan = this.props.allPlan.map((ele,i)=>{

           return <PlanItem  plan={ele} handleEdit={this.props.handleEdit} key={i}/>
        })
        console.log(allPlan)
        return (
            <div className='row'>
                <ol>
                {allPlan.length > 0 ? allPlan: <h2>No plan added today</h2>}
                </ol>
            </div>
        )
    }
}
