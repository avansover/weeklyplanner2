import React, { Component } from 'react'


export default class Shift extends Component {

    shiftColor = () => {

        console.log(this.props.workerDB4[this.props.shiftData.workerId].color)

        console.log(this.props.shiftData.workerId)
        
        return `${this.props.workerDB4[this.props.shiftData.workerId].color}`

    }

    workerID = () => {

        

      
    }


    render() {



        return (
            <div

                className='shiftDiv'
                style={
                    {

                        position: "absolute",
                        width: `${this.props.localShifts[this.props.shiftInd1].shiftLength}px`,
                        left: `${this.props.localShifts[this.props.shiftInd1].shiftStart}px`,
                        top: '-1px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: `${this.shiftColor()}`,
                        height: '20px',
                        borderRadius: '5px',
                        zIndex: 1,
                    }
                }


            >

                {/* <div
                    className='shiftDataDiv'
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart}
                </div> */}

                <div>
                    {this.workerID()}
                </div>

                {/* <div
                    className='shiftDataDiv'
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart + this.props.localShifts[this.props.shiftInd1].shiftLength}
                </div> */}

            </div>
        )
    }
}
