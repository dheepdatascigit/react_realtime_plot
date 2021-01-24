import React, { Component } from 'react'

class StartStopTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randNumber: 0,
            y1Series: []
        }
    }

    genRandomNum(maxnum) {
        const newRandNum = Math.floor(Math.random() * Math.floor(maxnum));
        this.setState((prevState) => {
            const newArr = prevState.y1Series
            console.log("new array", newArr);
            //let newArr = prevState.y1Series.push(newRandNum);
            return {
                randNumber: newRandNum,
                y1Series: [...newArr, newRandNum].splice(-20)
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.temptimerId)
    }

    componentDidMount() {
        this.temptimerId = setInterval( () => {
            this.genRandomNum(this.props.maxnum)
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>Random number is {this.state.randNumber}</h2>
            </div>
        )
    }
}

export default StartStopTimer
