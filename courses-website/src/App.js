import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import CoursesContainer from './components/CoursesContainer'
import PlayCourse from './components/PlayCourse'
import MyLearning from './components/MyLearning'
import CompletedCourse from './components/CompletedCourse'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      myLearning:[],
      islearning:false,
      complete:[],
      isComplete:false
    }
    // this.addToMyLearning=this.addToMyLearning.bind(this)
  }
  

addToMyLearning=(course)=>{
const myLearning = this.state.myLearning.slice(0) //Create a copy of myLearning Array
const courseIndex = myLearning.indexOf(course)
myLearning.includes(course)? myLearning.splice(courseIndex,1) : myLearning.push(course)
this.setState({myLearning})
this.setState({islearning: !this.setState.islearning})
// console.log(myLearning)
console.log('Added to learnig')

  }

  addToComplete=(course)=>{
    const complete = this.state.complete.slice(0) //Create a copy of myLearning Array
    const courseIndex = complete.indexOf(course)
    complete.includes(course)? complete.splice(courseIndex,1) : complete.push(course)
    this.setState({complete})
    this.setState({isComplete: !this.setState.isComplete})
    // console.log(myLearning)
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
      </ul>
    </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/categories' component={Categories}   /> */}
        <Route
          exact  path='/categories'
            render={(props) => (
              <Categories {...props} 
              addToMyLearning={(e)=>this.addToMyLearning(e)}
               myLearnig={this.state.myLearnig} 
              islearning={this.state.islearning}
              filter={'mylearning'}
              // ===========Complete========
              handleAddToComplete={(e)=>this.addToComplete(e)}
              complete={this.state.complete}
              isComplete={this.state.isComplete}
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

              /> )}
              />

      </div>
      </Router>
    )
  }
}

