import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             randomRuete:''
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


    

    render() {
        return (
            <div>
            {this.state.randomRuete}    

            </div>
        )
    }
}
