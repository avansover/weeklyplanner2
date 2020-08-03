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

    rightClick = () => {

        console.log('right click');

    }

    resizeShift = (ev) => {

        ev.preventDefault()

        let resizer = ev.target
        console.log(resizer.className);


        let shift = ev.target.parentNode.parentNode
        console.log(shift);


        let dropArea = ev.target.parentNode.parentNode.parentNode
        console.log(dropArea);

        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)

        let dropAreaLeft = dropArea.offsetLeft
        let ShiftOldWidth = shift.offsetWidth
        let shiftOldLeft = shift.offsetLeft


        console.log('dropAreaLeft ' + dropAreaLeft);
        console.log('ShiftOldWidth ' + ShiftOldWidth);
        console.log('shiftOldLeft ' + shiftOldLeft);



        function resize(eve) {

            // console.log(eve.pageX - dropAreaLeft);
            // console.log(shiftOldLeft + ShiftOldWidth);

            if (resizer.className === 'leftResizer') {

                if (eve.pageX > dropAreaLeft && eve.pageX - dropAreaLeft <= shiftOldLeft + ShiftOldWidth) {

                    shift.style.left = eve.pageX - dropAreaLeft + 'px'
                    shift.style.width = ShiftOldWidth + shiftOldLeft + dropAreaLeft - eve.pageX + 'px'

                } else if (eve.pageX <= dropAreaLeft) {

                    shift.style.left = 0 + 'px'
                    shift.style.width = ShiftOldWidth + shiftOldLeft + 'px'

                } else if (eve.pageX - dropAreaLeft > shiftOldLeft + ShiftOldWidth) {




                    shift.style.left = shiftOldLeft + ShiftOldWidth - 30 + 'px'
                    shift.style.width = 30 + 'px'


                }

            } else if (resizer.className === 'rightResizer') {

                console.log('right');

            }




        }

        function stopResize() {

            window.removeEventListener('mousemove', resize)
            window.removeEventListener('mouseup', stopResize)

            //should do setState while working on resizing the shifts

        }
        // let element = this.parentNode
        // console.log(element);

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
                onAuxClick={this.rightClick}
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

                <div style={{ display: 'flex', }}>

                    <div style={{ backgroundColor: '#888888', width: '5px', height: '100%', cursor: 'ew-resize' }}
                        className='leftResizer'
                        onMouseDown={this.resizeShift}


                    ></div>

                    <div
                        className='shiftDataDiv'
                        style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', }}
                    >
                        {this.props.localShifts[this.props.shiftInd1].shiftStart}
                    </div>

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

                <div style={{ display: 'flex', }}>

                    <div
                        className='shiftDataDiv'
                        style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', }}
                    >
                        {this.props.localShifts[this.props.shiftInd1].shiftStart + this.props.localShifts[this.props.shiftInd1].shiftLength}
                    </div>

                    <div style={{ backgroundColor: '#888888', width: '5px', height: '100%', cursor: 'ew-resize' }}
                        className='rightResizer'
                        onMouseDown={this.resizeShift}

                    ></div>

                </div>

            </div>
        )
    }
}
