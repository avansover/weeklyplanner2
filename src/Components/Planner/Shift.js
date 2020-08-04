import React, { Component } from 'react'
//import { Context } from '../../Context/Context';


export default class Shift extends Component {

    constructor(props) {
        super(props)

        this.state = {


            //for resize
            shift: undefined,
            resizer: undefined,
            dropAreaLeft: undefined,
            ShiftOldWidth: undefined,
            shiftOldLeft: undefined,

            //for handlening the name inside the shifts
            shiftLength: undefined,

            //for resize context
            shiftLeftFinal: undefined,
            shiftLengthFinal: undefined,
           

        }
    }

    //static contextType = Context


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

        let workerId = parseInt(this.props.shiftData.workerId)

        let workerFromWrokerDB = this.props.workerDB4.filter((o) => (o.id === workerId))

        let shiftLengthInDB = this.props.localShifts[this.props.shiftInd1].shiftLength

        if (this.state.shiftLength === undefined) {

            if (shiftLengthInDB >= 160) {

                return (workerFromWrokerDB[0].name)

            } else if (shiftLengthInDB < 160) {

                //this won't work till the resizing effect the DB
                return 'srt'

            }


        } else if (this.state.shiftLength >= 160) {

            return (workerFromWrokerDB[0].name)

        } else if (this.state.shiftLength < 160) {

            return 'srt'

        }

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

        this.props.rightClick()

    }

    resizeShift = (ev) => {

        ev.preventDefault()

        let resizer = ev.target
        console.log(resizer.className);


        let shift = ev.target.parentNode.parentNode
        console.log(shift);


        let dropArea = ev.target.parentNode.parentNode.parentNode
        console.log(dropArea);

        window.addEventListener('mousemove', this.resize)
        window.addEventListener('mouseup', this.stopResize)

        let dropAreaLeft = dropArea.offsetLeft
        let ShiftOldWidth = shift.offsetWidth
        let shiftOldLeft = shift.offsetLeft


        console.log('dropAreaLeft ' + dropAreaLeft);
        console.log('ShiftOldWidth ' + ShiftOldWidth);
        console.log('shiftOldLeft ' + shiftOldLeft);



        this.resize(ev)

        this.setState({ shift, resizer: resizer.className, dropAreaLeft, ShiftOldWidth, shiftOldLeft })


        // let element = this.parentNode
        // console.log(element);

    }


    resize = (eve) => {

        let shift = this.state.shift;
        let resizer = this.state.resizer
        let dropAreaLeft = this.state.dropAreaLeft;
        let ShiftOldWidth = this.state.ShiftOldWidth;
        let shiftOldLeft = this.state.shiftOldLeft;



        let shortestShift = 60

        if (resizer === 'leftResizer') {

            if (eve.pageX > dropAreaLeft && eve.pageX - dropAreaLeft <= shiftOldLeft + ShiftOldWidth - shortestShift) {

                // for the shift div itself
                shift.style.left = (Math.floor((eve.pageX - dropAreaLeft + 1) / 5)) * 5 + 'px'
                shift.style.width = ShiftOldWidth + shiftOldLeft - (Math.floor((eve.pageX - dropAreaLeft + 1) / 5)) * 5 + 'px'

                // for the resizing function
                let shiftLeftFinal = (Math.floor((eve.pageX - dropAreaLeft + 1) / 5)) * 5
                let shiftLengthFinal = ShiftOldWidth + shiftOldLeft - (Math.floor((eve.pageX - dropAreaLeft + 1) / 5)) * 5

                this.setState({ shiftLength: shiftLengthFinal })

                this.setState({ shiftLeftFinal: shiftLeftFinal })
                this.setState({ shiftLengthFinal: shiftLengthFinal })


                //console.log(this.context);

            } else if (eve.pageX <= dropAreaLeft) {

                shift.style.left = 0 + 'px'
                shift.style.width = ShiftOldWidth + shiftOldLeft + 'px'

                this.setState({ shiftLength: ShiftOldWidth + shiftOldLeft })

                this.setState({ shiftLeftFinal: 0 })
                this.setState({ shiftLengthFinal: ShiftOldWidth + shiftOldLeft })

            } else if (eve.pageX - dropAreaLeft > shiftOldLeft + ShiftOldWidth - shortestShift) {


                shift.style.left = shiftOldLeft + ShiftOldWidth - shortestShift + 'px'
                shift.style.width = shortestShift + 'px'

                this.setState({ shiftLength: shortestShift })

                this.setState({ shiftLeftFinal: shiftOldLeft + ShiftOldWidth - shortestShift })
                this.setState({ shiftLengthFinal: shortestShift })


            }

        } else if (resizer === 'rightResizer') {

            //console.log('right');

            //console.log(eve.pageX - dropAreaLeft);

            if (eve.pageX - dropAreaLeft < 720 && eve.pageX - dropAreaLeft >= shiftOldLeft + shortestShift) {

                // for the shift div itself
                shift.style.width = (Math.floor((eve.pageX - dropAreaLeft - shiftOldLeft + 1) / 5)) * 5 + 'px'

                // for the resizing function
                let shiftLengthFinal = (Math.floor((eve.pageX - dropAreaLeft - shiftOldLeft + 1) / 5)) * 5

                this.setState({ shiftLength: shiftLengthFinal })

                this.setState({ shiftLengthFinal: shiftLengthFinal })

            } else if (eve.pageX - dropAreaLeft >= 720) {

                shift.style.width = 720 - shiftOldLeft + 'px'

                this.setState({ shiftLength: 720 - shiftOldLeft })

                this.setState({ shiftLengthFinal: 720 - shiftOldLeft})

            } else if (eve.pageX - dropAreaLeft < shiftOldLeft + shortestShift) {

                shift.style.width = shortestShift + 'px'

                this.setState({ shortestShift })


                this.setState({ shiftLengthFinal: shortestShift})

            }




        }

    }

    stopResize = () => {

        window.removeEventListener('mousemove', this.resize)
        window.removeEventListener('mouseup', this.stopResize)

        //const { setResizeData } = this.context

        this.props.setResizeData(
            
            this.state.resizer,
            this.state.shiftOldLeft,
            this.state.ShiftOldWidth,
            this.state.shiftLeftFinal,
            this.state.shiftLengthFinal,
            this.props.shiftData.workerId,
            this.props.dayInd3,
            this.props.postInd2

        )


        


        //should do setState while working on resizing the shifts
        //this.setState({ shiftLength: undefined })

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

                    <div style={{ backgroundColor: '#888888', width: '3px', height: '100%', cursor: 'ew-resize' }}
                        className='leftResizer'
                        onMouseDown={this.resizeShift}


                    ></div>

                    <div
                        className='shiftDataDiv'
                        style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', backgroundColor: '#dddddd' }}
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
                        style={{ zIndex: 0, fontSize: '8px', pointerEvents: 'none', backgroundColor: '#dddddd' }}
                    >
                        {this.props.localShifts[this.props.shiftInd1].shiftStart + this.props.localShifts[this.props.shiftInd1].shiftLength}
                    </div>

                    <div style={{ backgroundColor: '#888888', width: '3px', height: '100%', cursor: 'ew-resize' }}
                        className='rightResizer'
                        onMouseDown={this.resizeShift}

                    ></div>

                </div>

            </div>

        )
    }
}
