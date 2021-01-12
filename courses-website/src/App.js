import React, { Component } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import CoursesContainer from './components/CoursesContainer'
import PlayCourse from './components/PlayCourse'
import MyLearning from './components/MyLearning'
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
      islearning:false

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
  render() {
    return (
      <Router>
      <div className='container'>
      <nav >
        <div className="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li> <Link to='/'>Home</Link> </li> 
        <li> <Link to='/about'>About</Link></li>
        <li> <Link to='/categories'>Categories</Link></li>
        <li> <Link to='/my-learning'>MyLearning</Link></li>
      </ul>
    </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/categories' component={Categories}   /> */}
        <Route
            path='/categories'
            render={(props) => (
              <Categories {...props} addToMyLearning={this.addToMyLearning} myLearnig={this.state.myLearnig} 
              islearning={this.state.islearning} 
              /> )}
              />
        <Route
            path='/my-learning'
            render={(props) => (
              <MyLearning {...props}  myLearning={this.state.myLearning} 
              islearning={this.state.islearning} 
              addToMyLearning={this.addToMyLearning}
              islearning={this.state.islearning} 
              /> )}
              />

      </div>
      </Router>
    )
  }
}

