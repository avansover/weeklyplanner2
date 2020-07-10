import React, { Component } from 'react'
import WorkersBox from './WorkersBox'
import Day from './Day';

export default class Planner extends Component {

    placeMarker5 = (localDayInd3, localPostInd3) => {

        this.props.placeMarker6(localDayInd3, localPostInd3)


    }

    deleteMarker5 = () => {

        //console.log('deleteMarker5');
        
        this.props.deleteMarker6()
        

    }

    addShiftToDB5 = (workerInd4, dayInd4, postInd4, axisX4) => {

        console.log('addShiftToDB5');

        this.props.addShiftToDB6(workerInd4, dayInd4, postInd4, axisX4)
        
    }



    render() {
        return (
            <div>

                <div id='plnWrkBox'>

                    <div>
                        <WorkersBox
                            workerDB2={this.props.workerDB1}
                        />
                    </div>

                    <div id='plannerDiv'


                    >
                        {this.props.shiftSet1.map((e, dayInd) => {
                            return (
                                <Day
                                    placeMarker4={this.placeMarker5}
                                    deleteMarker4={this.deleteMarker5}
                                    addShiftToDB4={this.addShiftToDB5}

                                    key={dayInd}
                                    shiftSet2={this.props.shiftSet1}
                                    dayInd1={dayInd}

                                    markerPlaceDay2={this.props.markerPlaceDay1}
                                    markerPlacePost2={this.props.markerPlacePost1}
                    
                                />
                            )
                        })}

                    </div>


                </div>


            </div>
        )
    }
}
