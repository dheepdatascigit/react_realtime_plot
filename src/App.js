import React, { Component } from 'react'
import Clock from './components/Clock'
import StartStopTimer from './components/StartStopTimer'
import ButtonSetter from './components/ButtonSetter'

class App extends Component {
    render() {
        return (
            <div>
                return <h1>Hello, {this.props.name}</h1>
                <Clock />
                <StartStopTimer maxnum={50} />
                <ButtonSetter />
            </div>
        )
    }
}

export default App
