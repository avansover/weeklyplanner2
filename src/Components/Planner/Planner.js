import React, { Component } from 'react'
import WorkersBox from './WorkersBox'
import Day from './Day';
import ContextProvider from '../../Context/Context'

export default class Planner extends Component {


    deleteMarker5 = () => {

        //console.log('deleteMarker5');

        this.props.deleteMarker6()


    }

    bringWorkerID5 = (workerID) => {

        this.props.bringWorkerID6(workerID)

        //console.log(workerID);

    }

    drop = (ev) => {

        let srcClass = ev.dataTransfer.getData("srcClass");

        if (srcClass === 'shiftDiv' && ev.target.className !== 'shiftDiv' && ev.target.className !== 'dropAreaDiv') {

            let srcDay = ev.dataTransfer.getData("srcDay");
            let srcPost = ev.dataTransfer.getData("srcPost");
            let srcId = ev.dataTransfer.getData("srcId");

            console.log(srcClass);
            console.log(ev.target.className);

            let srcShiftStart = parseInt(srcId.slice(srcId.indexOf('s') + 1, srcId.indexOf('w')))

            console.log(srcShiftStart);

            let shiftDB = this.props.shiftSet1

            let shiftsNearSrc = shiftDB[srcDay].posts[srcPost].shifts

            for (let shiftInd = 0; shiftInd < shiftsNearSrc.length; shiftInd++) {

                if (shiftsNearSrc.filter((o) => (o.shiftStart === srcShiftStart))[0].shiftStart === shiftsNearSrc[shiftInd].shiftStart) {

                    console.log(shiftsNearSrc[shiftInd]);


                    var shiftToRemoveInd = shiftInd

                }

            }

            shiftsNearSrc.splice(shiftToRemoveInd, 1)

            console.log(shiftDB);

            this.props.deleteShift(shiftDB)

        }

        

    }

    allowDrop = (ev) => {

        ev.preventDefault();

    }

    render() {
        return (
            <div
                onDrop={this.drop}
                onDragOver={this.allowDrop}
            >

                <div id='plnWrkBox'>

                    <div>
                        <ContextProvider>
                            <WorkersBox
                                bringWorkerID4={this.bringWorkerID5}


                                workerDB2={this.props.workerDB1}

                            />
                        </ContextProvider>
                    </div>


                    <div id='plannerDiv'


                    >
                        {this.props.shiftSet1.map((e, dayInd) => {
                            return (
                                <Day
                                    deleteMarker4={this.deleteMarker5}
                                    setResizeData={this.props.setResizeData}

                                    key={dayInd}
                                    shiftSet2={this.props.shiftSet1}
                                    workerDB2={this.props.workerDB1}
                                    dayInd1={dayInd}

                                    markerWorkerID2={this.props.markerWorkerID1}

                                />
                            )
                        })}

                    </div>


                </div>


            </div>
        )
    }
}
