import React, { Component } from 'react'
import PlanList from './PlanList'

export default class Plan extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             plan:'',
             allPlan:[],
             planToEdit:''
        }
    }

    handleChange= (e) =>{
        this.setState({plan: e.target.value})
      }
    
      handleSubmit = (e) =>{ 
        e.preventDefault();
        let allPlan = this.state.allPlan.slice()    
        allPlan.push(this.state.plan)
        this.setState({allPlan})
        this.setState({plan:''})
    
      }  

      handleEdit = (e) =>{ 
        // e.preventDefault();
        console.log(e.target.innerText)
        this.setState({planToEdit:e.target.innerText})
        this.setState({plan:e.target.innerText})
      } 
      
      handleEditSubmit=(e)=>{
     e.preventDefault();
        let allPlan=this.state.allPlan
        const newPlan =this.state.plan
        console.log(newPlan)

        const indexToEdit =  allPlan.indexOf(this.state.planToEdit)
        console.log(indexToEdit)

        allPlan[indexToEdit]=newPlan
        console.log(allPlan)
        this.setState({allPlan})

      }
      
      

    
    render() {
        return (
            <div className='plan'>
            <section id="add-card" className="container">
            <div className="row">
              <h1>What's your Plan?</h1>
              <form name="add-card">
                <input
                  type="text"
                //   className="question"
                  name="paln"
                  placeholder="Type a paln here!"
                  value={this.state.plan}
                  onChange={(e) => this.handleChange(e)}
                   />
                <input type="submit" className="btn-submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
                <input type="submit" className="btn-submit" value="Edit" onClick={(e) => this.handleEditSubmit(e)} />

              </form>

              <PlanList allPlan={this.state.allPlan} handleEdit={this.handleEdit} />
              
            </div>
          </section>
          </div>
        )
    }
}
