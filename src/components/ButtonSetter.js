import React, { Component } from 'react'

class ButtonSetter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxSetter: 10
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            const incVar = prevState.maxSetter;
            console.log("incVar state", incVar);
            return {
                maxSetter: incVar+5
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Set to {this.state.maxSetter}</button>
            </div>
        )
    }
}

export default ButtonSetter
