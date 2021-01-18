import React, { Component } from 'react'
import axios from 'axios'
import Categories from './Categories'
import '../App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             randomRuete:'',
             home:true
        }
        this.getQuete=this.getQuete.bind(this)
    }
    
    componentDidMount(){
        // window.setTimeout(this.getQuete(), 3000);
        this.getQuete()
    }

    //Function to get random quete
    getQuete=()=>{
        const Api = 'https://api.adviceslip.com/advice'
        axios
    .get(Api)
    .then((response)=>{
        // console.log(response)
        // console.log(response.data.slip.advice)
        const randomRuete = response.data.slip.advice
        this.setState({randomRuete})
        //to call the func each 10 secs 
        window.setTimeout(this.getQuete(), 8000);

        
    })
    .catch((error)=>{
    
        console.log(`Error: ${error}`)
    })
    
}

homeToggle=()=>{
    this.setState({home:!this.state.home})
}


    
    render() {
        const homeRender = <div className="home">
              <p className='quete'>{this.state.randomRuete} </p>  
        {/* To Categories page   */}
      <Link to='/categories' onClick={this.homeToggle}><button className='get-started'>GET STARTED</button></Link> 
      </div>
        return (
            <Router>

                {this.state.home? homeRender:<Route
            path='/categories'
            render={(props) => (
              <Categories {...props} 
              addToMyLearning={this.props.addToMyLearning}
               myLearnig={this.props.myLearnig} 
              islearning={this.props.islearning}
              filter={this.props.filter}
              // ===========Complete========
              handleAddToComplete={this.props.handleAddToComplete}
              complete={this.props.complete}
              isComplete={this.props.isComplete}
              // =====toggle play course route=====
              /> )}
              />  }

            </Router>

        )
    }
}
