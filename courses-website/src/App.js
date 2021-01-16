import React, { Component } from 'react'
// import axios from 'axios'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import MyLearning from './components/MyLearning'
import CompletedCourse from './components/CompletedCourse'
import Plan from './components/Plan'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
// import PlayCourse from './components/PlayCourse'

// import PlayCourse from './components/PlayCourse'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      // togglePlayRoute:false,
      // playListId:'',
      myLearning:[],
      islearning:false,
      complete:[],
      isComplete:false
    }
    this.addToMyLearning=this.addToMyLearning.bind(this)
    this.addToComplete=this.addToComplete.bind(this)
  }
  

addToMyLearning=(course)=>{
const myLearning = this.state.myLearning.slice(0) //Create a copy of myLearning Array
const courseIndex = myLearning.indexOf(course)
myLearning.includes(course)? myLearning.splice(courseIndex,1) : myLearning.push(course)
this.setState({myLearning})
// this.setState({islearning: !this.setState.islearning})
// console.log(myLearning)
console.log('Added to learnig')

  }

  addToComplete=(course)=>{
    const complete = this.state.complete.slice(0) //Create a copy of myLearning Array
    const courseIndex = complete.indexOf(course)
    complete.includes(course)? complete.splice(courseIndex,1) : complete.push(course)
    this.setState({complete})
    console.log('Added to learnig')
    
      }

  removeAllMyLearning=()=>{
    this.setState({myLearning: []})
      }
  removeAllcomplete=()=>{
    this.setState({complete: []})
      }



  render() {
    
    return (
      <Router>
      <div className=' App'>
      <nav >
        <div className="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li> <Link to='/'>Home</Link> </li> 
        <li> <Link to='/about'>About</Link></li>
        <li> <Link to='/categories'>Categories</Link></li>
        <li> <Link to='/my-learning'>My Learning</Link></li>
        <li> <Link to='/complete-course'>Completed Courses</Link></li>
        <li> <Link to='/plan'>Plan</Link></li>
      </ul>
    </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />

    

        <Route
          exact  path='/categories'
            render={(props) => (
              <Categories {...props} 
              addToMyLearning={this.addToMyLearning}
               myLearnig={this.state.myLearnig} 
              islearning={this.state.islearning}
              filter={'mylearning'}
              // ===========Complete========
              handleAddToComplete={this.addToComplete}
              complete={this.state.complete}
              isComplete={this.state.isComplete}
              // =====toggle play course route=====
              // handleToggle={this.handleToggle}
              /> )}
              />
       
        <Route
            path='/my-learning'
            render={(props) => (
              <MyLearning {...props}  
              myLearning={this.state.myLearning} 
              addToMyLearning={this.addToMyLearning}
              islearning={this.state.islearning} 
              removeAllMyLearning={this.removeAllMyLearning}

              handleAddToComplete={this.addToComplete}
              complete={this.state.complete}
              isComplete={this.state.isComplete}
              /> )}
              />

        <Route
            path='/complete-course'
            render={(props) => (
              <CompletedCourse {...props}
              complete={this.state.complete} 
               handleAddToComplete={this.addToComplete}
              isComplete={this.state.isComplete}
              removeAllcomplete={this.removeAllcomplete}


              addToMyLearning={this.addToMyLearning}
              myLearnig={this.state.myLearnig} 
             islearning={this.state.islearning}

              /> )}
              />
        <Route
            path='/plan'
            component={Plan}
            />

{/* <PlayCourse/> */}
              {/* <iframe src="//www.youtube.com/embed/QFaFIcGhPoM"  ></iframe> */}

      </div>
      </Router>
    )
  }
}