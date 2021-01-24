import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class StartStopTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randNumber: 0,
            y1Series: [],
            plotData: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                datasets: [
                  {
                    label: "First dataset",
                    data: [],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                  }
                ]
              }
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
                y1Series: [...newArr, newRandNum].splice(-20),
                plotData: {
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                    datasets: [
                      {
                        label: "First dataset",
                        data: [...newArr, newRandNum].splice(-20),
                        fill: false,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                      }
                    ]
                  }
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
                <Line data={this.state.plotData} width={200} height={100}/>
            </div>
        )
    }
}

export default StartStopTimer
