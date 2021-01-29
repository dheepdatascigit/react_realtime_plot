import React, { Component } from 'react'
//import './App.css'
import Clock from './components/Clock'
import StartStopTimer from './components/StartStopTimer'
import ButtonSetter from './components/ButtonSetter'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxnum: 60 // default value
        }
    }
    render() {
        return (
            <div>
                return <h1>Hello, {this.props.name}</h1>
                <Clock />
                <StartStopTimer maxnum={this.state.maxnum} />
                <ButtonSetter maxnum={this.state.maxnum}/>
            </div>
        )
    }
}

export default App
