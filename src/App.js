// create your App component here
import React from 'react'

class App extends React.Component {

    state ={
        people:[]
    }
    
    render(){
        console.log(this.state)
        return(
            this.state.people.map((person,id)=> <h1 key={id}>{person.name} </h1>)
        )
        }

     componentDidMount =()=>{
            fetch('http://api.open-notify.org/astros.json')
            .then(res=> res.json())
            .then(info=> {
                console.log(info)
                this.setState({people: info.people})
            })
        }
        
        



}

export default App 