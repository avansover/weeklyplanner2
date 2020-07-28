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

    drag = (ev) => {

        console.log(ev.target);

        ev.dataTransfer.setData("srcDay", this.props.dayInd3);
        ev.dataTransfer.setData("srcPost", this.props.postInd2);
        ev.dataTransfer.setData("srcWorkerId", this.props.shiftData.workerId);
        //console.log(this.props.shiftData.workerId);
        ev.dataTransfer.setData("srcId", ev.target.id);
        ev.dataTransfer.setData("srcClass", ev.target.className);

    }

    render() {



        return (
            <div

                className='shiftDiv'
                id={`d${this.props.dayInd3}p${this.props.postInd2}s${this.props.localShifts[this.props.shiftInd1].shiftStart}w${this.props.shiftData.workerId}`}
                draggable='true'
                onDragStart={this.drag}
                onDrag={this.draging}
                onMouseDown={this.bring}
                style={
                    {
                        position: "absolute",
                        width: `${this.props.localShifts[this.props.shiftInd1].shiftLength}px`,
                        left: `${this.props.localShifts[this.props.shiftInd1].shiftStart}px`,
                        top: '-1px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: `${this.shiftColor()}`,
                        height: '23px',
                        borderRadius: '3px',
                        zIndex: 1,
                    }
                }


            >

                <div

                    className='shiftDataDiv'
                    style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', }}
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart}
                </div>

                <div

                    style={{
                        pointerEvents: 'none',
                        position: "relative",
                        zIndex: 0,
                        fontSize: '12px'

                    }}
                >
                    {this.workerName()}
                </div>

                <div
                    className='shiftDataDiv'
                    style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', }}
                >
                    {this.props.localShifts[this.props.shiftInd1].shiftStart + this.props.localShifts[this.props.shiftInd1].shiftLength}
                </div>

            </div>
        )
    }
}
