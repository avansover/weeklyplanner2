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

    render() {
        return (
            <div>

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
