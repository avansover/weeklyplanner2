import React, { Component } from 'react'
import ShiftMarker from './ShiftMarker';
import Shift from './Shift';

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

            let localDayInd1 = this.props.dayInd2
            let localPostInd1 = this.props.postInd1

            this.props.placeMarker2(localDayInd1, localPostInd1)

        }

    }

    drop = (ev) => {

        // *** learn conextAPI

        console.log('drop');

        ev.preventDefault();

        console.log(ev.target);

        let src = ev.dataTransfer.getData("src");

        console.log(src);

        if (ev.target.className !== 'shiftDiv') {

            console.log('src ' + src);
            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);
            console.log('x ' + ev.pageX);

            let workerInd1 = src
            let dayInd1 = this.props.dayInd2
            let postInd1 = this.props.postInd1
            let axisX1 = ev.pageX

            this.addShiftToDB1(workerInd1, dayInd1, postInd1, axisX1)

            //console.log(this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts);

        } if (ev.target.className === 'shiftDiv') {

            console.log('false');

        }

        this.deleteMarker1()


    }

    placeMarker1 = () => {

        if (this.props.dayInd2 === this.props.markerPlaceDay3 && this.props.postInd1 === this.props.markerPlacePost3) {

            return <ShiftMarker
                bringMarkerData1={this.bringMarkerData2}

                axisX1={this.state.axisX}
                localShifts={this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts}
                dayInd3={this.props.dayInd2}
                postInd2={this.props.postInd1}
                markerWorkerID4={this.props.markerWorkerID3}

            />

        }

    }

    bringMarkerData2 = (shiftStart, shiftLength) => {

        this.props.bringMarkerData3(shiftStart, shiftLength)

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

        console.log('adding shift');

        this.props.addShiftToDB2(workerInd2, dayInd2, postInd2, axisX2)

    }

    getAxisX = () => {

        console.log('pressed');
    }


    render() {




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
                                shiftInd1={shiftInd}
                                workerDB4={this.props.workerDB3}
                                markerWorkerID4={this.props.markerWorkerID3}
                                shiftData={o}
                            />)
                        })}

                    </div>

                </div>

            </div>
        )
    }
}
