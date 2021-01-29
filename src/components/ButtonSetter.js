import React, { Component } from 'react'

export function MaxCheck(props) {
    if(this.props.maxSetter > 50) {
        console.log("maxcheck", this.state.maxSetter);
        return <p>Too Much!!!</p>
    }
    else {
        return <p>OK</p>
    }
}

class ButtonSetter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxSetter: this.props.maxnum
        }

        this.handleClick = this.handleClick.bind(this);
        //this.maxCheck = this.maxCheck.bind(this);
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
                <button onClick={this.handleClick} name='bincrementor' value={this.state.maxSetter}>Set to {this.state.maxSetter}</button>
                {/* <MaxCheck maxSetter={this.state.maxSetter} />*/}
            </div>
        )
    }
}

export default ButtonSetter
