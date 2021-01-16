import React, { Component } from 'react'
import PlanList from './PlanList'
import '../App.css'

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

        const indexToEdit =  allPlan.indexOf(this.state.planToEdit)

        allPlan[indexToEdit]=newPlan
        this.setState({allPlan})
      }

      handlClearAll=(e)=>{
     e.preventDefault();
        this.setState({allPlan:[]})

      }
      
      

    
    render() {
        return (
            <div className='plan'>
            <section id="add-card" className="container">
            <div >
              <h1 className='page-title'>What's your Plan?</h1>
              <form name="add-card">
                <input
                className='input-plan'
                  type="text"
                //   className="question"
                  name="paln"
                  placeholder="Type a paln here!"
                  value={this.state.plan}
                  onChange={(e) => this.handleChange(e)}
                   />
                <button type="submit" className='button' value="Add" onClick={(e) => this.handleSubmit(e)} >Add</button>
                <button type="submit" className='button' value="Edit" onClick={(e) => this.handleEditSubmit(e)} >Edit </button>
                <button type="submit" className='button' value="Edit" onClick={(e) => this.handlClearAll(e)} >Clear All </button>

              </form>

              <PlanList allPlan={this.state.allPlan} handleEdit={this.handleEdit} />
              
            </div>
          </section>
          </div>
        )
    }
}
