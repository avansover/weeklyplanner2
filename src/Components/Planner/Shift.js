import React, { Component } from 'react'


export default class Shift extends Component {

    shiftColor = () => {


        var workerId = parseInt(this.props.shiftData.workerId)

        // console.log(workerId)

        // console.log(this.props.workerDB4)

        // console.log(this.props.workerDB4.filter((o) => (o.id === workerId)));

        var workerFromWrokerDB = this.props.workerDB4.filter((o) => (o.id === workerId))

        // console.log(workerFromWrokerDB[0].color);

        return workerFromWrokerDB[0].color


    }

    workerName = () => {

        var workerId = parseInt(this.props.shiftData.workerId)

        // console.log(workerId)

        // console.log(this.props.workerDB4)

        // console.log(this.props.workerDB4.filter((o) => (o.id === workerId)));

        var workerFromWrokerDB = this.props.workerDB4.filter((o) => (o.id === workerId))

        // console.log(workerFromWrokerDB[0].color);

        return workerFromWrokerDB[0].name

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

                <div
                    className='shiftDataDiv'
                    style={{ zIndex: -1, fontSize: '8px' }}
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart}
                </div>

                <div
                    style={{
                        zIndex: -1,
                        fontSize: '12px'
                    }}
                >
                    {this.workerName()}
                </div>

                <div
                    className='shiftDataDiv'
                    style={{ zIndex: -1, fontSize: '8px' }}
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart + this.props.localShifts[this.props.shiftInd1].shiftLength}
                </div>

            </div>
        )
    }
}
