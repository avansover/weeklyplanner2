import React, { Component } from 'react'
import ShiftMarker from './ShiftMarker';
import Shift from './Shift';
import { DragDataContext } from '../../Context/DragDataContext';



export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {

            axisX: undefined,

            shiftStartForDrop: undefined,
            shiftLengthForDrop: undefined,

            tempA: undefined

        }
    }

    static contextType = DragDataContext

    allowDrop = (ev) => {

        // *** learn conextAPI

        ev.preventDefault();

        //console.log(ev.target);
        //console.log(ev.pageX);

        // via createElement

        // var markerDivExist = document.getElementById('markerDiv')

        // if (markerDivExist === null) {

        //     var markerDiv = document.createElement('div')
        //     markerDiv.id = 'markerDiv'
        //     markerDiv.style.height = '10px'
        //     markerDiv.style.width = '10px'
        //     markerDiv.style.border = '1px solid red'
        //     markerDiv.style.position = 'relative'
        //     markerDiv.style.left = `${ev.pageX-200}px`
        //     markerDiv.style.zIndex = '-1'

        //     //console.log(markerDiv);

        //     document.getElementById(`dropDay${this.props.dayInd2}Post${this.props.postInd1}`).appendChild(markerDiv)

        // }

        // console.log(this.props.dayInd2);


        if (this.state.axisX !== ev.pageX) {

            this.setState({ axisX: ev.pageX })

            // console.log(this.state.axisX);

            // via createElement

            // var markerDiv = document.getElementById('markerDiv')

            // if (markerDiv !== null) {

            //     markerDiv.remove()

            // }

        }

        if (ev.target.className !== 'shiftDiv' && ev.target.className !== 'shiftDataDiv') {

            let localDayInd = this.props.dayInd2
            let localPostInd = this.props.postInd1

            //this.props.placeMarker2(localDayInd, localPostInd)

            const { setMarkerInd } = this.context

            setMarkerInd(localDayInd, localPostInd)

        }

    }

    drop = (ev) => {

        // *** learn conextAPI

        //console.log('drop');

        ev.preventDefault();

        //console.log(ev.target);

        // --- from ticket ---
        let src = ev.dataTransfer.getData("src");

        // --- from shift ---
        let srcClass = ev.dataTransfer.getData("srcClass");
        let workerId = ev.dataTransfer.getData("srcWorkerId");

        if (srcClass === 'ticketDiv' && ev.target.className !== 'shiftDiv') {

            // hundle normal clonning from ticket to planner area drop

            const { setCloneData } = this.context

            setCloneData(src, this.props.dayInd2, this.props.postInd1 ,ev.pageX)

            console.log(this.context);

            console.log('src ' + src);
            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);
            console.log('x ' + ev.pageX);

            let workerInd1 = src
            let dayInd1 = this.props.dayInd2
            let postInd1 = this.props.postInd1
            let axisX1 = ev.pageX

            this.addShiftToDB1(workerInd1, dayInd1, postInd1, axisX1, 'clone')

            //console.log(this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts);

        } else if (srcClass === 'ticketDiv' && ev.target.className === 'shiftDiv') {

            console.log('run over');

        } else if (srcClass === 'shiftDiv' && ev.target.className === 'dropAreaDiv') {

            console.log('workerId ' + workerId);
            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);
            console.log('x ' + ev.pageX);

            console.log('transfer');

            let workerInd1 = workerId
            let dayInd1 = this.props.dayInd2
            let postInd1 = this.props.postInd1
            let axisX1 = ev.pageX

            this.addShiftToDB1(workerInd1, dayInd1, postInd1, axisX1, 'transfer')

            //need to delete the 

        } else if (srcClass === 'shiftDiv' && ev.target.className === 'shiftDiv') {

            let srcId = ev.dataTransfer.getData("srcId");
            let srcDay = ev.dataTransfer.getData("srcDay");
            let srcPost = ev.dataTransfer.getData("srcPost");
            let srcWorkerId = ev.dataTransfer.getData("srcWorkerId");

            console.log('swap');

            console.log('srcId ' + srcId);

            console.log('srcDay ' + srcDay);
            console.log('srcPost ' + srcPost);
            console.log('srcWorkerId ' + srcWorkerId);


            var tgtShiftId = ev.target.id
            console.log('tgtId ' + tgtShiftId);

            var tgtDay = this.props.dayInd2
            console.log('tgt day ' + tgtDay);

            var tgtPost = this.props.postInd1
            console.log('tgt post ' + tgtPost);

            var tgtWorkerId = tgtShiftId.slice(tgtShiftId.indexOf('w') + 1, tgtShiftId.length)
            console.log('tgtWorkerId ' + tgtWorkerId);


            for (let shiftInd = 0; shiftInd < this.props.shiftSet3[srcDay].posts[srcPost].shifts.length; shiftInd++) {

                if (this.props.shiftSet3[srcDay].posts[srcPost].shifts[shiftInd].shiftId === srcId) {

                    console.log('src found');
                    console.log(this.props.shiftSet3[srcDay].posts[srcPost].shifts[shiftInd]);

                    var srcShiftInd = shiftInd

                }

            }

            for (var shiftInd = 0; shiftInd < this.props.shiftSet3[tgtDay].posts[tgtPost].shifts.length; shiftInd++) {

                if (this.props.shiftSet3[tgtDay].posts[tgtPost].shifts[shiftInd].shiftId === tgtShiftId) {

                    console.log('tgt found');
                    console.log(this.props.shiftSet3[tgtDay].posts[tgtPost].shifts[shiftInd]);

                    var tgtShiftInd = shiftInd

                }

            }

            console.log(srcShiftInd);
            console.log(tgtShiftInd);

            console.log('remaking shiftId ');

            var srcNewShiftId = srcId.slice(0, srcId.indexOf('w') + 1) + tgtWorkerId

            console.log('newSrcId ' + srcNewShiftId);

            var tgtNewShiftId = tgtShiftId.slice(0, tgtShiftId.indexOf('w') + 1) + srcWorkerId

            console.log('newTgtId ' + tgtShiftId.slice(0, tgtShiftId.indexOf('w') + 1) + srcWorkerId);

            this.props.swapShifts1(srcDay, srcPost, srcShiftInd, srcWorkerId, srcNewShiftId, tgtDay, tgtPost, tgtShiftInd, tgtWorkerId, tgtNewShiftId)


        }

        this.deleteMarker1()


    }

    placeMarker1 = () => {

        let { globalMarkDay, globalMarkPost } = this.context

        if (this.props.dayInd2 === globalMarkDay && this.props.postInd1 === globalMarkPost) {

           

            return <ShiftMarker

                axisX1={this.state.axisX}
                localShifts={this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts}
                dayInd3={this.props.dayInd2}
                postInd2={this.props.postInd1}
                markerWorkerID4={this.props.markerWorkerID3}

            />

        }

    }

   


    deleteMarker1 = () => {

        // *** at app, set markerPlaceDay and markerPlacePost to undefined,


        var markerDiv = document.getElementById('markerDiv')

        if (markerDiv !== null) {

            markerDiv.remove()

        }

        //console.log('leave');

        this.props.deleteMarker2()


    }

    addShiftToDB1 = (workerInd2, dayInd2, postInd2, axisX2) => {

        //console.log('adding shift');

        this.props.addShiftToDB2(workerInd2, dayInd2, postInd2, axisX2)

    }

    render() {

        //console.log(this.context);

        //let { globalMarkDay, globalMarkPost } = this.context

        //console.log(globalMarkDay);
        //console.log(globalMarkPost);

        return (
            <div>

                <div className='postBodyDiv'>

                    <div>{this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name}</div>

                    <div className='dropAreaDiv'
                        style={{ display: 'flex', position: "relative" }}
                        id={`dropDay${this.props.dayInd2}Post${this.props.postInd1}`}
                        onDragOver={this.allowDrop}
                        onDrop={this.drop}
                        onDragLeave={this.deleteMarker1}
                    >
                        {this.placeMarker1()}

                        {this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((o, shiftInd) => {
                            return (<Shift
                                key={shiftInd}
                                localShifts={this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts}
                                workerDB4={this.props.workerDB3}
                                markerWorkerID4={this.props.markerWorkerID3}
                                shiftData={o}
                                dayInd3={this.props.dayInd2}
                                postInd2={this.props.postInd1}
                                shiftInd1={shiftInd}
                            />)
                        })}

                    </div>

                </div>

            </div>
        )
    }
}
